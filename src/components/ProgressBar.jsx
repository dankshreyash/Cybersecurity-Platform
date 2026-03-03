export function ProgressBar({ progress, status }) {
    const getBarColor = () => {
        if (status === 'Failed') return 'bg-critical';
        if (status === 'Scheduled') return 'bg-primary';
        return 'bg-primary';
    };

    return (
        <div className="flex items-center gap-3 w-full">
            <div className="relative flex-1 h-2.5 bg-gray-200 dark:bg-surface-dark-4 rounded-full overflow-hidden">
                <div
                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${getBarColor()}`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                />
            </div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap min-w-[36px]">
                {progress}%
            </span>
        </div>
    );
}
