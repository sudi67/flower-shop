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
    >
      <Card className="group overflow-hidden border-border-color hover:shadow-xl transition-all duration-300 bg-white">
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <motion.div
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            <p className="body-sm text-white line-clamp-2">
              {product.description}
            </p>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="heading-sm text-text-dark mb-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="heading-sm text-rose-dark">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              className="bg-rose hover:bg-rose-dark text-white"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}