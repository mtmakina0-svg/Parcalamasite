import React, { Component, ReactNode } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

/**
 * Error Boundary component that catches JavaScript errors anywhere in the child
 * component tree, logs those errors, and displays a fallback UI.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        // Update state so the next render shows the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // Log error to console (could also send to error tracking service)
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({ errorInfo });

        // Optional: Send to error tracking service like Sentry
        // if (typeof window !== 'undefined' && window.gtag) {
        //   window.gtag('event', 'exception', {
        //     description: error.message,
        //     fatal: false,
        //   });
        // }
    }

    handleRetry = (): void => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    handleGoHome = (): void => {
        window.location.href = '/';
    };

    render(): ReactNode {
        if (this.state.hasError) {
            // Custom fallback provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <div className="min-h-screen bg-[#45474B] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
                    >
                        {/* Error Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <AlertTriangle size={40} className="text-red-500" />
                        </motion.div>

                        {/* Error Title */}
                        <h1 className="text-2xl font-bold text-[#45474B] mb-3">
                            Bir Hata Oluştu
                        </h1>

                        {/* Error Description */}
                        <p className="text-gray-600 mb-6">
                            Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
                        </p>

                        {/* Error Details (only in development) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left overflow-auto max-h-32">
                                <code className="text-xs text-red-600 whitespace-pre-wrap">
                                    {this.state.error.message}
                                </code>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={this.handleRetry}
                                className="flex items-center gap-2 px-6 py-3 bg-[#F4CE14] text-[#1E1E1E] rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                            >
                                <RefreshCw size={18} />
                                Tekrar Dene
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={this.handleGoHome}
                                className="flex items-center gap-2 px-6 py-3 bg-[#45474B] text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                            >
                                <Home size={18} />
                                Ana Sayfa
                            </motion.button>
                        </div>

                        {/* Brand Footer */}
                        <p className="text-xs text-gray-400 mt-8">
                            MT Makina - Endüstriyel Parçalama Makineleri
                        </p>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
