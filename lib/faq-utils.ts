// FAQ data and icon mapping utilities

// Simple icon mapping - using string identifiers instead of JSX components
const ICON_MAPPING = {
  "Edu Loan": {
    eligible: "help-circle",
    collateral: "help-circle",
    amount: "help-circle",
    repay: "help-circle",
    expenses: "help-circle",
    interest: "help-circle",
    "co-applicant": "help-circle",
    "interest while studying": "book-open",
    "income proof": "help-circle",
    transfer: "help-circle",
    guarantor: "help-circle",
    diploma: "help-circle",
    "interest on full amount": "help-circle",
  },
  "Admissions & Courses": {
    eligibility: "help-circle",
    percentage: "help-circle",
    cgpa: "help-circle",
    "gap years": "help-circle",
    backlogs: "help-circle",
    ielts: "help-circle",
    "change course": "help-circle",
    "multiple universities": "help-circle",
  },
  "Finances & Transparency": {
    cost: "help-circle",
    "bank balance": "help-circle",
    "loan without collateral": "help-circle",
    "loan doesn't get approved": "help-circle",
    "money in advance": "help-circle",
    "third-party fees": "help-circle",
    "visa gets rejected": "help-circle",
  },
  "Value-Added Services (VAS)": {
    "sim card": "help-circle",
    accommodation: "help-circle",
    insurance: "help-circle",
    medical: "help-circle",
    forex: "help-circle",
    "bank account": "help-circle",
    safe: "help-circle",
    legit: "help-circle",
    "specific services": "help-circle",
  },
  "Test Prep & Learning": {
    time: "help-circle",
    prepare: "help-circle",
    fail: "help-circle",
    "re-train": "help-circle",
    practice: "book-open",
    mocks: "book-open",
    included: "help-circle",
    separate: "help-circle",
    sop: "help-circle",
    statement: "help-circle",
  },
  "General Services": {
    services: "help-circle",
    timeline: "help-circle",
    support: "help-circle",
    experience: "help-circle",
    "success rate": "help-circle",
    communication: "help-circle",
    emergency: "help-circle",
    refund: "help-circle",
    process: "help-circle",
    start: "help-circle",
    contact: "help-circle",
    location: "help-circle",
  },
} as const;

