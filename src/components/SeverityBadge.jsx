export function SeverityBadge({ severity, count }) {
    const colorMap = {
        critical: 'bg-critical text-white',
        high: 'bg-high text-white',
        medium: 'bg-medium text-white',
        low: 'bg-low text-white',
    };

    if (count === null || count === undefined) return null;

    return (
        <span className={`inline-flex items-center justify-center min-w-[28px] h-[24px] px-1.5 rounded-md text-xs font-semibold ${colorMap[severity] || 'bg-gray-400 text-white'}`}>
            {count}
        </span>
    );
}
