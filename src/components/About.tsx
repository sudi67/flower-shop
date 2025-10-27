import { motion } from 'framer-motion';
import { Leaf, Heart, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Leaf,
      title: 'Locally Sourced',
      description:
        'We partner with local growers to bring you the freshest blooms while supporting our community.',
    },
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description:
        'Every arrangement is carefully designed by our expert florists with attention to detail.',
    },
    {
      icon: Award,
      title: 'Sustainable Practices',
      description:
        'We are committed to eco-friendly practices, from sourcing to packaging.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1675708265003-72e27e6ab6b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxmbG9yaXN0JTIwZmxvd2VyJTIwYXJyYW5nZW1lbnQlMjBoYW5kcyUyMHdvcmtzaG9wfGVufDB8MHx8fDE3NjE1NDk1OTV8MA&ixlib=rb-4.1.0&q=85"
                alt="Florist working with flowers - Nagihan Gülmez on Unsplash"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-soft-rose rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg text-text-dark mb-6">
              Crafting Beauty, Naturally
            </h2>
            <p className="body-lg text-text-light mb-8">
              At Blossom & Bloom, we believe in the power of flowers to bring
              joy, celebrate moments, and connect people. Our boutique florist
              has been serving the community for over a decade with a commitment
              to quality, sustainability, and artistry.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-rose flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-rose-dark" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="body-base text-text-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}