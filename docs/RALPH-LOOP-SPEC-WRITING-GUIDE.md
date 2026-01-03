# How to Write Specs for Ralph Loop

> **Purpose**: This guide teaches you how to write project specifications that enable flawless AI-driven development loops. Use this BEFORE and DURING spec creation.

---

## The Core Principle

```
Every requirement in a spec MUST have a TESTABLE verification method.
If you can't define how to TEST it, the AI can't verify it succeeded.
```

---

## Why Specs Fail in Ralph Loop

| Failure Mode | Example | Fix |
|--------------|---------|-----|
| **Vague requirements** | "Make it look good" | Define measurable criteria |
| **No verification method** | "Implement auth" | Specify how to TEST auth works |
| **Assumed knowledge** | "Use best practices" | List specific practices required |
| **Missing output definition** | "Generate report" | Define exact output format |
| **No success criteria** | "Optimize performance" | Set numeric thresholds |

---

## The Spec Structure

Every spec for Ralph Loop must have these sections:

```yaml
spec:
  1_context:        # What exists, what's the goal
  2_requirements:   # What must be built (with test criteria)
  3_verification:   # How to prove each requirement is met
  4_skills:         # Which skills to invoke
  5_grading:        # Pass/fail thresholds
  6_outputs:        # What artifacts must be produced
```

---

## Section 1: Context

### What to Include

```yaml
context:
  project_type: "web-app | cli-tool | api | mobile-app | data-pipeline | automation | ..."

  existing_state:
    description: "What already exists"
    files: ["list of relevant existing files"]
    dependencies: ["existing tech stack"]

  goal:
    description: "Clear statement of end goal"
    success_looks_like: "Concrete description of done state"

  constraints:
    technical: ["must use X", "cannot use Y"]
    time: "MVP vs full feature"
    compatibility: ["browsers", "OS", "versions"]
```

### Example - Good vs Bad

```yaml
# BAD - Vague
context:
  goal: "Build a dashboard"

# GOOD - Specific
context:
  project_type: "web-app"
  goal:
    description: "Build analytics dashboard showing user metrics"
    success_looks_like: |
      - Page loads at /dashboard
      - Shows 4 metric cards (users, revenue, sessions, conversion)
      - Data updates every 30 seconds
      - Works on Chrome, Firefox, Safari
```

---

## Section 2: Requirements (The Critical Part)

### The Golden Rule for Requirements

```
Every requirement = WHAT + HOW TO TEST IT
```

### Requirement Template

```yaml
requirements:
  - id: "REQ-001"
    description: "What must be built"

    acceptance_criteria:
      - criterion: "Specific testable condition"
        test_type: "visual | functional | unit | integration | manual"
        test_method: "Exact steps or command to verify"
        pass_condition: "What result means PASS"

    weight: 10  # Importance for grading (1-100)
    phase: 1    # Which phase this belongs to
```

### Test Types by Project Type

| Project Type | Primary Test Methods |
|--------------|---------------------|
| **Frontend/Web** | Playwright screenshots, DOM inspection, console errors |
| **CLI Tool** | Command output comparison, exit codes, file output |
| **API** | HTTP requests, response validation, status codes |
| **Data Pipeline** | Output file validation, row counts, schema checks |
| **Mobile App** | Simulator screenshots, gesture tests |
| **Automation** | End-to-end workflow execution, state verification |
| **Library/SDK** | Unit tests, integration tests, type checks |

### Example Requirements by Project Type

#### Frontend Example
```yaml
- id: "REQ-001"
  description: "Hero section displays correctly"

  acceptance_criteria:
    - criterion: "Hero is visible on page load"
      test_type: "visual"
      test_method: |
        1. Navigate to page with Playwright
        2. Take screenshot
        3. Verify hero element exists and height > 400px
      pass_condition: "Screenshot shows hero, bounding box height > 400"

    - criterion: "No console errors"
      test_type: "functional"
      test_method: "Capture console.error events during page load"
      pass_condition: "Zero error events"
```

