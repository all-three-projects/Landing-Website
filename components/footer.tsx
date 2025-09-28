import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo } from "react";
import Link from "next/link";

// Simple SVG icons to avoid hydration issues
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = memo(() => {
  return (
    <>
      {/* Main Footer Content */}
      <footer
        id="contact"
        className="bg-[#42362A] text-white py-6 md:py-8"
        role="contentinfo"
      >
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Services */}
            <div>
              <h3
                className="font-semibold text-base mb-3 text-white"
                style={{
                  fontFamily:
                    "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                  fontWeight: "600",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                SERVICES
              </h3>
              <ul className="space-y-1" role="list">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    style={{
                      fontFamily:
                        "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/education-loan"
                    className="text-white hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    style={{
                      fontFamily:
                        "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    Education Loans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/test-prep"
                    className="text-white hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    style={{
                      fontFamily:
                        "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    Test Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vas-services"
                    className="text-white hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    style={{
                      fontFamily:
                        "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    VAS Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3
                className="font-semibold text-base mb-3 text-white"
                style={{
                  fontFamily:
                    "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                  fontWeight: "600",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                SOCIAL
              </h3>
              <div
                className="flex space-x-3"
                role="list"
                aria-label="Social media links"
              >
                <a
                  href="https://www.instagram.com/journey.sync?igsh=MTNkdXU4NWx4MzdhdQ=="
                  className="text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded p-1"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/@journey_sync?si=WO17LIab6C5oqgRY"
                  className="text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded p-1"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <YoutubeIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/journeysync/"
                  className="text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded p-1"
                  aria-label="Connect with us on LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3
                className="font-semibold text-base mb-3 text-white"
                style={{
                  fontFamily:
                    "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                  fontWeight: "600",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                NEWSLETTER
              </h3>
              <p
                className="mb-3 text-white text-sm"
                style={{
                  fontFamily:
                    "var(--font-gabarito), 'gabarito Fallback', sans-serif",
                  fontWeight: "400",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                Get updates on universities, loan opportunities, test prep tips,
                and study abroad guidance:
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="email@provider.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm h-8 w-48"
                  aria-label="Email address for newsletter"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-8 px-3 bg-[#1F6F5C] text-white hover:bg-[#28997B]"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Separate Copyright Section */}
      <div className="bg-[#1F6F5C] text-white py-4">
        <div className="container px-4 mx-auto">
          <p
            className="text-sm text-center text-white"
            style={{
              fontFamily:
                "var(--font-gabarito), 'gabarito Fallback', sans-serif",
              fontWeight: "400",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            © Journey Sync © 2025
          </p>
        </div>
      </div>
    </>
  );
});

Footer.displayName = "Footer";
