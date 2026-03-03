import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';
import { SeverityBadge } from '../components/SeverityBadge';
import { StatusChip } from '../components/StatusChip';
import { ProgressBar } from '../components/ProgressBar';
import { useToast } from '../context/ToastContext';
import { scans, statsData, projectInfo } from '../data/mockData';

export default function Dashboard() {
    const navigate = useNavigate();
    const { addToast } = useToast();
    const [search, setSearch] = useState('');

    const filteredScans = useMemo(() => {
        if (!search.trim()) return scans;
        const q = search.toLowerCase();
        return scans.filter(s =>
            s.name.toLowerCase().includes(q) ||
            s.type.toLowerCase().includes(q) ||
            s.status.toLowerCase().includes(q)
        );
    }, [search]);

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-6 space-y-5">
                {/* Project Info Bar */}
                <div className="flex flex-wrap items-center gap-4 lg:gap-6 px-4 py-3 rounded-xl bg-white dark:bg-surface-dark-2 border border-gray-200 dark:border-gray-800 text-sm">
                    <InfoPill label="Org" value={projectInfo.org} />
                    <Divider />
                    <InfoPill label="Owner" value={projectInfo.owner} />
                    <Divider />
                    <InfoPill label="Total Scans" value={projectInfo.totalScans} />
                    <Divider />
                    <InfoPill label="Scheduled" value={projectInfo.scheduled} />
                    <Divider />
                    <InfoPill label="Rescans" value={projectInfo.rescans} />
                    <Divider />
                    <InfoPill label="Failed Scans" value={projectInfo.failedScans} />
                    <div className="flex items-center gap-1.5 ml-auto text-gray-400 text-xs">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {projectInfo.lastUpdated}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    <StatCard severity="critical" label="Critical Severity" data={statsData.critical} />
                    <StatCard severity="high" label="High Severity" data={statsData.high} />
                    <StatCard severity="medium" label="Medium Severity" data={statsData.medium} />
                    <StatCard severity="low" label="Low Severity" data={statsData.low} />
                </div>

                {/* Scan Table Container */}
                <div className="bg-white dark:bg-surface-dark-2 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-800">
                        {/* Search */}
                        <div className="relative flex-1">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search scans by name or type..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-surface-dark-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark-3 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Filter
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-dark-3 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                                </svg>
                                Column
                            </button>
                            <button
                                onClick={() => addToast('New scan initiated successfully!', 'success')}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                New scan
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scan Name</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[160px]">Progress</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vulnerability</th>
                                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Scan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredScans.map((scan) => (
                                    <tr
                                        key={scan.id}
                                        onClick={() => navigate(`/scan/${scan.id}`)}
                                        className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-surface-dark-3 cursor-pointer transition-colors"
                                    >
                                        <td className="px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-white">{scan.name}</td>
                                        <td className="px-4 py-3.5 text-sm text-gray-500 dark:text-gray-400">{scan.type}</td>
                                        <td className="px-4 py-3.5"><StatusChip status={scan.status} /></td>
                                        <td className="px-4 py-3.5"><ProgressBar progress={scan.progress} status={scan.status} /></td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-1.5">
                                                <SeverityBadge severity="critical" count={scan.critical} />
                                                <SeverityBadge severity="high" count={scan.high} />
                                                <SeverityBadge severity="medium" count={scan.medium} />
                                                <SeverityBadge severity="low" count={scan.low} />
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{scan.lastScan}</td>
                                    </tr>
                                ))}
                                {filteredScans.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-12 text-center text-sm text-gray-400 dark:text-gray-500">
                                            No scans found matching "{search}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination footer */}
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                        <span>Showing {filteredScans.length} of {scans.length} Scans</span>
                        <div className="flex items-center gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-dark-3 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-dark-3 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

/* ── Sub-components ── */

function StatCard({ severity, label, data }) {
    const iconColors = {
        critical: 'bg-critical-bg dark:bg-critical-bg-dark text-critical',
        high: 'bg-high-bg dark:bg-high-bg-dark text-high',
        medium: 'bg-medium-bg dark:bg-medium-bg-dark text-medium',
        low: 'bg-low-bg dark:bg-low-bg-dark text-low',
    };

    const icons = {
        critical: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
        ),
        high: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        medium: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        low: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    };

    const changeColor = data.direction === 'down'
        ? 'text-primary'
        : severity === 'critical' || severity === 'high'
            ? 'text-critical'
            : 'text-primary';

    return (
        <div className="bg-white dark:bg-surface-dark-2 rounded-xl border border-gray-200 dark:border-gray-800 p-4 lg:p-5">
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconColors[severity]}`}>
                    {icons[severity]}
                </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{data.count}</div>
            <p className={`text-xs ${changeColor}`}>
                <span>{data.direction === 'up' ? '↑' : '↓'}</span>{' '}
                {data.change} {data.label}
            </p>
        </div>
    );
}

function InfoPill({ label, value }) {
    return (
        <div className="flex items-center gap-1.5">
            <span className="text-gray-500 dark:text-gray-400 text-xs">{label}:</span>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">{value}</span>
        </div>
    );
}

function Divider() {
    return <div className="hidden lg:block w-px h-5 bg-gray-200 dark:bg-gray-700" />;
}
