import { Clock, Bot, Lock, Lightbulb } from 'lucide-react';

export default function Dashboard({ onNext }: { onNext: () => void }) {
  return (
    <main className="pt-24 px-6 md:px-12 pb-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <span className="font-label text-xs text-primary uppercase tracking-[0.2em]">Active Simulation</span>
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface">Interactive Interview Path</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Stage 1 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] timeline-gradient"></div>
            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-on-primary"></span>
            </div>
            <div className="p-6 rounded-xl bg-surface-container border border-primary/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold font-headline">CV Review (AI)</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Pending</span>
                </div>
                <p className="text-on-surface-variant text-sm">Our neural engine analyzes your portfolio alignment with specific role requirements.</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                    <Clock size={14} strokeWidth={1.5} />
                    <span>~15 Minutes</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary text-xs">
                    <Bot size={14} strokeWidth={1.5} />
                    <span>AI Analysis</span>
                  </div>
                </div>
              </div>
              <button onClick={onNext} className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-[0_10px_20px_-5px_rgba(138,210,222,0.3)] hover:opacity-90 active:scale-95 transition-all whitespace-nowrap">
                Begin Stage 1
              </button>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-surface-container-highest"></div>
            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
              <Lock size={12} strokeWidth={2} />
            </div>
            <div className="p-6 rounded-xl bg-surface-container/40 border border-transparent flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-60">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold font-headline text-on-surface-variant">MCQ Exam</h3>
                  <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Locked</span>
                </div>
                <p className="text-on-surface-variant/60 text-sm">Foundational knowledge test covering React, TypeScript, and Design Patterns.</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-on-surface-variant/60 text-xs">
                    <Clock size={14} strokeWidth={1.5} />
                    <span>~30 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-surface-container-highest"></div>
            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
              <Lock size={12} strokeWidth={2} />
            </div>
            <div className="p-6 rounded-xl bg-surface-container/40 border border-transparent flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-60">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold font-headline text-on-surface-variant">HR Interview</h3>
                  <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Locked</span>
                </div>
                <p className="text-on-surface-variant/60 text-sm">Behavioral evaluation focused on cultural fit and conflict resolution.</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-on-surface-variant/60 text-xs">
                    <Clock size={14} strokeWidth={1.5} />
                    <span>~45 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 h-10 w-[2px] bg-surface-container-highest"></div>
            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
              <Lock size={12} strokeWidth={2} />
            </div>
            <div className="p-6 rounded-xl bg-surface-container/40 border border-transparent flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-60">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold font-headline text-on-surface-variant">Technical Interview + Live Coding</h3>
                  <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Locked</span>
                </div>
                <p className="text-on-surface-variant/60 text-sm">Deep dive into architecture and a collaborative live coding session.</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-on-surface-variant/60 text-xs">
                    <Clock size={14} strokeWidth={1.5} />
                    <span>~60 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
          <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e2e2eb] flex items-center justify-center">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCip0lNnsQ5Wmzry4QzF9TeF1rPdciWAMcDC2bm34yFWDSjJBI7im8v-2YJiMPxKwy9ntMY3cf8IKRmFuX_3PyaUDTzqDweNCvO7gd6Hii_uN3ESBccEHu7huqvls8bTYseA_ymi-VZG2S4qhWPZ4TMgH-4buB4wKFS8yuNll16SK6RLzppFOnPNJpeUYRMsvPQfIdsF5kgK-krDGa7rf425XXW8MC-sRzCca8yf49SJhfw9z7aLyzgo9hopgAa8w_8u0qWGHQthhs" alt="Google" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-headline">Google</h4>
                  <p className="text-on-surface-variant text-sm">Senior Frontend Engineer</p>
                </div>
              </div>
              <div className="h-[1px] bg-outline-variant/20"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-label text-xs text-on-surface-variant">Total Duration</span>
                  <span className="text-lg font-bold">2.5 Hours</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label text-xs text-on-surface-variant">Difficulty</span>
                  <span className="text-lg font-bold text-primary">Hard</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">Pipeline Progress</span>
                  <span className="text-primary font-bold">0% Complete</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[0%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-morphism border border-primary/10 flex items-start gap-4">
            <Lightbulb className="text-primary shrink-0" size={24} strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h5 className="text-sm font-bold">Pro Tip</h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">Ensure your microphone is calibrated. AI CV Review will take into account your LinkedIn presence if synced.</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
