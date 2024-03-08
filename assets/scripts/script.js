const url = `https://fakestoreapi.com/products`;
const wrapper = document.querySelector('.products-wrapper');
const basketWrapper = document.querySelector('.basket-wrapper');
const basketIcon = document.querySelector('.basket-icon');
const sideMenu = document.querySelector('.side-menu');

const api = () => {
    fetch(url)
        .then(resp => resp.json())
        .then(data => displayProducts(data));
}

const displayProducts = products => {
    const productsHtml = products.map(product => getProducts(product));
}

const getProducts = (product) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card">
            <img src="${product.image}" alt=""  class="card-img">
            <div class="info">
                <p class="name text">Name: ${product.title}</p>
                <p class="price text">Price: ${product.price}</p>
                <p class="count text">Count: ${product.rating.count}</p>
            </div>
            <button class="btn icon card-btn">BUY NOW</button>

        </div>
    `;
    wrapper.appendChild(card);
    
    const basket = card.querySelector('.icon');
    basket.addEventListener('click', function() {
        addToBasket(product); 
    });
}

const addToBasket = (product) => {
    const element = document.createElement('div');
    element.classList.add('element');
    element.innerHTML = `
        <p class="">${product.title}</p>
        <p class="">${product.price}</p>
        <img src="${product.image}" alt="" height="100px" >
    `;
   sidebar.appendChild(element);
}

api();

const sidebarBtn = document.querySelector('.sidebar__btn');
const closeBtn = document.querySelector('.close__btn');
const sidebar = document.querySelector('.side__menu');
const sideWrapper = document.querySelector('.side-wrapper');
basketIcon.addEventListener('click', function(event){
    event.preventDefault();
    sidebar.classList.add('active');
    sideWrapper.classList.add('side')
    
    sideWrapper.innerHTML =element
    sidebar.appendChild(side);

})

closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    sidebar.classList.remove('active'); 

})

sidebar.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    const addToBasket = (product) => {
    const element = document.createElement('div');
    element.classList.add('element');
    element.innerHTML = `
        <p class="">${product.title}</p>
        <p class="">${product.price}</p>
        <img src="${product.image}" alt="" height="100px" >
    `;
    sidebar.appendChild(element);
}
});
