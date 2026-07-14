import type { Category } from '../types';
import { categories } from '../data/menu';

interface Props {
  active: Category;
  onChange: (cat: Category) => void;
}

export function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${active === cat.id ? 'category-btn--active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
