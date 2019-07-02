var xhr, brand, selectorBrand, brandUnit, brandUI, productGuide, selectorProductGuide, sections, tocStart, tocEnd, productGuidesJSON;

selectorBrand = document.getElementById('selector--brand');
selectorProductGuide = document.getElementById('selector--product-guide');
brandUI = document.getElementById('brand-ui');



brandTypeData = {
  brandUnit   : 0,
  brandValue : 0,
  availableGuides : []
}

function getbrandUnit(brand){
  brand = selectorBrand.value;
  switch (brand) {
    case 'graber':
      //get the brand for the data structure
      brand = 'graber';
      brandUnit = 1;
      //set the output value in the element
      brandUI.textContent = 'Graber';
      console.log(brandUnit);
      break;
    
    case 'budget-blinds':
      //get the brand for the data structure
      brand = 'budget-blinds';
      brandUnit = 2;
      //get the brand for the data structure
      brandUI.textContent = 'Budget Blinds';
      break;

    case 'jcp-custom-dec':
      //get the brand for the data structure
      brand = 'jcp-custom-dec';
      brandUnit = 3;
      //get the brand for the data structure
      brandUI.textContent = 'JCPenney Custom Decorator';
      break;   
  }
  setProductGuides(brandUnit);
};

function clearProductGuides() {

}

function setProductGuides(businessUnit) {
  xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200){
      productGuidesJSON = JSON.parse(xhr.responseText);
      
      if(businessUnit === 1) {
        if(selectorProductGuide.length > 0) {
          
        }
        for(var i = 0; i < productGuidesJSON.graber.length; i++){
          pgOption = document.createElement('option');
          pgOption.text = productGuidesJSON.graber[i].uiName;
          pgOption.value = productGuidesJSON.graber[i].dataName;
          selectorProductGuide.add(pgOption);
          console.log(productGuidesJSON.graber[i].uiName)
        }
      }
      if(businessUnit === 2) {
        for(var i = 0; i < productGuidesJSON.budgetBlinds.length; i++){
          pgOption = document.createElement('option');
          pgOption.text = productGuidesJSON.budgetBlinds[i].uiName;
          pgOption.value = productGuidesJSON.budgetBlinds[i].dataName;
          selectorProductGuide.add(pgOption);
          console.log(productGuidesJSON.budgetBlinds[i].uiName)
        }
      }
    }
  }; 

  xhr.open('Get', '/_data/data-builder/productGuides.json', true);
  xhr.send(null);
}


function getProductGuide(productGuide) {
  productGuide = selectorProductLine.value; 
}

function evaluateDataInput(e){

}


selectorBrand.addEventListener('change', getbrandUnit, false);
selectorProductGuide.addEventListener('change', getProductGuide, false);

document.addEventListener('change', evaluateDataInput, false);