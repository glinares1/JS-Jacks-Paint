function configureListeners() {
    let images = getElementByClasssname
//mouseover events I guess 
    for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity = false);   
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity = false);  
    } 
}

function addOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if(thisclassList.contains('dim')){
        this.classList.add('dim')
    }
     //removed appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
            price ="$15.99";
            colorName = "Lime Green";
            break; 

        case 'pn2':
            price = "$12.14";
            colorName = "Medium Brown";
        break;            

        case 'pn3':
            price = "$23.99";
            colorName = "Royal Blue";
            break;   

        case 'pn4':
            price = "$5.99";
            colorName = "Solid black";
            break;   

        case 'pn5':
            price = "$9.22";
            colorName = "Solid Cyan";
            break;   

        case 'pn6':
            price ="$12.99";
            colorName = "Solid Purple";
            break;   

        case 'pn7':
            price = "$14.42";
            colorName = "Solid Red";
            break;   

        case 'pn8':
            price = "$22.98";
            colorName = "Solid White";
            break;   

        case 'pn9':
            price ="$15.99";
            colorName = "Solid Yellow";
            break;   
          default:    
          console.log ("Image")          
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.querySelector('#color-price');
        colorPrice.textContent = price;

        let color = document.querySelector('#color-name');
        color.textContent = colorName;
    }
    updatePrice(colorName, price);

}