// FAQ data
export const FAQ_CATEGORIES = {
  "Edu Loan": [
    {
      question: "Who is eligible for an education loan?",
      answer:
        "Any student with an admission offer letter from a recognized university abroad. One of the parents and working siblings can act as co-applicants.",
    },
    {
      question: "What is a collateral-free loan?",
      answer:
        "A collateral-free loan is one where you don't need to pledge property or any assets. Many banks/NBFCs offer up to ₹7.5–40 lakh (depending on profile & country) without collateral. This is provided to student going to pursue a master's degree.",
    },
    {
      question: "How much loan amount can I get?",
      answer:
        "It depends on your course, country, and family's financial profile. Amounts can go higher upto ₹1.5 crore.",
    },
    {
      question: "When do I start repaying the loan?",
      answer:
        "Most lenders give a moratorium period (course duration plus 6–12 months). You are usually allowed to pay simple interest or partial EMI during study, and full EMIs start after the moratorium period",
    },
    {
      question: "What expenses are covered by an education loan?",
      answer:
        "Tuition fees, living expenses, travel, insurance, exam fees, and other expenses like laptops/study material.",
    },
    {
      question: "What is the interest rate on study abroad loans?",
      answer:
        "It varies between 9%–13% for Indian banks and can be slightly higher with NBFCs. Rate depends on loan type, collateral, and co-applicant profile.",
    },
    {
      question: "Who can be a co-applicant for my loan?",
      answer:
        "Usually parents, guardians, or blood relatives. Some NBFCs allow working siblings too.",
    },
    {
      question: "Do I need to pay interest while studying?",
      answer:
        "Most banks allow complete deferment till the moratorium period. But, paying partially during study helps reduce overall burden.",
    },
    {
      question: "Can I get a loan without income proof of my parents?",
      answer:
        "It's difficult with banks, but NBFCs may consider stronger student profiles (good universities, STEM courses) even with limited parental income as low as INR 3 Lakh annually.",
    },
    {
      question: "Can I transfer my loan to another bank later?",
      answer: "Yes, through loan refinancing if you find lower interest rates.",
    },
    {
      question: "Do I need a guarantor for my education loan?",
      answer:
        "Yes, most lenders require a co-applicant or guarantor. In some cases, collateral substitutes for guarantor requirements.",
    },
    {
      question:
        "Can I get an education loan for diploma or certificate programs?",
      answer:
        "Loans are usually approved for UG, PG, MBA, MBBS, STEM, and professional courses. Short diplomas may not qualify unless from a reputed institute.",
    },
    {
      question:
        "Do I need to pay interest on the full loan amount sanctioned, or only what I use?",
      answer:
        "You only pay interest on the amount you actually use, not on the total loan sanctioned. It works like an overdraft facility. Example: If you are approved for ₹50 lakhs but withdraw only ₹15 lakhs for tuition and living expenses, your EMI and interest will be calculated only on ₹15 lakhs, not on the remaining ₹35 lakhs.",
    },
  ],
  "Admissions & Courses": [
    {
      question: "What are the eligibility requirements for studying abroad?",
      answer:
        "Requirements vary by country and university, but generally you need your academic transcripts, English proficiency proof (IELTS/PTE/MOI), and financial documents. Don't worry, we'll check your profile first and suggest only the right-fit options.",
    },
    {
      question:
        "What if my percentage/CGPA is low, can I still get admission abroad?",
      answer:
        "Yes. Many universities accept students with average scores, especially if you have strong motivation, work experience, or a clear career plan. We'll help you find universities that value more than just grades.",
    },
    {
      question: "Do gap years or backlogs reduce my chances?",
      answer:
        "Not necessarily. Some countries/universities are flexible with gaps and backlogs if you can justify them. We'll guide you on how to present your case honestly and which countries/universities shall be the best fit.",
    },
    {
      question: "If I don't have IELTS, what options do I still have?",
      answer:
        "You can apply through MOI (Medium of Instruction), or choose universities/countries that don't require IELTS/PTE. We can shortlist such options for you.",
    },
    {
      question: "Can I change my course or university after applying?",
      answer:
        "Yes, in most cases before visa filing. After visa, you may need to reapply depending on the country's rules.",
    },
    {
      question: "Can I apply to multiple universities at the same time?",
      answer:
        "Yes, and it's often smart to keep 3 countries as backup. When you start your process with us, we'll apply to 3 universities for you.",
    },
  ],
  "Finances & Transparency": [
    {
      question: "How much does it cost to study abroad (tuition + living)?",
      answer:
        "It depends on country and course. A tentative breakdown: UK: ₹20–30 lakh/year, Canada: ₹15–25 lakh/year, Europe: ₹8–18 lakh/year. We'll give you a detailed cost breakdown before you commit.",
    },
    {
      question: "Do I need to show bank balance for student visa? How much?",
      answer:
        "Yes, most countries require proof of funds for 1 year's tuition + living. We'll tell you the exact figure for your case.",
    },
    {
      question: "Can I apply for education loans without collateral?",
      answer:
        "Yes. Many Indian banks and NBFCs offer unsecured loans up to ₹40 lakh for master's programs. We'll connect you to the right lender.",
    },
    {
      question: "What if my loan doesn't get approved in time?",
      answer:
        "We can suggest backup lenders or guide you for partial payment options. The key is starting early, we'll help you plan the timeline.",
    },
    {
      question: "Do you take money in advance or only after admission?",
      answer:
        "We don't take any third-party fees. All payments (university, exam, visa) are made directly from your account. We only charge our service fee at visa filing.",
    },
    {
      question: "What are third-party fees, and where does my money go?",
      answer:
        "Third-party fees are expenses you pay directly to official organizations, never to us. These usually begin once you start your university or visa application. Examples include: University application fees (₹3,000–₹8,000 per application), VFS or Visa Application Centre fees, Embassy visa fees, Medical tests & health checks, GIC deposit (Canada), Blocked account (Germany), Mandatory health/travel insurance, Accommodation deposits.",
    },
    {
      question: "What happens if my visa gets rejected — do I lose my money?",
      answer:
        "University fees are refundable, but the institutes deduct certain amount for different procedural things which usually amounts between INR 10k- 50k. If a rejection happens, we'll guide you on reapplying or alternative options.",
    },
    {
      question: "How transparent is your fee structure?",
      answer:
        "We are truly transparent in our operations. All official fees (university application fees, visa fees, exam fees, etc.) are paid directly from your account to the respective organizations. We never handle your money for third-party expenses. We only charge our service fee at visa filing, ensuring complete transparency throughout the process.",
    },
    {
      question: "How do you ensure unbiased university recommendations?",
      answer:
        "We provide completely unbiased choices from our network of 800+ universities across 30+ countries. We have no tied agendas or partnerships that would influence our recommendations. Our goal is to find the best fit for your profile, budget, and career goals, regardless of which university you choose. We'll present you with multiple options and help you make an informed decision based on what's truly best for you.",
    },
  ],
  "Visa & Travel": [
    {
      question: "How soon should I apply for a visa before my intake?",
      answer:
        "Apply at least 2 months before your intake. For popular countries, earlier is better since slots fill up quickly.",
    },
    {
      question: "Do you also guide for dependent/spouse visas?",
      answer:
        "Yes. Many students travel with their spouse/children, and we provide full guidance for dependent visa applications.",
    },
    {
      question: "Do you guarantee 100% visa success?",
      answer:
        "No one can guarantee a visa, as the final decision rests with the embassy or consulate. However, over time, we've discovered key steps that consistently maximize your chances: Show financial stability with a small education loan, Prepare a clean, consistent document set, Master the visa interview with insider insights. By following these steps, our students consistently achieve high approval rates, giving you the best possible chance without false guarantees.",
    },
  ],
  "Value-Added Services (VAS)": [
    {
      question: "Will I get a SIM card or accommodation before landing?",
      answer:
        "Yes. With our VAS, you can get a prepaid SIM activated before you fly and secure accommodation in advance.",
    },
    {
      question: "Do you help with insurance or medical coverage abroad?",
      answer:
        "Yes. Health insurance is mandatory in many countries, and we'll guide you to the right plans.",
    },
    {
      question:
        "Do you help with forex card or international bank account setup?",
      answer:
        "Yes. We assist with student forex cards, international bank accounts, and safe money transfer options.",
    },
    {
      question: "How do you ensure the accommodation is safe and legit?",
      answer:
        "We work only with verified partners. You'll get pictures, pricing, and contracts in advance — no hidden surprises.",
    },
    {
      question:
        "Can I request only specific services like visa or accommodation?",
      answer:
        "Yes, our services are flexible. You can request only what you need through the Request Services form.",
    },
  ],
  "Test Prep & Learning": [
    {
      question: "How much time do I need to prepare for IELTS/PTE?",
      answer: "On average 4–8 weeks, depending on your English level.",
    },
    {
      question: "What if I fail in the first attempt — do you re-train me?",
      answer:
        "Yes. We provide continued training, mocks, and feedback until you clear with your target score.",
    },
    {
      question: "Do you give practice papers or standard mocks?",
      answer:
        "We give a mix — official-style mocks + practice based on the latest trends and student feedback.",
    },
    {
      question: "Is test prep included in your admission package, or separate?",
      answer: "It's separate, since not everyone needs test prep.",
    },
    {
      question:
        "Is test preparation included in your services, or is it paid separately?",
      answer:
        "Test preparation (IELTS, TOEFL, GRE, GMAT, etc.) is a separate paid service. We guide you on which test is needed for your target country/university, but the actual coaching or online prep courses are chargeable. This way, you only pay if you actually need the training.",
    },
    {
      question: "Do you charge for SOP (Statement of Purpose) writing?",
      answer:
        "We provide free SOP samples and also offer a free evaluation of your draft, so you can improve it yourself. However, if you want our team to write your SOP professionally from scratch, it is a paid service. This ensures students who are confident in writing don't have to pay, while those who prefer expert help can opt-in.",
    },
  ],
  "General Services": [
    {
      question: "What services do you offer?",
      answer:
        "We offer end-to-end study abroad guidance including university shortlisting, application support, visa filing, education loans, test preparation, accommodation, insurance, and post-arrival support.",
    },
    {
      question: "What is your typical timeline for the entire process?",
      answer:
        "The complete process takes 6-12 months depending on your target intake. We start 12-18 months before your intended start date to ensure sufficient time for applications, visa processing, and preparations.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, we provide round-the-clock support through WhatsApp, email, and phone. Our team is always available to help with emergencies, especially during visa interviews and travel.",
    },
    {
      question: "How many years of experience do you have?",
      answer:
        "Our team has 10+ years of experience in international education. We've helped thousands of students successfully study abroad and have strong relationships with universities worldwide.",
    },
    {
      question: "What is your success rate?",
      answer:
        "Our success rate is 95%+ for visa approvals and 98%+ for university admissions. We maintain high standards by ensuring students meet all requirements before applying.",
    },
    {
      question: "How do you communicate with students and parents?",
      answer:
        "We maintain regular communication through WhatsApp groups, email updates, and scheduled calls. Parents are always kept informed about their child's progress and important deadlines.",
    },
    {
      question: "Do you provide emergency support?",
      answer:
        "Yes, we provide 24/7 emergency support for urgent situations like visa issues, travel problems, or accommodation emergencies. Our team is always available to help.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a transparent refund policy. If your visa gets rejected due to our error, we provide a full refund. We also offer partial refunds for unused services.",
    },
    {
      question: "How do you ensure a smooth process?",
      answer:
        "We use proven processes, maintain detailed checklists, and provide regular updates. Our experienced team handles everything from applications to post-arrival support.",
    },
    {
      question: "How do I start the process?",
      answer:
        "Start by booking a free consultation call. We'll assess your profile, discuss your goals, and create a personalized roadmap. You can book a call through our website or WhatsApp.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us through WhatsApp, email, phone, or by booking a consultation call through our website. We respond within 2-4 hours during business hours.",
    },
    {
      question: "Do you have physical offices?",
      answer:
        "Yes, we have offices in major cities. However, most of our services are provided online, so you can work with us from anywhere in India or abroad.",
    },
  ],
} as const;

// Icon mapping utility function
export const getQuestionIcon = (question: string, category: string) => {
  const questionLower = question.toLowerCase();
  const categoryMapping = ICON_MAPPING[category as keyof typeof ICON_MAPPING];

  if (!categoryMapping) {
    return "help-circle";
  }

  // Find matching icon based on keywords
  for (const [keyword, iconName] of Object.entries(categoryMapping)) {
    if (questionLower.includes(keyword)) {
      return iconName;
    }
  }

  // Default icon
  return "help-circle";
};
