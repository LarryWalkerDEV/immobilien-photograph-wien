import ScrollReveal from '../animations/ScrollReveal';
import { ChatBubbleIcon, CalendarIcon, CameraIcon, DesktopIcon, CheckIcon } from '@radix-ui/react-icons';

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const IconMap = {
  chat: ChatBubbleIcon,
  calendar: CalendarIcon,
  camera: CameraIcon,
  desktop: DesktopIcon,
  check: CheckIcon,
};

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section id="process" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-center mb-4">Unser Prozess</h2>
          <p className="narrative-text text-center mb-16 max-w-2xl mx-auto">
            Von der ersten Beratung bis zur finalen Lieferung – so einfach funktioniert's
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = IconMap[step.icon as keyof typeof IconMap] || CheckIcon;

            return (
              <ScrollReveal key={step.id} delay={index * 0.15}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gold/30" />
                  )}

                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-bold text-2xl text-olive">
                        {step.title}
                      </h3>
                      <span className="text-sm font-body text-olive-light px-3 py-1 bg-cream rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="font-body text-olive-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
