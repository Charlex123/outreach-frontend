
chrome.runtime.onInstalled.addListener(function() {
    //alert('You just made the best decision of today, by installing GMass!\n\nWe will now redirect you to your Gmail account so you can get started sending email campaigns inside Gmail.');
	//window.open("https://mail.google.com");
	chrome.tabs.create({
                // TODO(brad): Handle inbox?
                url: 'https://mail.google.com',
                active: true
    });
});

if (chrome.runtime.setUninstallURL) {
    chrome.runtime.setUninstallURL('https://forms.gle/EZgemg7M7RtFviuD8');
}