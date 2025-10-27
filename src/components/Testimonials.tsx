import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Wedding Client',
    content:
      'Blossom & Bloom transformed our wedding into a floral paradise. Every arrangement was a masterpiece, and the attention to detail was extraordinary. Our guests are still talking about the stunning centerpieces!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Client',
    content:
      'We order weekly arrangements for our office, and each delivery brings fresh energy to our workspace. The quality is consistently exceptional, and the team truly understands our aesthetic.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Regular Customer',
    content:
      'I\'ve been a loyal customer for three years. The sustainable practices and locally sourced blooms make me feel good about every purchase. Plus, the arrangements last so much longer than anywhere else!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="body-lg text-text-light max-w-2xl mx-auto">
            Don't just take our word for it — hear from those who've experienced
            the Blossom & Bloom difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-border-color relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-soft-rose/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <Quote className="h-8 w-8 text-rose/30 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-rose text-rose"
                      />
                    ))}
                  </div>

                  <p className="body-base text-text-light mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="heading-sm text-sm text-text-dark">
                        {testimonial.name}
                      </p>
                      <p className="body-sm text-text-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}