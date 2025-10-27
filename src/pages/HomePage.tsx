import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { GiftCards } from '@/components/GiftCards';
import { Newsletter } from '@/components/Newsletter';
import { Contact } from '@/components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <GiftCards />
      <Newsletter />
      <Contact />
    </>
  );
}