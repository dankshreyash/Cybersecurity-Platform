export const scans = [
    { id: 1, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 23, low: 18, lastScan: '4d ago' },
    { id: 2, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 23, low: 18, lastScan: '4d ago' },
    { id: 3, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 23, low: 18, lastScan: '4d ago' },
    { id: 4, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 23, low: 18, lastScan: '4d ago' },
    { id: 5, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 21, low: 19, lastScan: '4d ago' },
    { id: 6, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 23, low: 18, lastScan: '4d ago' },
    { id: 7, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, critical: 5, high: 12, medium: 21, low: 19, lastScan: '4d ago' },
    { id: 8, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, critical: 5, high: 12, medium: null, low: null, lastScan: '4d ago' },
    { id: 9, name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, critical: 5, high: 12, medium: null, low: null, lastScan: '4d ago' },
    { id: 10, name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, critical: 2, high: 4, medium: 8, low: 1, lastScan: '3d ago' },
    { id: 11, name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, critical: 2, high: 4, medium: 8, low: 1, lastScan: '3d ago' },
    { id: 12, name: 'API Gateway', type: 'Greybox', status: 'Completed', progress: 100, critical: 8, high: 15, medium: 30, low: 12, lastScan: '2d ago' },
    { id: 13, name: 'Cloud Infrastructure', type: 'Blackbox', status: 'Completed', progress: 100, critical: 3, high: 7, medium: 14, low: 6, lastScan: '1d ago' },
    { id: 14, name: 'Mobile Backend', type: 'Greybox', status: 'Completed', progress: 100, critical: 6, high: 9, medium: 18, low: 22, lastScan: '5d ago' },
    { id: 15, name: 'Payment Service', type: 'Greybox', status: 'Completed', progress: 100, critical: 1, high: 3, medium: 8, low: 5, lastScan: '6d ago' },
];

export const statsData = {
    critical: { count: 86, change: '+2%', direction: 'up', label: 'increase from yesterday' },
    high: { count: 16, change: '+0.9%', direction: 'up', label: 'increase from yesterday' },
    medium: { count: 26, change: '+0.9%', direction: 'down', label: 'decrease from yesterday' },
    low: { count: 16, change: '+0.9%', direction: 'up', label: 'increase from yesterday' },
};

export const projectInfo = {
    org: 'Project X',
    owner: 'Nammagiri',
    totalScans: 100,
    scheduled: 1000,
    rescans: 100,
    failedScans: 100,
    lastUpdated: '10 mins ago',
};

export const scanSteps = [
    { id: 1, name: 'Spidering', icon: 'spider', status: 'active' },
    { id: 2, name: 'Mapping', icon: 'mapping', status: 'pending' },
    { id: 3, name: 'Testing', icon: 'testing', status: 'pending' },
    { id: 4, name: 'Validating', icon: 'validating', status: 'pending' },
    { id: 5, name: 'Reporting', icon: 'reporting', status: 'pending' },
];

export const scanMetadata = {
    scanType: 'Grey Box',
    targets: 'google.com',
    startedAt: 'Nov 22, 09:00AM',
    credentials: '2 Active',
    files: 'Control.pdf',
    checklists: '40/350',
};

export const activityLogs = [
    {
        time: '09:00:00',
        message: 'I\'ll begin a systematic penetration test on <span class="text-primary">helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.',
    },
    {
        time: '09:01:00',
        message: 'Good! target is online. Now let me perform port scanning to identify running services.',
    },
    {
        time: '09:02:00',
        message: 'Excellent reconnaissance results:\n\n    - <span class="text-primary">helpdesk.democorp.com</span>: Apache httpd 2.4.65 on port 80 (web server)\n\nLet me probe the web server on target first to understand its structure.',
    },
    {
        time: '09:03:00',
        message: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span class="text-amber-400">"TODO: Delete the testing account (test:test)"</span>. Let me test this credential. The login redirects to <span class="text-primary">/password/test</span> . Let me follow that path and explore it.',
    },
    {
        time: '09:04:00',
        message: 'The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to <span class="text-amber-400">\'#\'</span> which means the current page. Let me try a different approach.',
    },
    {
        time: '09:05:00',
        message: 'It redirects back to /password/test. Let me check if there\'s an /api endpoint or look for other paths. Let me also try exploring with the <span class="text-primary">test:test</span> password directly on other endpoints.',
    },
    {
        time: '09:06:00',
        message: 'Great! I can access the dashboard using the <span class="text-amber-400">\'X-UserId: 10032\'</span> header. The dashboard shows "Welcome, John Doe". This suggests an <span class="font-bold text-amber-300">**IDOR vulnerability**</span> - I can access any user\'s dashboard by just changing the X-UserId header. Let me explore more of the application...',
    },
];

export const verificationLogs = [
    {
        time: '09:10:00',
        message: 'Starting verification of discovered vulnerabilities. Re-testing SQL injection on <span class="text-primary">/api/users/profile</span>...',
    },
    {
        time: '09:11:00',
        message: 'SQL injection confirmed. Payload: <span class="text-amber-400">\' OR 1=1 --</span> returns full user database. Severity: Critical.',
    },
    {
        time: '09:12:00',
        message: 'Verifying IDOR on user metadata endpoint. Confirmed: changing X-UserId header allows access to any user profile.',
    },
];

export const findings = [
    {
        id: 1,
        severity: 'critical',
        time: '18:45:23',
        title: 'SQL Injection in Authentication Endpoint',
        endpoint: '/api/users/profile',
        description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
    },
    {
        id: 2,
        severity: 'high',
        time: '18:45:23',
        title: 'Unauthorized Access to User Metadata',
        endpoint: '/api/auth/login',
        description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    },
    {
        id: 3,
        severity: 'medium',
        time: '18:45:23',
        title: 'Broken Authentication Rate Limiting',
        endpoint: '/api/search',
        description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    },
];

export const bottomStats = {
    subAgents: 0,
    parallelExecutions: 2,
    operations: 1,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
};
