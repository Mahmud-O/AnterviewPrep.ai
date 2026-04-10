import { useState } from 'react';
import { Search, Plus, ArrowRight, Rocket } from 'lucide-react';
import TopProgressBar from './TopProgressBar';

const companies = [
  { id: 'google', name: 'Google', rounds: '4-6 Rounds', focus: 'ALGORITHM FOCUS', difficulty: 'HARD', logo: 'G', color: 'bg-white text-black' },
  { id: 'meta', name: 'Meta', rounds: '3-5 Rounds', focus: 'SPEED & SYSTEM DESIGN', difficulty: 'HARD', logo: 'M', color: 'bg-blue-600 text-white' },
  { id: 'amazon', name: 'Amazon', rounds: '4 Rounds', focus: 'LEADERSHIP PRINCIPLES', difficulty: 'MEDIUM', logo: 'a', color: 'bg-[#FF9900] text-black font-serif' },
  { id: 'microsoft', name: 'Microsoft', rounds: '4-5 Rounds', focus: 'TECHNICAL FUNDAMENTALS', difficulty: 'MEDIUM', logo: 'MS', color: 'bg-[#00A4EF] text-white' },
  { id: 'apple', name: 'Apple', rounds: '5-7 Rounds', focus: 'DOMAIN EXCELLENCE', difficulty: 'HARD', logo: '', color: 'bg-white text-black text-xl' },
  { id: 'netflix', name: 'Netflix', rounds: '2 Full Days', focus: 'CULTURE FIT HEAVY', difficulty: 'HARD', logo: 'N', color: 'bg-[#E50914] text-white font-bold' },
  { id: 'stripe', name: 'Stripe', rounds: '5-6 Rounds', focus: 'PRACTICAL CODING', difficulty: 'HARD', logo: 'S', color: 'bg-[#635BFF] text-white font-bold' },
  { id: 'shopify', name: 'Shopify', rounds: '3-4 Rounds', focus: 'THE "LIFE STORY"', difficulty: 'MEDIUM', logo: 'S', color: 'bg-[#95BF47] text-white font-bold' },
  { id: 'booking', name: 'Booking.com', rounds: '4 Rounds', focus: 'SCALE & PERFORMANCE', difficulty: 'MEDIUM', logo: 'B.', color: 'bg-[#003580] text-white font-bold' },
  { id: 'noon', name: 'Noon', rounds: '3-5 Rounds', focus: 'MARKET DYNAMICS', difficulty: 'MEDIUM', logo: 'n', color: 'bg-[#FEE000] text-black font-bold' },
  { id: 'careem', name: 'Careem', rounds: '3-4 Rounds', focus: 'PRODUCT THINKING', difficulty: 'MEDIUM', logo: 'C', color: 'bg-[#47A23F] text-white font-bold' },
];

export default function CompanySelection({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState('microsoft');

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-6xl mx-auto flex flex-col">
      
      <TopProgressBar currentView="company" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface">
            Target Company
          </h1>
          <p className="text-on-surface-variant text-lg">
            Select the company you're preparing for. Our AI will adjust its questioning style and cultural context based on their known interview patterns.
          </p>
        </div>
        <div className="relative w-full md:w-72 shrink-0">
          <input 
            type="text" 
            placeholder="Search companies..." 
            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-full pl-12 pr-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {companies.map((company) => {
          const isSelected = selected === company.id;
          const isHard = company.difficulty === 'HARD';
          
          return (
            <button
              key={company.id}
              onClick={() => setSelected(company.id)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border relative group ${
                isSelected 
                  ? 'bg-surface-container border-primary shadow-[0_0_30px_rgba(138,210,222,0.1)]' 
                  : 'bg-surface-container-low border-outline-variant/10 hover:bg-surface-container hover:border-outline-variant/30'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${company.color}`}>
                  {company.logo}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                  isHard ? 'bg-error/20 text-error' : 'bg-tertiary/20 text-tertiary'
                }`}>
                  {company.difficulty}
                </span>
              </div>
              
              <h3 className="text-xl font-bold font-headline text-on-surface mb-1">{company.name}</h3>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>
                {company.rounds}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">
                  {company.focus}
                </span>
                {isSelected && <ArrowRight className="text-primary" size={16} />}
              </div>
            </button>
          );
        })}

        {/* Custom Company Card */}
        <button className="text-left p-6 rounded-2xl transition-all duration-300 border border-outline-variant/10 border-dashed bg-transparent hover:bg-surface-container-low flex flex-col items-center justify-center text-center group">
          <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:bg-primary/10 transition-colors mb-4">
            <Plus size={24} />
          </div>
          <h3 className="text-lg font-bold font-headline text-on-surface mb-2">Custom Company</h3>
          <p className="text-xs text-on-surface-variant">Don't see your target?<br/>Upload a job description or provide the URL.</p>
        </button>
      </div>

      {/* AI Tips */}
      <div className="flex flex-wrap gap-4 mb-12">
        <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/10 px-4 py-2 rounded-full text-xs text-on-surface-variant">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          AI Tip: Microsoft focuses heavily on "T-Shaped" skills
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/10 px-4 py-2 rounded-full text-xs text-on-surface-variant">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          High Success Rate: 84% of PrepAI users cleared Round 1 at Microsoft
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-outline-variant/10 p-6 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
              <Rocket size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-on-surface">Ready for Microsoft?</h4>
              <p className="text-sm text-on-surface-variant">We've loaded 248 specific interview questions and 12 cultural modules.</p>
            </div>
          </div>
          <button 
            onClick={onNext}
            className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(138,210,222,0.3)] whitespace-nowrap"
          >
            Confirm Company & Start Pipeline
          </button>
        </div>
      </div>

    </div>
  );
}