#### CLI Tool Example
```yaml
- id: "REQ-001"
  description: "CLI parses input file correctly"

  acceptance_criteria:
    - criterion: "Accepts valid JSON input"
      test_type: "functional"
      test_method: |
        echo '{"name": "test"}' > input.json
        ./mycli parse input.json
      pass_condition: "Exit code 0, stdout contains 'Parsed successfully'"

    - criterion: "Rejects invalid JSON"
      test_type: "functional"
      test_method: |
        echo 'not json' > invalid.json
        ./mycli parse invalid.json
      pass_condition: "Exit code 1, stderr contains 'Invalid JSON'"
```

#### API Example
```yaml
- id: "REQ-001"
  description: "User authentication endpoint"

  acceptance_criteria:
    - criterion: "Returns JWT on valid credentials"
      test_type: "integration"
      test_method: |
        curl -X POST /api/auth/login \
          -H "Content-Type: application/json" \
          -d '{"email": "test@test.com", "password": "valid"}'
      pass_condition: "Status 200, response contains 'token' field"

    - criterion: "Returns 401 on invalid credentials"
      test_type: "integration"
      test_method: |
        curl -X POST /api/auth/login \
          -H "Content-Type: application/json" \
          -d '{"email": "test@test.com", "password": "wrong"}'
      pass_condition: "Status 401"
```

#### Data Pipeline Example
```yaml
- id: "REQ-001"
  description: "ETL transforms customer data"

  acceptance_criteria:
    - criterion: "Output has correct row count"
      test_type: "functional"
      test_method: |
        python run_pipeline.py --input data/raw.csv --output data/processed.csv
        wc -l data/processed.csv
      pass_condition: "Row count matches input (minus header)"

    - criterion: "Email column is normalized"
      test_type: "functional"
      test_method: |
        grep -E '[A-Z]' data/processed.csv | wc -l
      pass_condition: "Zero matches (all lowercase)"
```

---

## Section 3: Verification Protocol

### The Verification Mandate

```
EVERY task completion MUST include verification output.
"I wrote the code" is NOT acceptable.
"I wrote the code and here's proof it works: [screenshot/output/test result]" is required.
```

### Verification by Output Type

```yaml
verification:
  visual_outputs:
    tool: "Playwright | Chrome DevTools MCP | Simulator"
    requirement: "Screenshot MUST be taken and ANALYZED"
    analysis_questions:
      - "Does the output match the requirement?"
      - "Are there any visible errors or issues?"
      - "Is the styling/layout correct?"

  file_outputs:
    tool: "Read tool | diff | file inspection"
    requirement: "Output file MUST be read and validated"
    validation_checks:
      - "File exists at expected path"
      - "File format is correct"
      - "Content matches expected structure"

  command_outputs:
    tool: "Bash tool"
    requirement: "Command output MUST be captured and checked"
    validation_checks:
      - "Exit code is as expected"
      - "Stdout contains expected patterns"
      - "Stderr is empty (or contains expected warnings)"

  api_outputs:
    tool: "curl | httpie | Playwright network"
    requirement: "Response MUST be captured and validated"
    validation_checks:
      - "Status code is correct"
      - "Response body matches schema"
      - "Headers are as expected"
```

### Verification Checklist Template

```yaml
verification_checklist:
  before_marking_complete:
    - "Did I actually RUN the code/command?"
    - "Did I capture the OUTPUT (screenshot/log/response)?"
    - "Did I ANALYZE the output against requirements?"
    - "Does the output PROVE the requirement is met?"
    - "Are there any ERRORS in console/logs/stderr?"

  if_any_answer_is_no: "DO NOT mark as complete"
```

---

## Section 4: Skills to Invoke

### Skill Selection Matrix

```yaml
skills:
  # Frontend/Visual Projects
  frontend:
    - skill: "document-skills:frontend-design"
      when: "Building any UI component"
      why: "Enforces distinctive design, avoids generic aesthetics"

    - skill: "document-skills:webapp-testing"
      when: "Need to verify visual output"
      why: "Provides Playwright patterns for verification"

  # Document Generation
  documents:
    - skill: "document-skills:pdf"
      when: "Generating or manipulating PDFs"

    - skill: "document-skills:docx"
      when: "Generating Word documents"

    - skill: "document-skills:xlsx"
      when: "Generating spreadsheets"

    - skill: "document-skills:pptx"
      when: "Generating presentations"

  # Asset Generation
  assets:
    - skill: "kie.ai API"
      when: "Need images or videos"
      capabilities:
        - "Text-to-image (kling-v2.0-master)"
        - "Image-to-video (kling-v2.6-master)"
        - "Motion graphics animation"
        - "Ambient effects generation"

  # Integration/API
  integration:
    - skill: "document-skills:mcp-builder"
      when: "Building MCP servers"
```

