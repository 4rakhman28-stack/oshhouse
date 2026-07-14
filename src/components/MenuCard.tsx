import type { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface Props {
  item: MenuItem;
}

export function MenuCard({ item }: Props) {
  const { addItem } = useCart();

  return (
    <article className="menu-card">
      <div className="menu-card__image">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="menu-card__badge">{item.badge}</span>}
      </div>
      <div className="menu-card__body">
        <div className="menu-card__top">
          <h3>{item.name}</h3>
          {item.weight && <span className="menu-card__weight">{item.weight}</span>}
        </div>
        <p>{item.description}</p>
        <div className="menu-card__footer">
          <span className="menu-card__price">{item.price} ₽</span>
          <button className="btn btn--small" onClick={() => addItem(item)}>
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}
