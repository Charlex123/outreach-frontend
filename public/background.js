/*global chrome*/
chrome.runtime.onInstalled.addListener(function() {
    //alert('You just made the best decision of today, by installing GMass!\n\nWe will now redirect you to your Gmail account so you can get started sending email campaigns inside Gmail.');
  //window.open("https://mail.google.com");
  chrome.tabs.create({
                // TODO(brad): Handle inbox?
                url: 'https://mail.google.com/',
                active: true
    });
  });
  
  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  
      if (message.action === "authenticate") {
        // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
        try {
          console.log('message detail',message.details);
          const response = await fetch("https://theoutreachapp.onrender.com/user/verifyuser", {
                method: "POST",
                body: JSON.stringify({'email':message.details}),
                headers: {
                  "Accept": "application/json",
                  'Content-Type': 'application/json',
                },
          });
          console.log('verify user ',response)
          if (response.ok) {
            const responseData = await response.json();
            // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
            
            chrome.storage.local.set({ userdetaila: responseData }).then(() => {
              // console.log("userdetailia is set");
            });
            if(responseData.email === message.details) {
              sendResponse(sender.tab.id, { action: "userauthenticationSuccess", data: responseData });
              chrome.tabs.sendMessage(sender.tab.id, { action: "userauthenticationSuccess", data: responseData });
            }else {
              sendResponse(sender.tab.id, { action: "userauthenticationfailure" });
              chrome.tabs.sendMessage(sender.tab.id, { action: "userauthenticationfailure" });
            }
            
          } else {
            console.error("Error authenticating user:", response.status);
            chrome.tabs.create({
              // TODO(brad): Handle inbox?
              url: 'https://theoutreachapp.onrender.com/auth/google',
              active: true
            });
          }
        } catch(error){
            chrome.tabs.create({
              // TODO(brad): Handle inbox?
              url: 'https://theoutreachapp.onrender.com/auth/google',
              active: true
            });
            console.log('authentication error message',error.message)
        }
      }
      
      if (message.action === "checkforfirstemailcampaign") {
        // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
        try {
          console.log('message detail',message.details);
          const response = await fetch("https://theoutreachapp.onrender.com/campaigns/checkfirstmailcampaign", {
                method: "POST",
                body: JSON.stringify({'email':message.details}),
                headers: {
                  "Accept": "application/json",
                  'Content-Type': 'application/json',
                },
              });
              if (response.ok) {
                const responseData = await response.json();
                // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
                console.log('checkfirstmail response', responseData)
                console.log('checkfirstmail email', responseData.message)
                if(responseData.message === "true") {
                  sendResponse(sender.tab.id, { action: "firstemailcampaigntrue", data: responseData });
                  chrome.tabs.sendMessage(sender.tab.id, { action: "firstemailcampaigntrue", data: responseData });
                }else {
                  sendResponse(sender.tab.id, { action: "firstemailcampaignfalse" });
                  chrome.tabs.sendMessage(sender.tab.id, { action: "firstemailcampaignfalse" });
                }
                
              } else {
                console.error("Error authenticating user:", response.status);
                sendResponse(sender.tab.id, { action: "userauthenticationfailure" });
              }
        } catch(error){
            console.log('authentication error message',error.message)
        }
      }
      
      if (message.action === "sendmailcampaign") {
          // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
          try {
              console.log(message.details)
              const response = await fetch("https://theoutreachapp.onrender.com/campaigns/sendemailcampaign", {
                method: "POST",
                body: JSON.stringify(message.details),
                headers: {
                  "Content-Type": "application/json"
                },
              });
          
              if (response.ok) {
                const responseData = await response.json();
                console.log("Email campaign created:", responseData);
                // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
                // chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
              } else {
                console.error("Error creating draft:", response.status);
                // sendResponse(sender.tab.id, { action: "draftCreationError" });
              }
            } catch (error) {
              console.error("Error creating draft:", error.message);
              sendResponse(sender.tab.id, { action: "draftCreationError" });
            }
      }

      if (message.action === "sendautofollowup") {
        // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
        try {
            console.log(message.details)
            const response = await fetch("https://theoutreachapp.onrender.com/campaigns/sendautofollowup", {
              method: "POST",
              body: JSON.stringify(message.details),
              headers: {
                "Content-Type": "application/json"
              },
            });
        
            if (response.ok) {
              const responseData = await response.json();
              console.log("Email Autofollowup sent successfully:", responseData);
              // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
              // chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
            } else {
              console.error("Error sending autofollowup draft:", response.status);
              // sendResponse(sender.tab.id, { action: "draftCreationError" });
            }
          } catch (error) {
            console.error("Error sending autofollowup draft:", error);
            sendResponse(sender.tab.id, { action: "autofollowup send error" });
          }
    }

    if (message.action === "sendschedule") {
      // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
      try {
          console.log(message.details)
          const response = await fetch("https://theoutreachapp.onrender.com/campaigns/sendschedule", {
            method: "POST",
            body: JSON.stringify(message.details),
            headers: {
              "Content-Type": "application/json"
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log("Email schedule sent successfully:", responseData);
            // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
            // chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
          } else {
            console.error("Error sending schedule draft:", response.status);
            // sendResponse(sender.tab.id, { action: "draftCreationError" });
          }
        } catch (error) {
          console.error("Error sending schedule draft:", error);
          sendResponse(sender.tab.id, { action: "schedule send error" });
        }
  }

    });
    
  //   chrome.runtime.onInstalled.addListener(function() {
  //     //alert('You just made the best decision of today, by installing GMass!\n\nWe will now redirect you to your Gmail account so you can get started sending email campaigns inside Gmail.');
  // 	//window.open("https://mail.google.com");
  // 	chrome.tabs.create({
  //                 // TODO(brad): Handle inbox?
  //                 url: 'https://mail.google.com',
  //                 active: true
  //     });
  // });
  
  if (chrome.runtime.setUninstallURL) {
      chrome.runtime.setUninstallURL('https://forms.gle/qJapwFkCFjrmNbK39');
  }