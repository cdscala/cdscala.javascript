let wishlist = []

let bubble = document.querySelector('.cs-quantity-bubble')

function traerProductosStorage(){
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    console.log(wishlist.length + ' de app')
    actualizarNavIcon()
}

function actualizarNavIcon(){
    if (wishlist.length !== 0){
        bubble.style.display = 'block'
        bubble.innerHTML = wishlist.length
    }
    else{
        bubble.style.display = 'none'
    }
    
}

//document.addEventListener('DOMContentLoaded', traerProductosStorage);
