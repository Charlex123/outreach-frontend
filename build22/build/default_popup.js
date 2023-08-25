/* global chrome */

alert('i am popup.js');
console.log("i'm content.js hereeeeeeeeeee");
// document.addEventListener("DOMContentLoaded", () => {
//     alert('document loaded')
//     const button = document.getElementById("outreach-btn");
//     button.addEventListener("click", () => {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.tabs.sendMessage(tabs[0].id, { type: "change-color" });
//         console.log('button clicked')
//       });
//       console.log('sign in button clicked')
//     });
//   });
