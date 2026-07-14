import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Features } from './components/Features';
import { Delivery } from './components/Delivery';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <Features />
        <Delivery />
      </main>
      <Footer />
      <Cart />
    </CartProvider>
  );
}
