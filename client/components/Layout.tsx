import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Coffee, MapPin, Phone, Mail, Menu } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">BrewCraft</span>
          </Link>

                    {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/menu") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/locations"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/locations") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Locations
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Order Now Button */}
            <Button className="bg-primary hover:bg-primary/90 hidden sm:flex">
              Order Now
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  <Link
                    to="/"
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive("/") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/menu"
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive("/menu") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Menu
                  </Link>
                  <Link
                    to="/locations"
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive("/locations") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Locations
                  </Link>
                  <Link
                    to="/about"
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive("/about") ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Button className="bg-primary hover:bg-primary/90 mt-4" onClick={() => setIsOpen(false)}>
                    Order Now
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-primary">BrewCraft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Crafting the perfect cup of coffee since 2010. Experience the finest 
                handpicked beans and artisanal brewing methods.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors">
                    Store Locations
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-BREW</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@brewcraft.com</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Downtown Coffee District</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
                <li>Saturday: 7:00 AM - 10:00 PM</li>
                <li>Sunday: 7:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 BrewCraft Coffee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
