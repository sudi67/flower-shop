import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1716982360804-b0bfdb28103e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxyb3NlcyUyMGJvdXF1ZXQlMjBmbG93ZXJzJTIwcGV0YWxzfGVufDB8MHx8fDE3NjE1NDk1OTF8MA&ixlib=rb-4.1.0&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/60 to-cream/90" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-rose/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-rose-dark" />
              <span className="body-sm text-text-dark">
                Fresh Blooms Daily
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="heading-xl text-text-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Nature Meets{' '}
            <span className="text-rose-dark">Elegance</span>
          </motion.h1>

          <motion.p
            className="body-lg text-text-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Handcrafted floral arrangements with locally sourced blooms,
            delivered with love and sustainability at heart.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-rose hover:bg-rose-dark text-white group"
              onClick={() => scrollToSection('products')}
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-rose text-rose hover:bg-rose hover:text-white"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-soft-rose/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-sage-light/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </section>
  );
}