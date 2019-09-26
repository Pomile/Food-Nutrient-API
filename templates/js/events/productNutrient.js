const displayProductNutrient = () => {
    const productNutrient = `<div class="productNutrient" id="productNutrient" >
    <span class="nutrientCloseBtn" onclick="closeProductNutrient()">X</span>
        <img  src="../images/recipe6.jpg" />
        <p class="productName text-align-center">Deli pizza</p>
        <div class="nutrients">
            <div class="row">
                <div class="nutrient">Protein</div>
                <div class="unit">20g</div>
            </div>
             <div class="row">
                <div class="nutrient">Vitamin A</div>
                <div class="unit">10g</div>
            </div>
             <div class="row">
                <div class="nutrient">Vitamin b</div>
                <div class="unit">1g</div>
            </div>
            <div class="row">
                <div class="nutrient">Fat</div>
                <div class="unit">10g</div>
            </div>
        </div>
        
    </div>`
    const bacdrop = document.getElementById("backdrop");
    bacdrop.classList.remove('backdropHide');
    bacdrop.classList.add('backdropShow');
    const root = document.getElementById('root');
    root.insertAdjacentHTML("beforeend", productNutrient);
    
}

const closeProductNutrient = () => {
    const bacdrop = document.getElementById("backdrop");
    bacdrop.classList.remove('backdropShow');
    bacdrop.classList.add('backdropHide');
    const root = document.getElementById('root');
    root.removeChild(root.lastChild);
}


export {
    closeProductNutrient,
    displayProductNutrient
}