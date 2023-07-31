
let lista = document.querySelector("#lista-de-productos");

let productos

traerProductosStorage()


function logValue(value){
    console.log(value)
}

function saveValueToWish(value){
    //value contiene la clave del elemento que esta en productos
    let seleccionado = productos.find((objeto)=>{return objeto.id === value})
    // console.log(seleccionado)

    let existe = wishlist.find((objeto) => objeto.id === seleccionado.id);

    if (!existe) { 
        wishlist.push(seleccionado)
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
        Toastify({
            text: "El producto fue agregado a la lista de deseados",
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
        actualizarNavIcon()
    }
    else{
        Toastify({
            text: "El producto ya esta en la lista de deseados",
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

    
}

function saveValueToCart(value){
    //value contiene la clave del elemento que esta en productos
    let seleccionado = productos.find((objeto)=>{return objeto.id === value})
    // console.log(seleccionado)

    const indiceWishList = wishlist.findIndex((objeto) => objeto.id === seleccionado.id);

    if (indiceWishList !== -1) { 
        wishlist[indiceWishList].cantidad++; 
    }else {
      const item = new Producto(productoSeleccionado,1);
      carrito.push(item);
    }

    localStorage.setItem('wishlist',JSON.stringify(wishlist));
}

function addToWish(value){
    return `saveValueToWish(${value})`
}

function generateTable(container, data) {

    let data1 = "";
    data.map((values) => {
        data1+= `
            <div class="cs-product-card">
                <div class="cs-product-image">
                    <span class="cs-discount-tag">&#9734;${values.rating.rate}</span>
                    <img src=${values.image} class="cs-product-thumb" alt="">
                    <button value=${values.id} onclick=${addToWish(values.id)} class="cs-card-btn add-to-wish" >agregar a deseados</button>
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
  

  async function traerProductos() {
    return await fetch("https://fakestoreapi.com/products")
  }

  async function cargarProductos(){
    const response = await traerProductos()
    if (response.ok){
        productos = await response.json()
        // console.log(productos)
        generateTable(lista, productos);
    }
    else{
        Toastify({
            text: "Hubo un error al leer los productos",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            //   background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
  }
  

cargarProductos()

