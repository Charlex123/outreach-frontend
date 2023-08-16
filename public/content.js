/*global chrome*/

setInterval(injectLunchBtn, 6000);
setTimeout(loadIcons,6000);

async function injectLunchBtn() {
    try {
      sendfirstmailDarft();
      uploadrecipientsList();
      openRecepientListModal();
      loadRecipients();
      // loadGoogleSheetData();

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

 async function sendfirstmailDarft() {
   try {
        let mailTitle = document?.getElementsByClassName("aYF");
        let messagesubject = document?.getElementsByClassName("aoT");

        for(let f = 0; f <= mailTitle.length; f++) {
            if(mailTitle[f] !== undefined && mailTitle[f] !== null) {
               mailTitle[f].innerHTML = '<span>My First Outreach Email Campaign - Outreach </span>';
            }else {

            }
        }

        for(let s =0; s <= messagesubject.length; s++) {
         if(messagesubject[s] !== undefined && messagesubject[s] !== null) {
               messagesubject[s].value = "My First Outreach Email Campaign";
               // messagesubject[s].setAttribute("value","My First Outreach Email Campaign");
            }
         }

        let messagebody = document?.querySelectorAll(".Am.Al.editable.LW-avf.tS-tW");
        for(let m =0; m <= messagebody.length; m++) {
            if(messagebody[m] !== undefined && messagebody[m] !== null) {  
               messagebody[m].innerHTML = "Hey {FirstName|Buddy}, this is a test message I'm sending to demonstrate the power of Outreach. I've composed this message and even though I'm sending to about 10 people, you'll think I sent this email just to you. Talk to you soon! (Just click the red Outreach button below, and individual emails will be sent. Go ahead, don't be shy. All the email addresses in the To field belong to Outreach staff, and they're expecting this test email from you. Hit the button, and then check your Sent Mail folder.)";
            }
         }
         
   } catch (error) {
      console.log("error loading mail draft", error);
      return false;
   }
} 

async function sendmailCampaign() {
    try {
         let checkuseremailaddress = document.title;
         let useremailaddress = checkuseremailaddress.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
         return chrome.runtime.sendMessage({ action: "authenticate", details: useremailaddress[0] });
    } catch (error) {
       console.log("error loading extension frame", error);
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
    
    injectIfram();
    // e.stopPropagation();
 }

 async function uploadrecipientsList() {
      try {
         let parentDiv = document?.getElementsByClassName("baT");
         let recipientsIcon = document.createElement("span"); //create button to be injected
         
         recipientsIcon.className = "email_recip_icon gsheet_list_icon";
         recipientsIcon.setAttribute("role","button");
         recipientsIcon.style.marginRight = "5px";
         recipientsIcon.style.marginTop = "3px";

         recipientsIcon.innerHTML = `<svg fill="#c42329" class="g_sheet_s" version="1.0" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 103.000000 103.000000" preserveAspectRatio="xMidYMid meet">
         <style>
         svg:hover {
            cursor: pointer;
         fill: gray;
         }</style>
         <g transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)" stroke="none">
         <path d="M159 1016 c-57 -20 -97 -53 -126 -104 l-28 -47 0 -350 c0 -339 1
         -351 22 -390 24 -46 54 -75 103 -101 32 -17 66 -19 365 -22 240 -2 342 0 374
         9 59 17 135 90 150 144 14 51 15 666 1 715 -13 47 -63 106 -113 133 -41 21
         -52 22 -377 24 -257 2 -343 0 -371 -11z m438 -208 c70 -69 81 -103 37 -114
         -21 -6 -34 1 -73 40 l-47 46 -82 -83 -82 -82 83 -83 82 -82 64 64 64 65 -73 3
         c-76 3 -100 17 -87 52 9 24 272 24 281 0 12 -31 7 -349 -6 -362 -18 -18 -123
         -15 -139 4 -19 23 1 48 42 54 l34 5 3 93 c1 50 -1 92 -5 92 -5 0 -44 -36 -88
         -80 -44 -44 -84 -80 -90 -80 -6 0 -46 36 -90 80 -44 44 -82 80 -85 80 -3 0 -4
         -42 -2 -94 l3 -95 37 -3 c40 -3 54 -27 32 -53 -15 -18 -121 -20 -138 -3 -8 8
         -12 63 -12 182 l0 171 122 122 c68 68 129 123 138 123 8 0 43 -28 77 -62z"></path>
         </g>
         </svg>`;
         
       for(let p = 0; p <= parentDiv.length; p++) {
            // check if button exits
            if(parentDiv[p].children.length >= 4) {

            }else {
               parentDiv[p].style.display = "flex";
               const childElements = parentDiv[p].children;
               const insertIndex = 0;
               const childElement = childElements[insertIndex];
               parentDiv[p].insertBefore(recipientsIcon, childElement);
            }
            
       }

      } catch (error) {
         console.log("error loading mail draft", error);
         return false;
      }
 }

 async function loadIcons() {
   let pDiv = document?.querySelector(".gb_hd.gb_rd.gb_we.gb_Je.gb_Oe"); 
   
   let iconDiv = document.createElement("div"); //create button to be injected
      iconDiv.className = "icons_s";
      iconDiv.style.display = "flex";
      iconDiv.style.flexGrow = "1";
      iconDiv.style.justifyContent= "flex-start";

      iconDiv.innerHTML = `<div title="Build an email list from Gmail search results." class="gsheet_list_icon s_icona" style="padding-right: 10px;" role="button">  
                              <svg fill="red" version="1.0" class="g_sheet_s" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 103.000000 103.000000" preserveAspectRatio="xMidYMid meet">
                              <style>
                              svg:hover {
                                 cursor: pointer;
                              fill: gray;
                              }</style>
                              <g transform="translate(0.000000,103.000000) scale(0.100000,-0.100000)" stroke="none" fill="red">
                              <path d="M159 1016 c-57 -20 -97 -53 -126 -104 l-28 -47 0 -350 c0 -339 1
                              -351 22 -390 24 -46 54 -75 103 -101 32 -17 66 -19 365 -22 240 -2 342 0 374
                              9 59 17 135 90 150 144 14 51 15 666 1 715 -13 47 -63 106 -113 133 -41 21
                              -52 22 -377 24 -257 2 -343 0 -371 -11z m438 -208 c70 -69 81 -103 37 -114
                              -21 -6 -34 1 -73 40 l-47 46 -82 -83 -82 -82 83 -83 82 -82 64 64 64 65 -73 3
                              c-76 3 -100 17 -87 52 9 24 272 24 281 0 12 -31 7 -349 -6 -362 -18 -18 -123
                              -15 -139 4 -19 23 1 48 42 54 l34 5 3 93 c1 50 -1 92 -5 92 -5 0 -44 -36 -88
                              -80 -44 -44 -84 -80 -90 -80 -6 0 -46 36 -90 80 -44 44 -82 80 -85 80 -3 0 -4
                              -42 -2 -94 l3 -95 37 -3 c40 -3 54 -27 32 -53 -15 -18 -121 -20 -138 -3 -8 8
                              -12 63 -12 182 l0 171 122 122 c68 68 129 123 138 123 8 0 43 -28 77 -62z"></path>
                              </g>
                              </svg>
                           </div>
                           <div  title="Connect to an email list in a Google Sheet." class="s_icona" role="button" style="padding-right: 10px"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-spreadsheet" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z" id="mainIconPathAttribute" fill="#f52424"></path> </svg></div>
                           <div title="Launch the campaigns dashboard." role="button" class="s_icona" style="padding-right: 10px"><svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-layout-text-window" viewBox="0 0 16 16"> <path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" fill="red"></path> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z" fill="red"></path> </svg></div>`;
   const childElements = pDiv.children;
   const insertIndex = 2;

   pDiv.insertBefore(iconDiv,childElements[insertIndex]);        
 }

function openRecepientListModal() {
   let p_Div = document?.getElementsByClassName("gsheet_list_icon"); 
   let gsheetOverlay = document.createElement("div"); //create button to be injected
   //       console.log(chrome.runtime.getURL('letter.png'))
      gsheetOverlay.className = "gsheetoverlay_c";
      gsheetOverlay.id = "gsheetoverlay_c";
      gsheetOverlay.innerHTML = `<div class="modal_content_c" id="modal_content_c" style="padding-right: 10px;"> 
                                    <div class="modal_cc" tabindex="0" role="alertdialog">
                                       <div class="modal_conj">
                                          <span class="" role="heading">How do you want to add recipients?</span>
                                          <span class="close_modal_c" tabindex="0" role="button">X</span>
                                       </div>
                                       <div class=""><div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1em;"><div class="pick-recipients-button pick-sheets" title="Connect to an email list in a Google Sheet."><img class="gsheet_mod" src="https://cdn.gmass.us/Extension2019Images/google_sheet_1.png"><span>From a Google Sheet</span></div><div class="pick-recipients-button pick-campaign" title="Connect to a previous campaign."><img src="https://cdn.gmass.us/Extension2019Images/campaign.png"><span>From another campaign</span></div><div class="pick-recipients-button pick-list" title="Select a list from your account."><img src="https://cdn.gmass.us/Extension2019Images/from_list2.png"><span>From a File/list</span></div></div></div>
                                    </div>
                                 </div>`;
      for(let g = 0; g <= p_Div.length; g++) {
         
         if(p_Div[g]) {
            p_Div[g].onclick = function() {
               document.body.append(gsheetOverlay);
            }
         }
      }      
 }


 function openGSheetModal() {

   let gsheetOverlayModal = document.createElement("div"); //create button to be injected
   //       console.log(chrome.runtime.getURL('letter.png'))
   gsheetOverlayModal.className = "gsheetoverlaymodal_c";
   gsheetOverlayModal.id = "gsheetoverlaymodal_c"; 
   //       console.log(chrome.runtime.getURL('letter.png'))
      gsheetOverlayModal.innerHTML = `<div id="mainsheetsdiv" class="gsheetmodal_l_c" style="color: black; width: 600px; border-color: black; padding: 8px; border-style: solid; background-color: white; margin-top: 20px; max-height: calc(100vh - 40px); left: 354.5px; position: absolute; top: 0px; z-index: 9999; opacity: 1;">
      <div>
         <div style="text-align: center"><img width="80px" class="google-sheets-image" src="https://cdn.gmass.us/Extension2019Images/google_sheet_1.png"></div>
         <div style="margin-bottom: 20px; text-align: center">Choose a Google Sheet below. <a target="_blog" href="https://www.gmass.co/blog/google-sheets-mail-merge/">Learn more.</a></div>
         <div id="ToggleDivOuter" style="margin-bottom: 6px; float: left; font-size: 10pt"><span id="pickerhelp" style="margin-bottom: 5px; font-size: 10pt; display: none;"><a target="_blog" href="https://www.gmass.co/blog/enter-your-google-sheet-id-manually/">Why am I seeing this alternate interface?</a></span><a href="javascript:void(0)"><span id="ToggleDiv">Switch to manual entry</span></a></div>
         <div style="float: right;"><span id="pickerelement" style="font-size: 10pt; display: block; float: right;"><a href="javascript: void (0)">Launch Spreadsheet Picker</a></span></div>
         <form id="SheetsForm">
            <div id="divsheets" style="padding: 3px;">
               <div id="sheetsselectparent" style="">
                  <select id="selectsheets" style="width: 550px;" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value=""></option>
                     <option value="1vsyEe40fGpRK7tMYFkSLME_zW6Y1T8wIucdzoshaOv8" updatedtime="2/20/2021">Masterclass Course Schedule</option>
                     <option value="1ujnCLSxq7jRHuyIHhCUhuJtSyQamuh2pTYcLICuWRKQ" updatedtime="1/26/2021">BSC docs and tutorials for developers</option>
                     <option value="1vhtTjvW-gTqnzzqHhRN9r3qWMm1qQMfmmLHKcOpt774" updatedtime="1/1/2015">GMass Sample Sheet</option>
                  </select>
                  <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 550px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-selectsheets-container" style="height: 50px; padding-top: 15px;"><span class="select2-selection__rendered" id="select2-selectsheets-container" style="font-size: 12pt; padding-left: 8px;"><span class="select2-selection__placeholder">Select spreadsheet</span></span><span class="select2-selection__arrow" role="presentation" style="padding-top: 30px;"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
               </div>
               <input placeholder="Your-Spreadsheet-ID" id="inputsheets" style="height: 45px; width: 550px; display: none;">
            </div>
            <div id="waitingstatus" style="display: none; color: blue; padding: 3px;">Please wait...</div>
            <div id="everythingbutsheetsdd" style="display: none; padding: 3px;">
               <div id="divworksheets">Worksheets: </div>
               <div id="optionaldiv" style="cursor: pointer; font-weight: normal; margin-top: 20px;"><span style="color: blue;" id="OptionalSettingsExpander">+</span> <span>Optional Settings:</span></div>
               <div id="optionsouter" style="padding: 6px; border: 1px solid rgba(128, 128, 128, 0.34); border-radius: 8px; width: 450px; display: none;">
                  <div>Filter Rows:</div>
                  <div id="divfilter" style="font-size: 10pt;">
                     <textarea rows="3" cols="35" placeholder="Column1=Value1
                        Column2=Value2" id="filtertextarea" style="font-family: Courier; font-size: 8pt; color: gray; max-width: 300px;"></textarea>
                     <select id="CompareSelect" style="vertical-align: top;">
                        <option value="And">AND</option>
                        <option value="Or">OR</option>
                     </select>
                     <span><a style="text-decoration: none; vertical-align: top;margin-left:3px" href="https://www.gmass.co/blog/send-mail-merge-to-selected-rows-spreadsheet/" target="_blog">?</a></span>
                  </div>
                  <label id="divdupes" class="g2_checkbox" style="font-size: 10pt; margin: 2em 0px 0px;"><input type="checkbox" id="formcheckbox"><span style="color: rgb(43, 44, 46);">Keep duplicate emails</span> </label><label id="divUpdate" class="g_checkbox" style="font-size: 10pt;"><input type="checkbox" id="updatesheetbox"><span>Update Sheet with reporting data</span> </label>
               </div>
            </div>
         </form>
      </div>
      <div id="ConnectButton" style="width: 300px; text-align: center; color: white; padding: 9px 5px 9px 12px; font-weight: bold; font-size: 11px; border-radius: 8px; margin: 20px auto auto; background-color: gray; cursor: pointer;">CONNECT TO SPREADSHEET</div>
   </div>`;
   document.body.append(gsheetOverlayModal);
    
 }

 function loadRecipients() {
   let recipientsInput = document?.querySelectorAll(".agP.aFw");
   
   // `<div draggable="true" peoplekit-id="Svajxe" class="agh">
   //    <div peoplekit-id="ubaLBe" class="agb">
   //       <div role="option" class="afV" id=":vz" peoplekit-id="XPtOyb" data-hovercard-id="heeloo@gmail.com" data-name="heeloo@gmail.com" aria-describedby=":vz-db" jslog="25286; track:impression; cid:peopleweb" data-hovercard-owner-id="119" aria-selected="false">
   //          <div class="afW WeJhwb">
   //             <div class="af2">
   //                <div class="afK">
   //                   <div class="biZ" peoplekit-id="d6MZcd">
   //                      <div class="aLO" style="width: 24px; height: 24px">
   //                         <div peoplekit-id="YLEF4c" class="afD" style="width: 24px; height: 24px">
   //                            <div class="afF">
   //                               <div peoplekit-id="IHgMKc" class="afI">
   //                                  <img peoplekit-id="HiaYvf" class="afH" style="width: 24px; height: 24px;" data-preload-src="https://lh3.googleusercontent.com/a/default-user=s32-p" data-src="https://lh3.googleusercontent.com/a/default-user=s24-p" data-backup-src="https://lh3.googleusercontent.com/a/default-user=s24-p" draggable="false" alt="" src="https://lh3.googleusercontent.com/a/default-user=s24-p">
   //                                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="bbS"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"></path></svg>
   //                               </div>
   //                            </div>
   //                         </div>
   //                         <div peoplekit-id="Btuy5e" class="aLd">
   //                            <img class="aLX" peoplekit-id="m6fZne" draggable="false" alt="">
   //                         </div>
   //                      </div>
   //                   </div>
   //                </div>
   //             </div>
   //             <div class="afT">
   //                <div class="af0">
   //                   <div class="afZ af1">
   //                      <div class="akl" translate="no">heeloo@gmail.com</div>
   //                      <div class="akk" peoplekit-id="hyPgpe" translate="no"></div>
   //                   </div>
   //                </div>
   //             </div>
   //             <div class="af6">
   //                <div id=":vz-db" peoplekit-id="bxvLg" class="afX" aria-hidden="true" aria-label="Press delete to remove this chip">
   //                   <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="afY"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
   //                </div>
   //             </div>
   //          </div>
   //          <div peoplekit-id="QL45qe"></div>
   //       </div>
   //    </div>
   // </div>`;

   for(let r = 0; r <= recipientsInput.length; r++) {
      if(recipientsInput[r]) {
         recipientsInput[r].value = "charles@gmail.com,heeloo@gmail.com,loi@gmail.com";
      }
   }
 }
 
// function loadGoogleSheetData() {
//    const sheetId = '17RrD0uhvux2_AZXMXpQBlzMiKNmsBKEjZpMOKUN7KJ4';
//    console.log('sheet id',sheetId)
//    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
//    console.log('sheet url',url)
//    // const data = []
//    // const output = document.querySelector('.output')
//    fetch(url)
//       .then(res => res.text())
//       .then(rep => {
//             //Remove additional text and extract only JSON:
//             const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
//             console.log('google sheet json data',rep)
//             const colz = [];
//             const tr = document.createElement('tr');
//             //Extract column labels
//             jsonData.table.cols.forEach((heading) => {
//                if (heading.label) {
//                   let column = heading.label;
//                   colz.push(column);
//                   const th = document.createElement('th');
//                   th.innerText = column;
//                   tr.appendChild(th);
//                }
//             })
//             // output.appendChild(tr);
//             //extract row data:
//             // jsonData.table.rows.forEach((rowData) => {
//             //    const row = {};
//             //    colz.forEach((ele, ind) => {
//             //       row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
//             //    })
//             //    data.push(row);
//             // })
//             // processRows(data);
//       })

   
   // function processRows(json) {
   //    json.forEach((row) => {
   //       const tr = document.createElement('tr');
   //       const keys = Object.keys(row);
      
   //       keys.forEach((key) => {
   //             const td = document.createElement('td');
   //             td.textContent = row[key];
   //             tr.appendChild(td);
   //       })
   //       output.appendChild(tr);
   //    })
   // }
// }

async function injectIfram() {
   try {
      console.log('checker')
      let mailsettingsDiv = document.createElement("div"); //create button to be injected
   //       console.log(chrome.runtime.getURL('letter.png'))
      mailsettingsDiv.className = "outreachsdk__menu";
      mailsettingsDiv.id = "outreachsdk__menu";
      mailsettingsDiv.innerHTML = `<div>
                                          <div class="gmasssdk__menu visible" style="position: fixed; left: 909px; top: 10px;">
                                          <div id="qiciW">
                                             <div class="g2_settings" id="qiciWbigdiv" style="background: rgb(255, 255, 255); overflow-y: auto;">
                                                <div id="topstatusarea" style="padding-right: 10px; display: flex;background-color:  rgb(25, 0, 63);flex; justify-content: flex-end">
                                                   <div class="g2_status" id="qiciWAccountStatusDiv" style="display: inline-block; padding-bottom: 2px; padding-left: 6px; padding-right: 6px; border-radius: 8px; font-size: 8pt; background-color: gray; color: rgb(228, 228, 228);"><a style="color: #e4e4e4" href="https://www.gmass.co/pricing?email=charlesmuoka1@gmail.com">Free</a></div>
                                                   <div class="g2_guide"><a style="text-decoration: none" href="http://www.gmass.co/blog/users-guide-to-the-gmass-settings-box/" target="_gmass">?</a></div>
                                                </div>
                                                <div class="g2_tools"><button type="button" class="GMassFieldWordzen" id="qiciWSeedListButton"><span>Spam Solver</span></button><button type="button" class="" id="qiciWLinkChecker"><span>Link Checker</span></button><button type="button" class="" id="qiciWAnalyzer"><span>Email Analyzer</span></button></div>
                                                <div class="g2_send_test">
                                                   <span>Send Test Email:</span>
                                                   <div style="display: flex;">
                                                      <select style="width: 100%" multiple="" id="qiciWTestEmailValue" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                         <option value="charlesmuoka1@gmail.com">charlesmuoka1@gmail.com</option>
                                                      </select>
                                                      <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;">
                                                         <span class="selection">
                                                            <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                                               <ul class="select2-selection__rendered">
                                                                  <li class="select2-selection__choice" title="charlesmuoka1@gmail.com"><span class="select2-selection__choice__remove" role="presentation">×</span>charlesmuoka1@gmail.com</li>
                                                                  <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="" style="width: 0.75em;"></li>
                                                               </ul>
                                                            </span>
                                                         </span>
                                                         <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                      </span>
                                                      <div style="display: flex;position: relative;" id="twopartbutton">
                                                         <button style="padding-left: 6px;padding-right:  6px; width:110px;" type="button" class="send-test" id="qiciWTestEmailButton">Send Test</button>
                                                         <button type="button" class="send-test-options"></button>
                                                         <div class="g_send_test_options">
                                                            <label style="display: block" class="">
                                                            <input type="radio" checked="" value="send" name="qiciWsend-test-type" id="qiciWsend-test-type-send">
                                                            <span>Send email</span>
                                                            </label>
                                                            <label style="display: block" class="">
                                                            <input type="radio" [sendtestdraft]="" value="draft" name="qiciWsend-test-type" id="qiciWsend-test-type-draft">
                                                            <span>Create Draft</span>
                                                            </label>
                                                            <hr>
                                                            <label style="display: block" class="">
                                                            <input type="checkbox" [sendtestsequence]="" value="on" name="qiciWsend-test-sequence" id="qiciWsend-test-sequence" disabled="">
                                                            <span>Send all stages</span>
                                                            </label>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="g_prior_content">
                                                   <a style="float:right;text-decoration: none;font-size: 10px;padding-top: 3px;" class="g_edit_html" href="#">HTML</a>
                                                   <div>Templates:</div>
                                                   <div style="overflow: hidden">
                                                      <select data-placeholder="Select Past Email" class="g-campaign-select select2-hidden-accessible" id="qiciWContentDD" tabindex="-1" aria-hidden="true">
                                                         <option></option>
                                                      </select>
                                                      <span class="select2 select2-container select2-container--default" dir="ltr"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWContentDD-container"><span class="select2-selection__rendered" id="select2-qiciWContentDD-container"><span class="select2-selection__placeholder">Select Past Email</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                   </div>
                                                </div>
                                                <div class="g_personalize">
                                                   <div>Personalize:</div>
                                                   <select id="qiciWPersonalize" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                      <option></option>
                                                      <option value="{FirstName|Friend}" class="GMassField">FirstName|Friend</option>
                                                      <option value="{LastName}" class="GMassField">LastName</option>
                                                      <option value="{EmailAddress}" class="GMassField">EmailAddress</option>
                                                   </select>
                                                   <span class="select2 select2-container select2-container--default" dir="ltr" style="width: auto;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWPersonalize-container"><span class="select2-selection__rendered" id="select2-qiciWPersonalize-container"><span class="select2-selection__placeholder">Select Field</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                </div>
                                                <div class="g_unsubscribe">
                                                   <a class="GMassFieldUnsub">Unsubscribe Link</a>
                                                   <a id="unsubcopy">
                                                   <img style="vertical-align: middle;" src="https://cdn.gmass.us/images/page_white_copy.png" alt="Copy to clipboard">
                                                   </a>
                                                </div>
                                                <div class="g2_settings_accordions">Settings:</div>
                                                <div class="g2_tracking g_accordian">
                                                   <div class="g_accordian_title">
                                                      <span>
                                                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtUExUReDh4p+jpouPk7S3usrMzklQV19la3V6f9/g4fb29vX19UpRWMnMzmBmbAAAANp0qb4AAAAPdFJOU///////////////////ANTcmKEAAAAJcEhZcwAADsIAAA7CARUoSoAAAAC6SURBVChTXZELbsMwDEP1MeU623L/45aUUhQYgQT2sygrjN0jc49cn02/HaPy3graBravlUH8GmhanhaPRQk3YhBljn0RJvZDjkWx1gmBNcgL9NhPXbYe8wzA841fS7hYgnXdyJEWSME/HE6h5YLzOrVk4TkFHSeCPWXn+LS3R3ZTo9Ql1c1P4EVYqwsHcSRcGr5OVDuljZzPfIqkmM/8FwgmEEVXwehcETbg8w2ZYUgDb7MM9/kd9/0GmTILpGn7b0QAAAAASUVORK5CYII=">
                                                      <span style="padding: 3px;">Tracking</span>
                                                      </span>
                                                      <span id="zjDCLmainspread" style="font-weight: normal"></span>
                                                   </div>
                                                   <div class="g_accordian_content">
                                                      <div class="g_show_on_collapse"><span class="g_oval">opens</span><span class="g_oval">clicks</span></div>
                                                      <div class="g_hide_on_collapse">
                                                         <label class="g2_checkbox">
                                                         <input type="checkbox" name="OpenTracking" id="qiciWOpenTracking" checked="" data-oval="opens">
                                                         <span>Opens</span>
                                                         </label>
                                                         <label class="g2_checkbox">
                                                         <input type="checkbox" name="ClickTracking" id="qiciWClickTracking" checked="" data-oval="clicks">
                                                         <span>Clicks</span>
                                                         </label>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="g2_action g_accordian">
                                                   <div class="g_accordian_title">
                                                      <span>
                                                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnUExUReDh4nV6f4uPk0lQV5+jprS3ul9la8nMzsrMzt/g4fX19UpRWAAAAMAYAr0AAAANdFJOU////////////////wA96CKGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAjElEQVQoU13QURKEIAwD0EJA0e39z7tpAEX60+F1SBXzvSylHS0D2LCQkD9Yg75oiVAOoD5oulkj8pwoQlPA1bHxEnC0Fg13oMJoZurZbYQByb0PieMzXkN1U1qMxy4ud9N/cep9CetiJkOPthjuQNWMUdDEsYT1ov147APGL9j6Y54rFvUSbWKWqdz/ZI4LGyoM/FYAAAAASUVORK5CYII=">
                                                      <span style="padding: 3px;">Action</span>
                                                      </span>
                                                   </div>
                                                   <div class="g_accordian_content">
                                                      <div class="g_show_on_collapse"><span class="g_oval">send emails</span></div>
                                                      <div class="g_hide_on_collapse">
                                                         <label class="g_radio">
                                                         <input type="radio" checked="" id="qiciWSendRadio" name="qiciWSendSave" value="1" data-oval="send emails">
                                                         <span>Send emails</span>
                                                         </label>
                                                         <label class="g_radio">
                                                         <input type="radio" [save]="" id="qiciWSaveRadio" name="qiciWSendSave" value="2" data-oval="create drafts">
                                                         <span>Create Drafts</span>
                                                         </label>
                                                         <div style="margin-top:1rem">
                                                            <div style="margin-left: 25px; display:none" class="g2_smtp" id="qiciWsmtp">
                                                               <div id="qiciWsmtpquestion"></div>
                                                               <span id="qiciWsendwith">Send with:</span>
                                                               <label class="g_radio">
                                                               <input data-oval="" type="radio" [gmail]="" id="qiciWGmailRadio" name="qiciWSendWith" value="1">
                                                               <span id="qiciWsendwith2">Gmail</span>
                                                               </label>
                                                               <label class="g_radio">
                                                               <input data-oval="with SMTP Service" type="radio" [smtp]="" id="qiciWSMTPRadio" name="qiciWSendWith" value="2">
                                                               <span class="g_smtpserver">SMTP Service</span>
                                                               </label>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="g2_auto_follow_up">
                                                   <div id="qiciWoa" class="g_accordian">
                                                      <div class="g_accordian_title">
                                                         <span>
                                                         <img src="https://cdn.gmass.us/Extension2019Images/fa-share.png">
                                                         <span style="padding: 3px;">Auto Follow-up</span>
                                                         </span>
                                                         <span id="qiciWmainauto"></span>
                                                      </div>
                                                      <div class="g_accordian_content">
                                                         <div id="qiciWafstatus" class="g_show_on_collapse"></div>
                                                         <div id="qiciWGMassAFDisplay" class="g_hide_on_collapse gmass-auto-follow-ups">
                                                            <div class="gmass-bump" data-bump="1" id="qiciWfirstbump" style="display: block;">
                                                               <div class="gmass-bump-stage">Stage 1:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWFirstBumpBox" data-oval="stage 1">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="FirstBumpAction" id="qiciWFirstBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWFirstBumpDays" name="FirstBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWFirstBumpTime" name="FirstBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWFirstBumpChoicet" name="FirstBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWFirstBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWFirstBumpChoicec" name="FirstBumpChoice" value="c">
                                                                        <span id="qiciWCM1" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="FirstSameNew" id="qiciWFirstSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="1" title="Create a new message"></button>
                                                                     <div id="qiciWFirstBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWFirstBumpCustom" name="FirstBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWFirstBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWFirstBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="2" id="qiciWsecondbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 2:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWSecondBumpBox" data-oval="stage 2">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="SecondBumpAction" id="qiciWSecondBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWSecondBumpDays" name="SecondBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWSecondBumpTime" name="SecondBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWSecondBumpChoicet" name="SecondBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWSecondBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWSecondBumpChoicec" name="SecondBumpChoice" value="c">
                                                                        <span id="qiciWCM2" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="SecondSameNew" id="qiciWSecondSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="2" title="Create a new message"></button>
                                                                     <div id="qiciWSecondBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWSecondBumpCustom" name="SecondBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWSecondBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWSecondBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="3" id="qiciWthirdbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 3:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWThirdBumpBox" data-oval="stage 3">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="ThirdBumpAction" id="qiciWThirdBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWThirdBumpDays" name="ThirdBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWThirdBumpTime" name="ThirdBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWThirdBumpChoicet" name="ThirdBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWThirdBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWThirdBumpChoicec" name="ThirdBumpChoice" value="c">
                                                                        <span id="qiciWCM3" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="ThirdSameNew" id="qiciWThirdSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="3" title="Create a new message"></button>
                                                                     <div id="qiciWThirdBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWThirdBumpCustom" name="ThirdBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWThirdBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWThirdBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="4" id="qiciWfourthbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 4:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWFourthBumpBox" data-oval="stage 4">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="FourthBumpAction" id="qiciWFourthBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWFourthBumpDays" name="FourthBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWFourthBumpTime" name="FourthBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWFourthBumpChoicet" name="FourthBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWFourthBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWFourthBumpChoicec" name="FourthBumpChoice" value="c">
                                                                        <span id="qiciWCM4" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="FourthSameNew" id="qiciWFourthSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="4" title="Create a new message"></button>
                                                                     <div id="qiciWFourthBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWFourthBumpCustom" name="FourthBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWFourthBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWFourthBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="5" id="qiciWfifthbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 5:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWFifthBumpBox" data-oval="stage 5">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="FifthBumpAction" id="qiciWFifthBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWFifthBumpDays" name="FifthBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWFifthBumpTime" name="FifthBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWFifthBumpChoicet" name="FifthBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWFifthBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWFifthBumpChoicec" name="FifthBumpChoice" value="c">
                                                                        <span id="qiciWCM5" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="FifthSameNew" id="qiciWFifthSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="5" title="Create a new message"></button>
                                                                     <div id="qiciWFifthBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWFifthBumpCustom" name="FifthBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWFifthBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWFifthBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="6" id="qiciWsixthbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 6:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWSixthBumpBox" data-oval="stage 6">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="SixthBumpAction" id="qiciWSixthBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWSixthBumpDays" name="SixthBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWSixthBumpTime" name="SixthBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWSixthBumpChoicet" name="SixthBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWSixthBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWSixthBumpChoicec" name="SixthBumpChoice" value="c">
                                                                        <span id="qiciWCM6" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="SixthSameNew" id="qiciWSixthSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="6" title="Create a new message"></button>
                                                                     <div id="qiciWSixthBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWSixthBumpCustom" name="SixthBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWSixthBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWSixthBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="7" id="qiciWseventhbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 7:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWSeventhBumpBox" data-oval="stage 7">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="SeventhBumpAction" id="qiciWSeventhBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWSeventhBumpDays" name="SeventhBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWSeventhBumpTime" name="SeventhBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWSeventhBumpChoicet" name="SeventhBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWSeventhBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWSeventhBumpChoicec" name="SeventhBumpChoice" value="c">
                                                                        <span id="qiciWCM7" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="SeventhSameNew" id="qiciWSeventhSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="7" title="Create a new message"></button>
                                                                     <div id="qiciWSeventhBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWSeventhBumpCustom" name="SeventhBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWSeventhBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWSeventhBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="gmass-bump" data-bump="8" id="qiciWeighthbump" style="display: none;">
                                                               <div class="gmass-bump-stage">Stage 8:</div>
                                                               <label class="g2_checkbox" style="float:left; margin-right:3px; padding-top:2px">
                                                               <input type="checkbox" class="gmass-enable-bump" id="qiciWEighthBumpBox" data-oval="stage 8">
                                                               <span></span>
                                                               </label>
                                                               If
                                                               <select class="g_bump_action" name="EighthBumpAction" id="qiciWEighthBumpAction" disabled="">
                                                                  <option value="r">No Reply</option>
                                                                  <option value="o">No Open</option>
                                                                  <option value="c">No Click</option>
                                                                  <option value="s">No Reply or Click</option>
                                                                  <option value="a">Everyone</option>
                                                               </select>
                                                               <span>after</span>
                                                               <input type="text" size="2" class="g_bump_days" id="qiciWEighthBumpDays" name="EighthBumpDays" value="" disabled="">
                                                               days
                                                               <a href="#" class="g_bump_set_time">(set time)</a>
                                                               <a href="#" class="g_bump_dont_set_time">(don't set time)</a>
                                                               <div class="gmass-follow-up-settings">
                                                                  <div class="g_bump_set_time">
                                                                     at
                                                                     <input type="text" class="g_bump_time" data-time="12:00pm" id="qiciWEighthBumpTime" name="EighthBumpTime" value="12:00pm">
                                                                     <div class="gmass-clock-icon" style="height: 30px;"></div>
                                                                  </div>
                                                                  <label class="g_radio">
                                                                  <input type="radio" id="qiciWEighthBumpChoicet" name="EighthBumpChoice" value="t">
                                                                  <span style="font-size:8pt">Send text above original:</span>
                                                                  </label>
                                                                  <br>
                                                                  <textarea id="qiciWEighthBumpAddedText" class="g_bump_add_text" cols="34" rows="7" style="display: block;"></textarea>
                                                                  <div>
                                                                     <label class="g_radio">
                                                                        <input type="radio" id="qiciWEighthBumpChoicec" name="EighthBumpChoice" value="c">
                                                                        <span id="qiciWCM8" style="font-size:8pt">
                                                                           Send rich-text email in
                                                                           <select name="EighthSameNew" id="qiciWEighthSameNew" class="g_discreet_select">
                                                                              <option value="same">same</option>
                                                                              <option value="new">new</option>
                                                                           </select>
                                                                           thread
                                                                        </span>
                                                                     </label>
                                                                     <button class="g2_add_message" data-stage="8" title="Create a new message"></button>
                                                                     <div id="qiciWEighthBumpCustomDiv" style="margin-top: 10px; display: none;">
                                                                        <select style="width: 258px; display:inline-block; font-size:8pt" id="qiciWEighthBumpCustom" name="EighthBumpCustom" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 258px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWEighthBumpCustom-container"><span class="select2-selection__rendered" id="select2-qiciWEighthBumpCustom-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                        <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                        <button class="g2_edit_message" title="Edit the selected message" style="display:none"></button>
                                                                        <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="g2_schedule g_accordian">
                                                   <div class="g_accordian_title">
                                                      <span>
                                                      <img src="https://cdn.gmass.us/Extension2019Images/fa-calendar.png">
                                                      <span style="padding: 3px;">Schedule</span>
                                                      </span>
                                                      <span id="qiciWmainspread" style="font-weight: normal"></span>
                                                   </div>
                                                   <div class="g_accordian_content">
                                                      <div id="qiciWschedulestatus" class="g_show_on_collapse"></div>
                                                      <div id="qiciWspreadfloater" class="g_hide_on_collapse">
                                                         <div style="display:flex">
                                                            <div class="g_col_label" style="float:none">Time:</div>
                                                            <div>
                                                               <select id="qiciWGMassDateDropdown" style="margin-bottom:5px;">
                                                                  <option selected="" disabled="" hidden="" value=""></option>
                                                                  <option value="Now" selected="">Now</option>
                                                                  <option value="FiveMinutes" [fiveminutes]="">In 5 minutes</option>
                                                                  <option value="OneHour" [onehour]="">In 1 hour</option>
                                                                  <option value="ThreeHours" [threehours]="">In 3 hours</option>
                                                                  <option value="TomorrowMor" [tomrrowmor]="">Tomorrow morning at 8am</option>
                                                                  <option value="TomorrowAft" [tomorrowaft]="">Tomorrow afternoon at 1pm</option>
                                                                  <option value="TomorrowEve" [tomorroweve]="">Tomorrow evening at 7pm</option>
                                                                  <option value="Custom" [custom]="">Custom date/time</option>
                                                               </select>
                                                               <div class="gmass-expand-field">
                                                                  <input size="30" type="text" id="qiciWGMassDateTime" value="" data-oval="schedule set">
                                                                  <div class="gmass-calendar-icon" style="height: 30px;"></div>
                                                               </div>
                                                               <div style="margin-top: 5px" id="qiciWSkipWeekendsDiv" class="not-inline-reply-form">
                                                                  <label class="g2_checkbox">
                                                                  <input type="checkbox" name="SkipWeekends" id="qiciWSkipWeekends" [skipweekendson]="" data-oval="skip weekends">
                                                                  <span>Skip weekends</span>
                                                                  </label>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="g_border_top not-inline-reply-form" style="display:flex">
                                                            <div class="g_col_label" style="float:none">Speed:</div>
                                                            <div>
                                                               <span style="padding-top:0px;">
                                                               <span>Send</span>
                                                               <input type="text" placeholder="max" size="4" id="qiciWMaxEmails" name="MaxEmails" value="" data-oval="daily limit">
                                                               <span>emails/day</span>
                                                               <button type="button" id="qiciWcheckusage">Show usage</button>
                                                               </span>
                                                               <div style="margin-top:4px;margin-left: 32px;">
                                                                  <label class="g2_checkbox with-select">
                                                                     <input type="checkbox" id="qiciWDelayCheckbox" name="DelayCheckbox" [delayoff]="" data-oval="pause between emails">
                                                                     <span>
                                                                        Pause
                                                                        <select id="qiciWPauseSeconds" name="PauseSeconds" disabled="">
                                                                           <option value="1">5-10 seconds</option>
                                                                           <option value="2">10-60 seconds</option>
                                                                           <option value="3">1-5 minutes</option>
                                                                           <option value="5">5-10 minutes</option>
                                                                        </select>
                                                                        between emails
                                                                     </span>
                                                                  </label>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="g_border_top not-inline-reply-form" style="display:flex; margin-top: 5px" id="qiciWRecurDiv">
                                                            <div class="g_col_label" style="float:none">Repeat:</div>
                                                            <div>
                                                               <label class="g2_checkbox">
                                                               <input type="checkbox" style="position: relative;" name="Recur" id="qiciWRecur" [recuron]="" data-oval="repeat">
                                                               <span></span>
                                                               </label>
                                                               <span id="qiciWRecurEveryLabel" style="font-size: 13px; margin-right: 3px; color: gray;">Every</span>
                                                               <input style="margin-right: 2px; color: gray;" type="text" size="2" id="qiciWRecurEvery" name="RecurEvery" value="1" disabled="">
                                                               <select name="repeatdh" id="qiciWrepeatdh" disabled="">
                                                                  <option value="d">Day</option>
                                                                  <option value="h">Hour</option>
                                                                  <option value="w">Week</option>
                                                                  <option value="m">Month</option>
                                                               </select>
                                                               <span id="qiciWrepeatmode" style="visibility: hidden;">
                                                                  <span id="qiciWRecurToLabel" style="color: gray;">to</span>
                                                                  <select name="repeatneworall" id="qiciWrepeatneworall" disabled="">
                                                                     <option value="n">new</option>
                                                                     <option value="a">all</option>
                                                                  </select>
                                                                  <span id="qiciWRecurSheetLabel" style="color: gray;">rows</span>
                                                               </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="g2_advanced g_accordian not-inline-reply-form">
                                                   <div class="g_accordian_title">
                                                      <span>
                                                      <img src="https://cdn.gmass.us/Extension2019Images/fa-message.png">
                                                      <span style="padding: 3px;">Advanced</span>
                                                      </span>
                                                      <span id="qiciWmainadvanced" style="font-weight: normal"></span>
                                                   </div>
                                                   <div class="g_accordian_content">
                                                      <div id="qiciWadvancedstatus" class="g_show_on_collapse"></div>
                                                      <div class="advanced-box2 g_hide_on_collapse" id="qiciWadvanceddiv">
                                                         <table class="g2_settings_table">
                                                            <tbody>
                                                               <tr>
                                                                  <td>Send as:</td>
                                                                  <td>
                                                                     <label class="g_radio">
                                                                     <input type="radio" checked="" id="qiciWNewRadio" name="qiciWNewReplyRadio" value="x">
                                                                     <span>New messages</span>
                                                                     </label>
                                                                     <label class="g_radio">
                                                                     <input type="radio" [reply]="" id="qiciWReplyRadio" name="qiciWNewReplyRadio" value="y" data-oval="send as replies">
                                                                     <span>Replies</span>
                                                                     </label>
                                                                     <div class="reply-message">
                                                                        <span style="display:block;margin-bottom:4px;">Choose campaign to reply to:</span>
                                                                        <select id="qiciWReplyMessage" name="ReplyMessage" style="width:100%" class="g-campaign-select select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                                           <option value="0" subjectname="Last conversation with recipient">Last conversation with recipient</option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWReplyMessage-container"><span class="select2-selection__rendered" id="select2-qiciWReplyMessage-container" title="Last conversation with recipient"><span>Last conversation with recipient</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td>Images:</td>
                                                                  <td>
                                                                     <label class="g_radio">
                                                                     <input type="radio" checked="" id="qiciWImageRadioDefault" name="qiciWImages" value="default">
                                                                     <span>Default</span>
                                                                     </label>
                                                                     <label class="g_radio">
                                                                     <input type="radio" [referenced]="" id="qiciWImageRadioReferenced" name="qiciWImages" value="hosted" data-oval="images hosted" "="">
                                                                     <span>Hosted</span>
                                                                     </label>
                                                                     <label class="g_radio">
                                                                     <input type="radio" [embedded]="" id="qiciWImageRadioEmbedded" name="qiciWImages" value="embedded" data-oval="images embedded">
                                                                     <span>Embedded</span>
                                                                     </label>
                                                                  </td>
                                                                  <td>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>Reply-To:</span></td>
                                                                  <td>
                                                                     <select style="width: 317px;" id="qiciWreplyto" data-oval="reply-to set" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                        <option></option>
                                                                        <option value="0">None</option>
                                                                     </select>
                                                                     <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 317px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWreplyto-container"><span class="select2-selection__rendered" id="select2-qiciWreplyto-container"><span class="select2-selection__placeholder">Enter a reply-to address</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>Verify:</span></td>
                                                                  <td>
                                                                     <label class="g2_checkbox">
                                                                     <input type="checkbox" style="position: relative;" name="Verify" value="true" [verifyon]="" id="qiciWVerify" data-oval="verify">
                                                                     <span>Verify emails before sending</span>
                                                                     </label>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>Skip Sent:</span></td>
                                                                  <td>
                                                                     <label class="g2_checkbox">
                                                                     <input type="checkbox" style="position: relative;" name="SkipSent" value="true" [skipsenton]="" id="qiciWSkipSent" data-oval="skip sent">
                                                                     <span>Skip logging emails to Sent folder</span>
                                                                     </label>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>Suppression:</span></td>
                                                                  <td>
                                                                     <label class="g2_chevron">
                                                                     <input type="checkbox" [suppressionon]="" style="position: relative;" name="SuppressionOn" value="true" id="qiciWSuppressionOn">
                                                                     <span>Don't send to:</span>
                                                                     </label>
                                                                     <div class="g_suppression_settings" style="margin-top: 1em; display: none;">
                                                                        <select style="width: 100%" multiple="" name="suppression" id="qiciWsuppression" size="5" data-oval="suppression campaigns set" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true"></select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;">
                                                                           <span class="selection">
                                                                              <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                                                                 <ul class="select2-selection__rendered">
                                                                                    <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="People in these campaigns" style="width: 0px;"></li>
                                                                                 </ul>
                                                                              </span>
                                                                           </span>
                                                                           <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                        <div style="height:10px;"></div>
                                                                        <select style="width: 100%" multiple="" name="AutoSuppress" id="qiciWAutoSuppress" size="5" data-oval="suppression addresses set" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                                                           <option value=""></option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;">
                                                                           <span class="selection">
                                                                              <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                                                                 <ul class="select2-selection__rendered">
                                                                                    <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="These domains and email addresses" style="width: 0px;"></li>
                                                                                 </ul>
                                                                              </span>
                                                                           </span>
                                                                           <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                        <div class="receive-past-wrap">
                                                                           <span class="receive receive-past">People I've emailed in the past</span>
                                                                           <input class="receive-input" type="text" placeholder="0" size="3" id="qiciWSuppressionDays" value="0" data-oval="supression days set">
                                                                           <span class="receive">days</span>
                                                                        </div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>A/B Test:</span></td>
                                                                  <td>
                                                                     <label class="g2_checkbox">
                                                                     <input type="checkbox" [abteston]="" style="position: relative;" name="ABTest" value="true" id="qiciWABTest" data-oval="a/b test">
                                                                     <span>Send different emails to see what works best</span>
                                                                     </label>
                                                                     <div class="g_ab_test" style="display: none;">
                                                                        <div style="margin-bottom: 15px; margin-right:6px;">
                                                                           <div style="margin-top:1em;">Percentage to send before making a decision:</div>
                                                                           <input type="range" class="ab_send_percent" id="qiciWABPercentage" name="ABPercentage" value="20" min="0" max="100" step="1"><span class="ab_send_percent_value">20%</span>
                                                                        </div>
                                                                        <div class="ab_test_settings" style="opacity: 1;">
                                                                           <div style="margin-bottom: 15px; margin-right:6px;">
                                                                              Decide when?
                                                                              <input type="number" min="0" style="width:4em; margin-left: 6px;" id="qiciWABTimeAfter" name="qiciWABTimeAfter" value="4">  hours after sending test
                                                                           </div>
                                                                           <div style="margin-bottom: 15px; margin-right:6px;">
                                                                              Decide how?
                                                                              <label class="g_radio" style="margin-left:1em"><input type="radio" id="qiciWABDecisionAutomatic" [abdecisionautomatic]="" name="ABDecision" value="a"> <span>Automatic</span></label>
                                                                              <label class="g_radio"><input type="radio" id="qiciWABDecisionManual" checked="" name="ABDecision" value="m"> <span>Manual</span></label>
                                                                           </div>
                                                                           <div class="g_ab_how" style="margin-bottom: 15px; margin-right: 6px; margin-left: 90px; display: none;">
                                                                              Based on:
                                                                              <select id="qiciWABFactor" name="qiciWABFactor" style="margin-left:1em">
                                                                                 <option value="o">Opens</option>
                                                                                 <option value="c">Clicks</option>
                                                                                 <option value="r">Replies</option>
                                                                              </select>
                                                                           </div>
                                                                        </div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td><span>Triggers:</span></td>
                                                                  <td>
                                                                     <label class="g2_checkbox">
                                                                     <input type="checkbox" [triggerson]="" style="position: relative;" name="Triggers" value="true" id="qiciWTriggers" data-oval="triggers">
                                                                     <span>Send triggered emails when recipient...</span>
                                                                     </label>
                                                                     <div class="g_triggers" style="display: none;">
                                                                        <div class="trigger_settings">
                                                                           <div style="margin-top: 10px;">
                                                                              <div style="display: flex; width: 230px;">
                                                                                 <div>Opens:</div>
                                                                                 <div id="qiciWTriggerOpenClear" class="g2_trigger_clear" style="display: none; margin-left: auto;"><a href="#">clear</a></div>
                                                                              </div>
                                                                              <div style="display:flex;align-items:center">
                                                                                 <select id="qiciWTriggerOpenCampaign" name="TriggerOpenCampaign" style="width: 230px; display:inline-block; font-size:8pt" class="g-campaign-select select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                                                    <option></option>
                                                                                 </select>
                                                                                 <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 230px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWTriggerOpenCampaign-container"><span class="select2-selection__rendered" id="select2-qiciWTriggerOpenCampaign-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                                 <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                                 <button class="g2_edit_message" data-type="trigger" title="Edit the selected message" style="display:none"></button>
                                                                                 <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                              </div>
                                                                              <div style="margin-top: 6px;"><label><input type="checkbox" name="TriggerOpenThreaded" id="qiciWTriggerOpenThreaded" [triggersopenthreadedon]="" value="on"> Thread with existing conversation</label></div>
                                                                              <div style="margin-top: 6px;"><label><input type="checkbox" id="qiciWTriggerOpenInstantly" class="TriggerOpenInstantly" checked=""> <span id="qiciWTriggerOpenSendInstantlyText" style="color: black;">Send instantly</span></label></div>
                                                                              <div style="margin-top: 6px;display:none;" class="TriggerOpenDelayWrap">Send after <input type="number" name="TriggerOpenDelay" style="width:4em" min="0" id="qiciWTriggerOpenDelay" value="0"> minutes</div>
                                                                              <div style="display: flex; width: 230px; margin-top: 12px;">
                                                                                 <div>Clicks:</div>
                                                                                 <div id="qiciWTriggerClickClear" class="g2_trigger_clear" style="display: none; margin-left: auto;"><a href="#">clear</a></div>
                                                                              </div>
                                                                              <div style="display:flex;align-items:center;">
                                                                                 <select id="qiciWTriggerClickCampaign" name="TriggerClickCampaign" style="width: 230px; display:inline-block; font-size:8pt" class="g-campaign-select select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                                                    <option></option>
                                                                                 </select>
                                                                                 <span class="select2 select2-container select2-container--default" dir="ltr" style="width: 230px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-qiciWTriggerClickCampaign-container"><span class="select2-selection__rendered" id="select2-qiciWTriggerClickCampaign-container"><span class="select2-selection__placeholder">Select message</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                                 <button class="g2_view_message" title="View the selected message" style="display:none"></button>
                                                                                 <button class="g2_edit_message" data-type="trigger" title="Edit the selected message" style="display:none"></button>
                                                                                 <button class="g2_refresh_messages" title="Refresh the message list"></button>
                                                                              </div>
                                                                              <div style="margin-top: 6px;"><label><input type="checkbox" name="TriggerClickThreaded" id="qiciWTriggerClickThreaded" [triggersclickthreadedon]="" value="on"> Thread with existing conversation</label></div>
                                                                              <div style="margin-top: 6px;"><label><input type="checkbox" id="qiciWTriggerClickInstantly" class="TriggerClickInstantly" checked=""> <span id="qiciWTriggerClickSendInstantlyText" style="color: black;">Send instantly</span></label></div>
                                                                              <div style="margin-top: 6px;display:none;" class="TriggerClickDelayWrap">Send after <input type="number" name="TriggerClickDelay" style="width:4em" min="0" id="qiciWTriggerClickDelay" value="0"> minutes</div>
                                                                              <div style="margin-top: 12px;">Create a trigger email: <button class="g2_add_message" data-stage="-1" title="Create a new message" style="vertical-align: middle;"></button></div>
                                                                           </div>
                                                                        </div>
                                                                     </div>
                                                                  </td>
                                                               </tr>
                                                               <tr>
                                                                  <td>Poll:</td>
                                                                  <td>
                                                                     <a href="#" class="g_add_poll">Simple email poll</a>
                                                                  </td>
                                                               </tr>
                                                            </tbody>
                                                         </table>
                                                         <div style="margin-top:1em">
                                                            Preview Text:
                                                            <br>
                                                            <input size="32" maxlength="278" class="g_friendly_name" placeholder="Set optional preview text" value="" type="search" data-oval="preview text set" id="qiciWPreviewText">
                                                         </div>
                                                         <div style="margin-top:1em">
                                                            Friendly Name:
                                                            <br>
                                                            <input size="32" class="g_friendly_name" placeholder="Choose a friendly campaign name" value="" type="search" data-oval="friendly name set" id="qiciWfriendlyname">
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>`;
            document.body.append(mailsettingsDiv)
       } catch (error) {
       console.log("error loading extension frame", error);
       }
}

document.body.addEventListener('click',function (event){
   let gMod_overlay = document?.getElementById("gsheetoverlay_c");
   let gMod_c = document?.getElementById("modal_content_c");
   let gsheetMod_overlay = document?.getElementById("gsheetoverlaymodal_c");
   let gsheetMod_c = document?.getElementById("gsheetmodal_l_c");
   console.log('event target',event.target)
      if(event.target.className === "gsheetoverlay_c") {
         event.target.firstElementChild.classList.add('d_none');
         event.target.classList.add('d_none');
         if(document.querySelector("#gsheetoverlaymodal_c") !== undefined && document.querySelector("#gsheetoverlaymodal_c") !== null) {
            document.querySelector("#gsheetoverlaymodal_c").classList.add("d_none")
         }
      }else if(event.target.className === "gsheetoverlaymodal_c") {
         event.target.firstElementChild.classList.add('d_none');
         event.target.classList.add('d_none');
         
         if(document.querySelector("#gsheetmodal_l_c") !== undefined && document.querySelector("#gsheetmodal_l_c") !== null) {
            document.querySelector("#gsheetmodal_l_c").classList.add("d_none")
         }
      }else if(event.target.className === "close_modal_c") {
         gMod_overlay.classList.add('d_none');
         gMod_c.classList.add('d_none');
         event.target.parentElement.parentElement.parentElement.classList.add('d_none')
         event.target.parentElement.parentElement.parentElement.parentElement.classList.add('d_none')
         if(document.querySelector("#gsheetmodal_l_c") !== undefined && document.querySelector("#gsheetmodal_l_c") !== null) {
            document.querySelector("#gsheetmodal_l_c").classList.add("d_none")
         }
      }else if(event.target.className === "g_sheet_s" || event.target.className === "gsheet_list_icon") {
         gMod_overlay.classList.remove('d_none');
         gMod_c.classList.remove('d_none');
      }else if(event.target.className === "gsheet_mod"){
         if(event.target.parentElement !== undefined && event.target.parentElement !== null) {
            gMod_c.remove();
            gMod_overlay.remove();
         }
         gMod_c.remove();
         gMod_overlay.remove();
         if(document.querySelector("#gsheetmodal_l_c") !== undefined && document.querySelector("#gsheetmodal_l_c") !== null) {
            gsheetMod_overlay.classList.add('d_none');
            gsheetMod_c.classList.add('d_none');
         }
         
         openGSheetModal("gsheet_mod")
      }else if(event.target.className === "g_accordian_title"){
            event.target.parentElement.classList.toggle('open')
      }else {

      }
})

 chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   if(message.action === "userauthenticationSuccess") {
      chrome.runtime.sendMessage({ action: "checkforfirstemailcampaign", details: message.data.email });
   }
   
   if(message.action === "userauthenticationfailure") {

   }

   if(message.action === "firstemailcampaigntrue") {
      console.log('first mail true');
      
      
   }

   if(message.action === "firstemailcampaignfalse") {
      console.log('first mail false')
   }
})
