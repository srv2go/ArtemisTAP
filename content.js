// ============================================================
// LEGITIMATE CONTENT DATA
// Based on Project Artemis YAML specifications
// Comprehensive use cases for transition preparation
// ============================================================

export const ROLE_SPECIFIC_CONTENT = {
  ba: {
    name: 'Business Analyst',
    color: '#00D4AA',
    description: 'Transform requirements gathering with COFEE methodology',
    discoverApproach: 'Traditional waterfall-influenced requirements with detailed BRDs, stakeholder sign-offs, and feature-based specifications.',
    capitalOneApproach: 'Lean, data-driven user stories with measurable acceptance criteria, hypothesis-driven development, and continuous validation.',
    keyTransitions: [
      'BRD documents → COFEE Outcome Hypothesis Canvas',
      'Stakeholder sign-offs → Continuous validation with data',
      'Feature-based thinking → Outcome-based thinking',
      'Annual planning cycles → Quarterly OKR alignment',
      'Requirements gathering → Problem discovery with data'
    ],
    dayOneChecklist: [
      'Access Jira and understand COFEE board structure',
      'Review team OKRs and current sprint goals',
      'Identify your product\'s key metrics dashboard',
      'Schedule 1:1 with Product Owner to understand data sources',
      'Review recent user research and customer feedback',
      'Understand the stakeholder landscape and decision rights',
      'Review the analytics spec template for new features'
    ]
  },
  engineer: {
    name: 'Software Engineer',
    color: '#FF6B35',
    description: 'Adapt to AWS-native, inner-source development',
    discoverApproach: 'On-premise infrastructure with traditional deployment cycles, siloed codebases, and quarterly release schedules.',
    capitalOneApproach: 'Cloud-native AWS architecture with CI/CD, inner-source contribution model, and continuous deployment with feature flags.',
    keyTransitions: [
      'On-premise servers → AWS Lambda, ECS, and serverless',
      'Monolithic applications → Microservices architecture',
      'Quarterly releases → Continuous deployment',
      'Siloed codebases → Inner-source contribution model',
      'Manual testing → Automated testing and monitoring',
      'Waterfall security → DevSecOps integration'
    ],
    dayOneChecklist: [
      'Complete AWS access provisioning and MFA setup',
      'Clone team repositories and review inner-source guidelines',
      'Understand the CI/CD pipeline and deployment gates',
      'Review security scanning requirements (SonarQube, Veracode)',
      'Identify on-call rotation and incident response procedures',
      'Set up local development environment with approved tools',
      'Review the team\'s architecture decision records (ADRs)'
    ]
  },
  product: {
    name: 'Product Owner',
    color: '#7B68EE',
    description: 'Lead with outcomes, not outputs',
    discoverApproach: 'Feature roadmaps driven by competitive analysis, stakeholder requests, and annual planning cycles.',
    capitalOneApproach: 'Outcome-focused roadmaps driven by customer data, OKRs, and continuous experimentation with rapid iteration.',
    keyTransitions: [
      'Feature lists → Measurable outcomes and hypotheses',
      'Competitive parity → Customer-back innovation',
      'Stakeholder requests → Data-validated priorities',
      'Project timelines → Learning cycles and experiments',
      'Launch and move on → Measure, learn, iterate'
    ],
    dayOneChecklist: [
      'Review current OKRs and key results metrics',
      'Understand the customer segmentation and personas',
      'Access analytics dashboards and data sources',
      'Map stakeholder landscape and decision rights (Two-In-A-Box)',
      'Identify current experiments and their hypotheses',
      'Review the product\'s success metrics and health dashboard',
      'Understand the roadmap planning and prioritization process'
    ]
  },
  fraud: {
    name: 'Fraud Operations',
    color: '#FF4757',
    description: 'Master ML-driven fraud detection at scale',
    discoverApproach: 'Rules-based fraud detection with manual review queues, batch processing, and threshold-based alerts.',
    capitalOneApproach: 'ML-first detection with real-time scoring, adaptive rules, AI-assisted investigation, and anomaly detection.',
    keyTransitions: [
      'Static rules → Machine learning models',
      'Batch processing → Real-time decisioning',
      'Manual case review → AI-assisted investigation',
      'Threshold-based alerts → Anomaly detection',
      'Reactive fraud response → Predictive prevention'
    ],
    dayOneChecklist: [
      'Understand the ML model pipeline and feature engineering',
      'Review current fraud KPIs and false positive rates',
      'Access the fraud investigation platform',
      'Learn the model monitoring and drift detection process',
      'Understand regulatory requirements (Reg E, chargebacks)',
      'Review the escalation procedures for high-risk cases',
      'Understand the champion-challenger testing framework'
    ]
  }
};

