import { GraduationCap, BarChart, Briefcase, Building2, Mic } from 'lucide-react';

interface SideNavProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function SideNav({ currentView, setCurrentView }: SideNavProps) {
  const getActiveItem = () => {
    if (currentView === 'major') return 'major';
    if (currentView === 'level') return 'level';
    if (currentView === 'job') return 'job';
    if (currentView === 'company') return 'company';
    if (['dashboard', 'cv', 'hr', 'tech', 'report'].includes(currentView)) return 'interview';
    return '';
  };

  const activeItem = getActiveItem();

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 bg-[#111319] border-r border-[#e2e2eb]/15 w-64 hidden md:flex z-40">
      <div className="mt-20 mb-8 px-4">
        <div className="flex items-center gap-2 mb-1">
          <GraduationCap className="text-[#8ad2de]" size={24} strokeWidth={1.5} />
          <h1 className="font-headline font-bold text-[#8ad2de] text-xl">PrepAI</h1>
        </div>
        <p className="text-[10px] text-[#797876] uppercase tracking-widest font-bold ml-8">Interview Pipeline</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        <div onClick={() => setCurrentView('major')} className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer ${activeItem === 'major' ? 'bg-[#1e1f26] text-[#8ad2de] shadow-[0_0_15px_rgba(138,210,222,0.1)]' : 'text-[#797876] hover:bg-[#1e1f26] hover:text-[#e2e2eb]'}`}>
          <GraduationCap size={20} strokeWidth={1.5} />
          <span className="font-body text-sm">Major</span>
        </div>
        <div onClick={() => setCurrentView('level')} className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer ${activeItem === 'level' ? 'bg-[#1e1f26] text-[#8ad2de] shadow-[0_0_15px_rgba(138,210,222,0.1)]' : 'text-[#797876] hover:bg-[#1e1f26] hover:text-[#e2e2eb]'}`}>
          <BarChart size={20} strokeWidth={1.5} />
          <span className="font-body text-sm">Level</span>
        </div>
        <div onClick={() => setCurrentView('job')} className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer ${activeItem === 'job' ? 'bg-[#1e1f26] text-[#8ad2de] shadow-[0_0_15px_rgba(138,210,222,0.1)]' : 'text-[#797876] hover:bg-[#1e1f26] hover:text-[#e2e2eb]'}`}>
          <Briefcase size={20} strokeWidth={1.5} />
          <span className="font-body text-sm">Job</span>
        </div>
        <div onClick={() => setCurrentView('company')} className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer ${activeItem === 'company' ? 'bg-[#1e1f26] text-[#8ad2de] shadow-[0_0_15px_rgba(138,210,222,0.1)]' : 'text-[#797876] hover:bg-[#1e1f26] hover:text-[#e2e2eb]'}`}>
          <Building2 size={20} strokeWidth={1.5} />
          <span className="font-body text-sm">Company</span>
        </div>
        <div onClick={() => setCurrentView('dashboard')} className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer ${activeItem === 'interview' ? 'bg-[#1e1f26] text-[#8ad2de] shadow-[0_0_15px_rgba(138,210,222,0.1)]' : 'text-[#797876] hover:bg-[#1e1f26] hover:text-[#e2e2eb]'}`}>
          <Mic size={20} strokeWidth={1.5} />
          <span className="font-body text-sm">Interview</span>
        </div>
      </nav>

      <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-xs font-medium text-on-surface">AI Mentor Active</span>
        </div>
        <button 
          onClick={() => setCurrentView('dashboard')}
          className="w-full py-3 bg-primary text-on-primary font-bold rounded-full text-xs transition-transform active:scale-95 uppercase tracking-wider"
        >
          Start Mock Session
        </button>
      </div>
    </aside>
  );
}
