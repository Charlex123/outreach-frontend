/*global chrome*/
console.log('background.js')


chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {

    if (message.action === "authenticate") {
      // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
      try {
        console.log('message detail',message.details);
        // const response = await fetch("http://localhost:3000/label/create", {
        //       method: "POST",
        //       body: JSON.stringify(message.details),
        //       headers: {
        //         "Content-Type": "application/json",
        //         withCredentials: true,
        //         authorization: `Bearer ${message.details.authUser}`
        //       },
        //     });
        
        //     if (response.ok) {
        //       const responseData = await response.json();
        //       console.log("Draft created:", responseData);
        //       sendResponse(sender.tab.id, { action: "draftCreated", data: responseData });
        //       chrome.tabs.sendMessage(sender.tab.id, { action: "draftCreated", data: responseData });
        //     } else {
        //       console.error("Error creating draft:", response.status);
        //       sendResponse(sender.tab.id, { action: "draftCreationError" });
        //     }
      } catch(error){
          console.log('authentication error message',error.message)
      }
    }else if (message.action === "sendemailcampaign") {
        // Create a new tab and store its ID:: chrome.runtime.getURL("index.html")
        try {
            const response = await fetch("http://localhost:3000/label/create", {
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
    //   const response = await fetch("http://localhost:3000/label/create",{
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
      const response = await fetch("http://localhost:3000/label/create", {
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
  
