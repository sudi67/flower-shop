import { ShoppingCart, Heart, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductQuickViewProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductQuickView({ product, open, onClose }: ProductQuickViewProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-rose text-white">
              Premium Quality
            </Badge>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col">
            <DialogHeader className="mb-6">
              <DialogTitle className="heading-md text-text-dark">
                {product.name}
              </DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rose text-rose" />
                ))}
                <span className="body-sm text-text-light ml-2">(48 reviews)</span>
              </div>
            </DialogHeader>

            <div className="flex-1">
              <div className="mb-6">
                <span className="heading-lg text-rose-dark">
                  ${product.price.toFixed(2)}
                </span>
                <p className="body-sm text-sage-dark mt-1">
                  ✓ Free delivery • ✓ Freshness guaranteed
                </p>
              </div>

              <div className="mb-6">
                <h4 className="heading-sm text-sm text-text-dark mb-2">
                  Description
                </h4>
                <p className="body-base text-text-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="heading-sm text-sm text-text-dark mb-2">
                  Category
                </h4>
                <Badge variant="outline" className="capitalize">
                  {product.category}
                </Badge>
              </div>

              <div className="mb-6 p-4 bg-cream rounded-lg">
                <h4 className="heading-sm text-sm text-text-dark mb-2">
                  Care Instructions
                </h4>
                <ul className="body-sm text-text-light space-y-1">
                  <li>• Change water every 2-3 days</li>
                  <li>• Trim stems at an angle</li>
                  <li>• Keep away from direct sunlight</li>
                  <li>• Remove wilted blooms promptly</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <Button
                className="flex-1 bg-rose hover:bg-rose-dark text-white"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWishlistToggle}
                className={inWishlist ? 'border-rose text-rose' : ''}
              >
                <Heart
                  className={`h-5 w-5 ${inWishlist ? 'fill-rose' : ''}`}
                />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}