### Skill Invocation Rules

```yaml
skill_rules:
  - rule: "Invoke at project START, not when you need them"
    reason: "Skills provide context that shapes implementation"

  - rule: "If a skill exists for the task, USE IT"
    reason: "Skills encode best practices and avoid common mistakes"

  - rule: "List required skills in spec"
    reason: "Makes skill usage mandatory, not optional"
```

---

## Section 5: Grading System

### Phase Structure

```yaml
phases:
  - phase: 0
    name: "Setup & Configuration"
    gate: 100  # Must fully pass
    criteria: "Environment ready, configs valid, skills loaded"

  - phase: 1
    name: "Foundation"
    gate: 80
    criteria: "Core structure in place, dependencies resolved"

  - phase: 2
    name: "Implementation"
    gate: 80
    criteria: "Features built, basic functionality works"

  - phase: 3
    name: "Verification"
    gate: 100  # Must fully pass
    criteria: "All outputs verified with proof"

  - phase: 4
    name: "Polish & Validation"
    gate: 90
    criteria: "Edge cases handled, quality checks pass"
```

### Grading Formula

```yaml
grading:
  criterion_score: |
    IF test_passes THEN weight ELSE 0

  phase_score: |
    sum(criterion_scores) / sum(criterion_weights) * 100

  overall_score: |
    sum(phase_score * phase_weight) for all phases

  thresholds:
    gold: 90    # Production ready
    silver: 80  # Minor fixes needed
    bronze: 70  # Significant fixes needed
    fail: 0     # Major rework required
```

### Gate Rules

```yaml
gate_rules:
  - "Phase 0 (Setup) must be 100% before ANY implementation"
  - "Phase 3 (Verification) must be 100% - NO EXCEPTIONS"
  - "Cannot proceed to phase N+1 until phase N meets gate"
  - "If gate not met after 5 attempts, escalate to human"
```

---

## Section 6: Output Artifacts

### Required Outputs

```yaml
outputs:
  always_required:
    - type: "verification_proof"
      description: "Screenshots, logs, or test results proving requirements met"
      location: "verification/"

    - type: "error_log"
      description: "Any errors encountered and how they were resolved"
      location: "verification/errors.log"

  by_project_type:
    frontend:
      - "Screenshots of each page/component"
      - "Console error log (should be empty)"
      - "Lighthouse scores (if performance requirements)"

    api:
      - "Request/response logs for each endpoint"
      - "Error response examples"
      - "OpenAPI spec (if applicable)"

    cli:
      - "Help output"
      - "Example command outputs"
      - "Error handling examples"

    data:
      - "Sample output files"
      - "Row/record counts"
      - "Schema validation results"
```

---

## Common Mistakes to Avoid

### Mistake 1: Vague Success Criteria

```yaml
# BAD
requirement: "Page should load fast"

# GOOD
requirement: "Page should load fast"
acceptance_criteria:
  - criterion: "LCP < 2.5 seconds"
    test_method: "Lighthouse audit"
    pass_condition: "LCP metric < 2500ms"
```

### Mistake 2: No Verification Method

```yaml
# BAD
requirement: "Implement user authentication"
# (How do we KNOW it works?)

# GOOD
requirement: "Implement user authentication"
acceptance_criteria:
  - criterion: "Valid login succeeds"
    test_method: "POST /login with valid creds"
    pass_condition: "Returns 200 + JWT token"

  - criterion: "Invalid login fails"
    test_method: "POST /login with invalid creds"
    pass_condition: "Returns 401"

  - criterion: "Protected route requires auth"
    test_method: "GET /protected without token"
    pass_condition: "Returns 401"
```

### Mistake 3: Assuming Instead of Verifying

```yaml
# BAD (in implementation)
"I wrote the CSS, the styling should work now"

# GOOD (in implementation)
"I wrote the CSS. Here's the screenshot proving it works: [screenshot]
 Analysis: Background is dark (#1a1a2e), text is visible, no overflow issues."
```

