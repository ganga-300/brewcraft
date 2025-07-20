import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu() {
  const coffeeItems = [
    {
      name: "Espresso",
      description: "Rich and bold single shot",
      price: "$2.50",
      sizes: ["Single", "Double"],
      popular: false
    },
    {
      name: "Americano",
      description: "Espresso with hot water",
      price: "$3.25",
      sizes: ["12oz", "16oz", "20oz"],
      popular: false
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "$4.50",
      sizes: ["8oz", "12oz"],
      popular: true
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk",
      price: "$4.75",
      sizes: ["12oz", "16oz", "20oz"],
      popular: true
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: "$5.25",
      sizes: ["12oz", "16oz", "20oz"],
      popular: false
    },
    {
      name: "Caramel Macchiato",
      description: "Vanilla syrup, steamed milk, espresso, and caramel",
      price: "$5.50",
      sizes: ["12oz", "16oz", "20oz"],
      popular: true
    }
  ];

  const foodItems = [
    {
      name: "Croissant",
      description: "Buttery, flaky pastry",
      price: "$3.50",
      category: "Pastries"
    },
    {
      name: "Blueberry Muffin",
      description: "Fresh baked with wild blueberries",
      price: "$3.25",
      category: "Pastries"
    },
    {
      name: "Avocado Toast",
      description: "Multigrain bread with smashed avocado",
      price: "$8.50",
      category: "Breakfast"
    },
    {
      name: "Breakfast Sandwich",
      description: "Egg, cheese, and choice of meat on English muffin",
      price: "$7.25",
      category: "Breakfast"
    },
    {
      name: "Greek Yogurt Parfait",
      description: "Layered with granola and fresh berries",
      price: "$6.75",
      category: "Healthy"
    },
    {
      name: "Quinoa Bowl",
      description: "Quinoa with roasted vegetables and tahini",
      price: "$11.50",
      category: "Healthy"
    }
  ];

  const specialties = [
    {
      name: "Cold Brew",
      description: "Smooth and refreshing coffee steeped for 20 hours",
      price: "$4.25",
      seasonal: false
    },
    {
      name: "Nitro Cold Brew",
      description: "Cold brew infused with nitrogen for a creamy texture",
      price: "$4.75",
      seasonal: false
    },
    {
      name: "Pumpkin Spice Latte",
      description: "Fall favorite with pumpkin and warm spices",
      price: "$5.75",
      seasonal: true
    },
    {
      name: "Iced Matcha Latte",
      description: "Premium matcha with steamed milk over ice",
      price: "$5.25",
      seasonal: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully crafted beverages and fresh food options
        </p>
      </div>

      <Tabs defaultValue="coffee" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="coffee">Coffee</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="specialties">Specialties</TabsTrigger>
        </TabsList>

        <TabsContent value="coffee" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item, index) => (
              <Card key={index} className="relative">
                {item.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-coffee-500">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Available sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((size) => (
                        <Badge key={size} variant="outline">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Add to Order</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="food" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </CardTitle>
                  <Badge variant="secondary">{item.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button className="w-full">Add to Order</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specialties" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, index) => (
              <Card key={index} className="relative">
                {item.seasonal && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-500">
                    Seasonal
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{item.name}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button className="w-full">Add to Order</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-muted p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Can't Decide?</h3>
        <p className="text-muted-foreground mb-6">
          Ask our baristas for recommendations based on your taste preferences
        </p>
        <Button size="lg">Talk to a Barista</Button>
      </div>
    </div>
  );
}
