let carts = document.querySelectorAll('.add-Cart');

//add to cart button
for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNums(shopItemsData[i]);
        totalCost(shopItemsData[i]);
    })
}

//save cart total and local storage
function saveCartNums(){
    let productNumbers = localStorage.getItem('cartNums');

    if(productNumbers){
        document.querySelector('.cartAmount span').textContent = productNumbers
    };
}

//check total in cart
function cartNums(product) {
    let productNumbers = localStorage.getItem('cartNums');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNums', productNumbers + 1);
        document.querySelector('.cartAmount span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNums', 1);
        document.querySelector('.cartAmount span').textContent = 1;
    };

    setItems(product)
}

//save cart items to local storage
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.id] == undefined){
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }

        cartItems[product.id].isInCart += 1;
    } else{
        product.isInCart = 1
        cartItems = {
            [product.id]: product
        }
    } 

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}

//calculate cost of items in local storage
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }else {
        localStorage.setItem('totalCost', product.price);
    } 
    
}

saveCartNums();