### Mistake 4: Missing Configuration Validation

```yaml
# BAD
setup:
  - "Install dependencies"
  - "Start server"

# GOOD
setup:
  - step: "Install dependencies"
    verification: "npm install exits with code 0"

  - step: "Validate config paths"
    verification: |
      For each path in config:
        Assert directory/file exists
        Log: "Config path X validated"

  - step: "Start server"
    verification: "Server responds to health check at /api/health"
```

### Mistake 5: No Mapping Validation

```yaml
# BAD (leads to content swaps)
variants:
  - variant-a uses luxus design
  - variant-b uses cinematic design
  - variant-c uses data design
  - variant-d uses editorial design

# GOOD
variants:
  - id: "variant-a"
    design: "luxus"
    verification: |
      File variant-a/page.tsx contains "luxusMinimalist"
      Screenshot shows gold accents and dark theme

  - id: "variant-b"
    design: "cinematic"
    verification: |
      File variant-b/page.tsx contains "cinematicStorytelling"
      Screenshot shows dramatic imagery
```

---

## Spec Template

Use this template when creating new specs:

```yaml
# PROJECT SPEC: [Project Name]
# Version: 1.0
# Date: YYYY-MM-DD

metadata:
  project_name: ""
  project_type: ""  # web-app | cli | api | mobile | data | automation
  estimated_complexity: ""  # low | medium | high

# =============================================================================
# CONTEXT
# =============================================================================

context:
  goal: |
    [Clear 1-2 sentence goal]

  success_looks_like: |
    [Concrete description of done state]

  existing_state:
    files: []
    dependencies: []

  constraints:
    technical: []
    compatibility: []

# =============================================================================
# SKILLS TO INVOKE
# =============================================================================

required_skills:
  - name: ""
    purpose: ""

# =============================================================================
# PHASES & REQUIREMENTS
# =============================================================================

phases:
  - phase: 0
    name: "Setup"
    gate: 100
    requirements:
      - id: "P0-R1"
        description: ""
        acceptance_criteria:
          - criterion: ""
            test_type: ""
            test_method: ""
            pass_condition: ""
        weight: 0

  - phase: 1
    name: "Foundation"
    gate: 80
    requirements: []

  - phase: 2
    name: "Implementation"
    gate: 80
    requirements: []

  - phase: 3
    name: "Verification"
    gate: 100
    requirements:
      - id: "P3-R1"
        description: "All outputs verified with proof"
        acceptance_criteria:
          - criterion: "Verification artifacts exist"
            test_type: "file_check"
            test_method: "Check verification/ directory"
            pass_condition: "Contains screenshots/logs/test results"

  - phase: 4
    name: "Polish"
    gate: 90
    requirements: []

# =============================================================================
# VERIFICATION PROTOCOL
# =============================================================================

verification:
  required_artifacts:
    - ""

  verification_questions:
    - "Did I RUN the code?"
    - "Did I capture OUTPUT?"
    - "Did I ANALYZE the output?"
    - "Does output PROVE requirement met?"

# =============================================================================
# GRADING
# =============================================================================

grading:
  phase_weights:
    phase_0: 0.15
    phase_1: 0.20
    phase_2: 0.30
    phase_3: 0.25
    phase_4: 0.10

  tiers:
    gold: 90
    silver: 80
    bronze: 70

# =============================================================================
# OUTPUTS
# =============================================================================

outputs:
  required:
    - type: ""
      location: ""
      description: ""
```

---

## Quick Checklist: Is Your Spec Ralph-Loop Ready?

```
[ ] Every requirement has a TEST METHOD defined
[ ] Every requirement has a PASS CONDITION defined
[ ] Skills are listed and will be invoked at START
[ ] Phase gates are defined with thresholds
[ ] Verification phase requires PROOF (screenshots/logs/output)
[ ] Configuration validation is included in Phase 0
[ ] Mappings (routes, IDs, etc.) have verification checks
[ ] Output artifacts are specified
[ ] No vague terms ("good", "fast", "clean") without metrics
```

If any box is unchecked, the spec is not ready for Ralph Loop.

---

*This is a living document. Update as new failure modes are discovered.*
