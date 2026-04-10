import { Play, CheckCircle2, AlertCircle, Terminal, Maximize2, Mic, PauseCircle, Send, Code2 } from 'lucide-react';

export default function TechnicalInterview({ onNext }: { onNext: () => void }) {
  return (
    <main className="h-screen pt-20 flex flex-col md:flex-row overflow-hidden bg-background">
      
      {/* Left Panel: Problem & AI Chat */}
      <div className="w-full md:w-[45%] flex flex-col border-r border-outline-variant/10 h-full">
        
        {/* Problem Description */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 border-b border-outline-variant/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Code2 size={20} strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl font-bold font-headline">Distributed Rate Limiter</h2>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">System Design & Implementation</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-error/10 text-error text-[10px] font-bold uppercase tracking-wider">Hard</span>
          </div>

          <div className="prose prose-invert prose-sm max-w-none text-on-surface-variant">
            <p>
              Design and implement a distributed rate limiter that can handle millions of requests per second across a cluster of servers.
            </p>
            <h3 className="text-on-surface font-bold mt-4 mb-2">Requirements:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Implement the Token Bucket algorithm.</li>
              <li>Ensure thread safety and minimal lock contention.</li>
              <li>Support dynamic configuration updates without downtime.</li>
              <li>Provide a mechanism for graceful degradation during Redis/Datastore failures.</li>
            </ul>
            <h3 className="text-on-surface font-bold mt-4 mb-2">Function Signature:</h3>
            <pre className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 text-primary font-mono text-xs mt-2">
{`interface RateLimiter {
  allowRequest(userId: string): boolean;
  updateConfig(capacity: number, refillRate: number): void;
}`}
            </pre>
          </div>
        </div>

        {/* AI Chat / Guidance */}
        <div className="h-1/3 min-h-[250px] flex flex-col bg-surface-container-lowest">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Sarah" className="w-8 h-8 rounded-full object-cover shrink-0" />
              <div className="bg-surface-container-highest p-3 rounded-2xl rounded-tl-none text-sm text-on-surface">
                I see you're starting with the Token Bucket approach. How do you plan to handle the race conditions when multiple servers try to update the same user's bucket simultaneously?
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-surface-container-low border-t border-outline-variant/10">
            <div className="flex items-center gap-2 bg-surface-container p-1.5 rounded-full border border-outline-variant/20">
              <input 
                type="text" 
                placeholder="Explain your approach..." 
                className="flex-1 bg-transparent border-none outline-none text-sm px-3 placeholder:text-on-surface-variant/50"
              />
              <button className="p-2 bg-primary text-on-primary rounded-full hover:brightness-110 transition-all">
                <Mic size={16} strokeWidth={2} />
              </button>
              <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                <Send size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Right Panel: Code Editor */}
      <div className="w-full md:w-[55%] flex flex-col h-full bg-[#0c0e14]">
        
        {/* Editor Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/10 bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-error/80"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary/80"></div>
              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
            </div>
            <div className="h-4 w-[1px] bg-outline-variant/30 mx-2"></div>
            <span className="text-xs font-mono text-on-surface-variant">RateLimiter.ts</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Maximize2 size={16} strokeWidth={2} />
            </button>
            <button onClick={onNext} className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-on-primary px-4 py-1.5 rounded-full text-xs font-bold transition-all">
              <Play size={14} strokeWidth={2} />
              Run Tests
            </button>
          </div>
        </div>

        {/* Editor Area (Mocked) */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-surface-container-lowest border-r border-outline-variant/5 flex flex-col items-center py-4 text-xs font-mono text-on-surface-variant/30 select-none">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
          </div>
          <textarea 
            className="w-full h-full bg-transparent text-on-surface font-mono text-sm p-4 pl-16 resize-none outline-none leading-relaxed code-shadow"
            defaultValue={`class TokenBucketRateLimiter implements RateLimiter {
  private capacity: number;
  private refillRate: number;
  private buckets: Map<string, { tokens: number, lastRefill: number }>;

  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.buckets = new Map();
  }

  allowRequest(userId: string): boolean {
    // TODO: Implement token consumption and refill logic
    // Note: Need to consider distributed state (e.g., Redis)
    return true;
  }

  updateConfig(capacity: number, refillRate: number): void {
    this.capacity = capacity;
    this.refillRate = refillRate;
  }
}`}
            spellCheck="false"
          />
        </div>

        {/* Terminal / Output */}
        <div className="h-48 bg-surface-container-lowest border-t border-outline-variant/10 flex flex-col">
          <div className="flex items-center gap-4 px-4 py-2 border-b border-outline-variant/5">
            <button className="text-xs font-mono text-primary border-b border-primary pb-1">Terminal</button>
            <button className="text-xs font-mono text-on-surface-variant hover:text-on-surface pb-1">Test Results</button>
          </div>
          <div className="flex-1 p-4 font-mono text-xs text-on-surface-variant overflow-y-auto">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Terminal size={14} />
              <span>Ready for execution.</span>
            </div>
            <p className="opacity-50">Waiting for code submission...</p>
          </div>
        </div>

      </div>
    </main>
  );
}
