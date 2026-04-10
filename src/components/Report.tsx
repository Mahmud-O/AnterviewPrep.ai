import { Trophy, Target, Zap, Brain, ChevronRight, BarChart3, Clock, CheckCircle2, AlertTriangle, XCircle, Mic, Code2 } from 'lucide-react';

export default function Report({ onNext }: { onNext: () => void }) {
  return (
    <main className="pt-24 px-6 md:px-12 pb-12 min-h-screen max-w-7xl mx-auto">
      
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="font-label text-xs text-primary uppercase tracking-[0.2em] font-bold">Simulation Complete</span>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface">Performance Report</h1>
          <p className="text-on-surface-variant">Google • Senior Frontend Engineer • Oct 24, 2024</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-full border border-outline-variant/20 text-on-surface font-bold text-sm hover:bg-surface-container transition-colors">
            Download PDF
          </button>
          <button onClick={onNext} className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(138,210,222,0.3)]">
            Return to Dashboard
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Overall Score & Summary */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Score Card */}
          <div className="bg-surface-container rounded-3xl p-8 editorial-shadow relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[320px]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6">
                <Trophy size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest mb-2">Overall Readiness</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-7xl font-bold font-headline text-on-surface">92</span>
                <span className="text-xl text-on-surface-variant">/100</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                <Zap size={16} />
                Strong Hire
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
            <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
              <Target className="text-primary" size={20} />
              Key Strengths
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-bold text-on-surface">System Architecture</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Exceptional understanding of distributed systems and scalability.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-bold text-on-surface">Communication</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Clear, concise articulation of complex technical concepts.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Areas for Growth */}
          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
            <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
              <Brain className="text-tertiary" size={20} />
              Areas for Growth
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-tertiary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-bold text-on-surface">Edge Case Handling</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Missed a minor race condition in the initial rate limiter implementation.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Detailed Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold font-headline mb-2">Stage Breakdown</h2>
          
          {/* HR Round Breakdown */}
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <Mic size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">HR & Behavioral</h3>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-1">
                    <span className="flex items-center gap-1"><Clock size={12} /> 45 mins</span>
                    <span className="flex items-center gap-1"><BarChart3 size={12} /> Score: 95/100</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-on-surface-variant group-hover:text-primary transition-colors hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Cultural Fit</span>
                  <span className="text-sm font-bold text-primary">98%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[98%]"></div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Conflict Resolution</span>
                  <span className="text-sm font-bold text-primary">92%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Round Breakdown */}
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <Code2 size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">Technical & System Design</h3>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-1">
                    <span className="flex items-center gap-1"><Clock size={12} /> 60 mins</span>
                    <span className="flex items-center gap-1"><BarChart3 size={12} /> Score: 89/100</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-on-surface-variant group-hover:text-primary transition-colors hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Code Quality</span>
                  <span className="text-sm font-bold text-primary">90%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[90%]"></div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">System Design</span>
                  <span className="text-sm font-bold text-primary">88%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[88%]"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-primary/5 border border-primary/10 rounded-xl">
              <p className="text-sm text-on-surface-variant italic">
                "Excellent use of the Token Bucket algorithm. The candidate demonstrated a deep understanding of distributed caching strategies, though they initially overlooked a potential race condition during concurrent updates, which they quickly fixed upon prompting."
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
