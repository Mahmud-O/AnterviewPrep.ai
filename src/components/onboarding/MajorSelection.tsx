import { useState } from 'react';
import { Monitor, Database, Layers, Infinity as InfinityIcon, LineChart, Brain, Shield, Smartphone, Cloud, CheckCircle2, Info } from 'lucide-react';

const majors = [
  { id: 'frontend', title: 'Frontend', desc: 'React, TypeScript, Next.js, CSS Architecture', active: '1.2k', icon: Monitor },
  { id: 'backend', title: 'Backend', desc: 'Node.js, Go, System Design, PostgreSQL', active: '840', icon: Database },
  { id: 'fullstack', title: 'Full Stack', desc: 'End-to-end applications, DevOps Basics', active: '2.5k', icon: Layers },
  { id: 'devops', title: 'DevOps', desc: 'Kubernetes, CI/CD, Terraform, AWS', active: '450', icon: InfinityIcon },
  { id: 'data', title: 'Data Science', desc: 'Python, Pandas, Statistics, DataViz', active: '610', icon: LineChart },
  { id: 'aiml', title: 'AI/ML', desc: 'PyTorch, LLMs, Computer Vision', active: '980', icon: Brain },
  { id: 'cyber', title: 'Cybersecurity', desc: 'Pentesting, Encryption, SOC, Network', active: '320', icon: Shield },
  { id: 'mobile', title: 'Mobile', desc: 'iOS (Swift), Android (Kotlin), Flutter', active: '550', icon: Smartphone },
  { id: 'cloud', title: 'Cloud Engineering', desc: 'Azure, GCP, Serverless Architecture', active: '290', icon: Cloud },
];

export default function MajorSelection({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState('frontend');

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 max-w-6xl mx-auto flex flex-col">
      
      <div className="mb-12">
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Onboarding Phase 01</span>
        <h1 className="text-5xl md:text-6xl font-bold font-headline tracking-tight text-on-surface mb-6">
          Define your <span className="text-primary">technical<br/>trajectory.</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
          Our AI mentors specialize in specific engineering tracks. Choose the major that aligns with your career goals to begin your tailored preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {majors.map((major) => {
          const isSelected = selected === major.id;
          const Icon = major.icon;
          
          return (
            <button
              key={major.id}
              onClick={() => setSelected(major.id)}
              className={`relative text-left p-6 rounded-2xl transition-all duration-300 border ${
                isSelected 
                  ? 'bg-surface-container border-primary shadow-[0_0_30px_rgba(138,210,222,0.1)]' 
                  : 'bg-surface-container-low border-outline-variant/10 hover:bg-surface-container hover:border-outline-variant/30'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                  <CheckCircle2 size={12} strokeWidth={3} />
                  Selected
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isSelected ? 'bg-primary/20 text-primary' : 'bg-surface-container-highest text-on-surface-variant'
              }`}>
                <Icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{major.title}</h3>
              <p className="text-sm text-on-surface-variant mb-6 min-h-[40px]">{major.desc}</p>
              
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                {major.active} Candidates active
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-outline-variant/10 p-4 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-lg">
            <Info size={16} className="text-primary" />
            Selection determines the curriculum and difficulty level of your subsequent technical challenges.
          </div>
          <div className="flex items-center gap-6">
            <button className="text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">
              Skip for now
            </button>
            <button 
              onClick={onNext}
              className="px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(138,210,222,0.3)]"
            >
              Select Major
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
