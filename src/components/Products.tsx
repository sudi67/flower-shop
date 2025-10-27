import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products, type Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { ProductSearch } from './ProductSearch';
import { ProductQuickView } from './ProductQuickView';

export function Products() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter((product) => {
        const price = product.price;
        switch (priceRange) {
          case 'under-40':
            return price < 40;
          case '40-50':
            return price >= 40 && price < 50;
          case '50-60':
            return price >= 50 && price < 60;
          case 'over-60':
            return price >= 60;
          default:
            return true;
        }
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategories, priceRange, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange('all');
    setSortBy('featured');
  };

  const handleProductSelect = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setQuickViewProduct(product);
    }
  };

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
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

        {/* Search and Filters */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-start sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProductSearch onProductSelect={handleProductSelect} />
          <div className="flex gap-2">
            <ProductFilters
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearFilters={handleClearFilters}
            />
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          className="body-sm text-text-light mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </motion.p>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="heading-sm text-text-light mb-4">
              No products found
            </p>
            <p className="body-base text-text-light mb-6">
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}

        {/* Quick View Modal */}
        <ProductQuickView
          product={quickViewProduct}
          open={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      </div>
    </section>
  );
}