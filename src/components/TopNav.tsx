import { Flame } from 'lucide-react';

interface TopNavProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function TopNav({ currentView, setCurrentView }: TopNavProps) {
  const isFocusMode = currentView === 'hr' || currentView === 'tech';

  return (
    <header className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#111319]/70 backdrop-blur-xl shadow-2xl shadow-black/40 ${!isFocusMode ? 'md:pl-72' : ''}`}>
      <div className="flex items-center gap-8">
        <button onClick={() => setCurrentView('dashboard')} className="text-xl font-bold text-[#e2e2eb] tracking-tighter font-headline">
          PrepAI
        </button>
        
        {!isFocusMode && (
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => setCurrentView('dashboard')} className={`font-headline tracking-tight text-sm transition-colors ${currentView === 'dashboard' ? 'text-[#8ad2de] border-b-2 border-[#8ad2de] pb-1' : 'text-[#797876] hover:text-[#e2e2eb]'}`}>Preparation</button>
            <button onClick={() => setCurrentView('report')} className={`font-headline tracking-tight text-sm transition-colors ${currentView === 'report' ? 'text-[#8ad2de] border-b-2 border-[#8ad2de] pb-1' : 'text-[#797876] hover:text-[#e2e2eb]'}`}>Performance</button>
            <button className="text-[#797876] hover:text-[#e2e2eb] transition-colors font-headline tracking-tight text-sm">Insights</button>
          </nav>
        )}

        {currentView === 'tech' && (
          <div className="hidden md:flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
            <span className="flex items-center gap-2 text-primary">
              <span className="font-mono font-medium tracking-widest">34:12</span>
            </span>
            <div className="h-4 w-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Stage: Technical Assessment</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {currentView === 'tech' && (
          <button onClick={() => setCurrentView('report')} className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all">
            Submit Solution
          </button>
        )}
        
        {currentView !== 'tech' && (
          <button className="p-2 rounded-full hover:bg-[#1e1f26]/50 transition-all text-[#8ad2de]">
            <Flame size={20} strokeWidth={1.5} />
          </button>
        )}

        <div className="relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8G8u--sh87UYzFNpcyj_P1C_aBTbslArn_xNz8T7btJx364C2ClmklTltB31GOtpOaHm3uG5ZvRSwraGJn9uLnbbN9CO5IzNVkRMkiubi9TIumZhGV2TjK5-eO6fslfOrzA4ASFUx4yHoX0gpx2GDgilHLdNvfy-QQnA4loUxDsSBBSxcz35pXL0ww810xgsibe3BNFcdyuX4iUIvzIUF7M-QAkd4rwVw3Y6Mz2X9fBicsePhqejNkRejCzE_3RRCF4Vo3wk87o" 
            alt="User Profile" 
            className="w-8 h-8 rounded-full border border-primary/30 object-cover"
          />
          {!isFocusMode && (
             <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-surface flex items-center justify-center">
               <span className="text-[6px] text-on-primary font-bold">12</span>
             </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-[#1e1f26] to-transparent h-[1px]"></div>
    </header>
  );
}