export const METHODOLOGY_MODULES = [
  {
    id: 'cofee-fundamentals',
    title: 'COFEE Framework Fundamentals',
    duration: '25 min',
    xp: 100,
    content: {
      overview: 'COFEE (Customer Outcome Focused Engineering Excellence) is Capital One\'s proprietary Agile methodology that combines lean principles with data-driven decision making. Unlike traditional Agile which focuses on velocity and story points, COFEE emphasizes measurable customer outcomes and hypothesis-driven development.',
      keyPrinciples: [
        {
          name: 'Customer Outcomes First',
          description: 'Every feature starts with a measurable customer outcome, not a feature request. We ask "What customer problem are we solving?" before "What should we build?"',
          example: 'Instead of "Add Apple Pay support," we frame it as "Reduce checkout friction by 40% for mobile users, measured by checkout completion rate and time-to-purchase."'
        },
        {
          name: 'Hypothesis-Driven Development',
          description: 'Features are experiments. We state what we believe, how we\'ll test it, and what success looks like before writing code.',
          example: 'We believe that showing real-time fraud alerts will reduce customer service calls by 25%. We\'ll A/B test with 10% of users for 2 weeks, measuring call volume and customer satisfaction.'
        },
        {
          name: 'Continuous Learning',
          description: 'Every sprint ends with data review. What did we learn? What do we do differently? Failures are learning opportunities, not blame assignments.',
          example: 'Sprint retrospectives include metric reviews alongside process improvements. We track hypothesis validation rate as a team health metric.'
        },
        {
          name: 'Data-Informed Decisions',
          description: 'Intuition is valuable but must be validated with data. We instrument everything and make decisions based on evidence.',
          example: 'Before building a feature requested by a stakeholder, we analyze customer data to validate the problem exists and size the opportunity.'
        }
      ],
      artifacts: [
        { discover: 'Business Requirements Document (BRD)', capitalOne: 'Outcome Hypothesis Canvas' },
        { discover: 'Functional Specification', capitalOne: 'User Story with Data Acceptance Criteria' },
        { discover: 'Test Plan Document', capitalOne: 'Automated Test Suite + Monitoring Alerts' },
        { discover: 'Release Notes', capitalOne: 'Experiment Results Dashboard' },
        { discover: 'Project Status Report', capitalOne: 'OKR Progress + Metric Review' }
      ]
    },
    exercise: {
      title: 'Convert a BRD to COFEE Format',
      scenario: 'You have a traditional requirement: "The system shall allow users to view their transaction history for the past 12 months with filtering and search capabilities." Convert this to a COFEE user story with hypothesis and success criteria.',
      hints: [
        'Start with the customer moment - when and why do they need this?',
        'What problem are they trying to solve?',
        'How will you measure if the feature is successful?',
        'What behavior change do you expect to see?'
      ],
      sampleAnswer: 'As a cardholder reviewing my spending patterns, I want to quickly find specific transactions so that I can reconcile my budget or dispute unauthorized charges.\n\nHypothesis: We believe adding smart search with filters will reduce "transaction not found" support calls by 30% and increase self-service dispute initiation by 20%.\n\nSuccess Metrics:\n- Search-to-find time < 10 seconds for 90% of users\n- Support calls for "can\'t find transaction" decrease 30%\n- Self-service dispute rate increases 20%\n- Feature adoption > 40% of active users within 30 days'
    }
  },
  {
    id: 'user-story-excellence',
    title: 'User Story Excellence',
    duration: '30 min',
    xp: 120,
    content: {
      overview: 'Capital One user stories go beyond the traditional "As a user, I want X so that Y" format. They include specific personas, data-driven acceptance criteria, performance requirements, and measurable success metrics.',
      format: {
        template: 'As a [specific persona with context], I want to [specific action with trigger] so that [measurable outcome with timeframe].',
        acceptanceCriteria: [
          'Given [specific precondition], When [user action], Then [measurable, testable result]',
          'Performance: Response time < X ms at P95 under Y concurrent users',
          'Analytics: Events logged for [specific tracking points] with [required attributes]',
          'Accessibility: WCAG 2.1 AA compliant, screen reader tested',
          'Security: [specific security requirements based on data classification]'
        ]
      },
      examples: [
        {
          bad: 'As a user, I want to see my balance so that I know how much money I have.',
          good: 'As a checking account holder about to make a purchase, I want to see my available balance (excluding pending transactions) within 2 seconds of opening the app, so I can make confident spending decisions without fear of overdraft.\n\nAcceptance Criteria:\n- Balance displays within 2 seconds at P95\n- Available balance clearly distinguished from current balance\n- Pending transactions shown separately with expected clearing dates\n- Low balance warning if below user-configured threshold\n\nSuccess Metrics:\n- 95% of balance checks complete in < 2s\n- Overdraft incidents decrease 15% for users who check balance pre-purchase\n- App rating mentions of "slow balance" decrease 50%'
        },
        {
          bad: 'Add fraud alert notifications.',
          good: 'As a cardholder whose card may have been compromised, I want to receive a push notification within 30 seconds of a suspicious transaction with one-tap confirm/deny, so I can protect my account without calling customer service.\n\nAcceptance Criteria:\n- Alert delivered within 30 seconds of fraud score trigger\n- One-tap "Yes, this was me" / "No, block card" actions\n- If no response in 10 minutes, follow up with SMS\n- Confirmation shows next steps clearly\n\nSuccess Metrics:\n- Fraud confirmation rate increases 40% (faster customer response)\n- False positive complaints decrease 20%\n- Customer service fraud calls decrease 30%\n- Card block time decreases from 24 hours to < 15 minutes'
        }
      ]
    },
    exercise: {
      title: 'Write a Payment Domain User Story',
      scenario: 'A product manager asks you to "add support for contactless payments at gas stations." Write a proper COFEE user story with acceptance criteria and success metrics.',
      hints: [
        'Consider the specific customer moment at a gas station',
        'What friction exists today?',
        'Include performance requirements for payment authorization',
        'Consider edge cases (pre-authorization, fuel limits)',
        'Define measurable success criteria'
      ]
    }
  },
  {
    id: 'agile-ceremonies',
    title: 'Capital One Agile Ceremonies',
    duration: '20 min',
    xp: 80,
    content: {
      overview: 'Capital One\'s ceremonies emphasize data review, customer outcomes, and cross-functional collaboration. The key difference from standard Scrum is the integration of metrics and outcomes into every ceremony.',
      ceremonies: [
        {
          name: 'Sprint Planning',
          duration: '2-4 hours',
          capitalOneUnique: 'Starts with OKR check-in and metric review. "Are we on track for our key results? What does the data tell us about priorities?" Stories must have hypotheses and success metrics defined before sizing.',
          participants: 'Full team + stakeholder representatives',
          outputs: ['Sprint goal tied to OKR', 'Committed stories with hypotheses', 'Identified risks and dependencies']
        },
        {
          name: 'Daily Standup',
          duration: '15 minutes max',
          capitalOneUnique: 'Beyond blockers, includes "data anomalies noticed" and "customer feedback heard." Teams often have a dashboard visible during standup.',
          participants: 'Development team',
          outputs: ['Blockers identified', 'Help needed', 'Interesting data points to investigate']
        },
        {
          name: 'Sprint Review',
          duration: '1-2 hours',
          capitalOneUnique: 'Demo includes metric dashboards showing actual vs. expected outcomes. "We shipped X, here\'s what the data shows." Stakeholders see outcomes, not just features.',
          participants: 'Team + stakeholders + customer representatives when possible',
          outputs: ['Demo of shipped work', 'Metric review', 'Stakeholder feedback', 'Backlog updates']
        },
        {
          name: 'Retrospective',
          duration: '1-1.5 hours',
          capitalOneUnique: 'Includes "What did the data tell us?" section. Reviews hypothesis validation rate, experiment results, and metric trends alongside process improvements.',
          participants: 'Development team',
          outputs: ['Process improvements', 'Data insights', 'Experiment learnings', 'Action items']
        },
        {
          name: 'Backlog Refinement',
          duration: '1-2 hours per week',
          capitalOneUnique: 'Stories cannot be sized until they have a hypothesis and success metrics. "How will we know this worked?" is required before estimation.',
          participants: 'Team + Product Owner',
          outputs: ['Refined stories ready for planning', 'Hypotheses defined', 'Success metrics agreed']
        }
      ]
    }
  },
  {
    id: 'data-driven-requirements',
    title: 'Data-Driven Requirements Analysis',
    duration: '35 min',
    xp: 140,
    content: {
      overview: 'At Capital One, requirements are informed by data at every stage—from problem discovery to solution validation. This module covers how to gather, analyze, and apply data throughout the requirements lifecycle.',
      dataSourcesForRequirements: [
        {
          source: 'Customer Analytics',
          usage: 'Understand behavior patterns, drop-off points, feature usage, and journey friction',
          tools: 'Adobe Analytics, internal dashboards, Amplitude',
          example: 'Before building a new feature, analyze current user flows to identify where customers struggle'
        },
        {
          source: 'Voice of Customer (VoC)',
          usage: 'Complaints, NPS feedback, call center transcripts, app reviews, social listening',
          tools: 'Medallia, call center analytics, app store reviews, social monitoring',
          example: 'Analyze call driver reports to identify most common customer pain points'
        },
        {
          source: 'A/B Test Results',
          usage: 'Historical experiment data to inform new hypotheses and understand what works',
          tools: 'Internal experimentation platform',
          example: 'Review past experiments in similar areas to set realistic success thresholds'
        },
        {
          source: 'Operational Metrics',
          usage: 'System performance, error rates, transaction volumes, latency distributions',
          tools: 'Splunk, Datadog, internal monitoring',
          example: 'Understand current performance baselines before setting new requirements'
        },
        {
          source: 'Competitive Intelligence',
          usage: 'Market trends, competitor features, industry benchmarks',
          tools: 'Market research, product teardowns',
          example: 'Validate that a proposed feature addresses a real market need, not just competitive FOMO'
        }
      ],
      analysisFramework: [
        { step: 1, question: 'What is the customer problem?', dataNeeded: 'Qualitative evidence from VoC, support tickets, user research' },
        { step: 2, question: 'How big is this problem?', dataNeeded: 'Quantitative sizing—affected users, frequency, revenue impact' },
        { step: 3, question: 'What does success look like?', dataNeeded: 'Benchmarks, baselines, comparable experiments' },
        { step: 4, question: 'How will we know we succeeded?', dataNeeded: 'Leading indicators to track during rollout, lagging indicators for final assessment' },
        { step: 5, question: 'What could go wrong?', dataNeeded: 'Risk metrics to monitor, rollback criteria, guardrail metrics' }
      ]
    },
    exercise: {
      title: 'Size a Customer Problem',
      scenario: 'Customer complaints show that 15% of mobile deposit attempts fail on first try. The product manager wants to prioritize fixing this. How would you analyze this problem and define requirements?',
      hints: [
        'What additional data would you need to size the impact?',
        'What are the possible causes of failures?',
        'How would you segment the problem?',
        'What success metrics would you propose?'
      ],
      sampleAnswer: 'Analysis approach:\n1. Quantify impact: 15% failure × deposits/day × average deposit amount = $ impact. Plus: customer time wasted, support calls generated, potential churn risk.\n2. Segment failures: By device, OS version, check type, lighting conditions, user tenure. Identify if it\'s a specific segment or broadly distributed.\n3. Root cause: Image quality? OCR accuracy? Timeout? Network? User error? Each has different solutions.\n4. Success metrics: First-attempt success rate > 90%, time to successful deposit < 60 seconds, deposit-related support calls -50%.\n5. Leading indicators: Image quality scores, OCR confidence levels, retry rates.'
    }
  }
];

