import { Suspense, lazy, memo } from "react";
import { Header } from "@/components/header";
import { SectionLoader } from "@/components/ui/loading-spinner";

// Lazy load common components with dynamic imports
const Footer = lazy(() =>
  import("@/components/footer").then((mod) => ({ default: mod.Footer }))
);

// Memoized fallback component for better performance
const FooterFallback = memo(() => <SectionLoader />);
FooterFallback.displayName = "FooterFallback";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Single Header */}
      <Header />
      <main>{children}</main>
      {/* Single Footer */}
      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
