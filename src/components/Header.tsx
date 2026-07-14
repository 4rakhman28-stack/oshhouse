import { useCart } from '../context/CartContext';

export function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="logo">
          <span className="logo__icon">🍲</span>
          <div>
            <span className="logo__name">OshHouse</span>
            <span className="logo__tagline">Узбекская кухня</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#delivery">Доставка</a>
        </nav>

        <button className="cart-btn" onClick={openCart} aria-label="Открыть корзину">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalItems > 0 && <span className="cart-btn__badge">{totalItems}</span>}
        </button>
      </div>
    </header>
  );
}
