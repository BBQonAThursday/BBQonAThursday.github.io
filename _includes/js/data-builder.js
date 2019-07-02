var xhr, brand, selectorBrand, brandUnit, brandUI, productGuide, selectorProductGuide, sections, tocStart, tocEnd, graberProductGuidesJSON;

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
      brandTypeData.brand = 'graber';
      brandTypeData.brandUnit = 1;
      //set the output value in the element
      brandUI.textContent = 'Graber';
      setProductGuides(brandUnit);
      console.log(brandUnit);
      break;
    
    case 'budget-blinds':
      //get the brand for the data structure
      brand = 'budget-blinds';
      brandUnit = 2;
      //get the brand for the data structure
      brandUI.textContent = 'Budget Blinds';
      setProductGuides(brandUnit);
      break;

    case 'jcp-custom-dec':
      //get the brand for the data structure
      brand = 'jcp-custom-dec';
      brandUnit = 3;
      //get the brand for the data structure
      brandUI.textContent = 'JCPenney Custom Decorator';
      setProductGuides(brandUnit);
      break;
      
  }

 

  
};


function setProductGuides(businessUnit) {
  xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200){
      graberProductGuidesJSON = JSON.parse(xhr.responseText);
    
      for(var i = 0; i < graberProductGuidesJSON.graber.length; i++){
      
        pgOption = document.createElement('option');
        pgOption.text = graberProductGuidesJSON.graber[i].uiName;
        option.value = graberProductGuidesJSON.graber[i].dataName;
        selectorProductGuide.add(pgOption);
        console.log(graberProductGuidesJSON.graber[i].uiName)
       
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