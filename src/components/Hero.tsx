export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__label">Доставка по городу за 45 минут</span>
          <h1>
            Вкус <em>Узбекистана</em> у вас дома
          </h1>
          <p>
            Аутентичный плов, сочный шашлык и свежая выпечка из тандыра.
            Готовим с душой — как в семейной чайхане.
          </p>
          <div className="hero__actions">
            <a href="#menu" className="btn btn--primary">
              Смотреть меню
            </a>
            <a href="#delivery" className="btn btn--ghost">
              Условия доставки
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <strong>5 000+</strong>
              <span>довольных гостей</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>средняя оценка</span>
            </div>
            <div>
              <strong>45 мин</strong>
              <span>среднее время</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <img
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop"
              alt="Плов"
            />
            <div className="hero__card-info">
              <span>Плов по-ташкентски</span>
              <strong>от 450 ₽</strong>
            </div>
          </div>
          <div className="hero__card hero__card--float">
            <span>🔥</span>
            <div>
              <strong>Бесплатная доставка</strong>
              <span>от 1 500 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
