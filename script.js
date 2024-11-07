let sizeSelector = document.querySelector('#size');
let colorSelector = document.querySelector('#color');
let baseSelector = document.querySelector('#base');
let singleVariantSelector = document.querySelectorAll('.single-variant-selector')



singleVariantSelector.forEach(single => {
  single.addEventListener('change',function(e){
    console.clear()
    let colorValue = colorSelector.value
    let sizeValue = sizeSelector.value

    let sizeColorVariant = `${colorValue} / ${sizeValue}`
    
    let baseOptionsArray = [...baseSelector.options]
    baseOptionsArray.forEach(option => {
      if(option.innerText == sizeColorVariant){
        option.selected = 'select'
        let finalVariantId = option.dataset.variantId;
        window.history.replaceState(null,null,`product-variant-id-${finalVariantId}`)
      }
    })
    
    console.log("Size and color :", sizeColorVariant);
    console.log("base:", baseSelector.value);
  })
})

