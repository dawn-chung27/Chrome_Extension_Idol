chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.txt == "Hello") {
    selectAndReplace(message.selectedImage, sender, sendResponse);
  }
  });
  function selectAndReplace(message, sender, sendResponse) {
  let imgs = document.querySelectorAll('img');
  console.log(imgs)
  switch (message) {
  
  case "image1":
  for (imgElt of imgs) {
  let file = 'images/1.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image2":
  for (imgElt of imgs) {
  let file = 'images/2.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  
  case "image3":
  
  for (imgElt of imgs) {
  let file = 'images/3.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image4":
  for (imgElt of imgs) {
  let file = 'images/4.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image5":
  for (imgElt of imgs) {
  let file = 'images/5.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;

  case "image6":
  for (imgElt of imgs) {
  let file = 'images/1.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image7":
  for (imgElt of imgs) {
  let file = 'images/2.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  
  case "image8":
  
  for (imgElt of imgs) {
  let file = 'images/3.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image9":
  for (imgElt of imgs) {
  let file = 'images/4.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image10":
  for (imgElt of imgs) {
  let file = 'images/5.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  }
  }