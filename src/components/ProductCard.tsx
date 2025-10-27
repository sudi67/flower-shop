import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

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
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/90 hover:bg-white shadow-lg"
              onClick={handleWishlistToggle}
            >
              <Heart
                className={`h-4 w-4 ${
                  inWishlist ? 'fill-rose text-rose' : 'text-text-dark'
                }`}
              />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/90 hover:bg-white shadow-lg"
              onClick={() => onQuickView(product)}
            >
              <Eye className="h-4 w-4 text-text-dark" />
            </Button>
          </div>
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