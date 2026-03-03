import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

let toastId = 0;

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'info') => {
        const id = ++toastId;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3500);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {/* Toast container */}
            <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium
              animate-[slideIn_0.3s_ease-out] cursor-pointer min-w-[280px] max-w-[400px]
              ${toast.type === 'success' ? 'bg-primary text-white' :
                                toast.type === 'error' ? 'bg-critical text-white' :
                                    toast.type === 'warning' ? 'bg-medium text-white' :
                                        'bg-surface-dark-3 text-white dark:bg-surface-light dark:text-gray-900'
                            }`}
                        onClick={() => removeToast(toast.id)}
                    >
                        <span className="text-base">
                            {toast.type === 'success' ? '✓' :
                                toast.type === 'error' ? '✕' :
                                    toast.type === 'warning' ? '⚠' : 'ℹ'}
                        </span>
                        <span>{toast.message}</span>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
}
