let requestURL = '/_data/widen-data/installation/motorization.json';
let request = new XMLHttpRequest();
var docContainer = document.querySelector('.widen-quick-links');
var queryContainer = document.querySelector('.query-info');


request.onload = function() {
  let documents = JSON.parse(request.responseText);
  queryInfo(documents);
  buildSubList('Woven Wood Shades', 'woven-wood-shades');
  buildSubList('Woven Wood Drapes', 'woven-wood-drapes');
  buildHtmlList(documents);
}

request.open('GET', requestURL);
request.send();

function removeProductLineTitle(title) {
    const regex = /^[^-]*-/;
    return title.replace(regex, '');
}

function cleanTitle (documentTitle) {
  if(documentTitle.includes('Installation Guide')) {
    newTitle = documentTitle.replace(' - Installation Guide', '');
    return newTitle;
  } else {
    return documentTitle;
  }
}

function buildSubList(subHeadDisplay, subListSelector) {
  let subList = document.createElement('ul');
  subList.classList.add('pdf');
  subList.classList.add(subListSelector);
  let subHeading = document.createElement('h4');
  subHeading.classList.add('document-section-subheading');
  subHeading.textContent = subHeadDisplay;
  docContainer.appendChild(subHeading);
  docContainer.appendChild(subList);
}

function placeListItems(subListName, docLink, docTitle) {
  let subListSelector = document.querySelector(subListName);
  let subListItem = `<li class="pdf-link"><a href="${docLink}" class="widen-link" target="_blank">${removeProductLineTitle(cleanTitle(docTitle))}</a></li>`;
  subListSelector.insertAdjacentHTML('beforeend', subListItem);
}

function buildHtmlList(documents){
  let documentsList = documents.items;
  let pdfList = document.createElement('ul');
  pdfList.classList.add('pdf');
  docContainer.appendChild(pdfList);
  // console.log(documentsList);
  
  documentsList.forEach(document => {
    let docTitle = document.metadata.fields.documentTitle[0];
    let docUrl = document.embeds.document_viewer.share;
    let pageListItem = `<li class="pdf-link"><a href="${docUrl}" class="widen-link" target="_blank">${cleanTitle(docTitle)}</a></li>`
    // console.log(title);
     //console.log(pageListItem);
     if(docTitle.includes('Natural Shades -')) {
        placeListItems('.woven-wood-shades', docUrl, docTitle);
     } else if(docTitle.includes('Natural  -')) {
        placeListItems('.woven-wood-drapes', docUrl, docTitle);
     } else {
      pdfList.insertAdjacentHTML('beforeend', pageListItem);
     }
      
  });
}

function queryInfo(jsonObj) {
  let query = jsonObj.query;
  let queryExp = jsonObj.query_explained;
  let queryHTML = document.createElement('h4');
  let queryExpHTML = document.createElement('p');
  queryHTML.textContent = query;
  queryExpHTML.textContent = queryExp;

  queryContainer.appendChild(queryHTML);
  queryContainer.appendChild(queryExpHTML);
}