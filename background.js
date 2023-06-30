browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openTab') {
        browser.tabs.create({url: request.url});
    }
});

