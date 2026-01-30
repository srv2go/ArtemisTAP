# 🏔️ Bridge the Canyon

## Transition Acceleration Platform

A comprehensive self-paced learning mobile application designed to help Core Network colleagues successfully transition and integrate into Capital One's technology and product ecosystems.

![Platform Preview](https://via.placeholder.com/800x400/0a0a0f/00D4AA?text=Bridge+the+Canyon)

---

## ✨ Features

### 🏠 **Home Dashboard**
- Role-based learning paths (Business Analyst, Software Engineer, Product Owner, Fraud Operations)
- 90-day journey phase tracking
- XP and level progression system
- Streak tracking for daily engagement

### 📚 **Learning Modules**
- **Methodology**: COFEE Framework, Agile 2.0, User Story Excellence
- **Culture**: D4 Decision Framework, Customer Back Thinking, Data Obsession
- **Payments Domain**: Card Networks, Real-Time Payments, FedNow, Fraud ML
- **Tools**: AWS-Native Architecture, Inner-Source Development

### 📊 **Assessments**
- Skills Gap Analysis
- Cultural Alignment evaluation
- Payment Domain knowledge quizzes
- COFEE Methodology verification
- Real-time scoring and feedback

### 🎤 **Interview Preparation**
- Behavioral rounds with STAR method guidance
- Case studies (e.g., "Reduce debit card fraud by 15%")
- Technical deep dives on payment networks
- Culture fit scenarios
- Recording timer and performance feedback

### 🌟 **Cultural Acclimation**
- Daily micro-learning (10-15 min lessons)
- Language guidance: "Phrases That Work" vs "Phrases to Avoid"
- Reflection exercises

### 📖 **Glossary**
- Searchable Capital One terminology
- COFEE, Money Culture, D4, Two-In-A-Box, and more

### 👤 **Profile & Gamification**
- XP system with leveling
- Achievement badges
- Progress tracking

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   cd transition-platform-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
transition-platform-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── TransitionPlatform.jsx    # Main application component
│   ├── data/
│   │   ├── content.js                 # Learning modules, glossary, role content
│   │   └── assessments.js             # Assessment questions, interview content
│   ├── App.jsx                        # App wrapper
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── index.html                         # HTML template
├── package.json                       # Dependencies
├── vite.config.js                     # Vite configuration
└── README.md                          # This file
```

## 📚 Content Coverage

### Learning Modules
- **COFEE Framework Fundamentals** - Full methodology explanation with examples
- **User Story Excellence** - How to write outcome-focused stories
- **Agile Ceremonies** - Capital One-specific ceremony guidance
- **Data-Driven Requirements** - Analysis frameworks and data sources
- **D4 Decision Framework** - Complete phase breakdown with examples
- **Customer Back Thinking** - Step-by-step framework
- **Data Obsession Mindset** - Principles and anti-patterns
- **Smart Risk Philosophy** - Risk assessment framework
- **Two-In-A-Box Leadership** - Model explanation
- **Card Network Fundamentals** - Transaction flow, interchange
- **Real-Time Payments & FedNow** - Instant payment strategies
- **Fraud Detection ML Operations** - Model lifecycle and metrics

### Assessments
- **Skills Gap Analysis** - 15 questions on methodology and culture
- **Cultural Alignment** - 12 questions on values fit
- **Payment Domain** - 20 questions on payments knowledge
- **COFEE Methodology** - 10 questions on framework understanding

### Interview Preparation
- **Behavioral Round** - 5 scenarios with STAR guidance
- **Case Studies** - 3 payment product problems
- **Technical Deep Dive** - Architecture and system design
- **Culture Fit** - Values alignment questions

---

## 🎨 Design System

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Teal Primary | `#00D4AA` | Primary actions, success states |
| Teal Dark | `#00A080` | Gradients, hover states |
| Purple | `#7B68EE` | Secondary actions, assessments |
| Orange | `#FF6B35` | Streaks, warnings |
| Gold | `#FFD700` | XP, achievements |
| Red | `#FF4757` | Errors, recording |
| Background | `#0a0a0f` | Dark mode base |

### Typography
- **Font Family**: Outfit (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

---

## 📱 Mobile-First Design

The platform is designed mobile-first with:
- Touch-friendly tap targets (minimum 44x44px)
- Bottom navigation for thumb-friendly access
- Safe area insets for modern devices
- Smooth animations and transitions
- Gesture support

---

## 🔧 Configuration

### Vite Configuration (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### Adding New Modules
Modules are defined in the `LearnView` component. Add new modules to the `modules` object:

```javascript
const modules = {
  methodology: [
    { id: 'new-module', title: 'New Module', duration: '20 min', xp: 100 }
  ]
}
```

---

## 🤝 Based On

This platform implements the specifications from the **Project Artemis - Transition Acceleration Platform v2.1** YAML configuration, designed for the Capital One / Discover integration.

### Key Frameworks Covered
- COFEE Methodology
- D4 Decision Framework (Discuss, Debate, Decide, Do)
- Customer Back Thinking
- Data Obsession / Money Culture
- Smart Risk Philosophy
- 3 Lines of Defense

---

## 📄 License

Internal Use - Integration Material

---

## 🙋 Support

For questions or issues, contact the Global Products Core Network - Integration Office.

---

**Built with ❤️ for Core Network colleagues making the transition.**
