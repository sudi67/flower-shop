import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header onCartOpen={() => setIsCartOpen(true)} />
        <Hero />
        <Products />
        <About />
        <Contact />
        <Footer />
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;