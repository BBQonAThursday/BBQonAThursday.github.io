let requestURL = '/_data/widen-data/troubleshooting/sig-series-cellular.json';
let request = new XMLHttpRequest();
var docContainer = document.querySelector('.widen-quick-links');
var queryContainer = document.querySelector('.query-info');


request.onload = function() {
  let documents = JSON.parse(request.responseText);
  queryInfo(documents);
  buildHtmlList(documents);
}

request.open('GET', requestURL);
request.send();

function removeProductLineTitle(title) {
    const regex = /^[^-]*-/;
    return title.replace(regex, '');
}

function cleanTitle (documentTitle) {
  if(documentTitle.includes('Troubleshooting Guide')) {
    //console.log('has TG');
    newTitle = documentTitle.replace(' - Troubleshooting Guide', '');
    //console.log(newTitle);
    if(newTitle.includes('Horizontal Blinds - ')) {
      return removeProductLineTitle(removeProductLineTitle(newTitle));
    }
    return removeProductLineTitle(newTitle);
  } else if(documentTitle.includes('Installation Guide')) {
    newTitle = documentTitle.replace(' - Installation Guide', '');
    return removeProductLineTitle(newTitle);
  } else {
    return removeProductLineTitle(documentTitle);
  }
}

function buildHtmlList(documents){
  let documentsList = documents.items;
  let pdfList = document.createElement('ul');
  let subList = document.createElement('ul');
  pdfList.classList.add('pdf');
  subList.classList.add('pdf');
  let subHeading = document.createElement('h4');
  subHeading.classList.add('document-section-subheading');
  docContainer.appendChild(pdfList);
  docContainer.appendChild(subHeading);
  docContainer.appendChild(subList);

  console.log(documentsList);
  
  documentsList.forEach(document => {
    let docTitle = document.metadata.fields.documentTitle[0];
    let docUrl = document.embeds.document_viewer.share;
    let pageListItem = `<li class="pdf-link"><a href="${docUrl}" class="widen-link" target="_blank">${cleanTitle(docTitle)}</a></li>`
    // console.log(title);
     //console.log(pageListItem);
     if(docTitle.includes('Vertical Cellular Shades')) {
        subHeading.textContent = 'Vertical Cellular Shades';
        subList.insertAdjacentHTML('beforeend', pageListItem);
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