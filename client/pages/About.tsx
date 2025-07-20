import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Users, Award, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description: "We source only the finest beans from sustainable farms and roast them to perfection daily."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We believe coffee brings people together and strive to create welcoming spaces for all."
    },
    {
      icon: Award,
      title: "Craft Excellence",
      description: "Our skilled baristas are passionate about the art and science of coffee making."
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "We're committed to fair trade practices and supporting the communities that grow our coffee."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Founded by coffee enthusiasts Sarah and Mike in a small downtown location."
    },
    {
      year: "2013",
      title: "First Expansion",
      description: "Opened our second location in the University District due to popular demand."
    },
    {
      year: "2016",
      title: "Roastery Launch",
      description: "Built our own roastery to ensure the freshest coffee and support local farmers."
    },
    {
      year: "2019",
      title: "Community Impact",
      description: "Launched our coffee education program and sustainability initiatives."
    },
    {
      year: "2022",
      title: "Digital Innovation",
      description: "Introduced mobile ordering and expanded our delivery service citywide."
    },
    {
      year: "2024",
      title: "Growing Strong",
      description: "Now serving thousands of coffee lovers across four locations with plans for more."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-100 via-coffee-50 to-brown-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-coffee-900">Our Story</h1>
          <p className="text-xl md:text-2xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            BrewCraft Coffee started with a simple mission: to serve exceptional coffee 
            while building meaningful connections within our community.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Where It All Began</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  In 2010, best friends Sarah and Mike shared a dream of creating the perfect 
                  coffee experience. Armed with nothing but passion and a small loan, they 
                  opened the first BrewCraft Coffee in a tiny downtown storefront.
                </p>
                <p>
                  What started as a local hangout quickly became the heart of the community. 
                  People didn't just come for the coffee – they came for the conversations, 
                  the atmosphere, and the feeling of belonging.
                </p>
                <p>
                  Today, we're proud to serve thousands of coffee lovers across multiple 
                  locations, but our core values remain the same: exceptional quality, 
                  genuine community, and sustainable practices.
                </p>
              </div>
            </div>
            <div className="bg-coffee-100 rounded-lg p-8 text-center">
              <div className="text-8xl mb-4">☕</div>
              <h3 className="text-2xl font-bold mb-2 text-coffee-900">14 Years</h3>
              <p className="text-coffee-700">of brewing excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing beans to serving customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small downtown café to a beloved community staple
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Founders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind BrewCraft Coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-coffee-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👩‍💼
                </div>
                <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">Co-Founder & CEO</p>
                <p className="text-muted-foreground">
                  Sarah brings her passion for sustainable business practices and community 
                  building to lead BrewCraft's vision and growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-coffee-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👨‍🍳
                </div>
                <h3 className="text-2xl font-bold mb-2">Mike Chen</h3>
                <p className="text-primary font-medium mb-4">Co-Founder & Head Roaster</p>
                <p className="text-muted-foreground">
                  Mike's expertise in coffee roasting and quality control ensures every 
                  cup meets BrewCraft's high standards for excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Coffee Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the BrewCraft difference and become part of our growing family of coffee lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Visit Us Today
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Follow Our Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
