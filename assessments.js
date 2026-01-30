// ============================================================
// ASSESSMENT QUESTIONS
// Legitimate evaluation content for transition preparation
// ============================================================

export const ASSESSMENT_QUESTIONS = {
  'skills-gap': [
    {
      question: 'When gathering requirements for a new feature, your first step should be:',
      options: [
        'Meet with stakeholders to understand what they want built',
        'Analyze customer data to understand the problem and size the opportunity',
        'Review what competitors have built in this space',
        'Create a technical design document'
      ],
      correct: 1,
      explanation: 'Capital One\'s Customer Back and Data Obsession principles mean starting with customer data to validate the problem exists and understand its scope, before designing solutions or gathering stakeholder requirements.'
    },
    {
      question: 'A user story at Capital One should include:',
      options: [
        'Detailed technical implementation specifications',
        'A hypothesis and measurable success criteria',
        'Sign-off from all stakeholders before development',
        'A complete test plan document'
      ],
      correct: 1,
      explanation: 'COFEE methodology requires hypothesis-driven development with clear success metrics. Stories should define what we believe, how we\'ll test it, and what success looks like—not detailed specs or approvals.'
    },
    {
      question: 'Your team disagrees about whether to build a feature in-house or use a vendor. According to D4, you should:',
      options: [
        'Escalate to leadership for a decision',
        'Vote as a team and go with majority',
        'Discuss data and perspectives, debate alternatives, then make a clear decision with an owner',
        'Let the most senior engineer decide'
      ],
      correct: 2,
      explanation: 'D4 (Discuss, Debate, Decide, Do) is Capital One\'s framework for collaborative, data-informed decision making. It emphasizes thorough discussion and debate before a clear decision with accountability.'
    },
    {
      question: 'You notice that a recently launched feature isn\'t meeting its success metrics. What should you do?',
      options: [
        'Wait for the quarterly review to discuss',
        'Immediately roll back the feature',
        'Analyze the data to understand why, share learnings, and iterate',
        'Assign responsibility to identify what went wrong'
      ],
      correct: 2,
      explanation: 'Data Obsession and continuous learning mean analyzing results to understand the "why," sharing learnings across the team, and iterating based on evidence—not waiting, blaming, or overreacting.'
    },
    {
      question: 'A VP requests a feature that your data suggests customers don\'t need. You should:',
      options: [
        'Build it because senior leadership knows best',
        'Refuse to build it without explanation',
        'Share the data, discuss the VP\'s perspective, and find the underlying customer need',
        'Escalate to another VP for a tiebreaker'
      ],
      correct: 2,
      explanation: 'Customer Back means validating requests against customer needs. D4 means discussing perspectives openly. The goal is to understand what problem the VP is trying to solve and find the best solution together.'
    },
    {
      question: 'What is the primary purpose of "Two-In-A-Box" leadership at Capital One?',
      options: [
        'To slow down decision making with more approvals',
        'To balance growth/business objectives with risk management',
        'To have a backup leader when one is unavailable',
        'To reduce headcount by combining roles'
      ],
      correct: 1,
      explanation: 'Two-In-A-Box pairs business and risk perspectives to ensure balanced decisions. Neither perspective dominates—growth and risk are both important.'
    },
    {
      question: 'In Capital One\'s approach to "Smart Risk," a new fraud model should be deployed by:',
      options: [
        'Waiting 6 months for thorough testing before any production use',
        'Deploying to 100% of traffic immediately to get results faster',
        'Starting in shadow mode, comparing to current model, then gradually increasing decision weight',
        'Only deploying after regulatory pre-approval'
      ],
      correct: 2,
      explanation: 'Smart Risk means taking calculated risks with guardrails—shadow mode, gradual rollout, monitoring, and defined rollback criteria. Neither reckless nor overly cautious.'
    },
    {
      question: 'The "Customer Back" approach differs from "Competitor-First" because:',
      options: [
        'It\'s faster to implement',
        'It starts with actual customer needs, not assumptions about what competitors know',
        'It requires less research',
        'Competitors are usually wrong'
      ],
      correct: 1,
      explanation: 'Customer Back validates that features solve real customer problems. Competitor-First assumes competitors have figured out what customers want, which may not be true.'
    },
    {
      question: 'What is the significance of "leading indicators" in Capital One\'s Data Obsession?',
      options: [
        'They are the most important metrics',
        'They predict outcomes before they happen, allowing proactive response',
        'They are easier to measure than lagging indicators',
        'Leadership prefers them in presentations'
      ],
      correct: 1,
      explanation: 'Leading indicators predict future outcomes, enabling proactive intervention. By the time you see lagging indicators (like churn), it\'s too late to act.'
    },
    {
      question: 'During the "Do" phase of D4, a team member who disagreed with the decision should:',
      options: [
        'Continue to voice their disagreement in team meetings',
        'Execute with full commitment while flagging issues if they arise',
        'Work on their preferred alternative in parallel',
        'Document their disagreement for the record'
      ],
      correct: 1,
      explanation: 'D4\'s "Do" phase requires full commitment after a decision is made. Disagreement is healthy in Discuss/Debate, but once decided, everyone must commit. Raise new data, not old arguments.'
    },
    {
      question: 'How does COFEE differ from traditional Agile Scrum?',
      options: [
        'COFEE has longer sprints',
        'COFEE requires less documentation',
        'COFEE emphasizes measurable customer outcomes and hypothesis-driven development',
        'COFEE doesn\'t use retrospectives'
      ],
      correct: 2,
      explanation: 'COFEE (Customer Outcome Focused Engineering Excellence) builds on Agile with specific emphasis on outcomes, hypotheses, and data—not just velocity or story points.'
    },
    {
      question: 'When presenting a business case at Capital One, "Return on Data" means:',
      options: [
        'The cost of storing data',
        'How much data you\'ll collect',
        'The business value generated from data investments and data-driven decisions',
        'Data privacy compliance metrics'
      ],
      correct: 2,
      explanation: 'Return on Data demonstrates the business value of data investments—better decisions, faster insights, reduced costs—a key part of Money Culture.'
    },
    {
      question: 'Capital One\'s "inner-source" development model means:',
      options: [
        'All code is publicly open source',
        'Teams share and contribute to each other\'s codebases within the company',
        'Only internal developers can view the code',
        'Code is kept within individual teams'
      ],
      correct: 1,
      explanation: 'Inner-source applies open-source principles internally—teams can contribute to and use each other\'s codebases, promoting reuse, collaboration, and code quality.'
    },
    {
      question: 'When a sprint review at Capital One includes "metric dashboards," the purpose is to:',
      options: [
        'Show how much work was completed (velocity)',
        'Demonstrate actual customer outcomes compared to expected outcomes',
        'Impress stakeholders with charts',
        'Track team performance for evaluations'
      ],
      correct: 1,
      explanation: 'Sprint reviews focus on outcomes, not outputs. Did the feature achieve what we hypothesized? Metrics show impact on customers, not just features shipped.'
    },
    {
      question: 'A "Foundry Sprint" at Capital One is:',
      options: [
        'A regular 2-week development sprint',
        'A 12-week innovation cycle for rapid experimentation',
        'A sprint focused on fixing technical debt',
        'An onboarding sprint for new employees'
      ],
      correct: 1,
      explanation: 'Foundry Sprints are 12-week dedicated innovation cycles for testing new ideas with clear hypotheses, separate from regular product development.'
    }
  ],

  'cultural-fit': [
    {
      question: 'In a meeting, you notice a junior team member has data that contradicts the direction a senior leader is proposing. You should:',
      options: [
        'Keep quiet to avoid embarrassing the leader',
        'Encourage the junior member to share their data, as data-driven decisions are valued regardless of seniority',
        'Talk to the leader privately after the meeting',
        'Wait for someone more senior to raise the point'
      ],
      correct: 1,
      explanation: 'Data Obsession and D4 value data over hierarchy. Creating psychological safety for sharing data—especially when it challenges assumptions—is essential to Capital One culture.'
    },
    {
      question: 'You strongly disagree with a decision your team has made using D4. After the "Decide" phase, the right approach is to:',
      options: [
        'Voice your disagreement and refuse to participate',
        'Commit fully to execution while monitoring for issues, revisiting only if new data emerges',
        'Work around the decision in your own work',
        'Immediately escalate to leadership'
      ],
      correct: 1,
      explanation: 'D4\'s "Do" phase requires full commitment. Disagreement is healthy in Discuss/Debate, but commitment is required after Decide. Bring new data to revisit, not old arguments.'
    },
    {
      question: '"At Discover, we always did it this way" is problematic at Capital One because:',
      options: [
        'Discover\'s methods were inferior',
        'It focuses on past practices rather than customer outcomes and data',
        'Capital One doesn\'t value experience from other companies',
        'It might offend Capital One employees'
      ],
      correct: 1,
      explanation: 'Customer Back and Data Obsession focus on outcomes and evidence, not legacy practices. Your experience is valued—frame it around outcomes achieved, not methods used.'
    },
    {
      question: 'A colleague says "Let\'s just build it and see what happens." Your response should be:',
      options: [
        'Agree, since moving fast is important',
        'Refuse to work on undefined projects',
        'Suggest defining a hypothesis and success metrics so we know what we\'re trying to learn',
        'Escalate the lack of process'
      ],
      correct: 2,
      explanation: 'Hypothesis-driven development requires defining what we believe, how we\'ll test it, and what success looks like. "See what happens" isn\'t a learning strategy.'
    },
    {
      question: 'You\'ve been asked to make a decision quickly, but you don\'t have perfect data. According to Capital One culture:',
      options: [
        'Wait until you have complete data—decisions without full information are reckless',
        'Make your best decision with available data, set up monitoring, and be ready to iterate',
        'Ask leadership to decide for you',
        'Go with your gut without documenting the rationale'
      ],
      correct: 1,
      explanation: 'Smart Risk and Data Obsession balance data-informed decisions with speed. Perfect data doesn\'t exist. Decide with available information, monitor results, iterate as you learn.'
    },
    {
      question: 'How should you handle a meeting where a decision needs to be made but opinions are divided?',
      options: [
        'Vote and go with majority',
        'Let the most senior person decide',
        'Continue meeting indefinitely until there\'s consensus',
        'Use D4: ensure all data is shared, debate perspectives, make a clear decision with an owner, then commit'
      ],
      correct: 3,
      explanation: 'D4 doesn\'t require consensus, but it requires thorough discussion, debate, and then a clear decision with ownership and commitment from all.'
    },
    {
      question: 'Your team shipped a feature that didn\'t meet its success metrics. The first response should be:',
      options: [
        'Identify who is responsible for the failure',
        'Conduct a blameless analysis of what we learned and how to iterate',
        'Remove the feature immediately',
        'Wait to see if metrics improve over time'
      ],
      correct: 1,
      explanation: 'Blameless post-mortems and continuous learning are core to Capital One culture. Focus on systems and learnings, not individual blame.'
    },
    {
      question: 'A stakeholder is pushing for a feature because "our competitors have it." Your response should be:',
      options: [
        'Agree to build it to keep the stakeholder happy',
        'Ask what customer problem it solves and what data shows customers need it',
        'Refuse because it\'s not customer-back',
        'Build a cheaper version to hedge'
      ],
      correct: 1,
      explanation: 'Customer Back means validating that features solve real customer problems. Competitor features are inputs to consider, not automatic requirements.'
    },
    {
      question: 'What does "Bring Your A Game" mean at Capital One?',
      options: [
        'Work as many hours as possible',
        'Bring full effort, excellence, and accountability to everything you do',
        'Compete aggressively with colleagues for promotion',
        'Always have perfect answers ready'
      ],
      correct: 1,
      explanation: 'A Game is about effort, excellence, and accountability—not overwork, perfection, or internal competition. It\'s about showing up fully for your team and customers.'
    },
    {
      question: '"Do the Right Thing" at Capital One means:',
      options: [
        'Following all rules exactly without exception',
        'Doing what leadership says',
        'Acting with integrity and considering the impact on customers, associates, and communities',
        'Optimizing for short-term profits'
      ],
      correct: 2,
      explanation: 'Do the Right Thing is about ethical decision-making with consideration for all stakeholders—customers, colleagues, and communities—not just rule-following.'
    },
    {
      question: 'When presenting a proposal, you realize halfway through that the data doesn\'t fully support your recommendation. You should:',
      options: [
        'Continue the presentation and address it later',
        'Acknowledge the gap honestly and suggest next steps to gather better data',
        'Focus only on the parts that support your recommendation',
        'Cancel the meeting and reschedule'
      ],
      correct: 1,
      explanation: 'Honesty and integrity are core values. Data Obsession means following the data, even when inconvenient. Acknowledging limitations builds trust.'
    },
    {
      question: 'A team member is consistently not meeting commitments but has personal challenges. According to Capital One values:',
      options: [
        'Performance is all that matters; they should be placed on a PIP immediately',
        'Personal issues are not the company\'s concern',
        'Have a compassionate conversation, understand the situation, and find ways to support while maintaining standards',
        'Lower expectations indefinitely until their situation improves'
      ],
      correct: 2,
      explanation: 'Capital One values both excellence and humanity. Support colleagues through challenges while maintaining standards—neither ignoring people nor lowering the bar permanently.'
    }
  ],

  'domain-knowledge': [
    {
      question: 'In a card transaction flow, interchange is paid by:',
      options: [
        'The cardholder as a transaction fee',
        'The issuing bank (Capital One) to the network',
        'The acquiring bank (merchant\'s bank) to the issuing bank (Capital One)',
        'The card network to both banks equally'
      ],
      correct: 2,
      explanation: 'Interchange flows from the merchant\'s acquiring bank to the issuing bank (Capital One) as compensation for fraud risk, float, and rewards funding.'
    },
    {
      question: 'The main difference between Capital One and Discover\'s network position is:',
      options: [
        'Discover has more cardholders globally',
        'Capital One partners with Visa/Mastercard networks, while Discover operates its own network',
        'Capital One only issues credit cards, not debit',
        'Discover has higher interchange rates'
      ],
      correct: 1,
      explanation: 'Discover is vertically integrated (network + issuer), while Capital One is an issuer using Visa/Mastercard networks. Different economics and constraints.'
    },
    {
      question: 'FedNow\'s primary advantage over traditional ACH is:',
      options: [
        'Lower cost per transaction',
        'Higher transaction limits',
        'Real-time settlement 24/7/365',
        'Better fraud protection built-in'
      ],
      correct: 2,
      explanation: 'FedNow\'s key differentiator is instant (seconds), 24/7/365 settlement vs. ACH\'s 1-3 business day timeline with business-hours processing.'
    },
    {
      question: 'A key challenge with real-time payments and fraud detection is:',
      options: [
        'Real-time payments cost significantly more to process',
        'There\'s no time for human review; decisions must be made in milliseconds and payments can\'t be recalled',
        'Fraud is actually less common with real-time payments',
        'Real-time payments don\'t work for international transactions'
      ],
      correct: 1,
      explanation: 'Real-time payments are irrevocable. Unlike card transactions that can be disputed, once sent, funds are gone. Fraud decisions must happen in milliseconds.'
    },
    {
      question: 'In Capital One\'s fraud detection, ML models are preferred over pure rules because:',
      options: [
        'ML is cheaper to run and maintain',
        'ML can detect novel patterns and adapt to evolving fraud tactics',
        'ML doesn\'t require monitoring or maintenance',
        'Rules are not allowed in financial services fraud detection'
      ],
      correct: 1,
      explanation: 'ML adapts to new fraud patterns that rules can\'t anticipate. However, Capital One uses both—ML for detection, rules for compliance and known patterns.'
    },
    {
      question: 'Virtual cards in commercial payments are primarily used for:',
      options: [
        'Consumer online shopping',
        'AP automation and one-time supplier payments with enhanced controls',
        'International travel expenses',
        'ATM cash withdrawals'
      ],
      correct: 1,
      explanation: 'Virtual cards are single-use or limited-use numbers primarily for B2B accounts payable automation, offering enhanced controls and automated reconciliation.'
    },
    {
      question: 'SWIFT gpi improves international payments by:',
      options: [
        'Eliminating all correspondent banking fees',
        'Providing end-to-end tracking and faster settlement guarantees',
        'Replacing the correspondent banking system entirely',
        'Only working in major currencies'
      ],
      correct: 1,
      explanation: 'SWIFT gpi adds tracking, fee transparency, and speed guarantees to the existing correspondent banking network—it enhances rather than replaces.'
    },
    {
      question: 'The "3 Lines of Defense" risk model refers to:',
      options: [
        'Physical security, cybersecurity, and fraud prevention',
        'Business ownership of risk, risk management oversight, and internal audit',
        'Fraud detection, fraud prevention, and fraud recovery',
        'Customer authentication, transaction monitoring, and dispute resolution'
      ],
      correct: 1,
      explanation: 'The 3 Lines are: First Line (business owns and manages risk), Second Line (risk management oversees and challenges), Third Line (internal audit provides independent assurance).'
    },
    {
      question: 'Regulation E primarily governs:',
      options: [
        'Credit card interest rate disclosures',
        'Electronic fund transfers and error resolution for debit/bank accounts',
        'Mortgage lending requirements',
        'International payment compliance'
      ],
      correct: 1,
      explanation: 'Reg E covers electronic fund transfers including debit cards, ATMs, and ACH, with specific error resolution rights and liability limits for consumers.'
    },
    {
      question: 'When a fraud model\'s false positive rate increases significantly, the first investigation step should be:',
      options: [
        'Retrain the model immediately with newer data',
        'Check for data quality issues and distribution shifts in input features',
        'Roll back to the previous model version',
        'Reduce the model\'s decision threshold'
      ],
      correct: 1,
      explanation: 'Data quality issues and distribution shifts are common causes of model performance changes. Diagnose the root cause before taking action.'
    },
    {
      question: 'Authorization approval rate is a critical metric because:',
      options: [
        'Regulators require minimum approval rates',
        'Declined legitimate transactions mean lost sales and frustrated customers',
        'It measures fraud prevention effectiveness',
        'It only matters for debit card transactions'
      ],
      correct: 1,
      explanation: 'Every false decline is a lost sale, frustrated customer, and potential churn. The goal is to maximize approval of legitimate transactions while blocking fraud.'
    },
    {
      question: 'ISO 8583 is:',
      options: [
        'A fraud detection standard',
        'The message format standard for card transaction authorization',
        'A compliance regulation for card issuers',
        'A settlement protocol between banks'
      ],
      correct: 1,
      explanation: 'ISO 8583 defines the message format for card authorization requests and responses—the standard language between merchants, acquirers, networks, and issuers.'
    },
    {
      question: 'The Durbin Amendment primarily affects:',
      options: [
        'Credit card interest rates',
        'Debit card interchange fees for banks with >$10B in assets',
        'Fraud liability between issuers and merchants',
        'International transaction fees'
      ],
      correct: 1,
      explanation: 'Durbin caps debit interchange fees for large banks (assets > $10B), significantly impacting revenue for large issuers like Capital One.'
    },
    {
      question: 'A nostro account is:',
      options: [
        'A customer savings account type',
        'Our bank\'s account held at another bank, used in correspondent banking',
        'A fraud investigation holding account',
        'A regulatory reserve account'
      ],
      correct: 1,
      explanation: 'Nostro ("our") accounts are Capital One\'s accounts held at correspondent banks, used for settling international payments. Vostro is the reverse—their account at our bank.'
    },
    {
      question: 'Level 3 data in commercial card transactions includes:',
      options: [
        'Cardholder personal information like SSN',
        'Line-item purchase details like SKU, quantity, and unit price',
        'Card authorization codes and timestamps',
        'Fraud scores and risk assessments'
      ],
      correct: 1,
      explanation: 'Level 3 data provides detailed line-item transaction information, enabling better procurement analytics, reconciliation, and potential interchange qualification benefits.'
    },
    {
      question: 'Model drift in fraud detection refers to:',
      options: [
        'The model being migrated to a new server',
        'Degradation of model performance over time as real-world patterns change',
        'The model making faster decisions over time',
        'Documentation becoming outdated'
      ],
      correct: 1,
      explanation: 'Model drift occurs when production data distribution changes from training data—fraudsters adapt, customer behavior evolves—degrading model performance over time.'
    },
    {
      question: 'Sanctions screening in international payments is required by:',
      options: [
        'Card networks like Visa and Mastercard',
        'OFAC and international sanctions regimes (legal requirement)',
        'Customer preference settings',
        'Internal policy only, not externally required'
      ],
      correct: 1,
      explanation: 'OFAC (Office of Foreign Assets Control) and international bodies require screening against sanctions lists. Failure to comply can result in severe penalties.'
    },
    {
      question: 'The "float" in payment processing refers to:',
      options: [
        'Fraudulent transactions that are later reversed',
        'The time period between transaction and settlement when funds are in transit',
        'Exchange rate fluctuations in international payments',
        'Pending authorization holds on customer accounts'
      ],
      correct: 1,
      explanation: 'Float is the time value of money during the settlement period—merchant gets paid before cardholder pays issuer. Issuers are compensated for this via interchange.'
    },
    {
      question: 'A merchant category code (MCC) is used for:',
      options: [
        'Identifying the cardholder for fraud purposes',
        'Classifying the merchant type for interchange rates, spend controls, and reporting',
        'Routing transactions to the correct card network',
        'Calculating tax on purchases'
      ],
      correct: 1,
      explanation: 'MCC codes classify merchants (e.g., restaurant, gas station, grocery), affecting interchange rates, corporate card spend controls, and expense categorization.'
    },
    {
      question: 'In Capital One\'s approach, a fraud model in "shadow mode" means:',
      options: [
        'The model is hidden from regulators during testing',
        'The model scores transactions but doesn\'t make blocking decisions—used to evaluate real-world performance',
        'The model only runs during nighttime hours',
        'The model is scheduled for deprecation'
      ],
      correct: 1,
      explanation: 'Shadow mode lets you evaluate model performance on real production traffic without impacting customers—scores are logged but not acted upon until validated.'
    }
  ],

  'methodology': [
    {
      question: 'A COFEE user story must include:',
      options: [
        'Technical implementation details and database schemas',
        'A hypothesis about customer impact and measurable success criteria',
        'Approval signatures from all stakeholders before work begins',
        'Estimated story points and sprint assignment'
      ],
      correct: 1,
      explanation: 'COFEE emphasizes hypothesis-driven development with clear, measurable outcomes—"We believe X will result in Y, measured by Z"—not detailed specs or approvals.'
    },
    {
      question: 'The difference between COFEE sprint reviews and traditional Scrum is:',
      options: [
        'COFEE reviews are longer and more formal',
        'COFEE reviews include metric dashboards showing actual vs. expected outcomes',
        'COFEE doesn\'t have sprint reviews, only retrospectives',
        'COFEE reviews only include developers, not stakeholders'
      ],
      correct: 1,
      explanation: 'COFEE sprint reviews focus on outcomes (did we achieve our hypothesis?) not just outputs (what did we ship?). Metrics show customer impact, not just feature delivery.'
    },
    {
      question: 'Before a story can be sized in COFEE backlog refinement:',
      options: [
        'Technical design must be fully complete',
        'The story must have a hypothesis and success metrics defined',
        'All stakeholders must approve the requirements',
        'QA must review and approve the acceptance criteria'
      ],
      correct: 1,
      explanation: 'Stories without hypotheses and success metrics can\'t be properly evaluated, prioritized, or validated. "How will we know this worked?" is required before estimation.'
    },
    {
      question: 'COFEE\'s "Customer Outcomes First" principle means:',
      options: [
        'The customer is always right about what to build',
        'Every feature starts with a measurable customer outcome, not a feature request',
        'Customer support tickets are the highest priority',
        'All features should be customer-facing, not internal'
      ],
      correct: 1,
      explanation: 'Outcomes First reframes work around customer impact—"What problem are we solving and how will we measure it?"—not internal requests or feature lists.'
    },
    {
      question: 'When COFEE acceptance criteria include "P95 response time < 500ms," this means:',
      options: [
        'Average response time must be under 500ms',
        '95% of requests must complete in under 500ms',
        'The fastest 95% of requests are measured',
        'There\'s a 95% confidence interval of being under 500ms'
      ],
      correct: 1,
      explanation: 'P95 (95th percentile) means 95% of requests meet the threshold. This accounts for normal variation while catching problematic tail latency.'
    },
    {
      question: 'A traditional BRD (Business Requirements Document) maps to what COFEE artifact?',
      options: [
        'Technical Design Document',
        'Outcome Hypothesis Canvas',
        'Sprint backlog',
        'Release notes'
      ],
      correct: 1,
      explanation: 'The Outcome Hypothesis Canvas replaces BRDs, capturing the customer problem, hypothesis about the solution, success metrics, and learning goals—not detailed requirements.'
    },
    {
      question: 'COFEE\'s approach to "Continuous Learning" requires:',
      options: [
        'Annual training programs for all team members',
        'Retrospectives that include "What did the data tell us?" analysis',
        'Individual study time allocated each sprint',
        'Certification exams for team members'
      ],
      correct: 1,
      explanation: 'Continuous Learning is built into ceremonies through data review and outcome analysis—not separate training programs.'
    },
    {
      question: 'In COFEE, a feature\'s success should be evaluated:',
      options: [
        'When the project officially closes',
        'Continuously using leading indicators and defined success metrics',
        'During annual performance reviews',
        'Only if there are customer complaints'
      ],
      correct: 1,
      explanation: 'COFEE tracks leading indicators continuously during and after launch, not just lagging measures at project end. "Are we on track?" is an ongoing question.'
    },
    {
      question: 'The "analytics spec" required before shipping a feature includes:',
      options: [
        'Marketing analytics and campaign tracking only',
        'Events to track, dashboards to create, and alerts to configure',
        'Executive reporting requirements',
        'Cost and budget analytics'
      ],
      correct: 1,
      explanation: 'Every feature ships with instrumentation defined—what events to log, what dashboards to create, what alerts to set up—so outcomes can be measured.'
    },
    {
      question: 'COFEE\'s approach to stakeholder requests is:',
      options: [
        'Build whatever stakeholders ask for—they know the business',
        'Reject all stakeholder requests as not customer-back',
        'Understand the underlying customer need and validate with data',
        'Escalate to leadership for prioritization'
      ],
      correct: 2,
      explanation: 'Stakeholder requests are inputs to understand, not orders to execute. The goal is to find the underlying customer need and validate that the proposed solution addresses it.'
    }
  ]
};

