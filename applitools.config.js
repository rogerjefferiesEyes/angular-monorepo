
module.exports = {
    testConcurrency: 5,
    browser: [
        { width: 1600, height: 900, name: 'firefox' },
        { width: 1600, height: 900, name: 'chrome' },
        { width: 1920, height: 1080, name: 'edgechromium' },
        { deviceName: 'iPhone X', screenOrientation: 'portrait', name: 'chrome' },
        { deviceName: 'Galaxy S10 Plus', screenOrientation: 'portrait', name: 'chrome' },
        { deviceName: 'iPad Air 2', screenOrientation: 'landscape' },
        {
            iosDeviceInfo: {
                deviceName: 'iPhone 11 Pro',
                screenOrientation: 'portrait',
                iosVersion: 'latest-1'
            }
        }
    ],
    showLogs: false,
    failCypressOnDiff: true,
    notifyOnCompletion: true,
    batch: {
        name: 'Angular MonoRepo Example',
        notifyOnCompletion: true
    },
    accessibilityValidation: {level: 'AAA', guidelinesVersion: 'WCAG_2_1'}
}
