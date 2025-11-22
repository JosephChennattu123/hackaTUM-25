import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';

import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { queryClient } from '@/lib/react-query';
import { store } from '@/stores';

const ErrorFallback = () => {
    return (
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
            <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button>
        </div>
    );
};

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense
            fallback={
                <div className="flex items-center justify-center w-screen h-screen">
                    {/* Add a spinner here if you have one */}
                    Loading...
                </div>
            }
        >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <HelmetProvider>
                    <ReduxProvider store={store}>
                        <QueryClientProvider client={queryClient}>
                            {/* {import.meta.env.DEV && <ReactQueryDevtools />} */}
                            <Router>{children}</Router>
                        </QueryClientProvider>
                    </ReduxProvider>
                </HelmetProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
};
