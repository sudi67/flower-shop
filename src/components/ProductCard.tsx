import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group overflow-hidden border-border-color hover:shadow-2xl hover:shadow-rose/20 transition-all duration-500 bg-white">
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 via-text-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <motion.div
            className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <p className="body-sm text-white line-clamp-3 mb-3">
              {product.description}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-white/30" />
              <span className="body-sm text-white/80">Premium Quality</span>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="heading-sm text-text-dark mb-2 group-hover:text-rose-dark transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <span className="heading-sm text-rose-dark">
                ${product.price.toFixed(2)}
              </span>
              <p className="body-sm text-text-light mt-1">Free delivery</p>
            </div>
            <Button
              size="sm"
              className="bg-rose hover:bg-rose-dark text-white shadow-lg hover:shadow-xl hover:shadow-rose/30 transition-all"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}