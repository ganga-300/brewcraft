import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-brown-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-coffee-300">BrewCraft</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-coffee-100 max-w-2xl mx-auto">
            Where every cup tells a story. Experience premium coffee crafted with passion 
            and served with love in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coffee-500 hover:bg-coffee-600 text-white text-lg px-8 py-6">
              <Link to="/menu" className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                Explore Menu
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-coffee-300 text-coffee-100 hover:bg-coffee-300 hover:text-coffee-900 text-lg px-8 py-6"
            >
              <Link to="/locations" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Find Location
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Coffee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Coffee</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our signature blends and seasonal favorites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "BrewCraft Signature Blend",
                description: "Our flagship blend with notes of chocolate and caramel",
                price: "$4.50",
                rating: 4.9,
                image: "☕"
              },
              {
                name: "Single Origin Ethiopia",
                description: "Bright and fruity with floral aromatics",
                price: "$5.25",
                rating: 4.8,
                image: "🌿"
              },
              {
                name: "Dark Roast Espresso",
                description: "Bold and intense, perfect for lattes",
                price: "$3.75",
                rating: 4.7,
                image: "🖤"
              }
            ].map((coffee, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 text-center">{coffee.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{coffee.name}</h3>
                  <p className="text-muted-foreground mb-4">{coffee.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{coffee.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{coffee.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose BrewCraft?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering the perfect coffee experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Premium Quality",
                description: "We source the finest beans from sustainable farms worldwide"
              },
              {
                icon: Clock,
                title: "Fresh Daily",
                description: "Our coffee is roasted daily to ensure maximum freshness"
              },
              {
                icon: Star,
                title: "Expert Baristas",
                description: "Our skilled baristas craft each cup with precision and care"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Perfect Cup?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit us today or order online for pickup. Your coffee adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Order Online
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/locations">Visit Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