export const CULTURE_MODULES = [
  {
    id: 'd4-framework',
    title: 'D4 Decision Framework',
    duration: '20 min',
    xp: 80,
    content: {
      overview: 'D4 (Discuss, Debate, Decide, Do) is Capital One\'s collaborative decision-making model. It ensures decisions are well-reasoned, all perspectives are heard, and the team commits fully to execution. The key insight: disagreement is healthy during Discuss and Debate, but once we Decide, everyone must Do with full commitment.',
      phases: [
        {
          name: 'Discuss',
          description: 'Gather information and perspectives. Everyone shares data and viewpoints without advocacy for a particular solution.',
          behaviors: ['Ask clarifying questions', 'Share all relevant data—even if it contradicts your position', 'Surface hidden assumptions', 'Identify all stakeholders and their needs', 'Ensure quieter voices are heard'],
          antiPatterns: ['Jumping to solutions before understanding the problem', 'Withholding information that might weaken your preferred option', 'Dominating the conversation', 'Dismissing perspectives without consideration']
        },
        {
          name: 'Debate',
          description: 'Actively challenge ideas and assumptions. Disagree constructively to strengthen the decision. This is where healthy conflict happens.',
          behaviors: ['Play devil\'s advocate—even for ideas you support', 'Stress-test assumptions with "what if" scenarios', 'Explore alternatives beyond the obvious choices', 'Challenge with data, not opinions', 'Separate ideas from people—critique the proposal, not the proposer'],
          antiPatterns: ['Personal attacks or dismissive language', 'Agreeing to avoid conflict (false harmony)', 'Dominating with seniority or volume', 'Retreating into silence when challenged']
        },
        {
          name: 'Decide',
          description: 'Make a clear decision with explicit ownership. Document what was decided, why, and who owns execution.',
          behaviors: ['State the decision clearly and unambiguously', 'Document the rationale and alternatives considered', 'Name a single owner accountable for outcomes', 'Define success criteria and timeline', 'Acknowledge dissent respectfully but move forward'],
          antiPatterns: ['Ambiguous or hedged decisions ("let\'s try both")', 'Deferring decisions indefinitely for more data', 'No clear owner or accountability', 'Revisiting the decision in side conversations']
        },
        {
          name: 'Do',
          description: 'Execute with full commitment, even if you disagreed. Revisit only if significant new data emerges.',
          behaviors: ['Commit fully to the decision—no passive resistance', 'Remove blockers for the team', 'Report progress and issues transparently', 'Flag problems early, not as "I told you so"', 'If you must revisit, bring new data, not old arguments'],
          antiPatterns: ['Relitigating decisions in every meeting', 'Passive-aggressive compliance', 'Blaming others when things go wrong', 'Saying "I never agreed to this" after the fact']
        }
      ],
      example: {
        scenario: 'Team is deciding whether to build a critical feature in-house or use a vendor solution. Timeline is tight, and there are strong opinions on both sides.',
        discuss: 'Product shares customer requirements and urgency. Engineering shares build estimates and technical debt concerns. Finance shares vendor costs and contract risks. Security shares compliance implications for each option. Everyone shares data openly.',
        debate: 'Engineering challenges vendor\'s scalability claims with benchmark data. Product challenges in-house timeline with competitive pressure analysis. Security debates both approaches\' risk profiles. Team explores hybrid options. Assumptions are stress-tested.',
        decide: 'Decision: Build core functionality in-house for differentiation; use vendor for commodity features. Owner: Tech Lead Sarah. Success criteria: Feature live in 8 weeks, 99.9% uptime, < 200ms latency. Rationale documented.',
        do: 'Team commits fully. The engineer who advocated for full in-house builds the vendor integration enthusiastically. Weekly check-ins track progress against success criteria. When a blocker emerges, team swarms to solve it without blame.'
      }
    },
    exercise: {
      title: 'Apply D4 to a Real Scenario',
      scenario: 'Your team is debating whether to delay a product launch by 2 weeks to add a security feature that reduces fraud risk by an estimated 15%. The business stakeholder is pushing hard for the original date. Apply D4 to this decision.',
      prompts: [
        'Discuss: What data would you gather? Who needs to be in the room?',
        'Debate: What would you challenge? What assumptions need stress-testing?',
        'Decide: How would you structure the decision? What are the success criteria?',
        'Do: How would you ensure full commitment regardless of the outcome?'
      ]
    }
  },
  {
    id: 'customer-back',
    title: 'Customer Back Thinking',
    duration: '25 min',
    xp: 100,
    content: {
      overview: 'Customer Back means starting every initiative with the customer outcome and working backwards to the solution. It\'s the opposite of technology-first ("we have this cool tech, let\'s find a use for it") or competitor-first ("they launched it, so we need it too") thinking.',
      framework: [
        {
          step: 1,
          name: 'Define the Customer Moment',
          description: 'What is the specific moment in the customer\'s life where they need us? Be vivid and concrete.',
          example: 'A customer is at the grocery checkout, cart full, kids impatient, worried their card might decline because they\'re unsure of their balance after paying bills this morning.',
          questions: ['When does this moment happen?', 'What triggers it?', 'What is the customer feeling?', 'What do they need from us right now?']
        },
        {
          step: 2,
          name: 'Describe the Ideal Outcome',
          description: 'What does the customer want to feel, know, or accomplish? Focus on their goal, not our solution.',
          example: 'The customer wants to feel confident that their purchase will go through without embarrassment or hassle. They want peace of mind, not a banking app.',
          questions: ['What does success look like for the customer?', 'How would they describe a great experience?', 'What would make them recommend us?']
        },
        {
          step: 3,
          name: 'Identify Current Friction',
          description: 'What makes achieving this outcome difficult today? Be specific about pain points.',
          example: 'Current balance doesn\'t show pending transactions. App takes 8 seconds to load. Low-balance alerts come after the decline, not before. Customer has to do mental math.',
          questions: ['Where do customers struggle today?', 'What workarounds do they use?', 'What complaints do we hear?', 'Where do they give up?']
        },
        {
          step: 4,
          name: 'Design the Solution',
          description: 'Now, and only now, design the solution that removes the friction. The solution should feel inevitable given the problem.',
          example: 'Real-time available balance (accounting for pending), instant app load (< 2 seconds), proactive low-balance alerts before potential decline, one-tap balance check from lock screen.',
          questions: ['What\'s the simplest solution that solves the problem?', 'How will we validate it works?', 'What could go wrong?']
        }
      ],
      contrastWithOtherApproaches: [
        {
          approach: 'Technology-First',
          example: '"We have this new ML capability, let\'s find a use for it."',
          problem: 'Solutions looking for problems rarely create customer value. You end up building features that impress engineers but confuse customers.'
        },
        {
          approach: 'Competitor-First',
          example: '"Chase launched crypto trading, we need it too."',
          problem: 'Assumes competitor knows what customers want. Leads to undifferentiated products and feature bloat. You\'re always following, never leading.'
        },
        {
          approach: 'Stakeholder-First',
          example: '"The EVP wants this feature on the roadmap."',
          problem: 'Internal politics drive priorities, not customer needs. Features get built to satisfy executives, not users.'
        },
        {
          approach: 'Revenue-First',
          example: '"This feature will increase interchange by $2M."',
          problem: 'Short-term revenue focus can damage long-term customer relationships. Sustainable revenue comes from solving customer problems.'
        }
      ]
    },
    exercise: {
      title: 'Customer Back Analysis',
      scenario: 'A senior stakeholder requests "Add cryptocurrency trading to our mobile app because competitors have it and customers are asking." Use Customer Back thinking to evaluate and respond to this request.',
      prompts: [
        'What customer moment would crypto trading address?',
        'What does the customer actually want to accomplish?',
        'What friction exists today that crypto would solve?',
        'Are there better ways to serve that underlying need?',
        'How would you respond to the stakeholder?'
      ]
    }
  },
  {
    id: 'data-obsession',
    title: 'Data Obsession Mindset',
    duration: '25 min',
    xp: 100,
    content: {
      overview: 'Data Obsession is the belief that every decision can be improved with data. It\'s not about eliminating intuition, but about validating and informing it. The goal is to be "strong opinions, loosely held"—have a point of view, but be willing to change it when data says otherwise.',
      principles: [
        {
          name: 'Data Informs, Doesn\'t Dictate',
          description: 'Data provides evidence, but judgment is still required. The goal is informed decisions, not automated decisions. Context matters.',
          example: 'Data shows customers abandon the checkout flow at step 3. That\'s the "what." Understanding "why" requires qualitative research, user interviews, and product judgment.',
          practice: 'Always ask "What does this data tell us?" AND "What doesn\'t this data tell us?"'
        },
        {
          name: 'Leading Indicators Over Lagging',
          description: 'Track metrics that predict outcomes, not just report them. By the time you see lagging indicators, it\'s too late to act.',
          example: 'Instead of waiting for monthly churn numbers (lagging), track daily login frequency, feature usage patterns, and support contacts (leading). Act before customers leave.',
          practice: 'For every lagging metric, identify 2-3 leading indicators that predict it.'
        },
        {
          name: 'Instrument Everything',
          description: 'If you can\'t measure it, you can\'t improve it. Build measurement into every feature from the start, not as an afterthought.',
          example: 'Every new feature ships with an analytics spec that defines what events to track, what dashboards to create, and what alerts to configure.',
          practice: 'No feature is "done" until it\'s instrumented and dashboarded.'
        },
        {
          name: 'Democratize Data Access',
          description: 'Everyone should be able to answer their own questions without waiting for analysts. Data literacy is a core competency.',
          example: 'Self-service dashboards, data literacy training, SQL basics for PMs, office hours with data teams.',
          practice: 'If you need to file a ticket to get basic data, that\'s a problem to solve.'
        }
      ],
      antiPatterns: [
        { pattern: 'HiPPO (Highest Paid Person\'s Opinion)', fix: 'Require data backing for all major decisions, regardless of seniority. Make it safe to challenge leaders with data.' },
        { pattern: 'Vanity Metrics', fix: 'Focus on metrics that drive business outcomes (conversion, retention, revenue), not just big numbers (pageviews, signups).' },
        { pattern: 'Analysis Paralysis', fix: 'Set decision deadlines. Perfect data doesn\'t exist. "Good enough to decide" is the standard.' },
        { pattern: 'Cherry-Picking', fix: 'Pre-register hypotheses and success criteria before looking at results. Report all results, not just favorable ones.' },
        { pattern: 'Data Without Context', fix: 'Always pair quantitative data with qualitative understanding. Numbers tell you what, not why.' }
      ]
    }
  },
  {
    id: 'smart-risk',
    title: 'Smart Risk Philosophy',
    duration: '20 min',
    xp: 80,
    content: {
      overview: 'Smart Risk is about taking calculated risks backed by data and quick iteration, not avoiding risk entirely (too slow) or taking reckless risks (too dangerous). It\'s the Goldilocks approach to risk in a fast-moving industry.',
      framework: {
        assess: {
          name: 'Assess the Risk',
          questions: [
            'What could go wrong? (List specific failure modes)',
            'What\'s the blast radius? (How many customers affected?)',
            'Is it reversible? (Can we roll back quickly?)',
            'What\'s the probability? (Based on data and experience)',
            'What\'s the cost of inaction? (Risk of NOT doing this)'
          ]
        },
        mitigate: {
          name: 'Mitigate Proactively',
          strategies: [
            'Feature flags for instant rollback',
            'Gradual rollout (1% → 5% → 25% → 100%)',
            'Monitoring and alerting before users notice',
            'Defined rollback criteria (if X happens, we roll back)',
            'Runbooks for known failure modes'
          ]
        },
        learn: {
          name: 'Learn Rapidly',
          practices: [
            'Blameless post-mortems that focus on systems, not people',
            'Share learnings widely—don\'t repeat mistakes',
            'Update runbooks and monitoring based on incidents',
            'Improve detection—catch problems earlier next time',
            'Celebrate "good catches" and near-misses'
          ]
        }
      },
      examples: [
        {
          scenario: 'Launching a new ML fraud model',
          smartRisk: 'Deploy in shadow mode first (model scores but doesn\'t block). Compare to current model for 2 weeks. Gradually increase decision weight: 10% → 50% → 100%. Human review of edge cases. Defined rollback if false positives increase > 20%.',
          recklessRisk: 'Deploy to 100% of transactions immediately because the model tested well.',
          avoidRisk: 'Run in shadow mode for 6 months before any production decisions.'
        },
        {
          scenario: 'Major app redesign',
          smartRisk: 'A/B test with 5% of users for 2 weeks. Measure key metrics (engagement, task completion, satisfaction). Iterate based on data. Expand gradually based on results. Keep old version available for rollback.',
          recklessRisk: 'Launch new design to all users on a Friday afternoon.',
          avoidRisk: 'Focus group for 3 months, then limited pilot for 6 months, then another round of focus groups.'
        },
        {
          scenario: 'New payment feature',
          smartRisk: 'Soft launch to internal employees first. Then 1% of customers with low transaction limits. Monitor fraud, errors, and customer feedback. Increase limits and population based on data.',
          recklessRisk: 'Launch to all customers with full limits immediately.',
          avoidRisk: 'Wait until every possible edge case is handled before any launch.'
        }
      ]
    }
  },
  {
    id: 'two-in-a-box',
    title: 'Two-In-A-Box Leadership',
    duration: '15 min',
    xp: 60,
    content: {
      overview: 'Two-In-A-Box pairs a business leader with a risk/tech leader to ensure balanced decision-making. Neither can proceed without the other\'s alignment. This prevents both reckless growth and excessive caution.',
      model: {
        businessLead: {
          focus: 'Customer outcomes, growth, competitive positioning, revenue',
          brings: 'Market insight, customer empathy, business case, urgency',
          risks: 'May underweight risk, compliance, or technical debt in pursuit of growth'
        },
        riskTechLead: {
          focus: 'Risk management, compliance, technical feasibility, security',
          brings: 'Risk assessment, regulatory knowledge, technical constraints, long-term thinking',
          risks: 'May over-index on risk avoidance, slow down innovation unnecessarily'
        },
        together: {
          outcome: 'Balanced decisions that drive growth while managing risk appropriately',
          process: 'Joint accountability for outcomes—success and failure are shared',
          culture: 'Healthy tension that produces better decisions'
        }
      },
      howItWorks: [
        'Both leaders are accountable for outcomes—not "business delivered, tech failed"',
        'Disagreements are escalated together, not separately (no end-runs)',
        'Neither can veto without proposing an alternative that addresses the other\'s concerns',
        'Regular joint reviews of key metrics—growth AND risk indicators',
        'Both must be able to explain each other\'s perspective'
      ],
      practicalApplication: 'When you have a decision that involves customer impact AND risk/compliance, seek input from both perspectives before proceeding. Don\'t treat risk as a blocker; treat it as a partner with valid concerns that can be addressed through smart design.'
    }
  }
];

