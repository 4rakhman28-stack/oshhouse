export function Features() {
  const features = [
    {
      icon: '👨‍🍳',
      title: 'Семейные рецепты',
      text: 'Готовим по традициям, передаваемым из поколения в поколение',
    },
    {
      icon: '🥘',
      title: 'Свежие продукты',
      text: 'Отбираем мясо и овощи каждое утро на рынке',
    },
    {
      icon: '🔥',
      title: 'Настоящий тандыр',
      text: 'Лепёшка и сомса пекутся в дровяном тандыре',
    },
    {
      icon: '🚀',
      title: 'Быстрая доставка',
      text: 'Привезём горячим за 45 минут или заказ бесплатно',
    },
  ];

  return (
    <section className="features" id="about">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Почему мы</span>
          <h2>Настоящий вкус Востока</h2>
        </div>
        <div className="features__grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-card__icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
