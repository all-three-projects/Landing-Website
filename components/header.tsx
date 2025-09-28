"use client";

import { useState, useCallback, memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { NavigationButton } from "@/components/ui/reusable-components";

// Custom SVG icons - completely rewritten to avoid any caching
const HamburgerMenuIcon = ({ className }: { className?: string }) => (
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
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateToPage = useCallback(
    (path: string) => {
      router.push(path);
      setIsMenuOpen(false);
    },
    [router]
  );

  const handleNavigation = useCallback(
    (navItem: string) => {
      const item = NAVIGATION_ITEMS.find((item) => item.id === navItem);
      if (item) {
        navigateToPage(item.path);
      }
    },
    [navigateToPage]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLogoClick = useCallback(() => {
    navigateToPage("/");
  }, [navigateToPage]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#BFB0A1]/30">
      <div className="container flex h-16 sm:h-18 items-center justify-between px-2 sm:px-3">
        {/* Logo - Left */}
        <div
          className="flex items-center space-x-1 sm:space-x-3 cursor-pointer transition-transform hover:scale-105 -ml-1 sm:ml-0"
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          aria-label="Navigate to home page"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleLogoClick();
            }
          }}
        >
          {/* Professional Logo */}
          <div className="relative h-10 w-24 sm:h-10 sm:w-24">
            <Image
              src="/logo.PNG"
              alt="Journey Sync Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav
          className="hidden md:flex items-center justify-center flex-1 space-x-6 lg:space-x-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAVIGATION_ITEMS.slice(0, 4).map((item) => {
            const isActive = pathname === item.path;
            return (
              <NavigationButton
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={
                  isActive
                    ? "bg-[#BFB0A1] text-[#060606] px-2 py-1 rounded"
                    : ""
                }
              >
                {item.label}
              </NavigationButton>
            );
          })}
        </nav>

        {/* Contact Us Button - Right */}
        <div className="hidden md:flex items-center">
          <a
            href="https://deformity.ai/d/MrhW7ieoP-zP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavigationButton variant="cta" onClick={() => {}}>
              Contact Us
            </NavigationButton>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1 focus:outline-none focus:ring-2 focus:ring-[#42362A] focus:ring-offset-2 rounded cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <CloseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <HamburgerMenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50 max-h-[80vh] overflow-y-auto"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav className="container px-3 sm:px-4 py-3 sm:py-4 space-y-3 sm:space-y-4">
            {NAVIGATION_ITEMS.slice(0, 4).map((item) => {
              const isActive = pathname === item.path;
              return (
                <NavigationButton
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block text-left p-2 ${
                    isActive
                      ? "bg-[#BFB0A1] text-[#060606] px-2 py-1 rounded"
                      : ""
                  }`}
                >
                  {item.label}
                </NavigationButton>
              );
            })}

            {/* Contact Us Button for Mobile */}
            <a
              href="https://deformity.ai/d/MrhW7ieoP-zP"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <NavigationButton
                onClick={() => {}}
                className="block text-left p-2 bg-[#1F6F5C] text-white hover:bg-[#28997B] rounded"
              >
                Contact Us
              </NavigationButton>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";
