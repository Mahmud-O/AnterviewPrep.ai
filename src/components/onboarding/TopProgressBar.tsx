import { Check } from 'lucide-react';

const steps = [
  { id: 'major', label: 'MAJOR' },
  { id: 'level', label: 'LEVEL' },
  { id: 'job', label: 'JOB PROPOSAL' },
  { id: 'company', label: 'COMPANY' },
  { id: 'dashboard', label: 'INTERVIEW' },
];

export default function TopProgressBar({ currentView }: { currentView: string }) {
  // Map sub-views of interview to the 'dashboard' step for the progress bar
  const normalizedView = ['cv', 'hr', 'tech', 'report'].includes(currentView) ? 'dashboard' : currentView;
  const currentIndex = steps.findIndex(s => s.id === normalizedView);

  // If view is not in the flow (e.g. major doesn't show it in the screenshot), we can handle it in the parent,
  // but let's just render it normally here.

  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto mb-12 pt-8">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-colors duration-300 ${
                isCompleted ? 'bg-primary text-background' :
                isActive ? 'bg-primary text-background shadow-[0_0_15px_rgba(138,210,222,0.4)]' :
                'bg-surface-container-highest text-on-surface-variant'
              }`}>
                {isCompleted ? <Check size={16} strokeWidth={3} /> : (index + 1)}
              </div>
              <span className={`absolute top-10 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-colors duration-300 ${
                isActive || isCompleted ? 'text-primary' : 'text-on-surface-variant'
              }`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-12 sm:w-20 md:w-32 h-[1px] mx-2 transition-colors duration-300 ${
                isCompleted ? 'bg-primary' : 'bg-surface-container-highest'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