export const PAYMENT_DOMAIN_MODULES = [
  {
    id: 'card-network-fundamentals',
    title: 'Card Network Fundamentals',
    duration: '35 min',
    xp: 140,
    content: {
      overview: 'Understanding how card networks operate is essential for anyone in payment products. Capital One is a direct issuer working with Visa and Mastercard networks, which is fundamentally different from Discover\'s model as both a network AND an issuer.',
      keyDifference: {
        discover: 'Discover is both a network AND an issuer. Vertical integration means they control the entire transaction flow and keep all the economics. Smaller acceptance footprint.',
        capitalOne: 'Capital One is an issuer that partners with Visa and Mastercard networks. Must work within network rules, share economics, but benefits from global acceptance and network innovation.'
      },
      transactionFlow: [
        { step: 1, name: 'Authorization', description: 'Merchant terminal requests approval. Flow: Merchant → Acquirer (merchant\'s bank) → Network (Visa/MC) → Issuer (Capital One). We make the approve/decline decision.', timing: '< 2 seconds end-to-end' },
        { step: 2, name: 'Clearing', description: 'Transaction details are exchanged for settlement. Network batches transactions and calculates interchange. Final amounts determined.', timing: 'Same day or next business day' },
        { step: 3, name: 'Settlement', description: 'Actual funds move between banks. Network facilitates net settlement between issuers and acquirers.', timing: '1-3 business days' }
      ],
      interchangeBasics: {
        what: 'Interchange is the fee paid by the merchant\'s bank (acquirer) to the cardholder\'s bank (issuer, Capital One) on each transaction.',
        why: 'Compensates issuers for: fraud risk (we\'re liable for unauthorized transactions), float (merchant gets paid before cardholder pays us), rewards funding, and operational costs.',
        rates: 'Vary by card type (credit vs debit, consumer vs commercial), transaction type (card-present vs card-not-present), merchant category, and network.',
        optimization: 'Capital One optimizes interchange through card product design (premium cards have higher interchange), merchant category analysis, and network negotiations.'
      },
      keyMetrics: [
        { metric: 'Authorization Approval Rate', target: '> 98%', why: 'Every false decline is a lost sale and frustrated customer. Balance fraud prevention with customer experience.' },
        { metric: 'Fraud Basis Points', target: '< 10 bps', why: 'Fraud losses directly impact profitability. 10 bps = $1 of fraud per $1,000 of transactions.' },
        { metric: 'Interchange Yield', target: 'Product-specific', why: 'Revenue optimization while maintaining merchant relationships.' },
        { metric: 'Dispute Rate', target: '< 0.5%', why: 'High dispute rates indicate fraud issues and can result in network penalties.' }
      ]
    },
    exercise: {
      title: 'Trace a Transaction',
      scenario: 'A Capital One Venture cardholder buys a $5.50 coffee at a local Starbucks using contactless tap-to-pay. Trace the transaction through authorization, clearing, and settlement. Identify the role of each party and where interchange is calculated.',
      hints: [
        'Start with the card tap and terminal communication',
        'Identify Starbucks\'s acquiring bank (Chase Paymentech)',
        'Trace through Visa network to Capital One',
        'Explain the fraud decision at Capital One',
        'Describe clearing and settlement timing',
        'Calculate approximate interchange (coffee shops are restaurant MCC, typically 1.5-2%)'
      ]
    }
  },
  {
    id: 'realtime-payments',
    title: 'Real-Time Payments & FedNow',
    duration: '30 min',
    xp: 120,
    content: {
      overview: 'Real-time payments are transforming the industry. Capital One is a leader in FedNow adoption and real-time payment strategy. Understanding this space is critical for product roles.',
      fedNowBasics: {
        what: 'FedNow is the Federal Reserve\'s instant payment system providing 24/7/365 real-time gross settlement. Launched in July 2023.',
        comparison: {
          ach: { timing: '1-3 business days', availability: 'Business hours processing', limit: 'No practical limit', cost: 'Very low (pennies)' },
          wire: { timing: 'Same day if early', availability: 'Business hours only', limit: 'No limit', cost: 'High ($25-45)' },
          fedNow: { timing: 'Seconds', availability: '24/7/365', limit: '$500K initially', cost: 'Low (cents)' },
          rtp: { timing: 'Seconds', availability: '24/7/365', limit: '$1M', cost: 'Low (cents)', note: 'Private network (The Clearing House)' }
        }
      },
      capitalOneStrategy: [
        'Early FedNow adopter for competitive advantage in instant money movement',
        'Real-time fraud detection required—can\'t recall instant payments',
        'New product opportunities: instant loan disbursements, real-time bill pay, gig economy payouts',
        'Liquidity management for 24/7 operations—no "overnight" buffer',
        'Customer experience differentiator—"your money, available instantly"'
      ],
      fraudChallenges: {
        problem: 'Real-time payments are irrevocable. Once sent, funds are gone within seconds. Traditional fraud review windows don\'t exist.',
        solutions: [
          'Pre-transaction risk scoring (must decide in milliseconds)',
          'Behavioral biometrics (how you type, hold phone)',
          'Network intelligence sharing (consortium fraud signals)',
          'Recipient validation services (confirm account ownership)',
          'Transaction limits based on risk score',
          'Post-transaction monitoring for pattern detection'
        ]
      },
      useCases: [
        { case: 'Instant loan disbursement', benefit: 'Customer gets funds immediately after approval. Improves NPS, reduces "where\'s my money" calls.' },
        { case: 'Real-time bill pay', benefit: 'Avoid late fees by paying at the last minute. Better than same-day ACH.' },
        { case: 'Gig economy payouts', benefit: 'Drivers, freelancers get paid instantly. Major differentiator for platforms.' },
        { case: 'Emergency funds', benefit: 'Disaster relief, urgent family needs—money when it\'s needed most.' },
        { case: 'Account-to-account transfer', benefit: 'Move money between your own accounts instantly, even across banks.' }
      ]
    }
  },
  {
    id: 'fraud-ml-operations',
    title: 'Fraud Detection ML Operations',
    duration: '40 min',
    xp: 160,
    content: {
      overview: 'Capital One\'s fraud detection relies heavily on machine learning, which requires a different operational approach than traditional rules-based systems. Understanding the ML lifecycle is essential.',
      mlVsRules: {
        rules: {
          description: 'Explicit logic: "IF transaction > $500 AND international AND new merchant THEN review"',
          pros: ['Explainable—easy to understand why a decision was made', 'Fast to update for known fraud patterns', 'Predictable behavior', 'Regulatory comfort'],
          cons: ['Can\'t detect novel or evolving patterns', 'Maintenance burden grows exponentially', 'Fraudsters quickly learn and evade rules', 'High false positive rates for broad rules']
        },
        ml: {
          description: 'Models learn patterns from millions of transactions to score fraud probability',
          pros: ['Adapts to new and evolving fraud patterns', 'Handles complex, non-linear relationships', 'Improves continuously with new data', 'Better precision/recall tradeoffs'],
          cons: ['Requires explainability work for regulators and customers', 'Needs monitoring for model drift', 'Data quality is critical—garbage in, garbage out', 'Potential for bias if not carefully managed']
        },
        capitalOneApproach: 'Hybrid: ML models for detection, rules for compliance and edge cases'
      },
      capitalOneFraudArchitecture: [
        'Real-time feature engineering pipeline (compute features in < 50ms)',
        'Multiple model ensemble (gradient boosting, neural networks, anomaly detection)',
        'Rules layer for regulatory requirements and known fraud patterns',
        'Human-in-the-loop for high-uncertainty decisions',
        'Continuous feedback loop from confirmed fraud and false positives'
      ],
      keyMetrics: [
        { metric: 'Detection Rate (Recall)', description: 'Percentage of actual fraud that the model catches', target: '> 95%', tradeoff: 'Higher detection often means more false positives' },
        { metric: 'False Positive Rate', description: 'Good transactions incorrectly flagged as fraud', target: '< 1%', tradeoff: 'Lower FPR often means missing some fraud' },
        { metric: 'Precision', description: 'Of transactions flagged as fraud, how many actually are', target: '> 50%', tradeoff: 'Depends on fraud prevalence' },
        { metric: 'Customer Friction', description: 'Challenges, declines, and holds experienced by legitimate customers', target: 'Minimize', tradeoff: 'Must balance with fraud prevention' }
      ],
      modelLifecycle: [
        { phase: 'Development', activities: 'Feature engineering, model training, backtesting on historical data', duration: '4-8 weeks' },
        { phase: 'Validation', activities: 'Champion-challenger testing, bias analysis, explainability review, regulatory approval', duration: '2-4 weeks' },
        { phase: 'Deployment', activities: 'Shadow mode (score but don\'t decide), gradual rollout, monitoring setup', duration: '2-4 weeks' },
        { phase: 'Monitoring', activities: 'Performance tracking, drift detection, incident response', duration: 'Continuous' },
        { phase: 'Retraining', activities: 'Scheduled refresh (quarterly) or triggered by drift, new feature integration', duration: 'Ongoing' }
      ]
    },
    exercise: {
      title: 'Model Monitoring Scenario',
      scenario: 'Your fraud model\'s false positive rate has increased from 0.8% to 1.5% over the past week. This means thousands more legitimate customers are being challenged or declined. Walk through how you would investigate and respond.',
      hints: [
        'What data would you look at first?',
        'What are possible causes? (Data quality, distribution shift, external events, model issues)',
        'How would you diagnose the root cause?',
        'What are your options for remediation?',
        'When would you escalate vs. handle yourself?'
      ]
    }
  }
];

