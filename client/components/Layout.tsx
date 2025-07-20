import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Coffee, MapPin, Phone, Mail, Menu, Instagram, Facebook, Twitter, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        className="bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Coffee className="h-10 w-10 text-primary" />
            </motion.div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-gold-600 bg-clip-text text-transparent font-serif">
              BrewCraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Menu" },
              { path: "/locations", label: "Locations" },
              { path: "/about", label: "About" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {state.items.length > 0 && (
                    <Badge 
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs"
                    >
                      {state.items.reduce((total, item) => total + item.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Button>
            </motion.div>

            {/* Order Now Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700 text-white hidden sm:flex font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/menu">Order Now</Link>
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md">
                <nav className="flex flex-col space-y-8 mt-8">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/menu", label: "Menu" },
                    { path: "/locations", label: "Locations" },
                    { path: "/about", label: "About" }
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-primary to-gold-600 hover:from-primary/90 hover:to-gold-700 text-white mt-6 font-semibold" 
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/menu">Order Now</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-espresso-900 via-espresso-800 to-coffee-900 text-white mt-20">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Coffee className="h-8 w-8 text-gold-400" />
                <span className="text-2xl font-bold text-gold-400 font-serif">BrewCraft</span>
              </div>
              <p className="text-coffee-200 leading-relaxed">
                Crafting the perfect cup of coffee since 2010. Experience the finest 
                handpicked beans and artisanal brewing methods that awaken your senses.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gold-600/20 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-6 text-gold-400 text-lg">Quick Links</h3>
              <ul className="space-y-4 text-coffee-200">
                {[
                  { path: "/menu", label: "Our Menu" },
                  { path: "/locations", label: "Store Locations" },
                  { path: "/about", label: "About Us" },
                  { path: "#", label: "Gift Cards" },
                  { path: "#", label: "Rewards Program" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="hover:text-gold-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-6 text-gold-400 text-lg">Contact</h3>
              <ul className="space-y-4 text-coffee-200">
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-400" />
                  <span>+91 98765 BREW (27393)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-400" />
                  <span>hello@brewcraft.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold-400" />
                  <span>Connaught Place, New Delhi</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold mb-6 text-gold-400 text-lg">Hours</h3>
              <ul className="space-y-2 text-coffee-200">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>6:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>7:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>7:00 AM - 8:00 PM</span>
                </li>
              </ul>
              
              {/* Newsletter */}
              <div className="mt-8 p-4 bg-gold-600/10 rounded-lg border border-gold-600/20">
                <h4 className="font-semibold mb-2 text-gold-400">Stay Updated</h4>
                <p className="text-sm text-coffee-200 mb-3">Get the latest news and exclusive offers</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-espresso-900"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gold-600/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-coffee-300">
            <p>&copy; 2024 BrewCraft Coffee. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
