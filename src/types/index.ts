export type Category = 'all' | 'main' | 'soup' | 'bakery' | 'grill' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, 'all'>;
  image: string;
  badge?: string;
  weight?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderForm {
  name: string;
  phone: string;
  address: string;
  comment: string;
}
