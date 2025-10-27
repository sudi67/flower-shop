import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

interface FloatingCartButtonProps {
  onClick: () => void;
}

export function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          size="lg"
          onClick={onClick}
          className="bg-rose hover:bg-rose-dark text-white shadow-2xl hover:shadow-rose/50 transition-all duration-300 rounded-full px-6 py-6 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-dark to-rose opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <ShoppingBag className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-white text-rose text-xs font-bold">
                {totalItems}
              </Badge>
            </div>
            <div className="text-left hidden sm:block">
              <div className="body-sm font-medium">View Cart</div>
              <div className="text-xs opacity-90">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        </Button>

        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-sage rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}