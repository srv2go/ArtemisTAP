import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, ChevronLeft, CheckCircle, Circle, Star, Trophy, 
  BookOpen, Target, Users, Zap, Brain, MessageSquare, TrendingUp,
  Play, Pause, RotateCcw, Award, Compass, Map, Flag, Mountain,
  Lightbulb, Clock, BarChart3, Sparkles, ArrowRight, Menu, X,
  Home, GraduationCap, ClipboardCheck, Mic, Settings, User,
  CreditCard, Shield, Code
} from 'lucide-react';

// Import comprehensive content data
import { 
  ROLE_SPECIFIC_CONTENT, 
  METHODOLOGY_MODULES, 
  CULTURE_MODULES, 
  PAYMENT_DOMAIN_MODULES,
  GLOSSARY_TERMS 
} from '../data/content.js';
import { ASSESSMENT_QUESTIONS, INTERVIEW_CONTENT } from '../data/assessments.js';

// ============================================================
// TRANSITION ACCELERATION PLATFORM
// "Bridge the Canyon" - Self-Paced Learning for Core Network
// ============================================================

const TransitionPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedRole, setSelectedRole] = useState(null);
  const [userProgress, setUserProgress] = useState({
    phase: 1,
    completedModules: ['orientation'],
    assessmentScores: {},
    streakDays: 7,
    totalXP: 1250,
    level: 3
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);

  useEffect(() => {
    setAnimateIn(true);
    const timer = setTimeout(() => setAnimateIn(false), 500);
    return () => clearTimeout(timer);
  }, [currentView]);

  // Role configurations based on YAML
  const roles = [
    { id: 'ba', name: 'Business Analyst', icon: Target, color: '#00D4AA', modules: 12 },
    { id: 'engineer', name: 'Software Engineer', icon: Zap, color: '#FF6B35', modules: 15 },
    { id: 'product', name: 'Product Owner', icon: Compass, color: '#7B68EE', modules: 10 },
    { id: 'fraud', name: 'Fraud Operations', icon: Brain, color: '#FF4757', modules: 8 }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'learn', label: 'Learn', icon: GraduationCap },
    { id: 'assess', label: 'Assess', icon: ClipboardCheck },
    { id: 'interview', label: 'Interview', icon: Mic },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  // Render different views
  const renderContent = () => {
    switch(currentView) {
      case 'home': return <HomeView {...{selectedRole, setSelectedRole, roles, userProgress, setCurrentView}} />;
      case 'learn': return <LearnView {...{selectedRole, userProgress, setUserProgress}} />;
      case 'assess': return <AssessView {...{selectedRole, userProgress, setUserProgress}} />;
      case 'interview': return <InterviewView {...{selectedRole}} />;
      case 'profile': return <ProfileView {...{userProgress, selectedRole, roles}} />;
      case 'glossary': return <GlossaryView />;
      case 'culture': return <CultureView {...{userProgress, setUserProgress}} />;
      default: return <HomeView {...{selectedRole, setSelectedRole, roles, userProgress, setCurrentView}} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)',
      fontFamily: "'Outfit', sans-serif",
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient background effects */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(123, 104, 238, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.04) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 15, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00D4AA 0%, #00A080 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 212, 170, 0.3)'
            }}>
              <Mountain size={22} color="#fff" />
            </div>
            <div>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: '700',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #fff 0%, #00D4AA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Bridge the Canyon
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '1px' }}>
                Transition Acceleration
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: 'rgba(255, 215, 0, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 215, 0, 0.2)'
            }}>
              <Sparkles size={14} color="#FFD700" />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#FFD700' }}>
                {userProgress.totalXP} XP
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {menuOpen ? <X size={20} color="#fff" /> : <Menu size={20} color="#fff" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '73px',
          right: '0',
          bottom: '80px',
          width: '280px',
          background: 'rgba(20, 20, 30, 0.98)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          zIndex: 99,
          padding: '20px',
          animation: 'slideIn 0.3s ease-out'
        }}>
          <QuickLinks setCurrentView={(view) => { setCurrentView(view); setMenuOpen(false); }} />
        </div>
      )}

      {/* Main content */}
      <main style={{
        padding: '20px',
        paddingBottom: '100px',
        maxWidth: '500px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        opacity: animateIn ? 0 : 1,
        transform: animateIn ? 'translateY(10px)' : 'translateY(0)',
        transition: 'all 0.4s ease-out'
      }}>
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 15, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 0 24px 0',
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              style={{
                background: 'none',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                ...(currentView === item.id && {
                  background: 'rgba(0, 212, 170, 0.1)'
                })
              }}
            >
              <item.icon 
                size={22} 
                color={currentView === item.id ? '#00D4AA' : 'rgba(255,255,255,0.4)'} 
              />
              <span style={{
                fontSize: '11px',
                fontWeight: '500',
                color: currentView === item.id ? '#00D4AA' : 'rgba(255,255,255,0.4)'
              }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
        
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

// ============================================================
// HOME VIEW
// ============================================================
const HomeView = ({ selectedRole, setSelectedRole, roles, userProgress, setCurrentView }) => {
  const currentPhaseInfo = {
    1: { name: 'Discovery & Assessment', weeks: '1-2', color: '#00D4AA' },
    2: { name: 'Immersive Learning', weeks: '3-8', color: '#7B68EE' },
    3: { name: 'Performance Support', weeks: 'Ongoing', color: '#FF6B35' }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Welcome Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(123, 104, 238, 0.1) 100%)',
        borderRadius: '24px',
        padding: '24px',
        border: '1px solid rgba(0, 212, 170, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.2) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
            Welcome back
          </div>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            margin: '0 0 16px 0',
            letterSpacing: '-0.03em'
          }}>
            Your journey continues
          </h1>
          
          {/* Phase indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '12px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: currentPhaseInfo[userProgress.phase].color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 20px ${currentPhaseInfo[userProgress.phase].color}40`
            }}>
              <Flag size={22} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                Phase {userProgress.phase} • Weeks {currentPhaseInfo[userProgress.phase].weeks}
              </div>
              <div style={{ fontSize: '15px', fontWeight: '600' }}>
                {currentPhaseInfo[userProgress.phase].name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <StatCard icon={Zap} value={userProgress.streakDays} label="Day Streak" color="#FF6B35" />
        <StatCard icon={Star} value={`Lv ${userProgress.level}`} label="Your Level" color="#FFD700" />
        <StatCard icon={CheckCircle} value={userProgress.completedModules.length} label="Completed" color="#00D4AA" />
      </div>

      {/* Role Selection */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>
            {selectedRole ? 'Your Path' : 'Select Your Role'}
          </h2>
          {selectedRole && (
            <button 
              onClick={() => setSelectedRole(null)}
              style={{
                background: 'none',
                border: 'none',
                color: '#00D4AA',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Change
            </button>
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {roles.filter(r => !selectedRole || r.id === selectedRole).map(role => (
            <RoleCard 
              key={role.id} 
              role={role} 
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      {selectedRole && (
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            Continue Learning
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ActionCard 
              icon={BookOpen}
              title="Daily Micro-Learning"
              subtitle="10-15 min • Cultural Acclimation"
              color="#00D4AA"
              onClick={() => setCurrentView('culture')}
              badge="New"
            />
            <ActionCard 
              icon={Target}
              title="Skills Assessment"
              subtitle="Identify your growth areas"
              color="#7B68EE"
              onClick={() => setCurrentView('assess')}
            />
            <ActionCard 
              icon={Mic}
              title="Mock Interview"
              subtitle="Practice behavioral questions"
              color="#FF6B35"
              onClick={() => setCurrentView('interview')}
            />
          </div>
        </div>
      )}

      {/* Journey Map */}
      <JourneyMap phase={userProgress.phase} />
    </div>
  );
};

// ============================================================
// LEARN VIEW
// ============================================================
const LearnView = ({ selectedRole, userProgress, setUserProgress }) => {
  const [activeCategory, setActiveCategory] = useState('methodology');

  const categories = [
    { id: 'methodology', name: 'Methodology', icon: Compass },
    { id: 'culture', name: 'Culture', icon: Users },
    { id: 'domain', name: 'Payments', icon: Zap }
  ];

  // Map imported data to module format
  const modules = {
    methodology: METHODOLOGY_MODULES.map((m, idx) => ({
      id: m.id,
      title: m.title,
      duration: m.duration,
      xp: m.xp,
      completed: userProgress.completedModules.includes(m.id),
      locked: idx > 0 && !userProgress.completedModules.includes(METHODOLOGY_MODULES[idx-1].id),
      content: m.content,
      exercise: m.exercise
    })),
    culture: CULTURE_MODULES.map((m, idx) => ({
      id: m.id,
      title: m.title,
      duration: m.duration,
      xp: m.xp,
      completed: userProgress.completedModules.includes(m.id),
      locked: idx > 0 && !userProgress.completedModules.includes(CULTURE_MODULES[idx-1].id),
      content: m.content,
      exercise: m.exercise
    })),
    domain: PAYMENT_DOMAIN_MODULES.map((m, idx) => ({
      id: m.id,
      title: m.title,
      duration: m.duration,
      xp: m.xp,
      completed: userProgress.completedModules.includes(m.id),
      locked: idx > 0 && !userProgress.completedModules.includes(PAYMENT_DOMAIN_MODULES[idx-1].id),
      content: m.content,
      exercise: m.exercise
    }))
  };

  const completeModule = (moduleId) => {
    setUserProgress(prev => ({
      ...prev,
      completedModules: [...prev.completedModules, moduleId],
      totalXP: prev.totalXP + 100
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
          Learning Paths
        </h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Master the methodologies, culture, and domain expertise
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '8px'
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              borderRadius: '12px',
              border: 'none',
              background: activeCategory === cat.id 
                ? 'linear-gradient(135deg, #00D4AA 0%, #00A080 100%)'
                : 'rgba(255,255,255,0.05)',
              color: activeCategory === cat.id ? '#fff' : 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            <cat.icon size={16} />
            {cat.name}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '16px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Category Progress</span>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#00D4AA' }}>
            {modules[activeCategory].filter(m => m.completed).length}/{modules[activeCategory].length} Complete
          </span>
        </div>
        <div style={{
          height: '8px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${(modules[activeCategory].filter(m => m.completed).length / modules[activeCategory].length) * 100}%`,
            background: 'linear-gradient(90deg, #00D4AA 0%, #00A080 100%)',
            borderRadius: '4px',
            transition: 'width 0.5s ease'
          }} />
        </div>
      </div>

      {/* Module List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {modules[activeCategory].map((module, idx) => (
          <ModuleCard 
            key={module.id} 
            module={module} 
            index={idx}
            onComplete={() => completeModule(module.id)}
          />
        ))}
      </div>
    </div>
  );
};

// ============================================================
// ASSESS VIEW
// ============================================================
const AssessView = ({ selectedRole, userProgress, setUserProgress }) => {
  const [activeAssessment, setActiveAssessment] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const assessments = [
    { 
      id: 'skills-gap',
      title: 'Skills Gap Analysis',
      description: 'Identify areas for growth based on Capital One competencies',
      questions: ASSESSMENT_QUESTIONS['skills-gap']?.length || 15,
      duration: '20 min',
      icon: BarChart3,
      color: '#00D4AA',
      completed: userProgress.assessmentScores['skills-gap'] !== undefined
    },
    {
      id: 'cultural-fit',
      title: 'Cultural Alignment',
      description: 'Assess your alignment with Capital One values',
      questions: ASSESSMENT_QUESTIONS['cultural-fit']?.length || 12,
      duration: '15 min',
      icon: Users,
      color: '#7B68EE',
      completed: userProgress.assessmentScores['cultural-fit'] !== undefined
    },
    {
      id: 'domain-knowledge',
      title: 'Payment Domain Quiz',
      description: 'Test your knowledge of payment systems and networks',
      questions: ASSESSMENT_QUESTIONS['domain-knowledge']?.length || 20,
      duration: '25 min',
      icon: Zap,
      color: '#FF6B35',
      completed: userProgress.assessmentScores['domain-knowledge'] !== undefined
    },
    {
      id: 'methodology',
      title: 'COFEE Methodology',
      description: 'Verify understanding of Capital One frameworks',
      questions: ASSESSMENT_QUESTIONS['methodology']?.length || 10,
      duration: '12 min',
      icon: Compass,
      color: '#00A080',
      completed: userProgress.assessmentScores['methodology'] !== undefined
    }
  ];

  // Get questions for active assessment
  const getQuestions = () => {
    if (!activeAssessment) return [];
    return ASSESSMENT_QUESTIONS[activeAssessment.id] || [];
  };

  const currentQuestions = getQuestions();

  if (activeAssessment) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Assessment Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setActiveAssessment(null)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: '10px',
              padding: '10px',
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            <ChevronLeft size={20} color="#fff" />
          </button>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>
              {activeAssessment.title}
            </h2>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              Question {currentQuestion + 1} of {currentQuestions.length}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div style={{
          height: '4px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%`,
            background: activeAssessment.color,
            transition: 'width 0.3s ease'
          }} />
        </div>

        {/* Question Card */}
        {currentQuestions[currentQuestion] && (
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '1.5',
            marginBottom: '24px'
          }}>
            {currentQuestions[currentQuestion].question}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentQuestions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setAnswers({ ...answers, [currentQuestion]: idx })}
                style={{
                  background: answers[currentQuestion] === idx 
                    ? `${activeAssessment.color}20`
                    : 'rgba(255,255,255,0.03)',
                  border: answers[currentQuestion] === idx
                    ? `2px solid ${activeAssessment.color}`
                    : '2px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'left',
                  color: '#fff',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: answers[currentQuestion] === idx 
                      ? activeAssessment.color 
                      : 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation after answer selected */}
          {answers[currentQuestion] !== undefined && currentQuestions[currentQuestion].explanation && (
            <div style={{
              marginTop: '20px',
              padding: '16px',
              borderRadius: '12px',
              background: answers[currentQuestion] === currentQuestions[currentQuestion].correct 
                ? 'rgba(0, 212, 170, 0.1)' 
                : 'rgba(255, 107, 53, 0.1)',
              border: `1px solid ${answers[currentQuestion] === currentQuestions[currentQuestion].correct 
                ? 'rgba(0, 212, 170, 0.3)' 
                : 'rgba(255, 107, 53, 0.3)'}`
            }}>
              <div style={{ 
                fontSize: '13px', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: answers[currentQuestion] === currentQuestions[currentQuestion].correct ? '#00D4AA' : '#FF6B35'
              }}>
                {answers[currentQuestion] === currentQuestions[currentQuestion].correct ? '✓ Correct!' : '✗ Not quite'}
              </div>
              <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
                {currentQuestions[currentQuestion].explanation}
              </div>
            </div>
          )}
        </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#fff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Previous
            </button>
          )}
          <button
            onClick={() => {
              if (currentQuestion < currentQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                // Check if all questions are answered
                const allAnswered = currentQuestions.every((_, idx) => answers[idx] !== undefined);
                if (!allAnswered) {
                  alert('Please answer all questions before completing the assessment.');
                  return;
                }
                
                // Calculate score based on correct answers
                const correctAnswers = Object.keys(answers).filter(
                  key => answers[key] === currentQuestions[parseInt(key)].correct
                ).length;
                const score = Math.round((correctAnswers / currentQuestions.length) * 100);
                
                // Award XP based on performance: 50-200 XP based on score
                const xpEarned = Math.round(50 + (score / 100) * 150);
                
                setUserProgress(prev => ({
                  ...prev,
                  assessmentScores: {
                    ...prev.assessmentScores,
                    [activeAssessment.id]: score
                  },
                  totalXP: prev.totalXP + xpEarned
                }));
                
                // Show results alert
                alert(`Assessment Complete!\n\nScore: ${score}%\nCorrect: ${correctAnswers}/${currentQuestions.length}\nXP Earned: +${xpEarned}`);
                
                setActiveAssessment(null);
                setCurrentQuestion(0);
                setAnswers({});
              }
            }}
            disabled={answers[currentQuestion] === undefined}
            style={{
              flex: 2,
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              background: answers[currentQuestion] !== undefined
                ? `linear-gradient(135deg, ${activeAssessment.color} 0%, ${activeAssessment.color}99 100%)`
                : 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              cursor: answers[currentQuestion] !== undefined ? 'pointer' : 'not-allowed'
            }}
          >
            {currentQuestion < currentQuestions.length - 1 ? 'Next Question' : 'Complete Assessment'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
          Assessments
        </h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Evaluate your readiness and identify growth opportunities
        </p>
      </div>

      {/* Assessment Score Overview */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(123, 104, 238, 0.1) 100%)',
        borderRadius: '20px',
        padding: '20px',
        border: '1px solid rgba(0, 212, 170, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Overall Readiness</div>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: '700',
            background: 'linear-gradient(90deg, #00D4AA 0%, #7B68EE 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {Object.keys(userProgress.assessmentScores).length > 0 
              ? Math.round(Object.values(userProgress.assessmentScores).reduce((a, b) => a + b, 0) / Object.values(userProgress.assessmentScores).length)
              : '--'}%
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {assessments.map((a, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '6px',
                borderRadius: '3px',
                background: a.completed ? a.color : 'rgba(255,255,255,0.1)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Assessment List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {assessments.map(assessment => (
          <div
            key={assessment.id}
            onClick={() => !assessment.completed && setActiveAssessment(assessment)}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255,255,255,0.06)',
              cursor: assessment.completed ? 'default' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: assessment.completed ? 0.7 : 1
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: `${assessment.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {assessment.completed ? (
                  <CheckCircle size={24} color={assessment.color} />
                ) : (
                  <assessment.icon size={24} color={assessment.color} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>{assessment.title}</span>
                  {assessment.completed && (
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      background: `${assessment.color}30`,
                      color: assessment.color
                    }}>
                      {userProgress.assessmentScores[assessment.id]}%
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
                  {assessment.description}
                </div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                  <span>{assessment.questions} questions</span>
                  <span>{assessment.duration}</span>
                </div>
              </div>
              {!assessment.completed && <ChevronRight size={20} color="rgba(255,255,255,0.3)" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// INTERVIEW VIEW
// ============================================================
const InterviewView = ({ selectedRole }) => {
  const [mode, setMode] = useState('select'); // select, practice, feedback
  const [selectedType, setSelectedType] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  const interviewTypes = [
    { 
      id: 'behavioral',
      title: INTERVIEW_CONTENT.behavioral.title,
      description: INTERVIEW_CONTENT.behavioral.description,
      icon: MessageSquare,
      color: '#00D4AA',
      questions: INTERVIEW_CONTENT.behavioral.questions
    },
    {
      id: 'caseStudy',
      title: INTERVIEW_CONTENT.caseStudy.title,
      description: INTERVIEW_CONTENT.caseStudy.description,
      icon: Lightbulb,
      color: '#7B68EE',
      questions: INTERVIEW_CONTENT.caseStudy.questions
    },
    {
      id: 'technical',
      title: INTERVIEW_CONTENT.technical.title,
      description: INTERVIEW_CONTENT.technical.description,
      icon: Zap,
      color: '#FF6B35',
      questions: INTERVIEW_CONTENT.technical.questions
    },
    {
      id: 'cultureFit',
      title: INTERVIEW_CONTENT.cultureFit.title,
      description: INTERVIEW_CONTENT.cultureFit.description,
      icon: Users,
      color: '#00A080',
      questions: INTERVIEW_CONTENT.cultureFit.questions
    }
  ];

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  if (mode === 'practice' && selectedType) {
    const interview = interviewTypes.find(t => t.id === selectedType);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => { setMode('select'); setIsRecording(false); setTimer(0); setCurrentQ(0); }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: '10px',
              padding: '10px',
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            <ChevronLeft size={20} color="#fff" />
          </button>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>{interview.title}</h2>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              Question {currentQ + 1} of {interview.questions.length}
            </div>
          </div>
        </div>

        {/* Question Display */}
        <div style={{
          background: `linear-gradient(135deg, ${interview.color}15 0%, ${interview.color}05 100%)`,
          borderRadius: '20px',
          padding: '28px',
          border: `1px solid ${interview.color}30`
        }}>
          <div style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.5', marginBottom: '16px' }}>
            {interview.questions[currentQ].question || interview.questions[currentQ].scenario}
          </div>
          {interview.questions[currentQ].principle && (
            <div style={{
              display: 'inline-block',
              padding: '6px 12px',
              background: `${interview.color}20`,
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600',
              color: interview.color
            }}>
              Focus: {interview.questions[currentQ].principle}
            </div>
          )}
          {interview.questions[currentQ].structure && (
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>
                Approach:
              </div>
              <ul style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', paddingLeft: '20px' }}>
                {interview.questions[currentQ].structure.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Recording Interface */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '20px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '48px',
            fontWeight: '300',
            fontFamily: 'monospace',
            marginBottom: '20px',
            color: isRecording ? interview.color : 'rgba(255,255,255,0.5)'
          }}>
            {Math.floor(timer / 60).toString().padStart(2, '0')}:{(timer % 60).toString().padStart(2, '0')}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsRecording(!isRecording)}
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                border: 'none',
                background: isRecording 
                  ? 'linear-gradient(135deg, #FF4757 0%, #FF6B35 100%)'
                  : `linear-gradient(135deg, ${interview.color} 0%, ${interview.color}99 100%)`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isRecording 
                  ? '0 8px 32px rgba(255, 71, 87, 0.4)'
                  : `0 8px 32px ${interview.color}40`
              }}
            >
              {isRecording ? <Pause size={28} color="#fff" /> : <Play size={28} color="#fff" style={{ marginLeft: '4px' }} />}
            </button>
            
            {timer > 0 && (
              <button
                onClick={() => { setTimer(0); setIsRecording(false); }}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center'
                }}
              >
                <RotateCcw size={20} color="rgba(255,255,255,0.6)" />
              </button>
            )}
          </div>

          <div style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            {isRecording ? 'Recording your response...' : 'Tap to start recording'}
          </div>
        </div>

        {/* Tips */}
        <div style={{
          background: 'rgba(255, 215, 0, 0.05)',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid rgba(255, 215, 0, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Lightbulb size={16} color="#FFD700" />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#FFD700' }}>Pro Tip</span>
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
            Use the STAR method: Situation, Task, Action, Result. Aim for 2-3 minute responses.
            Include specific metrics and data points where possible.
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ(currentQ - 1)}
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#fff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Previous
            </button>
          )}
          <button
            onClick={() => {
              if (currentQ < interview.questions.length - 1) {
                setCurrentQ(currentQ + 1);
                setTimer(0);
                setIsRecording(false);
              } else {
                setMode('feedback');
              }
            }}
            style={{
              flex: 2,
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              background: `linear-gradient(135deg, ${interview.color} 0%, ${interview.color}99 100%)`,
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            {currentQ < interview.questions.length - 1 ? 'Next Question' : 'Get Feedback'}
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'feedback') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00D4AA 0%, #00A080 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            boxShadow: '0 8px 32px rgba(0, 212, 170, 0.3)'
          }}>
            <Trophy size={40} color="#fff" />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>
            Practice Complete!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            Here's your performance feedback
          </p>
        </div>

        {/* Info Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(123, 104, 238, 0.1) 100%)',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid rgba(0, 212, 170, 0.2)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)' }}>
            <strong>Note:</strong> This is practice mode. Scores are not evaluated.
            <br />
            Use real interviews and assessments to track your progress and earn XP.
          </div>
        </div>

        {/* Practice Tips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            background: 'rgba(0, 212, 170, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(0, 212, 170, 0.2)'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#00D4AA' }}>
              ✓ Remember the STAR Method
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Situation → Task → Action → Result. Include specific metrics and timeframes.
            </div>
          </div>
          <div style={{
            background: 'rgba(123, 104, 238, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(123, 104, 238, 0.2)'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#7B68EE' }}>
              ✓ Connect to Capital One Values
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Reference Customer Back, Data Obsession, or D4 Framework in your answers.
            </div>
          </div>
          <div style={{
            background: 'rgba(255, 215, 0, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(255, 215, 0, 0.2)'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#FFD700' }}>
              ✓ Use Specific Examples
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Real projects with numbers: "Reduced fraud by 15%" not "improved security".
            </div>
          </div>
        </div>

        <button
          onClick={() => { setMode('select'); setSelectedType(null); }}
          style={{
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #00D4AA 0%, #00A080 100%)',
            color: '#fff',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Practice Another Round
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
          Interview Prep
        </h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Practice makes perfect. Choose a format to begin.
        </p>
      </div>

      {/* Interview Type Selection */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {interviewTypes.map(type => (
          <div
            key={type.id}
            onClick={() => { setSelectedType(type.id); setMode('practice'); }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255,255,255,0.06)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `${type.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <type.icon size={26} color={type.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
                  {type.title}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                  {type.description}
                </div>
              </div>
              <ChevronRight size={20} color="rgba(255,255,255,0.3)" />
            </div>
          </div>
        ))}
      </div>

      {/* Scoring Guide */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '16px',
        padding: '20px',
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', margin: '0 0 16px 0' }}>
          Capital One Scoring Guide
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { score: '4', label: 'Exceptional', desc: 'Exceeds all criteria with compelling examples' },
            { score: '3', label: 'Strong', desc: 'Meets criteria with good evidence' },
            { score: '2', label: 'Developing', desc: 'Partially meets criteria' },
            { score: '1', label: 'Below', desc: 'Does not meet criteria' }
          ].map(item => (
            <div key={item.score} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: item.score >= 3 ? 'rgba(0, 212, 170, 0.2)' : 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: '600',
                color: item.score >= 3 ? '#00D4AA' : 'rgba(255,255,255,0.5)'
              }}>
                {item.score}
              </div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{item.label}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginLeft: '8px' }}>
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// PROFILE VIEW
// ============================================================
const ProfileView = ({ userProgress, selectedRole, roles }) => {
  const role = roles.find(r => r.id === selectedRole);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Profile Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(123, 104, 238, 0.1) 100%)',
        borderRadius: '24px',
        padding: '24px',
        textAlign: 'center',
        border: '1px solid rgba(0, 212, 170, 0.2)'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00D4AA 0%, #7B68EE 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px auto',
          fontSize: '32px',
          fontWeight: '700',
          boxShadow: '0 8px 32px rgba(0, 212, 170, 0.3)'
        }}>
          {userProgress.level}
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '0 0 4px 0' }}>
          Level {userProgress.level} Achiever
        </h2>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
          {role ? role.name : 'Select a role to begin'}
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#FFD700' }}>
            {userProgress.totalXP}
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
            Total XP Earned
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#FF6B35' }}>
            {userProgress.streakDays}
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
            Day Streak 🔥
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#00D4AA' }}>
            {userProgress.completedModules.length}
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
            Modules Complete
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#7B68EE' }}>
            {Object.keys(userProgress.assessmentScores).length}
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
            Assessments Done
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 16px 0' }}>
          Achievements
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { icon: '🚀', name: 'Quick Start', earned: true },
            { icon: '🔥', name: '7-Day Streak', earned: true },
            { icon: '📊', name: 'Data Driven', earned: true },
            { icon: '🎯', name: 'First Assessment', earned: userProgress.assessmentScores && Object.keys(userProgress.assessmentScores).length > 0 },
            { icon: '🏆', name: 'Top Performer', earned: false },
            { icon: '🌟', name: 'All Modules', earned: false }
          ].map(badge => (
            <div
              key={badge.name}
              style={{
                width: '80px',
                textAlign: 'center',
                opacity: badge.earned ? 1 : 0.3
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: badge.earned ? 'rgba(255,215,0,0.15)' : 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px auto',
                fontSize: '24px'
              }}>
                {badge.icon}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                {badge.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* XP to Next Level */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '16px',
        padding: '20px',
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Progress to Level {userProgress.level + 1}</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#FFD700' }}>
            {userProgress.totalXP % 500}/500 XP
          </span>
        </div>
        <div style={{
          height: '10px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${(userProgress.totalXP % 500) / 500 * 100}%`,
            background: 'linear-gradient(90deg, #FFD700 0%, #FF6B35 100%)',
            borderRadius: '5px'
          }} />
        </div>
      </div>
    </div>
  );
};

// ============================================================
// CULTURE VIEW
// ============================================================
const CultureView = ({ userProgress, setUserProgress }) => {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = CULTURE_MODULES.map(module => ({
    title: module.title,
    content: module.content.overview || 'Learn about Capital One culture',
    exercise: module.exercise?.title || 'Reflect on how this applies to your role',
    tip: 'Practice these principles in your daily work',
    avoid: 'Avoid falling back on old patterns without considering the new approach'
  }));

  const currentLesson = lessons[activeLesson];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
          Cultural Acclimation
        </h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Daily micro-learning • 10-15 minutes
        </p>
      </div>

      {/* Progress indicator */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {lessons.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setActiveLesson(idx)}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: idx <= activeLesson ? '#00D4AA' : 'rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Lesson Card */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(123, 104, 238, 0.08) 100%)',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid rgba(0, 212, 170, 0.15)'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 12px',
          background: 'rgba(0, 212, 170, 0.2)',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#00D4AA',
          marginBottom: '16px'
        }}>
          Lesson {activeLesson + 1} of {lessons.length}
        </div>
        
        <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '0 0 16px 0' }}>
          {currentLesson.title}
        </h2>
        
        <p style={{ 
          fontSize: '15px', 
          lineHeight: '1.7', 
          color: 'rgba(255,255,255,0.8)',
          margin: '0 0 24px 0'
        }}>
          {currentLesson.content}
        </p>

        {/* Exercise */}
        <div style={{
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Brain size={16} color="#7B68EE" />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#7B68EE' }}>Reflection Exercise</span>
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            {currentLesson.exercise}
          </div>
        </div>
      </div>

      {/* Language Tips */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{
          background: 'rgba(0, 212, 170, 0.08)',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid rgba(0, 212, 170, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <CheckCircle size={16} color="#00D4AA" />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#00D4AA' }}>Phrases That Work</span>
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            {currentLesson.tip}
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 71, 87, 0.08)',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid rgba(255, 71, 87, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <X size={16} color="#FF4757" />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#FF4757' }}>Phrases to Avoid</span>
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            {currentLesson.avoid}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: '12px' }}>
        {activeLesson > 0 && (
          <button
            onClick={() => setActiveLesson(activeLesson - 1)}
            style={{
              flex: 1,
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'transparent',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Previous
          </button>
        )}
        <button
          onClick={() => {
            if (activeLesson < lessons.length - 1) {
              setActiveLesson(activeLesson + 1);
            } else {
              setUserProgress(prev => ({
                ...prev,
                completedModules: [...prev.completedModules, 'culture-day-1'],
                totalXP: prev.totalXP + 50
              }));
            }
          }}
          style={{
            flex: 2,
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #00D4AA 0%, #00A080 100%)',
            color: '#fff',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          {activeLesson < lessons.length - 1 ? 'Continue' : 'Complete Lesson (+50 XP)'}
        </button>
      </div>
    </div>
  );
};

// ============================================================
// GLOSSARY VIEW
// ============================================================
const GlossaryView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
          Glossary
        </h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Key terms and concepts at Capital One
        </p>
      </div>

      {/* Search */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <BookOpen size={18} color="rgba(255,255,255,0.4)" />
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '15px',
            flex: 1,
            outline: 'none'
          }}
        />
      </div>

      {/* Terms List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredTerms.map(item => (
          <div
            key={item.term}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '14px',
              padding: '18px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#00D4AA'
            }}>
              {item.term}
            </div>
            <div style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.7)'
            }}>
              {item.definition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// HELPER COMPONENTS
// ============================================================

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div style={{
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '16px',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.06)'
  }}>
    <Icon size={20} color={color} style={{ marginBottom: '8px' }} />
    <div style={{ fontSize: '20px', fontWeight: '700', color }}>{value}</div>
    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{label}</div>
  </div>
);

const RoleCard = ({ role, selected, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: selected 
        ? `linear-gradient(135deg, ${role.color}20 0%, ${role.color}10 100%)`
        : 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      padding: '18px',
      border: selected ? `2px solid ${role.color}` : '1px solid rgba(255,255,255,0.06)',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '14px',
        background: `${role.color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <role.icon size={24} color={role.color} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '16px', fontWeight: '600' }}>{role.name}</div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
          {role.modules} modules
        </div>
      </div>
      {selected ? (
        <CheckCircle size={24} color={role.color} />
      ) : (
        <ChevronRight size={20} color="rgba(255,255,255,0.3)" />
      )}
    </div>
  </div>
);

const ActionCard = ({ icon: Icon, title, subtitle, color, onClick, badge }) => (
  <div
    onClick={onClick}
    style={{
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      padding: '18px',
      border: '1px solid rgba(255,255,255,0.06)',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '14px',
        background: `${color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon size={24} color={color} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600' }}>{title}</span>
          {badge && (
            <span style={{
              fontSize: '10px',
              fontWeight: '700',
              padding: '3px 8px',
              borderRadius: '6px',
              background: color,
              color: '#fff'
            }}>
              {badge}
            </span>
          )}
        </div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{subtitle}</div>
      </div>
      <ArrowRight size={18} color="rgba(255,255,255,0.3)" />
    </div>
  </div>
);

const ModuleCard = ({ module, index, onComplete }) => (
  <div style={{
    background: module.completed 
      ? 'rgba(0, 212, 170, 0.08)'
      : module.locked 
        ? 'rgba(255,255,255,0.02)' 
        : 'rgba(255,255,255,0.03)',
    borderRadius: '14px',
    padding: '18px',
    border: module.completed 
      ? '1px solid rgba(0, 212, 170, 0.2)'
      : '1px solid rgba(255,255,255,0.06)',
    opacity: module.locked ? 0.5 : 1,
    cursor: module.locked ? 'not-allowed' : 'pointer'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: module.completed 
          ? 'rgba(0, 212, 170, 0.2)'
          : 'rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: '600',
        color: module.completed ? '#00D4AA' : 'rgba(255,255,255,0.4)'
      }}>
        {module.completed ? <CheckCircle size={20} /> : index + 1}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>
          {module.title}
        </div>
        <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
          <span><Clock size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />{module.duration}</span>
          <span><Sparkles size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />+{module.xp} XP</span>
        </div>
      </div>
      {module.locked ? (
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>🔒</div>
      ) : !module.completed && (
        <ChevronRight size={18} color="rgba(255,255,255,0.3)" />
      )}
    </div>
  </div>
);

const JourneyMap = ({ phase }) => (
  <div style={{
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '20px',
    padding: '24px',
    border: '1px solid rgba(255,255,255,0.06)'
  }}>
    <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 20px 0' }}>
      Your 90-Day Journey
    </h3>
    <div style={{ position: 'relative' }}>
      {/* Connection line */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '24px',
        right: '24px',
        height: '2px',
        background: 'rgba(255,255,255,0.1)'
      }}>
        <div style={{
          height: '100%',
          width: `${(phase - 1) * 50}%`,
          background: 'linear-gradient(90deg, #00D4AA 0%, #7B68EE 100%)',
          transition: 'width 0.5s ease'
        }} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        {[
          { num: 1, name: 'Discovery', weeks: '1-2' },
          { num: 2, name: 'Immersive', weeks: '3-8' },
          { num: 3, name: 'Support', weeks: 'Ongoing' }
        ].map(p => (
          <div key={p.num} style={{ textAlign: 'center', width: '80px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: phase >= p.num 
                ? 'linear-gradient(135deg, #00D4AA 0%, #7B68EE 100%)'
                : 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px auto',
              fontSize: '16px',
              fontWeight: '700',
              boxShadow: phase >= p.num ? '0 4px 20px rgba(0, 212, 170, 0.3)' : 'none'
            }}>
              {phase > p.num ? <CheckCircle size={22} /> : p.num}
            </div>
            <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>{p.name}</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>Weeks {p.weeks}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const QuickLinks = ({ setCurrentView }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', fontWeight: '600' }}>
      QUICK ACCESS
    </div>
    {[
      { label: 'Glossary', icon: BookOpen, view: 'glossary' },
      { label: 'Cultural Acclimation', icon: Users, view: 'culture' },
      { label: 'Daily Learning', icon: Lightbulb, view: 'learn' },
      { label: 'Mock Interview', icon: Mic, view: 'interview' }
    ].map(item => (
      <button
        key={item.view}
        onClick={() => setCurrentView(item.view)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '10px',
          color: '#fff',
          fontSize: '14px',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <item.icon size={18} color="#00D4AA" />
        {item.label}
      </button>
    ))}
  </div>
);

const FeedbackItem = ({ type, title, description }) => (
  <div style={{
    background: type === 'strength' ? 'rgba(0, 212, 170, 0.08)' : 'rgba(255, 215, 0, 0.08)',
    borderRadius: '12px',
    padding: '16px',
    border: `1px solid ${type === 'strength' ? 'rgba(0, 212, 170, 0.15)' : 'rgba(255, 215, 0, 0.15)'}`
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
      {type === 'strength' ? (
        <CheckCircle size={16} color="#00D4AA" />
      ) : (
        <TrendingUp size={16} color="#FFD700" />
      )}
      <span style={{ 
        fontSize: '14px', 
        fontWeight: '600',
        color: type === 'strength' ? '#00D4AA' : '#FFD700'
      }}>
        {title}
      </span>
    </div>
    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', paddingLeft: '24px' }}>
      {description}
    </div>
  </div>
);

export default TransitionPlatform;
