import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import {
  QrCode,
  CheckCircle,
  Clock,
  CreditCard,
  Smartphone,
  ArrowLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Payment() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | null>(
    null,
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const totalAmount = state.total + Math.round(state.total * 0.05) + 40;

  useEffect(() => {
    if (state.items.length === 0 && !isPaid) {
      navigate("/menu");
    }
  }, [state.items, navigate, isPaid]);

  const processPayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);

      // Clear cart after successful payment
      setTimeout(() => {
        dispatch({ type: "CLEAR_CART" });
        navigate("/order-confirmation");
      }, 2000);
    }, 3000);
  };

  if (isPaid) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            Payment Successful!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your order has been confirmed. You'll receive a confirmation email
            shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to order confirmation...
          </p>
        </motion.div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-6"
          >
            <Clock className="h-24 w-24 text-primary" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Processing Payment...</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Please wait while we process your payment securely.
          </p>
          <div className="flex justify-center">
            <div className="animate-pulse bg-muted h-2 w-64 rounded-full">
              <div className="bg-primary h-2 rounded-full w-1/2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Button asChild variant="ghost" size="icon">
            <Link to="/cart">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Payment</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Choose Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={paymentMethod === "upi" ? "default" : "outline"}
                    className="w-full h-16 justify-start gap-4"
                    onClick={() => setPaymentMethod("upi")}
                  >
                    <QrCode className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">UPI Payment</div>
                      <div className="text-sm opacity-70">
                        Pay using UPI QR Code
                      </div>
                    </div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    className="w-full h-16 justify-start gap-4"
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCard className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Card Payment</div>
                      <div className="text-sm opacity-70">
                        Credit/Debit Card
                      </div>
                    </div>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            {/* UPI QR Code */}
            {paymentMethod === "upi" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Scan QR Code
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-white p-6 rounded-lg border-2 border-dashed border-muted-foreground/20 inline-block mb-4">
                      <div className="w-48 h-48 bg-pattern-dots flex items-center justify-center border">
                        <div className="text-center">
                          <QrCode className="h-24 w-24 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            QR Code
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ₹{totalAmount}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>1. Open any UPI app (GPay, PhonePe, Paytm)</p>
                      <p>2. Scan the QR code above</p>
                      <p>3. Enter amount: ₹{totalAmount}</p>
                      <p>4. Complete the payment</p>
                    </div>

                    <Button
                      className="w-full mt-6 bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700"
                      size="lg"
                      onClick={processPayment}
                    >
                      I've Paid ₹{totalAmount}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Card Payment Form */}
            {paymentMethod === "card" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Card Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 border rounded-lg mt-1"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-3 border rounded-lg mt-1"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-3 border rounded-lg mt-1"
                          maxLength={3}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 border rounded-lg mt-1"
                      />
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700"
                      size="lg"
                      onClick={processPayment}
                    >
                      Pay ₹{totalAmount}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {item.size && (
                            <Badge variant="outline" className="text-xs">
                              {item.size}
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            x{item.quantity}
                          </Badge>
                        </div>
                      </div>
                      <span className="font-semibold">
                        ₹{parseInt(item.price.replace("₹", "")) * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{state.total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (5%)</span>
                    <span>₹{Math.round(state.total * 0.05)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>₹40</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
