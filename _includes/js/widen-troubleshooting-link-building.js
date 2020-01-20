let requestURL = '/_data/widen-data/troubleshooting/sig-series-all-troubleshooting.json';
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



function getDocProductLine(docProdLine) {
  switch(docProductLine) {
    case '00 - Motorization / Multiple Products':

      break;
    case '01 - Drapery Hardware':

      break;
    case '02 - MTM Products':

      break;
    case '03 - Verticals':

      break;
    case '04 - Horizontals':

      break;
    case '05 - Pleated Shades':

      break;
    case '06 - Cellular Shades':

      break;
    case '07 - Roman Shades':

      break;
    case '08 - Stock Blinds & Shades':

      break;
    case '09 - Wood Blinds':

      break;
    case '10 - Natural Shades':

      break;
    case '11 - Composite Shutters':

      break;
    case '12 - DD Install & Repair':

      break;
    case '13 - Wood Shutters':

      break;
    case '14 - Solar & Roller Shades':

      break;
    case '15 - Faux Wood Blinds':

      break;
    case '16 - Panel Track':

      break;
    case '17 - Soft Treatments':

      break;
    case '18 - Sheer & Layered Shades':
      
      break;
  }
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