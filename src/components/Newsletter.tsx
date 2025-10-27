import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');

      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-rose/30 via-cream to-sage-light/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-rose-dark" />
            <span className="body-sm text-text-dark font-medium">
              Join Our Blossom Club
            </span>
          </div>

          <h2 className="heading-lg text-text-dark mb-4">
            Get Weekly Floral Inspiration
          </h2>
          <p className="body-lg text-text-light mb-8">
            Subscribe to receive exclusive deals, seasonal tips, and early access
            to our newest arrangements. Plus, get 15% off your first order!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 h-12 border-border-color focus:border-rose bg-white"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-rose hover:bg-rose-dark text-white px-8 h-12 shadow-lg hover:shadow-xl transition-all"
              disabled={isSubmitting || isSubscribed}
            >
              {isSubmitting
                ? 'Subscribing...'
                : isSubscribed
                ? 'Subscribed! ✓'
                : 'Subscribe'}
            </Button>
          </form>

          {isSubscribed && (
            <motion.p
              className="mt-4 body-sm text-sage-dark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🎉 Welcome to the Blossom Club! Check your inbox for your discount
              code.
            </motion.p>
          )}

          <p className="body-sm text-text-light mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}