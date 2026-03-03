import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
    { path: '#projects', label: 'Projects', icon: ProjectsIcon },
    { path: '#scans', label: 'Scans', icon: ScansIcon },
    { path: '#schedule', label: 'Schedule', icon: ScheduleIcon },
];

const bottomNavItems = [
    { path: '#notifications', label: 'Notifications', icon: NotificationsIcon },
    { path: '#settings', label: 'Settings', icon: SettingsIcon },
    { path: '#support', label: 'Support', icon: SupportIcon },
];

export function Sidebar({ mobileOpen, onClose }) {
    const location = useLocation();

    const isActive = (path) => {
        if (path.startsWith('#')) {
            return false;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Mobile overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
            )}

            <aside className={`
        fixed top-0 left-0 h-full z-50 flex flex-col
        w-[220px] bg-white dark:bg-surface-dark-2
        border-r border-gray-200 dark:border-gray-800
        transition-transform duration-300
        lg:translate-x-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                {/* Logo */}
                <div className="flex items-center gap-2.5 px-5 h-16 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-bold">●</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">aps</span>
                </div>

                {/* Primary nav */}
                <nav className="flex-1 flex flex-col px-3 pt-2">
                    <div className="flex flex-col gap-1.5">
                        {navItems.map(item => {
                            const Icon = item.icon;
                            const active = isActive(item.path);
                            return (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                    ${active
                                            ? 'bg-primary text-white shadow-md shadow-primary/25'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-dark-3 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    <Icon active={active} />
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </div>

                    {/* Secondary nav */}
                    <div className="flex flex-col gap-1.5 mt-8">
                        {bottomNavItems.map(item => {
                            const Icon = item.icon;
                            const active = isActive(item.path);
                            return (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                    text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-dark-3 hover:text-gray-900 dark:hover:text-white`}
                                >
                                    <Icon active={active} />
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>

                {/* User profile */}
                <div className="px-3 pb-4">
                    <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-surface-dark-3 cursor-pointer transition-colors">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                            A
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">admin@edu.com</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 truncate">Security Lead</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </aside>
        </>
    );
}

/* ── Icon Components ── */

function DashboardIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
        </svg>
    );
}

function ProjectsIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
    );
}

function ScansIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}

function ScheduleIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    );
}

function NotificationsIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
    );
}

function SettingsIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function SupportIcon({ active }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}
