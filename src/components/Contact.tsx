import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fake submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-text-dark mb-4">Let's Create Something Beautiful Together</h2>
          <p className="body-lg text-text-light max-w-2xl mx-auto">
            Whether you're planning a wedding, celebrating a milestone, or simply
            brightening someone's day, we're here to help bring your floral vision
            to life. Reach out and let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-rose flex items-center justify-center">
                <MapPin className="h-6 w-6 text-rose-dark" />
              </div>
              <div>
                <h3 className="heading-sm text-text-dark mb-2">Visit Us</h3>
                <p className="body-base text-text-light">
                  123 Bloom Street
                  <br />
                  Garden City, GC 12345
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-rose flex items-center justify-center">
                <Phone className="h-6 w-6 text-rose-dark" />
              </div>
              <div>
                <h3 className="heading-sm text-text-dark mb-2">Call Us</h3>
                <p className="body-base text-text-light">
                  (555) 123-4567
                  <br />
                  Mon-Sat: 9am - 6pm
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-rose flex items-center justify-center">
                <Mail className="h-6 w-6 text-rose-dark" />
              </div>
              <div>
                <h3 className="heading-sm text-text-dark mb-2">Email Us</h3>
                <p className="body-base text-text-light">
                  hello@blossomandbloom.com
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=40.7128,-74.0060&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="256"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-border-color focus:border-rose"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-border-color focus:border-rose"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your floral needs..."
                  rows={5}
                  required
                  className="border-border-color focus:border-rose resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-rose hover:bg-rose-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {isSubmitted && (
                <motion.p
                  className="text-center body-sm text-sage-dark"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}