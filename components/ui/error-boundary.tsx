"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({
  error,
  resetError,
}: {
  error?: Error;
  resetError: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F8]">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="text-[#42362A] text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-[#060606] mb-2">
          Something went wrong
        </h2>
        <p className="text-[#645C54] mb-4">
          We&apos;re sorry, but something unexpected happened. Please try
          refreshing the page.
        </p>
        {error && process.env.NODE_ENV === "development" && (
          <details className="text-left mb-4">
            <summary className="cursor-pointer text-sm text-[#8C8C8C]">
              Error Details
            </summary>
            <pre className="text-xs text-[#42362A] mt-2 p-2 bg-[#BFB0A1]/20 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <button
          onClick={resetError}
          className="bg-[#1F6F5C] text-white px-4 py-2 rounded-md hover:bg-[#28997B] transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export { ErrorBoundary, DefaultErrorFallback };
