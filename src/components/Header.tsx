import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onCartOpen: () => void;
}

export function Header({ onCartOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphic shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="heading-md text-rose-dark cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            Blossom & Bloom
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="body-base text-text-dark hover:text-rose transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="body-base text-text-dark hover:text-rose transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="body-base text-text-dark hover:text-rose transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="body-base text-text-dark hover:text-rose transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartOpen}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-rose text-white">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="body-base text-text-dark hover:text-rose transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="body-base text-text-dark hover:text-rose transition-colors text-left"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="body-base text-text-dark hover:text-rose transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="body-base text-text-dark hover:text-rose transition-colors text-left"
            >
              Contact
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}