export const INTERVIEW_CONTENT = {
  behavioral: {
    title: 'Behavioral Round',
    description: 'Practice STAR method responses using Capital One Leadership Principles',
    questions: [
      {
        question: 'Tell me about a time you used data to make a decision that others initially disagreed with.',
        principle: 'Data Obsession',
        starTips: {
          situation: 'Set the context—what was the decision and what was the initial disagreement?',
          task: 'What was your role and what did you need to accomplish?',
          action: 'How did you gather and present data? How did you influence others?',
          result: 'What was the outcome? Include specific metrics and what you learned.'
        },
        goodSignals: ['Specific data points and analysis', 'Willingness to challenge conventional wisdom respectfully', 'Quantified outcome with metrics', 'Changed minds through evidence, not authority'],
        redFlags: ['Vague about what data was used', 'Decision was made then data was cherry-picked to support it', 'No measurable outcome', 'Comes across as dismissive of others\' perspectives']
      },
      {
        question: 'Describe a time when you had to make a decision with incomplete information. How did you approach it?',
        principle: 'Smart Risk',
        starTips: {
          situation: 'What was the decision and what information was missing?',
          task: 'What was at stake? Why couldn\'t you wait for more information?',
          action: 'How did you assess risk? What guardrails did you put in place?',
          result: 'What happened? What did you learn? Would you do it differently?'
        },
        goodSignals: ['Calculated risk assessment with specific factors', 'Mitigation strategies and contingency plans', 'Willingness to iterate based on results', 'Learning orientation regardless of outcome'],
        redFlags: ['Reckless decision without guardrails', 'Waited too long and missed opportunity', 'No learning from the experience', 'Blamed others when things went wrong']
      },
      {
        question: 'Tell me about a time you challenged an idea from someone more senior than you.',
        principle: 'Do the Right Thing / D4',
        starTips: {
          situation: 'What was the idea and why did you disagree?',
          task: 'What was at stake if the idea went forward unchanged?',
          action: 'How did you approach the conversation? What evidence did you present?',
          result: 'What was the outcome for the decision and the relationship?'
        },
        goodSignals: ['Respectful but direct challenge', 'Data-backed disagreement', 'Focused on outcomes not ego', 'Committed fully after decision was made'],
        redFlags: ['Disrespectful or aggressive approach', 'Challenged without evidence', 'Continued to resist after decision was made', 'Damaged the relationship unnecessarily']
      },
      {
        question: 'Describe a project or feature you shipped that didn\'t meet its goals. What happened and what did you learn?',
        principle: 'Continuous Learning',
        starTips: {
          situation: 'What was the project and what were the original goals?',
          task: 'What was your role and responsibility?',
          action: 'How did you identify the shortfall? What analysis did you do?',
          result: 'What specifically did you learn? How has it changed your approach?'
        },
        goodSignals: ['Takes ownership without excessive self-blame', 'Specific about what went wrong', 'Clear learnings that were applied later', 'Growth mindset about failure'],
        redFlags: ['Blames others entirely', 'Vague about what actually failed', 'No specific learnings identified', 'Defensive or unable to discuss failures']
      },
      {
        question: 'Tell me about a time you advocated for the customer when it wasn\'t the easy choice.',
        principle: 'Customer Back',
        starTips: {
          situation: 'What was the situation and what was the easier/popular choice?',
          task: 'What customer need were you trying to protect?',
          action: 'How did you advocate? What evidence and approach did you use?',
          result: 'What was the outcome for customers and for the business?'
        },
        goodSignals: ['Deep customer empathy and understanding', 'Data about customer impact', 'Persistence despite resistance', 'Business case for customer focus, not just empathy'],
        redFlags: ['No real customer insight, just assumptions', 'Just said "no" without proposing alternatives', 'Customer focus without business consideration', 'Came across as preachy or superior']
      }
    ]
  },
  caseStudy: {
    title: 'Case Study',
    description: 'Work through payment product problems using Customer Back and Data Obsession',
    questions: [
      {
        scenario: 'Reduce debit card fraud by 15% while maintaining the current customer experience (false positive rate and friction).',
        timeAllowed: '25 minutes',
        structure: [
          'Clarify the problem: Current fraud rate, types of fraud, customer experience baseline',
          'Analyze root causes: Where is fraud happening? What patterns exist?',
          'Generate solutions: Consider ML, rules, customer education, product changes',
          'Evaluate tradeoffs: Impact vs. effort vs. risk for each option',
          'Recommend approach: Prioritized, phased plan with success metrics'
        ],
        evaluationCriteria: [
          'Asks clarifying questions before jumping to solutions',
          'Considers customer experience alongside fraud reduction',
          'Uses data-driven reasoning throughout',
          'Proposes testable hypotheses, not just "solutions"',
          'Considers implementation complexity and phasing'
        ],
        sampleFramework: {
          clarify: ['Current fraud rate by type (account takeover, counterfeit, etc.)?', 'Definition of "customer experience" metrics?', 'What solutions have been tried?', 'Timeline and resource constraints?'],
          analyze: ['Fraud distribution by channel, merchant, geography', 'Customer journey analysis—where does fraud originate?', 'Time-of-day and day-of-week patterns'],
          solutions: ['ML model enhancements with new features', 'Real-time behavioral biometrics', 'Network intelligence consortium signals', 'Step-up authentication for high-risk transactions'],
          recommend: ['Prioritize by expected impact and effort', 'Phase 1: Quick wins (rule tuning)', 'Phase 2: ML model improvements', 'Phase 3: New data sources'],
          metrics: ['Primary: Fraud basis points reduction', 'Guardrail: False positive rate unchanged', 'Secondary: Customer satisfaction scores']
        }
      },
      {
        scenario: 'Design a strategy to increase contactless payment adoption from 35% to 60% of in-person transactions over 12 months.',
        timeAllowed: '25 minutes',
        structure: [
          'Understand barriers: Why aren\'t customers using contactless today?',
          'Segment the customer base: Who is/isn\'t using it? Why?',
          'Identify interventions: Education, incentives, UX improvements, card reissue',
          'Define the rollout: Sequencing, pilots, measurement',
          'Set success metrics: Leading and lagging indicators'
        ],
        evaluationCriteria: [
          'Customer Back thinking—starts with customer barriers, not company goals',
          'Data-driven segmentation and targeting',
          'Creative but practical solutions',
          'Clear measurement approach with leading indicators'
        ]
      },
      {
        scenario: 'A major competitor just launched instant merchant funding (merchants receive funds immediately after each transaction). Should Capital One respond? How?',
        timeAllowed: '30 minutes',
        structure: [
          'Assess the threat: What exactly did the competitor launch? What\'s the impact?',
          'Understand the customer need: Do merchants actually want this? What problem does it solve?',
          'Evaluate options: Build, buy, partner, or differentiate differently',
          'Consider risks: Liquidity, fraud, regulatory, operational',
          'Make a recommendation: Clear point of view with rationale'
        ],
        evaluationCriteria: [
          'Doesn\'t assume competitor is right—validates merchant need',
          'Customer Back approach to understanding the real problem',
          'Considers multiple strategic options',
          'Addresses financial and operational risks thoughtfully',
          'Clear recommendation with supporting rationale'
        ]
      }
    ]
  },
  technical: {
    title: 'Technical Deep Dive',
    description: 'Discuss payment networks, fraud systems, and architecture',
    questions: [
      {
        question: 'Walk me through what happens when a customer taps their Capital One card at a coffee shop.',
        expectation: 'Full transaction flow from tap to settlement, including timing and key decisions',
        keyPoints: [
          'Contactless communication (NFC, tokenization)',
          'Terminal to acquirer message construction (ISO 8583)',
          'Network routing (Visa/Mastercard)',
          'Authorization request processing at Capital One',
          'Fraud scoring and decision (milliseconds)',
          'Response path back through the chain',
          'Clearing and settlement timing (T+1, T+2)'
        ]
      },
      {
        question: 'How would you design a system to detect fraud in real-time for instant payments (FedNow)?',
        expectation: 'System design considering latency, accuracy, and reliability',
        keyPoints: [
          'Latency requirements (decision in < 100ms)',
          'Feature engineering pipeline (real-time computation)',
          'Model serving architecture (low-latency inference)',
          'Fallback strategies (what if model times out?)',
          'Monitoring, alerting, and circuit breakers'
        ]
      },
      {
        question: 'Explain how you would approach optimizing interchange revenue for a credit card portfolio.',
        expectation: 'Understanding of interchange mechanics and optimization strategies',
        keyPoints: [
          'Interchange rate factors (card type, merchant category, transaction type)',
          'Card product design implications',
          'Merchant category optimization',
          'Network relationship and negotiation',
          'Regulatory constraints (Durbin for debit)'
        ]
      }
    ]
  },
  cultureFit: {
    title: 'Culture Fit',
    description: 'Demonstrate alignment with Capital One values',
    questions: [
      {
        question: 'What attracted you to Capital One specifically?',
        lookingFor: ['Understanding of tech-first culture', 'Alignment with values (Customer Back, Data Obsession)', 'Genuine interest in financial services and customer impact'],
        avoid: ['Generic answers about "great company" or "good benefits"', 'Purely compensation-focused', 'Doesn\'t know anything about Capital One\'s culture']
      },
      {
        question: 'How do you handle situations where speed and quality are in tension?',
        lookingFor: ['Smart Risk mindset—calculated tradeoffs', 'Use of guardrails (feature flags, monitoring)', 'Customer impact consideration', 'Iterative approach—ship, learn, improve'],
        avoid: ['Always quality over speed no matter what', 'Always speed over quality', 'Black-and-white thinking without nuance']
      },
      {
        question: 'Describe your approach to making decisions when you don\'t have complete information.',
        lookingFor: ['Comfort with ambiguity', 'Risk assessment and mitigation', 'Iterative learning mindset', 'Appropriate escalation when stakes are high'],
        avoid: ['Paralysis—always wait for perfect data', 'Recklessness—decide without any data', 'Always escalate to avoid accountability']
      },
      {
        question: 'How would you handle a disagreement with your manager about a product direction?',
        lookingFor: ['D4 approach—discuss, debate, then commit', 'Data-driven challenge, not opinion-based', 'Respectful disagreement', 'Commitment after decision is made'],
        avoid: ['Avoid all conflict—just agree', 'Aggressive or disrespectful challenge', 'Passive resistance after decision', 'Going around the manager to their boss']
      }
    ]
  }
};
