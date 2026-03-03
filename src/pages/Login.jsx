import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Login() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [agreed, setAgreed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleChange = (field) => (e) => {
        setForm(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="h-screen relative overflow-hidden flex">
            {/* Full background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0d1f2d] to-[#1a0a1a]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-orange-600/20" />
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-to-tl from-orange-500/30 via-rose-500/15 to-transparent rounded-tl-[40%]" />
            <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl" />

            {/* Theme toggle */}
            <button
                onClick={toggleTheme}
                className="absolute top-5 right-5 z-20 p-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
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

            {/* Left side - Text content */}
            <div className="relative z-10 flex-1 flex flex-col justify-between py-8 px-8 lg:py-8 lg:px-14 h-screen">
                {/* Logo at top */}
                <div className="flex items-center gap-2.5 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-bold">●</span>
                    </div>
                    <span className="text-xl font-bold text-white">aps</span>
                </div>

                {/* Middle: Headline + Features */}
                <div className="max-w-[420px]">
                    <h1 className="text-[26px] lg:text-[34px] font-bold text-white leading-[1.3] mb-6">
                        Expert level Cybersecurity<br />
                        in <span className="text-primary">hours</span> not weeks.
                    </h1>

                    <div>
                        <h3 className="text-[13px] font-bold text-white mb-3">What's included</h3>
                        <ul className="space-y-2">
                            {[
                                'Effortlessly spider and map targets to uncover hidden security flaws',
                                'Deliver high-quality, validated findings in hours, not weeks.',
                                'Generate professional, enterprise-grade security reports automatically.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-[13px] text-gray-300/90 leading-relaxed">
                                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom: Trustpilot */}
                <div className="shrink-0">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-amber-400 text-sm">★</span>
                        <span className="text-[13px] font-semibold text-white">Trustpilot</span>
                    </div>
                    <p className="text-white">
                        <span className="text-lg font-bold">Rated 4.5/5.0</span>
                        <span className="text-[13px] text-gray-400 ml-2">(100k+ reviews)</span>
                    </p>
                </div>
            </div>

            {/* Right side - Floating Sign Up Card */}
            <div className="relative z-10 flex items-center justify-center py-6 pr-6 lg:py-8 lg:pr-14 h-screen">
                <div className="w-[370px] bg-white dark:bg-surface-dark-2 rounded-2xl shadow-2xl shadow-black/25 px-7 py-6 max-h-full overflow-y-auto">
                    <h2 className="text-[22px] font-bold text-gray-900 dark:text-white text-center mb-1">
                        Sign up
                    </h2>
                    <p className="text-[13px] text-gray-500 dark:text-gray-400 text-center mb-5">
                        Already have an account?{' '}
                        <a href="#" className="text-gray-900 dark:text-white underline font-medium hover:text-primary transition-colors">
                            Log in
                        </a>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="text"
                            placeholder="First name*"
                            value={form.firstName}
                            onChange={handleChange('firstName')}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Last name*"
                            value={form.lastName}
                            onChange={handleChange('lastName')}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email address*"
                            value={form.email}
                            onChange={handleChange('email')}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password (8+ characters)*"
                                value={form.password}
                                onChange={handleChange('password')}
                                required
                                minLength={8}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                {showPassword ? (
                                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-2.5 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="mt-0.5 w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary accent-primary shrink-0"
                            />
                            <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                I agree to Aps's{' '}
                                <a href="#" className="text-primary hover:underline font-semibold">Terms & Conditions</a>
                                {' '}and acknowledge the{' '}
                                <a href="#" className="text-primary hover:underline font-semibold">Privacy Policy</a>
                            </span>
                        </label>

                        {/* Create Account */}
                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-3xl bg-primary text-white font-semibold text-[13px] hover:bg-primary-dark active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/25"
                        >
                            Create account
                        </button>
                    </form>

                    {/* Social login */}
                    <div className="grid grid-cols-3 gap-2.5 mt-3.5">
                        <button className="flex items-center justify-center py-2.5 rounded-3xl bg-black text-white hover:bg-gray-800 transition-colors">
                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center py-2.5 rounded-3xl bg-white dark:bg-surface-dark-3 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-surface-dark-4 transition-colors">
                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center py-2.5 rounded-3xl bg-[#0082FB] text-white hover:bg-[#006ED4] transition-colors">
                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
