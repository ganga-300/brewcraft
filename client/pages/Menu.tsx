import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Star, Plus, Clock, Leaf } from "lucide-react";

export default function Menu() {
    const coffeeItems = [
    {
      name: "Classic Espresso",
      description: "Rich and bold single shot with intense aroma and full body",
      price: "₹200",
      sizes: ["Single", "Double"],
      popular: false,
      image: "https://images.pexels.com/photos/5192030/pexels-photo-5192030.jpeg"
    },
    {
      name: "Americano",
      description: "Smooth espresso with hot water, perfect balance of strength and flavor",
      price: "₹260",
      sizes: ["12oz", "16oz", "20oz"],
      popular: false,
      image: "https://images.pexels.com/photos/6205530/pexels-photo-6205530.jpeg"
    },
    {
      name: "Cappuccino",
      description: "Traditional Italian espresso with steamed milk and rich foam artistry",
      price: "₹360",
      sizes: ["8oz", "12oz"],
      popular: true,
      image: "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg"
    },
    {
      name: "Signature Latte",
      description: "Creamy steamed milk with espresso, topped with delicate latte art",
      price: "₹380",
      sizes: ["12oz", "16oz", "20oz"],
      popular: true,
      image: "https://images.pexels.com/photos/6205530/pexels-photo-6205530.jpeg"
    },
    {
      name: "Chocolate Mocha",
      description: "Decadent blend of espresso, rich chocolate, and steamed milk",
      price: "₹420",
      sizes: ["12oz", "16oz", "20oz"],
      popular: false,
      image: "https://images.pexels.com/photos/5192030/pexels-photo-5192030.jpeg"
    },
    {
      name: "Caramel Macchiato",
      description: "Vanilla syrup, steamed milk, espresso, and golden caramel drizzle",
      price: "₹440",
      sizes: ["12oz", "16oz", "20oz"],
      popular: true,
      image: "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg"
    }
  ];

    const foodItems = [
    {
      name: "Buttery Croissant",
      description: "Flaky, golden pastry baked fresh daily with French butter",
      price: "₹280",
      category: "Pastries",
      prepTime: "2 min",
      image: "https://images.pexels.com/photos/14111071/pexels-photo-14111071.jpeg"
    },
    {
      name: "Wild Blueberry Muffin",
      description: "Moist muffin bursting with wild blueberries and lemon zest",
      price: "₹260",
      category: "Pastries",
      prepTime: "Ready",
      image: "https://images.pexels.com/photos/14111071/pexels-photo-14111071.jpeg"
    },
    {
      name: "Artisan Avocado Toast",
      description: "Multigrain sourdough with smashed avocado, lime, and sea salt",
      price: "₹680",
      category: "Breakfast",
      prepTime: "5 min",
      image: "https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg"
    },
    {
      name: "Breakfast Sandwich",
      description: "Farm-fresh egg, aged cheese, and choice of meat on English muffin",
      price: "₹580",
      category: "Breakfast",
      prepTime: "8 min",
      image: "https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg"
    },
    {
      name: "Greek Yogurt Parfait",
      description: "Layered with house-made granola and seasonal fresh berries",
      price: "₹540",
      category: "Healthy",
      prepTime: "Ready",
      image: "https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg"
    },
    {
      name: "Power Quinoa Bowl",
      description: "Organic quinoa with roasted vegetables and tahini dressing",
      price: "₹920",
      category: "Healthy",
      prepTime: "7 min",
      image: "https://images.pexels.com/photos/6327126/pexels-photo-6327126.jpeg"
    }
  ];

    const specialties = [
    {
      name: "Nitro Cold Brew",
      description: "Smooth cold brew infused with nitrogen for a creamy, velvety texture",
      price: "₹380",
      seasonal: false,
      new: true,
      image: "https://images.pexels.com/photos/5741238/pexels-photo-5741238.jpeg"
    },
    {
      name: "Iced Matcha Latte",
      description: "Premium ceremonial-grade matcha with oat milk over ice",
      price: "₹420",
      seasonal: false,
      organic: true,
      image: "https://images.pexels.com/photos/32158135/pexels-photo-32158135.jpeg"
    },
    {
      name: "Pumpkin Spice Latte",
      description: "Fall favorite with real pumpkin, cinnamon, and warm spices",
      price: "₹460",
      seasonal: true,
      limited: true,
      image: "https://images.pexels.com/photos/5741238/pexels-photo-5741238.jpeg"
    },
    {
      name: "Honey Lavender Latte",
      description: "Floral lavender and local honey with steamed milk",
      price: "₹440",
      seasonal: false,
      signature: true,
      image: "https://images.pexels.com/photos/32158135/pexels-photo-32158135.jpeg"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-coffee-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-espresso-900 to-gold-600 bg-clip-text text-transparent">
            Our <span className="font-serif">Menu</span>
          </h1>
          <p className="text-xl text-espresso-700 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted beverages and fresh food options, 
            made with the finest ingredients and artisanal techniques
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12 h-14 bg-white/80 backdrop-blur-sm border border-coffee-200">
              <TabsTrigger value="coffee" className="text-lg font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                Coffee
              </TabsTrigger>
              <TabsTrigger value="food" className="text-lg font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                Food
              </TabsTrigger>
              <TabsTrigger value="specialties" className="text-lg font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                Specialties
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {coffeeItems.map((item, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                      {item.popular && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-gold-500 hover:bg-gold-600 text-white font-semibold">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-espresso-900">{item.name}</h3>
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                        </div>
                        
                        <p className="text-espresso-600 mb-4 line-height-relaxed">{item.description}</p>
                        
                        <div className="mb-6">
                          <p className="text-sm font-semibold mb-3 text-espresso-800">Available sizes:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.sizes.map((size) => (
                              <Badge key={size} variant="outline" className="border-coffee-300 text-coffee-700">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className="w-full bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <Plus className="w-4 h-4 mr-2" />
                            Add to Order
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="food">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {foodItems.map((item, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-bold text-espresso-900">{item.name}</CardTitle>
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`${
                              item.category === 'Healthy' 
                                ? 'bg-green-100 text-green-800' 
                                : item.category === 'Breakfast'
                                ? 'bg-orange-100 text-orange-800'
                                : 'bg-coffee-100 text-coffee-800'
                            }`}
                          >
                            {item.category}
                          </Badge>
                          <Badge variant="outline" className="border-espresso-300 text-espresso-600">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.prepTime}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-espresso-600 mb-6 line-height-relaxed">{item.description}</p>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className="w-full bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <Plus className="w-4 h-4 mr-2" />
                            Add to Order
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="specialties">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {specialties.map((item, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full relative">
                      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                        {item.seasonal && (
                          <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                            Seasonal
                          </Badge>
                        )}
                        {item.new && (
                          <Badge className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                            New!
                          </Badge>
                        )}
                        {item.signature && (
                          <Badge className="bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                            Signature
                          </Badge>
                        )}
                        {item.organic && (
                          <Badge className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                            <Leaf className="w-3 h-3 mr-1" />
                            Organic
                          </Badge>
                        )}
                      </div>
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl font-bold text-espresso-900 pr-4">{item.name}</CardTitle>
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-espresso-600 mb-6 line-height-relaxed">{item.description}</p>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className="w-full bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <Plus className="w-4 h-4 mr-2" />
                            Add to Order
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-br from-espresso-900 to-coffee-900 text-white p-12 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gold-400">Can't Decide What to Order?</h3>
          <p className="text-coffee-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Our expert baristas are here to help you find your perfect cup. 
            Let us recommend something based on your taste preferences and mood.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-espresso-900 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Talk to a Barista
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
