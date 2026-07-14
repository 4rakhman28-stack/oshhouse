export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo__name">OshHouse</span>
          <p>Аутентичная узбекская кухня с доставкой на дом</p>
        </div>
        <div className="footer__links">
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#delivery">Доставка</a>
        </div>
        <div className="footer__contact">
          <a href="tel:+79991234567">+7 (999) 123-45-67</a>
          <span>г. Москва, ул. Восточная, 12</span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© 2026 OshHouse — портфолио-проект</span>
        </div>
      </div>
    </footer>
  );
}
