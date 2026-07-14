import { useMemo, useState } from 'react';
import type { Category } from '../types';
import { menuItems } from '../data/menu';
import { CategoryFilter } from './CategoryFilter';
import { MenuCard } from './MenuCard';

export function MenuSection() {
  const [active, setActive] = useState<Category>('all');

  const filtered = useMemo(
    () =>
      active === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Наше меню</span>
          <h2>Выберите любимое блюдо</h2>
          <p>14 позиций традиционной узбекской кухни — от плова до зелёного чая</p>
        </div>
        <CategoryFilter active={active} onChange={setActive} />
        <div className="menu-grid">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
