//Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.


function Item(product, price, quantity, discount=0) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalPrice = function() {
            return this.price - this.price*(this.discount/100);
        }
}

let Cart = []

Cart.push(
    new Item('Куртка', 3490, 1),
    new Item('Джинсы', 2490, 2, 10),
    new Item('Рубашка', 1490, 3),
    new Item('Галстук',  990, 4, 10)
);

function MyCart(Cart) {
    console.log('Ваш заказ: ')
    Cart.forEach(val => {
    console.log (`
    Наименование: ${val.product}.
    Количество: ${val.quantity}.
    Цена со скидкой за единицу: ${val.finalPrice()}`);
    });
}
MyCart(Cart);


function finalCost(Cart) {
    return Cart.reduce( function (MyCost, Cart){
        return MyCost + (Cart.finalPrice() * Cart.quantity)
    }, 0)
};
console.log('Итого за заказ: ' + finalCost(Cart));
