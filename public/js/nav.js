const createNav = () => {
    let nav = document.querySelector('.cs-navbar')

    nav.innerHTML = `
        <div class="cs-nav">
            <img src="./assets/img/shop-logo.svg" class="cs-brand-logo" alt="">
            <div class="cs-nav-items">
                <div class="cs-search">
                    <input type="text" class="cs-search-box" placeholder="buscar marca, producto">
                    <button class="cs-search-btn">buscar</button>
                </div>
                <a href="#"><img src="./assets/icons/icon-login.svg" alt=""></a>
                <a href="#"><img src="./assets/icons/icon-empty-cart.svg" alt=""></a>
                <a href="./wishlist.html">
                    <img src="./assets/icons/icon-wishlist.svg" alt="">
                    <div class="cs-quantity-bubble"></div>
                </a>
                <div class="cs-div-button" id="cs-calculator"><img src="./assets/icons/icon-calculator.svg" alt=""></div>
            </div>
        </div>
        <ul class="cs-links-container">
            <li class="cs-link-item"><a href="./index.html" class="cs-link">inicio</a></li>
            <li class="cs-link-item"><a href="./search.html" class="cs-link">mujer</a></li>
            <li class="cs-link-item"><a href="./search.html" class="cs-link">hombre</a></li>
            <li class="cs-link-item"><a href="./search.html" class="cs-link">niños</a></li>
            <li class="cs-link-item"><a href="./search.html" class="cs-link">accessorios</a></li>
        </ul>
    `
}

createNav()

const calculatorShower = document.querySelector(".cs-div-button")
const calculatorWrapper = document.querySelector(".cs-wrapper")


calculatorShower.addEventListener('click', () => { 
    if (calculatorWrapper.style.display == 'block'){
        calculatorWrapper.style.display = 'none'
        // console.log("ocultar calculadora")
        
    }
    else{
        calculatorWrapper.style.display = 'block'
        // console.log("mostrar calculadora")
    }
})

