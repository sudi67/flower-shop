import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const giftCardAmounts = [25, 50, 75, 100, 150, 200];

export function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true);
    setTimeout(() => {
      setIsPurchased(false);
      setRecipientEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-rose/20 via-white to-sage-light/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-6">
            <Gift className="h-4 w-4 text-rose-dark" />
            <span className="body-sm text-text-dark font-medium">
              Perfect for Any Occasion
            </span>
          </div>
          <h2 className="heading-lg text-text-dark mb-4">
            Give the Gift of Flowers
          </h2>
          <p className="body-lg text-text-light max-w-2xl mx-auto">
            Let them choose their perfect arrangement with a Blossom & Bloom gift
            card. Delivered instantly via email.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8">
            <Tabs defaultValue="preset" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="preset">Preset Amounts</TabsTrigger>
                <TabsTrigger value="custom">Custom Amount</TabsTrigger>
              </TabsList>

              <TabsContent value="preset" className="space-y-6">
                <div>
                  <Label className="heading-sm text-sm mb-4 block">
                    Select Amount
                  </Label>
                  <div className="grid grid-cols-3 gap-4">
                    {giftCardAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedAmount === amount
                            ? 'border-rose bg-soft-rose/20'
                            : 'border-border-color hover:border-rose/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="heading-md text-text-dark">
                          ${amount}
                        </div>
                        {selectedAmount === amount && (
                          <Check className="h-5 w-5 text-rose mx-auto mt-2" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="custom" className="space-y-6">
                <div>
                  <Label htmlFor="custom-amount" className="heading-sm text-sm">
                    Enter Amount
                  </Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light">
                      $
                    </span>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="50.00"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="pl-8"
                      min="10"
                      max="500"
                    />
                  </div>
                  <p className="body-sm text-text-light mt-2">
                    Minimum $10, Maximum $500
                  </p>
                </div>
              </TabsContent>

              <div className="space-y-6 mt-6">
                <div>
                  <Label htmlFor="recipient-email" className="heading-sm text-sm">
                    Recipient Email
                  </Label>
                  <Input
                    id="recipient-email"
                    type="email"
                    placeholder="recipient@example.com"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="heading-sm text-sm">
                    Personal Message (Optional)
                  </Label>
                  <Input
                    id="message"
                    placeholder="Add a heartfelt message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="body-sm text-text-light">Total Amount</p>
                    <p className="heading-lg text-rose-dark">
                      ${customAmount || selectedAmount}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-rose hover:bg-rose-dark text-white"
                    onClick={handlePurchase}
                    disabled={isPurchased || !recipientEmail}
                  >
                    {isPurchased ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Purchased!
                      </>
                    ) : (
                      <>
                        <Gift className="mr-2 h-5 w-5" />
                        Purchase Gift Card
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}