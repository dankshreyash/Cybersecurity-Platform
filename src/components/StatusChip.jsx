export function StatusChip({ status }) {
    const styles = {
        Completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
        Scheduled: 'bg-gray-100 text-gray-600 dark:bg-gray-700/50 dark:text-gray-400',
        Failed: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400',
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${styles[status] || styles.Scheduled}`}>
            {status}
        </span>
    );
}
