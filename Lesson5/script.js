const main = document.querySelector('#main');

let Cart = []
let emptyCart = '<p>Корзина пуста</p>'

function Item(product, price, quantity, discount=0) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalPrice = function() {
            return this.price - this.price*(this.discount/100);
        }
}


Cart.push(
    new Item('Куртка', 3490, 1),
    new Item('Джинсы', 2490, 2, 10),
    new Item('Рубашка', 1490, 3),
    new Item('Галстук',  990, 4, 10)
);


function MyCart_new(Cart) {
main.insertAdjacentHTML('beforeend', `<div class="prod_item total">Ваш заказ</div>`);
	Cart.forEach(val => {
    document.writeln(`<div>
    Наименование: ${val.product}.
    Количество: ${val.quantity}.
    Цена со скидкой за единицу: ${val.finalPrice()}`);
    });
}


function finalCost(Cart) {
    return Cart.reduce( function (MyCost, Cart){
        return MyCost + (Cart.finalPrice() * Cart.quantity)
    }, 0)
};

function finalQty(Cart) {
    return Cart.reduce( function (MyQty, Cart){
        return MyQty + Cart.quantity
    }, 0)
};


if (Cart == 0) {
	main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyCart}</div>`);
} else {
MyCart_new(Cart);
    const totalPrice = main.insertAdjacentHTML('beforeend',
    `<hr><div class="prod_item total">В корзине: ${finalQty(Cart)} товаров на сумму ${finalCost(Cart)}
     рублей</div>`);
}
