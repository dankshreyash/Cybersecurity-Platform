import { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { useToast } from '../context/ToastContext';
import { scanSteps, scanMetadata, activityLogs, verificationLogs, findings, bottomStats } from '../data/mockData';

export default function ScanDetail() {
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('activity');
    const [consoleOpen, setConsoleOpen] = useState(true);

    return (
        <DashboardLayout>
            <div className="p-4 lg:p-6 space-y-5">
                {/* Top Section - Progress + Step Tracker */}
                <div className="bg-white dark:bg-surface-dark-2 rounded-xl border border-gray-200 dark:border-gray-800 p-5 lg:p-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        {/* Circular Progress */}
                        <div className="shrink-0">
                            <div className="relative w-28 h-28">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-surface-dark-4" />
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#0CC8A8" strokeWidth="8"
                                        strokeDasharray={`${2 * Math.PI * 42}`}
                                        strokeDashoffset={`${2 * Math.PI * 42}`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">0%</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">In Progress</span>
                                </div>
                            </div>
                        </div>

                        {/* Step Tracker */}
                        <div className="flex-1 w-full">
                            <div className="flex items-center justify-between gap-2 lg:gap-0">
                                {scanSteps.map((step, idx) => (
                                    <div key={step.id} className="flex flex-col items-center flex-1 relative">
                                        {/* Connector line */}
                                        {idx < scanSteps.length - 1 && (
                                            <div className="hidden lg:block absolute top-5 left-[55%] right-[-45%] h-0.5 bg-gray-200 dark:bg-surface-dark-4" />
                                        )}
                                        {/* Icon */}
                                        <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors
                      ${step.status === 'active'
                                                ? 'bg-primary text-white shadow-md shadow-primary/25'
                                                : 'bg-gray-100 dark:bg-surface-dark-3 text-gray-400 dark:text-gray-500'
                                            }`}>
                                            <StepIcon name={step.icon} />
                                        </div>
                                        <span className={`text-xs font-medium text-center
                      ${step.status === 'active' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                                            {step.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Metadata Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                        <MetaItem label="Scan Type" value={scanMetadata.scanType} />
                        <MetaItem label="Targets" value={scanMetadata.targets} />
                        <MetaItem label="Started At" value={scanMetadata.startedAt} />
                        <MetaItem label="Credentials" value={scanMetadata.credentials} />
                        <MetaItem label="Files" value={scanMetadata.files} />
                        <MetaItem label="Checklists" value={scanMetadata.checklists} accent />
                    </div>
                </div>

                {/* Console + Findings */}
                <div className="bg-white dark:bg-surface-dark-2 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="font-semibold text-sm text-gray-900 dark:text-white">Live Scan Console</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-surface-dark-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                                ⟳ Running...
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setConsoleOpen(!consoleOpen)}
                                className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-dark-3 transition-colors"
                            >
                                <svg className={`w-4 h-4 transition-transform ${consoleOpen ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => addToast('Console cleared', 'info')}
                                className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-dark-3 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {consoleOpen && (
                        <div className="flex flex-col lg:flex-row">
                            {/* Left: Console */}
                            <div className="flex-1 border-r-0 lg:border-r border-gray-100 dark:border-gray-800">
                                {/* Tabs */}
                                <div className="flex items-center gap-0 px-5 border-b border-gray-100 dark:border-gray-800">
                                    <button
                                        onClick={() => setActiveTab('activity')}
                                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors
                      ${activeTab === 'activity'
                                                ? 'border-primary text-primary'
                                                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        Activity Log
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('verification')}
                                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors
                      ${activeTab === 'verification'
                                                ? 'border-primary text-primary'
                                                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        Verification Loops
                                    </button>
                                </div>

                                {/* Log entries */}
                                <div className="p-5 space-y-4 max-h-[400px] overflow-y-auto font-mono text-sm">
                                    {(activeTab === 'activity' ? activityLogs : verificationLogs).map((log, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">[{log.time}]</span>
                                            <p
                                                className="text-gray-700 dark:text-gray-300 leading-relaxed break-words"
                                                dangerouslySetInnerHTML={{ __html: log.message.replace(/\n/g, '<br/>') }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Finding Log */}
                            <div className="w-full lg:w-[380px] shrink-0">
                                <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Finding Log</span>
                                </div>
                                <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
                                    {findings.map(finding => (
                                        <FindingCard key={finding.id} finding={finding} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white dark:bg-surface-dark-2 border border-gray-200 dark:border-gray-800 text-xs">
                    <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            Sub-Agents: {bottomStats.subAgents}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            Parallel Executions: {bottomStats.parallelExecutions}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            Operations: {bottomStats.operations}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-critical font-medium">Critical: {bottomStats.critical}</span>
                        <span className="text-high font-medium">High: {bottomStats.high}</span>
                        <span className="text-medium font-medium">Medium: {bottomStats.medium}</span>
                        <span className="text-low font-medium">Low: {bottomStats.low}</span>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

/* ── Sub-components ── */

function MetaItem({ label, value, accent }) {
    return (
        <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</p>
            <p className={`text-sm font-semibold ${accent ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>{value}</p>
        </div>
    );
}

function FindingCard({ finding }) {
    const severityColors = {
        critical: 'bg-critical',
        high: 'bg-high',
        medium: 'bg-medium',
        low: 'bg-low',
    };

    return (
        <div className="p-4 rounded-xl bg-gray-50 dark:bg-surface-dark-3 border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wide ${severityColors[finding.severity]}`}>
                    {finding.severity}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">{finding.time}</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{finding.title}</h4>
            <p className="text-xs text-primary font-medium mb-2">{finding.endpoint}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{finding.description}</p>
        </div>
    );
}

function StepIcon({ name }) {
    const icons = {
        spider: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        mapping: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        testing: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.96l-6.93-12a2 2 0 00-3.5 0l-6.93 12A2 2 0 005.07 19z" />
            </svg>
        ),
        validating: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        reporting: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    };

    return icons[name] || null;
}
