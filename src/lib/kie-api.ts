/**
 * kie.ai API Client (CORRECT IMPLEMENTATION)
 * Based on official kie.ai API documentation
 */

import { fetch } from 'undici';

const KIE_API_BASE = 'https://api.kie.ai/api/v1/jobs';

function getApiKey(): string {
  const key = process.env.KIE_API_KEY;
  if (!key) {
    throw new Error('KIE_API_KEY not found in environment variables');
  }
  return key;
}

// API Response Types
export interface KieCreateTaskResponse {
  code: number;
  msg: string;
  data: {
    taskId: string;
  };
}

export interface KieTaskStatusResponse {
  code: number;
  msg: string;
  data: {
    taskId: string;
    model: string;
    state: 'waiting' | 'success' | 'fail';
    param: string;
    resultJson: string; // JSON string containing {resultUrls: []}
    failCode: string | null;
    failMsg: string | null;
    costTime: number | null;
    completeTime: number | null;
    createTime: number;
  };
}

export interface GeneratedAsset {
  url: string;
  taskId: string;
}

/**
 * Create an image generation task using Seedream 4.5
 */
export async function createImageTask(prompt: string): Promise<string> {
  const requestBody = {
    model: 'seedream/4.5-text-to-image',
    input: {
      prompt,
      aspect_ratio: '16:9',
      quality: 'high'
    }
  };

  console.log('   Request:', JSON.stringify(requestBody, null, 2));

  const response = await fetch(`${KIE_API_BASE}/createTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getApiKey()}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Image task creation failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json() as KieCreateTaskResponse;

  if (data.code !== 200 || !data.data?.taskId) {
    console.error('API Response:', JSON.stringify(data, null, 2));
    throw new Error(`Image task creation failed: ${data.msg || 'Unknown error'} (code: ${data.code})`);
  }

  return data.data.taskId;
}

/**
 * Create a video generation task using Kling 2.6
 */
export async function createVideoTask(imageUrl: string, prompt: string): Promise<string> {
  const response = await fetch(`${KIE_API_BASE}/createTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getApiKey()}`,
    },
    body: JSON.stringify({
      model: 'kling-2.6/image-to-video',
      input: {
        prompt,
        image_urls: [imageUrl],
        sound: false,
        duration: '5'
      }
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Video task creation failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json() as KieCreateTaskResponse;

  if (data.code !== 200 || !data.data?.taskId) {
    throw new Error(`Video task creation failed: ${data.msg || 'Unknown error'}`);
  }

  return data.data.taskId;
}

/**
 * Check the status of a task
 */
export async function checkTaskStatus(taskId: string): Promise<KieTaskStatusResponse> {
  const response = await fetch(`${KIE_API_BASE}/recordInfo?taskId=${taskId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getApiKey()}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Task status check failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json() as KieTaskStatusResponse;

  if (data.code !== 200) {
    throw new Error(`Task status check failed: ${data.msg || 'Unknown error'}`);
  }

  return data;
}

/**
 * Wait for a task to complete with polling
 */
export async function waitForTaskCompletion(
  taskId: string,
  maxAttempts: number = 120, // 10 minutes at 5s intervals
  pollInterval: number = 5000
): Promise<string> {
  let attempts = 0;

  while (attempts < maxAttempts) {
    try {
      const status = await checkTaskStatus(taskId);

      if (status.data.state === 'success') {
        // Parse resultJson to get URL
        const result = JSON.parse(status.data.resultJson);

        if (result?.resultUrls?.[0]) {
          return result.resultUrls[0];
        }

        throw new Error('Task succeeded but no result URL found');
      }

      if (status.data.state === 'fail') {
        throw new Error(`Task failed: ${status.data.failMsg || 'Unknown error'}`);
      }

      // Task still waiting/processing
      console.log(`   ⏳ Task ${taskId.substring(0, 8)}... still processing (${attempts + 1}/${maxAttempts})...`);
      await new Promise(resolve => setTimeout(resolve, pollInterval));
      attempts++;

    } catch (error) {
      // If it's a final state error (success/fail), throw it
      if (error instanceof Error && (error.message.includes('Task failed') || error.message.includes('no result'))) {
        throw error;
      }

      // For network errors, retry with backoff
      if (attempts >= 3) {
        throw error;
      }

      await new Promise(resolve => setTimeout(resolve, pollInterval * Math.pow(2, attempts)));
      attempts++;
    }
  }

  throw new Error(`Task ${taskId} timeout after ${maxAttempts} attempts`);
}

/**
 * Convenience function: Generate an image and wait for completion
 */
export async function generateImage(prompt: string): Promise<GeneratedAsset> {
  console.log(`🎨 Generating image: "${prompt.substring(0, 60)}..."`);

  const taskId = await createImageTask(prompt);
  console.log(`   Task ID: ${taskId}`);
  console.log(`   Waiting for completion...`);

  const url = await waitForTaskCompletion(taskId);
  console.log(`   ✅ Image ready: ${url.substring(0, 80)}...`);

  return { url, taskId };
}

/**
 * Convenience function: Generate a video and wait for completion
 */
export async function generateVideo(imageUrl: string, prompt: string): Promise<GeneratedAsset> {
  console.log(`🎬 Generating video from image...`);
  console.log(`   Prompt: "${prompt.substring(0, 60)}..."`);

  const taskId = await createVideoTask(imageUrl, prompt);
  console.log(`   Task ID: ${taskId}`);
  console.log(`   Waiting for completion...`);

  const url = await waitForTaskCompletion(taskId);
  console.log(`   ✅ Video ready: ${url.substring(0, 80)}...`);

  return { url, taskId };
}
