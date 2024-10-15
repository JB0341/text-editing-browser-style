const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
    console.log('beforeinstallprompt', event);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) return;

        promptEvent.prompt();
        const result = await promptEvent.userChoice;
        console.log('👍', 'userChoice', result);
        window.deferredPrompt = null;
        butInstall.style.display = 'none';
    });

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.addEventListener('appinstalled', (event) => {
        console.log('👍', 'appinstalled', event);
        window.deferredPrompt = null;
    });

});
