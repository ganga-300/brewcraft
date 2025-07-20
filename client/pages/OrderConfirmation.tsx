import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OrderConfirmation() {
  const orderNumber = Math.random().toString(36).substr(2, 8).toUpperCase();
  const estimatedTime = "25-30 minutes";

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 text-green-600">
          Order Confirmed!
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Thank you for your order. We're preparing your delicious coffee!
        </p>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">Order Details</h3>
                <p className="text-sm text-muted-foreground">
                  Order #: {orderNumber}
                </p>
                <p className="text-sm text-muted-foreground">
                  Payment: Completed
                </p>
                <p className="text-sm text-muted-foreground">
                  Placed: {new Date().toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Estimated Delivery
                </h3>
                <p className="text-lg font-semibold text-primary">
                  {estimatedTime}
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll notify you when your order is ready
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Delivery Address
              </h3>
              <p className="text-sm text-muted-foreground">
                Home
                <br />
                123 MG Road, Bangalore
                <br />
                Karnataka 560001
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact
              </h3>
              <p className="text-sm text-muted-foreground">
                Phone: +91 98765 43210
                <br />
                Email: order@brewcraft.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link to="/menu">Order Again</Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full md:w-auto"
            >
              <Link to="/">Back to Home</Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">What's Next?</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• You'll receive SMS/Email updates on your order status</p>
            <p>• Our delivery partner will contact you before delivery</p>
            <p>• Rate your experience after delivery</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
