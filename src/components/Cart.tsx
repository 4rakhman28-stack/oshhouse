import { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { OrderForm } from '../types';

export function Cart() {
  const {
    items,
    totalPrice,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [showForm, setShowForm] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [form, setForm] = useState<OrderForm>({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const deliveryFee = totalPrice >= 1500 ? 0 : 199;
  const finalTotal = totalPrice + (items.length > 0 ? deliveryFee : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderDone(true);
    clearCart();
    setTimeout(() => {
      setOrderDone(false);
      setShowForm(false);
      closeCart();
      setForm({ name: '', phone: '', address: '', comment: '' });
    }, 3000);
  };

  const handleClose = () => {
    closeCart();
    setShowForm(false);
    setOrderDone(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={handleClose} />
      <aside className="cart-panel">
        <div className="cart-panel__header">
          <h2>{orderDone ? 'Заказ оформлен!' : showForm ? 'Оформление' : 'Корзина'}</h2>
          <button className="cart-panel__close" onClick={handleClose} aria-label="Закрыть">
            ✕
          </button>
        </div>

        {orderDone ? (
          <div className="cart-success">
            <div className="cart-success__icon">✓</div>
            <h3>Спасибо за заказ!</h3>
            <p>Мы уже готовим ваши блюда. Курьер свяжется с вами в ближайшее время.</p>
          </div>
        ) : showForm ? (
          <form className="order-form" onSubmit={handleSubmit}>
            <label>
              Имя
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Как к вам обращаться?"
              />
            </label>
            <label>
              Телефон
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (999) 000-00-00"
              />
            </label>
            <label>
              Адрес доставки
              <input
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Улица, дом, квартира"
              />
            </label>
            <label>
              Комментарий
              <textarea
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                placeholder="Пожелания к заказу"
                rows={3}
              />
            </label>
            <div className="cart-panel__summary">
              <span>Итого к оплате</span>
              <strong>{finalTotal} ₽</strong>
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Подтвердить заказ
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--full"
              onClick={() => setShowForm(false)}
            >
              Назад
            </button>
          </form>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>Корзина пуста</p>
            <button className="btn btn--primary" onClick={handleClose}>
              Перейти к меню
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item__info">
                    <h4>{item.name}</h4>
                    <span>{item.price} ₽</span>
                    <div className="cart-item__qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                    aria-label="Удалить"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-panel__footer">
              <div className="cart-panel__row">
                <span>Доставка</span>
                <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}</span>
              </div>
              {deliveryFee > 0 && (
                <p className="cart-panel__hint">
                  Ещё {1500 - totalPrice} ₽ до бесплатной доставки
                </p>
              )}
              <div className="cart-panel__summary">
                <span>Итого</span>
                <strong>{finalTotal} ₽</strong>
              </div>
              <button className="btn btn--primary btn--full" onClick={() => setShowForm(true)}>
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
