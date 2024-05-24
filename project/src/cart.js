let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("productsInCart")) || [];
let removeCartButton = document.getElementsByClassName("remove-button");
let clearCartButton = document.getElementsByClassName('removeAll');
const plusBtnNew = document.querySelector(".btn-plus");
const minusBtnNew = document.querySelector(".btn-minus");
const curItems = document.querySelector(".curItems");

//show cart storage on cart page
function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let shoppingCart = document.querySelector('.shopping-cart');
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    
    if(cartItems && shoppingCart){
        //console.log('running');
        shoppingCart.innerHTML = '';
        Object.values(cartItems).map(item => {
            shoppingCart.innerHTML += `
            <div class ='cart-item'>
            <img width = "100" src=${item.img} alt="" />
            <div class = "details">
                <div class= "title-price-x">
                    <h4 class="title-price">
                        <p>${item.name}</p>
                        <p class="cart-item-price">R ${item.price}</p>
                    </h4>
                    <button class="remove-button bi bi-x-lg"></button>
                </div>
                <div class="buttons">
                    <div id= ${item.id} class="quantity"><span class="curItems">${item.isInCart}</span></div>
                </div>
            </div>
            `
        });
        shoppingCart.innerHTML += `
            <div class=""basket-total">
            <h2>Total Bill : R${cartCost}</h2>
            <button class="checkout">Checkout</button>
            <button class="removeAll">Clear Cart</button>
            </div>
            `
        ;
    } else if(basket.length !== 0){
        return shoppingCart.innerHTML = basket.map((x)=>{
            console.log("ID:", x.id);
            console.log("shopItemsData:", shopItemsData);
            console.log(x);
            let {id, item} = x;
            let search = shopItemsData.find((y)=> y.id === id.toString()) || [];
            let {img, name, price} = search;
            console.log("Search result:", search);
            return
        }).join("");
    }
       else{
        
        shoppingCart.innerHTML = '';
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index1.html">
        <button class="HomeBtn">Back to home</button>
        </a>
        `;
    };
}

displayCart();

//remove item from cart
for(let i = 0; i < removeCartButton.length; i++){
    removeCartButton[i].addEventListener('click', removeItem);
}

function removeItem(event){
    removeCartButton = event.target;
    removeCartButton_grandparent = removeCartButton.parentElement.parentElement.parentElement;
    removeCartButton_grandparent.remove()
}

//clear cart
for(let i = 0; i < removeCartButton.length; i++){
    clearCartButton[i].addEventListener('click', cartClear);
}

function cartClear(event){
    clearCartButton = event.target;
    let cartItems = 0;
    let cartCost = 0;
    let cartNums = 0
    clearCartButton_grandparent = clearCartButton.parentElement.parentElement;
    clearCartButton_grandparent.remove();
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem('totalCost', cartCost);
    localStorage.setItem('cartNums', cartNums);
    if(cartClear){
        `<div class="cartAmount"><span>0</span></div>`
        shoppingCart.innerHTML = '';
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index1.html">
        <button class="HomeBtn">Back to home</button>
        </a>
        `;
    }
}

