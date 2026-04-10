import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import TopProgressBar from './TopProgressBar';

const levels = [
  { 
    id: 'intern', 
    title: 'Intern / Junior', 
    badge: 'STARTING OUT', 
    desc: 'Early career focusing on fundamental principles, technical proficiency, and learning best practices within a structured team environment.',
    years: '0–2 yrs'
  },
  { 
    id: 'mid', 
    title: 'Mid-Level', 
    badge: 'CORE PROFESSIONAL', 
    desc: 'Independent contributor capable of owning features, managing technical debt, and making informed architectural decisions for complex modules.',
    years: '2–5 yrs'
  },
  { 
    id: 'senior', 
    title: 'Senior', 
    badge: 'SYSTEM EXPERT', 
    desc: 'Focus on scalable systems, mentoring junior peers, cross-functional collaboration, and strategic problem solving across the stack.',
    years: '5–8 yrs'
  },
  { 
    id: 'staff', 
    title: 'Staff / Lead', 
    badge: 'STRATEGIC DRIVER', 
    desc: 'Architecting multi-team initiatives, technical roadmap ownership, and driving organization-wide standards and engineering excellence.',
    years: '8+ yrs'
  },
];

export default function LevelSelection({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [selected, setSelected] = useState('mid');

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-4xl mx-auto flex flex-col">
      
      <TopProgressBar currentView="level" />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface mb-4">
          Define your expertise.
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Select the seniority level that best matches your professional journey. This allows our AI to calibrate question difficulty and expectation metrics.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {levels.map((level) => {
          const isSelected = selected === level.id;
          
          return (
            <button
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 border relative overflow-hidden group ${
                isSelected 
                  ? 'bg-surface-container border-primary/50 shadow-[0_0_30px_rgba(138,210,222,0.05)]' 
                  : 'bg-surface-container-low border-outline-variant/10 hover:bg-surface-container hover:border-outline-variant/30'
              }`}
            >
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold font-headline text-on-surface">{level.title}</h3>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold tracking-wider uppercase rounded-full">
                      {level.badge}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                    {level.desc}
                  </p>
                </div>
                
                <div className="flex flex-col items-start md:items-end shrink-0">
                  {isSelected && (
                    <CheckCircle2 className="text-primary absolute top-6 right-6 md:relative md:top-0 md:right-0 mb-2" size={20} strokeWidth={2.5} />
                  )}
                  <span className={`text-3xl font-bold font-headline ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                    {level.years}
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1">Experience Range</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-outline-variant/10 p-6 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2"
          >
            ← Back
          </button>
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(138,210,222,0.3)]"
          >
            Continue
          </button>
        </div>
      </div>

    </div>
  );
}
