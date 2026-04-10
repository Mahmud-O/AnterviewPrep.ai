/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';
import CVReview from './components/CVReview';
import HRInterview from './components/HRInterview';
import TechnicalInterview from './components/TechnicalInterview';
import Report from './components/Report';

// Onboarding Components
import MajorSelection from './components/onboarding/MajorSelection';
import LevelSelection from './components/onboarding/LevelSelection';
import JobProposal from './components/onboarding/JobProposal';
import CompanySelection from './components/onboarding/CompanySelection';

export default function App() {
  const [currentView, setCurrentView] = useState('major');

  const renderView = () => {
    switch (currentView) {
      case 'major':
        return <MajorSelection onNext={() => setCurrentView('level')} />;
      case 'level':
        return <LevelSelection onBack={() => setCurrentView('major')} onNext={() => setCurrentView('job')} />;
      case 'job':
        return <JobProposal onNext={() => setCurrentView('company')} />;
      case 'company':
        return <CompanySelection onNext={() => setCurrentView('dashboard')} />;
      case 'dashboard':
        return <Dashboard onNext={() => setCurrentView('cv')} />;
      case 'cv':
        return <CVReview onNext={() => setCurrentView('hr')} />;
      case 'hr':
        return <HRInterview onNext={() => setCurrentView('tech')} />;
      case 'tech':
        return <TechnicalInterview onNext={() => setCurrentView('report')} />;
      case 'report':
        return <Report onNext={() => setCurrentView('dashboard')} />;
      default:
        return <MajorSelection onNext={() => setCurrentView('level')} />;
    }
  };

  const isFocusMode = currentView === 'hr' || currentView === 'tech';
  const hasSideNav = ['job', 'company', 'dashboard', 'cv', 'report'].includes(currentView);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary pb-24">
      <TopNav currentView={currentView} setCurrentView={setCurrentView} />
      {hasSideNav && !isFocusMode && <SideNav currentView={currentView} setCurrentView={setCurrentView} />}
      
      <div className={`${hasSideNav && !isFocusMode ? 'md:pl-64' : ''} transition-all duration-300`}>
        {renderView()}
      </div>
    </div>
  );
}
