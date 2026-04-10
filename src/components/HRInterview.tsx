import { Mic, Paperclip, Send, PauseCircle } from 'lucide-react';

export default function HRInterview({ onNext }: { onNext: () => void }) {
  return (
    <main className="h-screen pt-20 flex flex-col md:flex-row overflow-hidden">
      
      {/* AI Avatar Side */}
      <div className="w-full md:w-1/2 bg-surface-container-low relative flex flex-col items-center justify-center border-r border-outline-variant/10 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-md">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="AI HR Manager" 
              className="w-48 h-48 rounded-full object-cover border-4 border-surface-container-highest shadow-2xl relative z-10"
            />
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-primary rounded-full border-4 border-surface-container-low z-20"></div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-headline">Sarah</h2>
            <p className="text-primary font-label text-sm uppercase tracking-widest">AI HR Manager</p>
          </div>

          <div className="flex items-center gap-1 h-12">
            <div className="w-1.5 bg-primary rounded-full waveform-bar"></div>
            <div className="w-1.5 bg-primary rounded-full waveform-bar"></div>
            <div className="w-1.5 bg-primary rounded-full waveform-bar"></div>
            <div className="w-1.5 bg-primary rounded-full waveform-bar"></div>
            <div className="w-1.5 bg-primary rounded-full waveform-bar"></div>
          </div>

          <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 w-full text-center editorial-shadow">
            <p className="text-lg font-medium leading-relaxed">
              "Could you describe a time when you had to disagree with a senior engineer on a technical architectural decision? How did you handle it?"
            </p>
          </div>
        </div>
      </div>

      {/* Chat Interface Side */}
      <div className="w-full md:w-1/2 bg-background flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-8">
          
          <div className="flex gap-4 max-w-xl">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Sarah" className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-sm">Sarah</span>
                <span className="text-xs text-on-surface-variant">10:02 AM</span>
              </div>
              <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                Welcome to the HR round. I've reviewed your CV and I'm impressed by your background. Let's start with some behavioral questions.
              </div>
            </div>
          </div>

          <div className="flex gap-4 max-w-xl ml-auto flex-row-reverse">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8G8u--sh87UYzFNpcyj_P1C_aBTbslArn_xNz8T7btJx364C2ClmklTltB31GOtpOaHm3uG5ZvRSwraGJn9uLnbbN9CO5IzNVkRMkiubi9TIumZhGV2TjK5-eO6fslfOrzA4ASFUx4yHoX0gpx2GDgilHLdNvfy-QQnA4loUxDsSBBSxcz35pXL0ww810xgsibe3BNFcdyuX4iUIvzIUF7M-QAkd4rwVw3Y6Mz2X9fBicsePhqejNkRejCzE_3RRCF4Vo3wk87o" alt="You" className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div className="flex flex-col gap-2 items-end">
              <div className="flex items-baseline gap-2 flex-row-reverse">
                <span className="font-bold text-sm">You</span>
                <span className="text-xs text-on-surface-variant">10:03 AM</span>
              </div>
              <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed">
                Thank you, Sarah. I'm ready when you are.
              </div>
            </div>
          </div>

          <div className="flex gap-4 max-w-xl">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Sarah" className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-sm">Sarah</span>
                <span className="text-xs text-on-surface-variant">10:04 AM</span>
              </div>
              <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                Could you describe a time when you had to disagree with a senior engineer on a technical architectural decision? How did you handle it?
              </div>
            </div>
          </div>

        </div>

        <div className="p-6 bg-surface-container-low border-t border-outline-variant/10">
          <div className="flex items-center gap-4 bg-surface-container p-2 rounded-full border border-outline-variant/20 focus-within:border-primary/50 transition-colors">
            <button className="p-3 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-bright">
              <Paperclip size={20} strokeWidth={1.5} />
            </button>
            <input 
              type="text" 
              placeholder="Type your response or use voice..." 
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-on-surface-variant/50"
            />
            <div className="flex items-center gap-2 pr-2">
              <button className="p-3 bg-error/10 text-error rounded-full hover:bg-error/20 transition-colors">
                <PauseCircle size={20} strokeWidth={1.5} />
              </button>
              <button className="p-3 bg-primary text-on-primary rounded-full hover:brightness-110 transition-all shadow-[0_0_15px_rgba(138,210,222,0.3)]">
                <Mic size={20} strokeWidth={1.5} />
              </button>
              <button onClick={onNext} className="p-3 text-primary hover:bg-primary/10 rounded-full transition-colors ml-2">
                <Send size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 px-4">
            <span className="text-xs text-on-surface-variant flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              Recording Audio
            </span>
            <span className="text-xs text-on-surface-variant font-mono">01:24</span>
          </div>
        </div>
      </div>
    </main>
  );
}
