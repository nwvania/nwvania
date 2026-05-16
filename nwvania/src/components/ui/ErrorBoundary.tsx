"use client";

import { Component, type ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  eventId: string | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, eventId: null };

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    const eventId = Sentry.captureException(error, {
      contexts: { react: { componentStack: info.componentStack } },
    });
    this.setState({ eventId });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 text-gray-500 text-sm">
            <p>Something went wrong. Please refresh the page.</p>
            {this.state.eventId && (
              <p className="text-xs text-gray-400">Error ID: {this.state.eventId}</p>
            )}
          </div>
        )
      );
    }
    return this.props.children;
  }
}
