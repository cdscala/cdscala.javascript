const productContainers = [...document.querySelectorAll('.cs-product-container')];
const nxtBtn = [...document.querySelectorAll('.cs-nxt-btn')];
const preBtn = [...document.querySelectorAll('.cs-pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

