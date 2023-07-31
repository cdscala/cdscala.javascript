
let lista = document.querySelector("#lista-de-productos");
traerProductosStorage()

function logValue(value){
    console.log(value)
}

function deleteValueFromWish(value){
    //value contiene la clave del elemento que esta en productos
    let seleccionado = wishlist.findIndex((objeto)=>{return objeto.id === value})

    if (seleccionado !== -1) { 
        wishlist.splice(seleccionado,1)
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
        Toastify({
            text: "El producto fue eliminado de la lista de deseados",
            duration: 3000,
            destination: "",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            },
            onClick: function(){} 
          }).showToast();
    }
    else{
        Toastify({
            text: "El producto ya no esta en la lista de deseados",
            duration: 3000,
            destination: "",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            },
            onClick: function(){} 
          }).showToast();
    }

    actualizarNavIcon()
    generateTable(lista, wishlist)
}

function removeFromWish(value){
    return `deleteValueFromWish(${value})`
}

function generateTable(container, data) {
    let data1 = "";
    data.map((values) => {
        data1+= `
            <div class="cs-product-card">
                <div class="cs-product-image">
                    <span class="cs-discount-tag">&#9734;${values.rating.rate}</span>
                    <img src=${values.image} class="cs-product-thumb" alt="">
                    <button value=${values.id} onclick=${removeFromWish(values.id)} class="cs-card-btn add-to-wish" >quitar de deseados</button>
                </div>
                <div class="cs-product-info">
                    <h2 class="cs-product-brand">${values.title}</h2>
                    <p class="cs-product-short-des">${values.description}</p>
                    <span class="cs-price">$${values.price}</span><span class="cs-actual-price">$${values.price}</span>
                </div>
            </div>
        `
    })
    container.innerHTML=data1;
    
  }

generateTable(lista, wishlist)
