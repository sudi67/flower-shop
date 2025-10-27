import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="heading-sm text-text-dark mb-4">
              Blossom & Bloom
            </h3>
            <p className="body-sm text-text-light">
              Crafting beautiful moments with fresh, sustainable blooms since
              2014.
            </p>
          </div>

          <div>
            <h4 className="heading-sm text-text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="body-sm text-text-light hover:text-rose transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="body-sm text-text-light hover:text-rose transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="body-sm text-text-light hover:text-rose transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="body-sm text-text-light hover:text-rose transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-sm text-text-dark mb-4">Contact</h4>
            <ul className="space-y-2 body-sm text-text-light">
              <li>123 Bloom Street</li>
              <li>Garden City, GC 12345</li>
              <li>(555) 123-4567</li>
              <li>hello@blossomandbloom.com</li>
            </ul>
          </div>

          <div>
            <h4 className="heading-sm text-text-dark mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-soft-rose flex items-center justify-center text-rose-dark hover:bg-rose hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center body-sm text-text-light">
          <p>
            © {currentYear} Blossom & Bloom. All rights reserved. Made with{' '}
            <span className="text-rose">♥</span> for flower lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}