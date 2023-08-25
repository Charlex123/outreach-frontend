/*global chrome*/
console.log('background.js')


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
            if (response.ok) {
              const responseData = await response.json();
              // sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
              console.log('uemail', responseData.email)
              if(responseData.email === message.details) {
                sendResponse(sender.tab.id, { action: "userauthenticationSuccess", data: responseData });
                chrome.tabs.sendMessage(sender.tab.id, { action: "userauthenticationSuccess", data: responseData });
              }else {
                sendResponse(sender.tab.id, { action: "userauthenticationfailure" });
                chrome.tabs.sendMessage(sender.tab.id, { action: "userauthenticationfailure" });
              }
              
            } else {
              console.error("Error authenticating user:", response.status);
              sendResponse(sender.tab.id, { action: "userauthenticationfailure" });
            }
      } catch(error){
          console.log('authentication error message',error.message)
      }
    }else if (message.action === "checkforfirstemailcampaign") {
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
              console.log('checkfirstmail email', responseData.message)
              if(responseData.message === message.details) {
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
    }else if (message.action === "sendemailcampaign") {
        // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
        try {
            const response = await fetch("https://theoutreachapp.onrender.com/label/create", {
              method: "POST",
              body: JSON.stringify(message.details),
              headers: {
                "Content-Type": "application/json",
                withCredentials: true,
                authorization: `Bearer ${message.details.authUser}`
              },
            });
        
            if (response.ok) {
              const responseData = await response.json();
              console.log("Draft created:", responseData);
              sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
              chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
            } else {
              console.error("Error creating draft:", response.status);
              sendResponse(sender.tab.id, { action: "draftCreationError" });
            }
          } catch (error) {
            console.error("Error creating draft:", error.message);
            sendResponse(sender.tab.id, { action: "draftCreationError" });
          }
    }else if (message.action === "createCampaignDraft"){
    //   //send campaign to the server
    //   const response = await fetch("https://theoutreachapp.onrender.com/label/create",{
    //     method:"POST",
    //     body:JSON.stringify(message.details),
    //     headers:{
    //       "Content-Type":"application/json",
    //       withCredentials: true, 
    //       "authorization":`Bearer ${message.details.authUser}`
    //     },
    //   })
    //   console.log(JSON.stringify(response.body))
    //   // console.log("creating draft",message.details)
    //   // console.log("creating draft")
    //   //send message to content screipt with draft data
    //   // sendResponse("draft created":)
    //   sendResponse(sender.tab.id, { action: "draftCreated",data:JSON.stringify(response.json()) });
    // }
  
  
  
  
    try {
      const response = await fetch("https://theoutreachapp.onrender.com/label/create", {
        method: "POST",
        body: JSON.stringify(message.details),
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
          authorization: `Bearer ${message.details.authUser}`
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Draft created:", responseData);
        sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
        chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
      } else {
        console.error("Error creating draft:", response.status);
        sendResponse(sender.tab.id, { action: "draftCreationError" });
      }
    } catch (error) {
      console.error("Error creating draft:", error.message);
      sendResponse(sender.tab.id, { action: "draftCreationError" });
    }
    }
  });
  
