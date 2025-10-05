/**
 * Application constants for maintainability
 */

// Navigation data
export const NAVIGATION_ITEMS = [
  { id: "study-abroad", label: "Study Abroad", path: "/" },
  { id: "study-loans", label: "Study Loans", path: "/education-loan" },
  { id: "test-prep", label: "Test Prep", path: "/test-prep" },
  { id: "vas", label: "VAS", path: "/vas-services" },
  { id: "contact", label: "Contact Us", path: "/" },
] as const;

// World map configuration
export const WORLD_MAP_CONFIG = {
  DEFAULT_LINE_COLOR: "#42362A", // Dark Green
  MAP_HEIGHT: 100,
  GRID_TYPE: "diagonal" as const,
  RADIUS: 0.22,
} as const;

// World map coordinates for hero section
export const WORLD_MAP_DOTS = [
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: 43.1332, lng: 131.9113 },
  },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
  {
    start: { lat: 51.5074, lng: -0.1278 },
    end: { lat: 40.7128, lng: -74.006 },
  },
  {
    start: { lat: 40.7128, lng: -74.006 },
    end: { lat: 34.0522, lng: -118.2437 },
  },
  {
    start: { lat: 34.0522, lng: -118.2437 },
    end: { lat: 35.6762, lng: 139.6503 },
  },
  {
    start: { lat: 35.6762, lng: 139.6503 },
    end: { lat: -33.8688, lng: 151.2093 },
  },
  {
    start: { lat: -33.8688, lng: 151.2093 },
    end: { lat: 51.5074, lng: -0.1278 },
  },
] as const;

// External links
export const EXTERNAL_LINKS = {
  CTA_PRIMARY: "https://deformity.ai/d/wME1f8Ry4hpH",
  CTA_SECONDARY: "https://deformity.ai/d/IpDxWvaOJSlk",
} as const;

// University logos data
export const UNIVERSITY_LOGOS = [
  { src: "/uni1.png", alt: "University 1" },
  { src: "/uni2.jpg", alt: "University 2" },
  { src: "/uni3.png", alt: "University 3" },
  { src: "/uni4.jpeg", alt: "University 4" },
  { src: "/uni5.jpg", alt: "University 5" },
  { src: "/uni6.png", alt: "University 6" },
  { src: "/uni7.webp", alt: "University 7" },
  { src: "/uni8.png", alt: "University 8" },
  { src: "/uni9.png", alt: "University 9" },
  { src: "/uni10.png", alt: "University 10" },
  { src: "/uni11.png", alt: "University 11" },
  { src: "/uni12.svg", alt: "University 12" },
  { src: "/uni13.png", alt: "University 13" },
  { src: "/uni14.png", alt: "University 14" },
  { src: "/uni15.webp", alt: "University 15" },
  { src: "/uni16.jpg", alt: "University 16" },
  { src: "/uni17.png", alt: "University 17" },
  { src: "/uni18.png", alt: "University 18" },
  { src: "/uni19.png", alt: "University 19" },
  { src: "/uni20.png", alt: "University 20" },
] as const;

// Page content data
export const PAGE_CONTENT = {
  home: {
    title: "In sync with your",
    titleHighlight: "study abroad journey",
    subtitle:
      "From start to success, we cover it all: university shortlisting, SOPs, collateral-free edu loans, insurances, ticketing, accommodations, parent visas for grad ceremony, and even post-study work permit support.",
    features: [
      "800+ Universities, 30+ countries, Unbiased Global Options",
      "Truly transparent operations, we only charge upon visa filing",
      "Online test prep- IELTS, GRE, GMAT, French, German and more",
    ],
    ctaText: "Find My Universities",
    secondaryCtaText: "Get Loan Assistance",
  },
  educationLoan: {
    title: "Your Path to Studying",
    titleHighlight: "Abroad, Fully Funded",
    subtitle:
      "Education loan options from 15+ financial institutions including nationalised banks.",
    features: [
      "Collateral-Free Loans also Available",
      "Repayment starts After Studies end",
      "Pay EMIs only for what you use",
    ],
    ctaText: "Get Loan Assistance",
  },
  vasServices: {
    title: "All the Extra Help You Need",
    titleHighlight: "with your Study Abroad Dream",
    subtitle:
      "From university shortlisting to overseas accommodations, we handle all the details.",
    features: [
      "Visa & SOP Support – Professional guidance for smooth approvals.",
      "Air ticketing & SIM Cards – Ready-to-fly and ready to use on arrival in your destination country.",
      "Insurance & Forex – Health, travel, and currency sorted before you leave.",
    ],
    ctaText: "Request Services",
    microcopy:
      "Choose any service you need and we'll handle it, even if you are not our client.",
  },
  testPrep: {
    title: "Master Your Tests",
    titleHighlight: "with Expert Prep",
    subtitle:
      "Comprehensive test preparation for IELTS, PTE, GRE, GMAT, SAT, French, German, and more with personalized guidance and proven strategies.",
    features: [
      "IELTS, PTE, GRE, GMAT, SAT - All major tests covered",
      "Personalized study plans and expert guidance",
      "Practice tests and mock exams with detailed feedback",
    ],
    ctaText: "Start Test Prep",
    microcopy:
      "Join thousands of students who've achieved their target scores with our proven methods.",
  },
} as const;
