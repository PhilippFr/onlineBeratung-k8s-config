config.tokenAuthUrl = 'static/authError.html';
config.disableDeepLinking = true;
config.enableClosePage = true;
config.defaultLanguage = 'de';
config.toolbarButtons = [
    'microphone',
    'camera',
    'hangup',
    'desktop',
    'settings',
    'select-background',
    //'tileview'
];
config.defaultLocalDisplayName = 'Ich';
config.defaultRemoteDisplayName = 'Ratsuchender';
config.disableModeratorIndicator = true;
config.connectionIndicators = {
    disabled: true,
    disableDetails: true,
}
config.toolbarConfig = {
    initialTimeout: 5000,
    alwaysVisible: false,
    timeout: 4000,
};
config.dynamicBrandingUrl = '/dynamicBranding.json';
config.remoteVideoMenu = {
    disableGrantModerator: true,
}
config.disabledSounds = [
    'E2EE_OFF_SOUND',
    'E2EE_ON_SOUND'
];