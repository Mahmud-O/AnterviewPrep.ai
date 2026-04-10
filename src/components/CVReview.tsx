import { BadgeCheck, CheckCircle2, AlertTriangle, FileText, Download, ArrowRight } from 'lucide-react';

export default function CVReview({ onNext }: { onNext: () => void }) {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center justify-center max-w-5xl mx-auto">
      <div className="w-full space-y-8">
        
        <div className="text-center space-y-2 mb-12">
          <span className="font-label text-xs text-primary tracking-[0.2em] uppercase font-bold">Analysis Engine</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface">Curriculum Vitae Review</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Upload your CV to let our AI mentor analyze your readiness for the upcoming role-specific challenges.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <BadgeCheck size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-primary font-headline">Your CV passed. Proceeding to Stage 2.</p>
                <p className="text-xs text-on-surface-variant">The AI mentor identified strong alignment with the Senior Software Engineer requirements.</p>
              </div>
            </div>

            <div className="bg-surface-container rounded-2xl p-8 editorial-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                
                <div className="relative flex-shrink-0">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-primary transition-all duration-1000" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="82.93" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
                    <span className="text-5xl font-bold font-headline text-on-surface">85</span>
                    <span className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">Score</span>
                  </div>
                </div>

                <div className="flex-grow space-y-6 w-full">
                  <h3 className="text-2xl font-bold font-headline text-on-surface">AI Analysis Results</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} strokeWidth={2} />
                        <span className="font-medium">Experience</span>
                      </div>
                      <span className="text-xs font-bold text-primary">MATCHED</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} strokeWidth={2} />
                        <span className="font-medium">Skills Match</span>
                      </div>
                      <span className="text-xs font-bold text-primary">EXCELLENT</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-error/5 border border-error/10">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="text-error" size={20} strokeWidth={2} />
                        <span className="font-medium">Keywords</span>
                      </div>
                      <span className="text-xs font-bold text-error">NEEDS FOCUS</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-bright transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} strokeWidth={2} />
                        <span className="font-medium">Formatting</span>
                      </div>
                      <span className="text-xs font-bold text-primary">CLEAN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low rounded-2xl p-6 ghost-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold truncate text-on-surface">Alex_CV_2024.pdf</p>
                  <p className="text-xs text-on-surface-variant">2.4 MB • Analyzed 2m ago</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full py-3 px-4 bg-surface-container-highest hover:bg-surface-bright text-on-surface text-sm font-bold rounded-full transition-all flex items-center justify-center gap-2">
                  <Download size={18} strokeWidth={2} />
                  View Original
                </button>
                <button className="w-full py-3 px-4 text-on-surface-variant hover:text-on-surface text-sm font-bold transition-all underline underline-offset-4 decoration-primary/30">
                  Upload New Version
                </button>
              </div>
            </div>

            <div className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#8ad2de]"></span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">AI Insight</span>
              </div>
              <p className="text-sm leading-relaxed text-on-surface italic">
                "Your background in distributed systems is a perfect fit for this role. However, your CV lacks specific keywords like 'Kubernetes' and 'gRPC' which are prominent in the job description."
              </p>
            </div>

            <div className="mt-auto">
              <button onClick={onNext} className="w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-on-primary transition-all duration-300 bg-primary rounded-full hover:shadow-[0_0_30px_rgba(138,210,222,0.4)] active:scale-[0.98]">
                <span className="relative z-10 font-headline text-lg">Next: HR Interview</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} strokeWidth={2} />
              </button>
              <p className="text-center text-[10px] text-on-surface-variant mt-4 tracking-tighter uppercase">Step 1 of 4: Profile Readiness Completed</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