export const GLOSSARY_TERMS = [
  { term: 'COFEE', definition: 'Customer Outcome Focused Engineering Excellence—Capital One\'s proprietary Agile methodology emphasizing measurable customer outcomes, hypothesis-driven development, and continuous learning through data.' },
  { term: 'D4 Framework', definition: 'Discuss, Debate, Decide, Do—Capital One\'s collaborative decision-making model ensuring all perspectives are heard, decisions are well-reasoned, and execution is fully committed.' },
  { term: 'Customer Back', definition: 'Starting every initiative with the customer outcome and working backwards to the solution. The opposite of technology-first or competitor-first thinking.' },
  { term: 'Data Obsession', definition: 'The principle that every decision can be improved with data. Not eliminating intuition, but validating and informing it. Emphasizes leading indicators, instrumentation, and democratized data access.' },
  { term: 'Smart Risk', definition: 'Taking calculated risks backed by data and quick iteration. Uses guardrails like feature flags, gradual rollouts, and monitoring rather than avoiding risk or taking reckless risks.' },
  { term: 'Money Culture', definition: 'Capital One\'s data-driven, customer-centric business philosophy emphasizing quantitative analysis, experimentation, and financial discipline.' },
  { term: 'Two-In-A-Box', definition: 'Leadership model pairing a business leader with a risk/tech leader to ensure balanced decisions. Neither can proceed without alignment from the other.' },
  { term: 'Foundry Sprint', definition: 'A 12-week innovation cycle for rapid experimentation with dedicated time and resources for testing new ideas with clear hypotheses.' },
  { term: 'Inner-Source', definition: 'Applying open-source development principles within the company. Teams can contribute to and use each other\'s codebases, promoting reuse and collaboration.' },
  { term: '3 Lines of Defense', definition: 'Risk management framework: First Line (business ownership of risk), Second Line (risk management oversight and challenge), Third Line (internal audit independent assurance).' },
  { term: 'Outcome Hypothesis Canvas', definition: 'COFEE artifact replacing traditional BRDs. Captures customer problem, hypothesis about solution, success metrics, and learning goals.' },
  { term: 'Interchange', definition: 'Fee paid by merchant\'s acquiring bank to card-issuing bank (Capital One) on each transaction. Compensates for fraud risk, float, and rewards funding.' },
  { term: 'FedNow', definition: 'Federal Reserve\'s instant payment system providing 24/7/365 real-time settlement. Capital One is an early adopter for competitive advantage.' },
  { term: 'ISO 8583', definition: 'International standard message format for card transaction authorization defining the structure of authorization requests and responses.' },
  { term: 'Model Drift', definition: 'Degradation of ML model performance over time as production data patterns change from training data. Requires continuous monitoring and periodic retraining.' },
  { term: 'Shadow Mode', definition: 'Deployment strategy where a model scores transactions but doesn\'t make blocking decisions. Allows evaluation of real-world performance before going live.' },
  { term: 'P95 / P99', definition: 'Percentile metrics (95th, 99th) for performance requirements. P95 < 500ms means 95% of requests complete in under 500ms.' },
  { term: 'Nostro / Vostro', definition: 'Correspondent banking terms. Nostro = our account at their bank. Vostro = their account at our bank. Used for international payments.' },
  { term: 'MCC', definition: 'Merchant Category Code—four-digit code classifying merchant type for interchange rates, spend controls, and reporting.' },
  { term: 'Virtual Card', definition: 'Single-use or limited-use card number generated for specific transactions. Used in commercial payments for AP automation and enhanced controls.' },
  { term: 'Durbin Amendment', definition: 'Regulation capping debit card interchange fees for banks with assets over $10 billion. Significant revenue impact for large issuers.' },
  { term: 'Reg E', definition: 'Regulation E—governs electronic fund transfers including debit cards, ATMs, and ACH. Defines error resolution rights and liability limits.' },
  { term: 'Authorization Approval Rate', definition: 'Percentage of transaction authorization requests that are approved. Target > 98%. Every false decline is a lost sale and frustrated customer.' },
  { term: 'Fraud Basis Points', definition: 'Fraud losses expressed as basis points of transaction volume. 10 bps = $1 of fraud per $1,000 of transactions. Target < 10 bps.' }
];
