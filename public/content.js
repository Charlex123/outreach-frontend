/*global chrome*/

let extensionLoaded = false;

setInterval(injectLunchBtn, 10000);

async function injectLunchBtn() {
    console.log('inject launch btn ran')
    try {
       let tableButton = document?.getElementsByClassName("btC");
       let OutreachBtn = document.createElement("div"); //create button to be injected
       let leftSide = document.createElement("span"); //create button to be injected
       let rightSide = document.createElement("span"); //create button to be injected

       OutreachBtn.className = "btnContainer";
       leftSide.className = "leftSide";
       rightSide.className = "rightSide";
       leftSide.innerText = "Outreach";
       leftSide.setAttribute("role","button");
       rightSide.setAttribute("role","button");
       
       rightSide.innerHTML = `<svg width="8" height="8" class="svg_" viewBox="0 0 12 11" fill="white" xmlns="http://www.w3.org/2000/svg">
       <path d="M0.299099 0.714108L11.7273 0.714107L6.01321 10.6112L0.299099 0.714108Z" fill="white"/>
   </svg>`;
       OutreachBtn.appendChild(leftSide);
       OutreachBtn.appendChild(rightSide);

       for(let v = 0; v <= tableButton.length; v++) {
            
            const childElements = tableButton[v].children;
            // check if button exits

            if(childElements[1].className === "btnContainer") {
               childElements[1].lastElementChild.addEventListener("click", handleArrorClick);

               childElements[1].firstElementChild.addEventListener("click", sendmailCampaign);
            }else {
               const insertIndex = 1;
               const childElement = childElements[insertIndex];
               tableButton[v].insertBefore(OutreachBtn, childElement);
               
               childElements[1].lastElementChild.addEventListener("click", handleArrorClick);

               childElements[1].firstElementChild.addEventListener("click", sendmailCampaign);
            }
    
       }
       
    } catch (error) {
       return false;
    }
 }

 

async function sendmailCampaign() {
    try {
         let checkuseremailaddress = document.title;
         console.log('user email check', checkuseremailaddress);
         let useremailaddress = checkuseremailaddress.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
         console.log('user email address', useremailaddress[0])
         return chrome.runtime.sendMessage({ action: "authenticate", details: useremailaddress[0] });
    } catch (error) {
       console.log("error loading extension frame", error);
       return false;
    }
 }

 async function injectIfram() {
    try {
       
         let injectPoint = document.getElementsByClassName("aoI");

         var hr = new XMLHttpRequest();
         hr.onreadystatechange = function() {
            if (hr.readyState === 4 && hr.status === 200) {
               console.log('get url 2',injectPoint[0])

               injectPoint[0].innerHTML = hr.responseText;
            } else {
               console.log('files not found');
            }
         };
         hr.open("GET", chrome.runtime.getURL('/mailsettings.html'), true);
         hr.send();

        return true;
        } catch (error) {
        console.log("error loading extension frame", error);
        return false;
        }
 }


 

async function handleLoadExtension(e) {
    try {
       if (!extensionLoaded) {
          console.log("loading extension frame");
          extensionLoaded = await injectIfram();
       } else {
         //  console.log("removing extension");
         //  const root = await rootExit();
         //  if (root) {
         //     root.remove();
         //     extensionLoaded = false;
         //  }
       }
    } catch (error) {
    //    e.stopPropagation();
       console.log(error);
    }
 }


 async function rootExit() {
    try {
       let root = document?.getElementById("OutreachFrame");
       if (root) {
          console.log(root);
          return root;
       }
    } catch (error) {
       console.log(error);
       return false;
    }
 }
 
// async function checkToken(key) {
//     try {
//        if (key) {
//           let token = chrome.storage.local.get(`${key}`);
//           if (!token) return false;
//           return token;
//        } else {
//           let token = chrome.storage.local.get(`${chrome.runtime.id}`);
//           if (!token) return false;
//           return token;
//        }
//     } catch (error) {
//        console.log(error);
//        return false;
//     }
//  }
 
//    async function authenticateUser(){
//      if (!await checkToken("signature")) return chrome.runtime.sendMessage({ action: "authenticate" });
//      return await checkToken()
//    };

   
function handleArrorClick(event) {
    let iconData = event.target;
    if(iconData.className === 'rightSide' || iconData.className === 'rightSide rotated' || iconData.className === ' rightSide' || iconData.className === ' rightSide rotated') {
         iconData?.classList.toggle("rotated");
    }else {
      
    }
    
    handleLoadExtension();
    // e.stopPropagation();
 }

