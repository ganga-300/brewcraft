import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Coffee,
  Star,
  Clock,
  MapPin,
  ChefHat,
  Leaf,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function Index() {
  const { dispatch } = useCart();

  const addToCart = (item: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.name.toLowerCase().replace(/\s+/g, "-"),
        name: item.name,
        price: item.price,
        image: item.image,
        category: "coffee" as const,
        quantity: 1,
      },
    });

    toast.success(`${item.name} added to cart!`);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <motion.div
          className="relative z-10 text-center text-white max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Artisan <span className="text-gold-400 font-serif">Coffee</span>
            <br />
            <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
              Crafted Daily
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-coffee-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            From bean to cup, experience the perfect harmony of tradition and
            innovation. Every sip tells a story of craftsmanship, passion, and
            the finest ingredients sourced globally.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/menu" className="flex items-center gap-3">
                  <Coffee className="h-6 w-6" />
                  Explore Our Menu
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/locations" className="flex items-center gap-3">
                  <MapPin className="h-6 w-6" />
                  Find Our Café
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Coffee Bean Animation */}
        <motion.div
          className="absolute top-20 left-10 text-gold-400"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Coffee className="h-8 w-8 opacity-30" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 text-gold-300"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Coffee className="h-6 w-6 opacity-20" />
        </motion.div>
      </section>

      {/* Featured Coffee */}
      <section className="py-24 bg-gradient-to-b from-coffee-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-20" {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-espresso-900">
              Signature <span className="text-gold-600 font-serif">Blends</span>
            </h2>
            <p className="text-xl text-espresso-700 max-w-3xl mx-auto">
              Discover our masterfully crafted coffee blends, each with its own
              unique character and story
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Heritage Roast",
                description:
                  "Rich, full-bodied blend with notes of dark chocolate and caramelized sugar",
                price: "₹360",
                rating: 4.9,
                image:
                  "https://images.pexels.com/photos/6205530/pexels-photo-6205530.jpeg",
                popular: true,
              },
              {
                name: "Golden Morning",
                description:
                  "Bright and smooth with hints of honey and citrus fruits",
                price: "₹420",
                rating: 4.8,
                image:
                  "https://images.pexels.com/photos/5192030/pexels-photo-5192030.jpeg",
              },
              {
                name: "Midnight Espresso",
                description:
                  "Bold, intense espresso perfect for those who crave depth",
                price: "₹300",
                rating: 4.7,
                image:
                  "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg",
              },
            ].map((coffee, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-[500px]"
              >
                <Card className="border-0 bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    {coffee.popular && (
                      <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-espresso-900">
                      {coffee.name}
                    </h3>
                    <p className="text-espresso-600 mb-6 line-height-relaxed flex-1">
                      {coffee.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-gold-400 text-gold-400" />
                        <span className="text-sm font-medium text-espresso-700">
                          {coffee.rating}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {coffee.price}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                      onClick={() => addToCart(coffee)}
                    >
                      Add to Order
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-espresso-900 via-espresso-800 to-coffee-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg"
            alt="Coffee shop interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-20" {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why <span className="text-gold-400 font-serif">Choose</span> Us?
            </h2>
            <p className="text-xl text-coffee-100 max-w-3xl mx-auto">
              We're not just serving coffee – we're creating experiences that
              awaken your senses
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: "Award-Winning Quality",
                description:
                  "Our beans are sourced from award-winning farms and roasted to perfection by master craftsmen",
              },
              {
                icon: Clock,
                title: "Freshly Roasted Daily",
                description:
                  "Every batch is roasted in small quantities daily to ensure maximum flavor and aroma",
              },
              {
                icon: ChefHat,
                title: "Master Baristas",
                description:
                  "Our skilled artisans transform each cup into a work of art with passion and precision",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-xl">
                    <feature.icon className="h-10 w-10 text-espresso-900" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gold-100">
                  {feature.title}
                </h3>
                <p className="text-coffee-200 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-coffee-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8 text-espresso-900">
                The Perfect{" "}
                <span className="text-gold-600 font-serif">Coffee</span>{" "}
                Experience
              </h2>
              <div className="space-y-6 text-lg text-espresso-700">
                <p className="leading-relaxed">
                  Step into our world where the aroma of freshly ground beans
                  mingles with the gentle hum of conversation and the artful
                  precision of our baristas.
                </p>
                <p className="leading-relaxed">
                  Every element – from our handpicked beans to our carefully
                  crafted atmosphere – is designed to create moments of pure
                  coffee bliss.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    14+
                  </div>
                  <div className="text-espresso-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    50k+
                  </div>
                  <div className="text-espresso-600">Happy Customers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg"
                  alt="Coffee shop interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-espresso-900">
                    Sustainably Sourced
                  </span>
                </div>
                <p className="text-sm text-espresso-600">
                  100% ethically sourced beans supporting local farmers
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary via-espresso-800 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 text-gold-400"
          >
            <Coffee className="h-32 w-32" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 text-gold-300"
          >
            <Coffee className="h-24 w-24" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for Your{" "}
            <span className="text-gold-400 font-serif">Perfect</span> Cup?
          </motion.h2>

          <motion.p
            className="text-xl mb-12 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of coffee lovers who start their day with our
            exceptional brews. Your perfect coffee moment awaits.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-12 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/menu">Order Online Now</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-12 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/locations">Visit Our Café</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
