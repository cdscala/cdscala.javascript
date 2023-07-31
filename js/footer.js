const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="cs-footer-content">
        <img src="./assets/img/shop-logo.svg"" class="cs-logo" alt="">
        <div class="cs-footer-ul-container">
            <ul class="cs-category">
                <li class="cs-category-title">men</li>
                <li><a href="#" class="cs-footer-link">t-shirts</a></li>
                <li><a href="#" class="cs-footer-link">sweatshirts</a></li>
                <li><a href="#" class="cs-footer-link">shirts</a></li>
                <li><a href="#" class="cs-footer-link">jeans</a></li>
                <li><a href="#" class="cs-footer-link">trousers</a></li>
                <li><a href="#" class="cs-footer-link">shoes</a></li>
                <li><a href="#" class="cs-footer-link">casuals</a></li>
                <li><a href="#" class="cs-footer-link">formals</a></li>
                <li><a href="#" class="cs-footer-link">sports</a></li>
                <li><a href="#" class="cs-footer-link">watch</a></li>
            </ul>
            <ul class="cs-category">
                <li class="cs-category-title">women</li>
                <li><a href="#" class="cs-footer-link">t-shirts</a></li>
                <li><a href="#" class="cs-footer-link">sweatshirts</a></li>
                <li><a href="#" class="cs-footer-link">shirts</a></li>
                <li><a href="#" class="cs-footer-link">jeans</a></li>
                <li><a href="#" class="cs-footer-link">trousers</a></li>
                <li><a href="#" class="cs-footer-link">shoes</a></li>
                <li><a href="#" class="cs-footer-link">casuals</a></li>
                <li><a href="#" class="cs-footer-link">formals</a></li>
                <li><a href="#" class="cs-footer-link">sports</a></li>
                <li><a href="#" class="cs-footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="cs-footer-title">about company</p>
    <p class="cs-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="cs-info">support emails - help@shop.com, customersupport@shop.com</p>
    <p class="cs-info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="cs-footer-social-container">
        <div>
            <a href="#" class="cs-social-link">terms & services</a>
            <a href="#" class="cs-social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="cs-social-link">instagram</a>
            <a href="#" class="cs-social-link">facebook</a>
            <a href="#" class="cs-social-link">twitter</a>
        </div>
    </div>
    <p class="cs-footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();