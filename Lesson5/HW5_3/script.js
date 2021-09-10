function Item(product, image, description, price, discount=0) {
    this.product = product;
    this.image = `img/${image}.jpg`;
    this.description = description;
    this.price = price;
    this.discount = discount
        }


let mycatalog = []

mycatalog.push(
    new Item('Куртка', 'image1', 'Все размеры в наличии, куртка черная', 3490),
    new Item('Джинсы', 'image2', 'Супер джинсы синего цвета', 2490,  10),
    new Item('Рубашка', 'image3', 'Рубашка красная',1490),
    new Item('Шарф', 'image4', 'Мягкий и пушистый шарф',990, 10)
);


const catalog = document.querySelector('#catalog');

function drowItem(mycatalog) {
    for (const iterator of mycatalog) {
        catalog.insertAdjacentHTML('beforeend',
        `<div class="prod_item">
            <div class="item">
                <div class="image"><img src="${iterator.image}"></div>
                <div class="description"><h4>${iterator.product}</h4>${iterator.description}
                    <div class="price">Цена:
                        <span>${iterator.price}</span>
                    </div>
                </div>
            </div>
            <div class="sale">
                <span class='offer ${iterator.discount > 0 ? 'show' : ''}'>Скидка: ${iterator.discount}%</span>
                <a href="#">В корзину</a>
            </div>
        </div>`);
    };
}
drowItem(mycatalog);