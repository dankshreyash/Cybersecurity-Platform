import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';

export function Header({ onMenuClick }) {
    const { theme, toggleTheme } = useTheme();
    const { addToast } = useToast();

    return (
        <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark-2 shrink-0">
            {/* Left side */}
            <div className="flex items-center gap-3">
                {/* Mobile hamburger */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-surface-dark-3 dark:text-gray-400"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-1.5 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-white">Scan</span>
                    <span className="text-gray-400">
                        <svg className="w-3 h-3 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">🏠</span>
                    <span className="text-gray-400 hidden sm:inline">
                        <svg className="w-3 h-3 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">Private Assets</span>
                    <span className="text-gray-400 hidden sm:inline">
                        <svg className="w-3 h-3 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                    <span className="text-primary font-medium hidden sm:inline">New Scan</span>
                </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-surface-dark-3 dark:text-gray-400 transition-colors"
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>

                <button
                    onClick={() => addToast('Report exported successfully!', 'success')}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark-3 transition-colors"
                >
                    Export Report
                </button>
                <button
                    onClick={() => addToast('Scan stopped', 'warning')}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-critical text-white text-sm font-medium hover:bg-red-600 transition-colors"
                >
                    Stop Scan
                </button>
            </div>
        </header>
    );
}
