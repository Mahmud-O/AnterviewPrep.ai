import { Briefcase, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import TopProgressBar from './TopProgressBar';

export default function JobProposal({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-3xl mx-auto flex flex-col">
      
      <TopProgressBar currentView="job" />

      <div className="bg-surface-container rounded-3xl p-8 md:p-12 border border-outline-variant/10 editorial-shadow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
        
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-on-surface mb-4">
            Define Your Target
          </h1>
          <p className="text-on-surface-variant text-lg">
            Tell us about the opportunity. Our AI will dissect the requirements to generate hyper-relevant simulations.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Job Title */}
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">Target Job Title</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g. Senior Fullstack Engineer" 
                className="w-full bg-background border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={20} />
            </div>
          </div>

          {/* Job Description */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">Paste Job Description</label>
              <span className="text-[10px] text-primary font-mono">MIN 200 CHARS</span>
            </div>
            <textarea 
              placeholder="Paste the full job posting here for deep analysis..." 
              className="w-full h-48 bg-background border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Salary & Language */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">Expected Salary Range</label>
              <div className="relative flex items-center bg-background border border-outline-variant/20 rounded-xl overflow-hidden focus-within:border-primary/50 transition-colors">
                <span className="pl-4 pr-2 text-sm font-bold text-on-surface">USD</span>
                <input 
                  type="text" 
                  placeholder="120k - 150k" 
                  className="w-full bg-transparent px-2 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">Preferred Interview Language</label>
              <div className="relative">
                <select className="w-full bg-background border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 pointer-events-none" size={20} />
              </div>
            </div>
          </div>

          {/* AI Intelligence Layer Box */}
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
              <Sparkles className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary mb-1">AI Intelligence Layer</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our AI will analyze this JD to tailor your interview questions, identifying hidden "nice-to-haves" and matching them with your background.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={onNext}
            className="w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-background transition-all duration-300 bg-primary rounded-full hover:shadow-[0_0_30px_rgba(138,210,222,0.4)] active:scale-[0.98]"
          >
            <span className="relative z-10 font-headline text-lg">Analyze Job Proposal</span>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1 text-background" size={20} strokeWidth={2.5} />
          </button>

        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-[10px] text-on-surface-variant tracking-[0.2em] uppercase font-mono">
          Precision Calibration V4.2 • Secured Data Transmission
        </p>
      </div>

    </div>
  );
}
