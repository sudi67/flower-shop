import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function Products() {
  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-text-dark mb-4">
            Our Signature Collection
          </h2>
          <p className="body-lg text-text-light max-w-2xl mx-auto">
            Each arrangement is carefully crafted with the freshest blooms,
            sourced locally and sustainably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}