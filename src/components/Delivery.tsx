export function Delivery() {
  return (
    <section className="delivery" id="delivery">
      <div className="container delivery__inner">
        <div className="delivery__content">
          <span className="section-label">Доставка</span>
          <h2>Удобно и быстро</h2>
          <ul className="delivery__list">
            <li>
              <strong>45 минут</strong> — среднее время доставки по городу
            </li>
            <li>
              <strong>Бесплатно</strong> — при заказе от 1 500 ₽
            </li>
            <li>
              <strong>Горячая еда</strong> — термосумки сохраняют температуру
            </li>
            <li>
              <strong>Оплата</strong> — картой онлайн или наличными курьеру
            </li>
          </ul>
          <a href="#menu" className="btn btn--primary">
            Заказать сейчас
          </a>
        </div>
        <div className="delivery__map">
          <div className="delivery__map-card">
            <span>📍</span>
            <div>
              <strong>Зона доставки</strong>
              <p>Центр города и ближайшие районы в радиусе 10 км</p>
            </div>
          </div>
          <div className="delivery__map-card delivery__map-card--accent">
            <span>⏰</span>
            <div>
              <strong>Работаем ежедневно</strong>
              <p>с 10:00 до 23:00 без выходных</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
