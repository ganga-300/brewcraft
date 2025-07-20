import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Users, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description:
        "We source only the finest beans from Indian coffee estates and roast them to perfection daily.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "We believe coffee brings people together and strive to create welcoming spaces for all Indians.",
    },
    {
      icon: Award,
      title: "Craft Excellence",
      description:
        "Our skilled baristas are passionate about the art and science of coffee making.",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "We're committed to fair trade practices and supporting Indian coffee farmers.",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "Founded by coffee enthusiasts Arjun and Priya in a small café in Connaught Place, Delhi.",
    },
    {
      year: "2013",
      title: "First Expansion",
      description:
        "Opened our second location in Pune's Koregaon Park due to overwhelming support.",
    },
    {
      year: "2016",
      title: "Indian Heritage Roastery",
      description:
        "Built our own roastery to ensure the freshest coffee and support local Indian farmers.",
    },
    {
      year: "2019",
      title: "Community Impact",
      description:
        "Launched our coffee education program and sustainability initiatives across India.",
    },
    {
      year: "2022",
      title: "Digital Innovation",
      description:
        "Introduced mobile ordering and expanded our delivery service across major Indian cities.",
    },
    {
      year: "2024",
      title: "Growing Strong",
      description:
        "Now serving thousands of coffee lovers across India with plans for 50 more locations.",
    },
  ];

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
      <section className="relative py-24 bg-gradient-to-br from-coffee-100 via-coffee-50 to-brown-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/7125779/pexels-photo-7125779.jpeg"
            alt="Coffee plantation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-espresso-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-gold-600 font-serif">Story</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-coffee-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BrewCraft Coffee started with a simple mission: to serve exceptional
            coffee while celebrating India's rich coffee heritage and building
            meaningful connections.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Where It All Began</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  In 2010, childhood friends Arjun and Priya shared a dream of
                  creating the perfect coffee experience that honored India's
                  ancient coffee traditions while embracing modern artisanal
                  techniques.
                </p>
                <p>
                  What started as a small café in Delhi's bustling Connaught
                  Place quickly became a beloved gathering spot for coffee
                  enthusiasts, students, and professionals seeking authentic,
                  quality coffee.
                </p>
                <p>
                  Today, we're proud to serve thousands of coffee lovers across
                  India's major cities, but our core values remain the same:
                  exceptional quality, genuine community, and sustainable
                  practices that support Indian coffee farmers.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2074123/pexels-photo-2074123.jpeg"
                  alt="Coffee brewing process"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <motion.div
                className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    14+
                  </div>
                  <div className="text-espresso-600 text-sm">
                    Years Brewing Excellence
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing beans to
              serving customers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small Delhi café to India's beloved coffee destination
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Heritage Section */}
      <section className="py-24 bg-gradient-to-br from-espresso-900 to-coffee-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7125779/pexels-photo-7125779.jpeg"
            alt="Coffee plantation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gold-400">
                Celebrating India's Coffee Heritage
              </h2>
              <div className="space-y-4 text-lg text-coffee-100">
                <p>
                  India has been growing coffee for over 350 years, with the
                  Western Ghats producing some of the world's finest Arabica and
                  Robusta beans.
                </p>
                <p>
                  We work directly with coffee estates in Karnataka, Kerala, and
                  Tamil Nadu, ensuring fair prices for farmers while bringing
                  you the authentic taste of Indian coffee.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">
                    50k+
                  </div>
                  <div className="text-coffee-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">
                    25+
                  </div>
                  <div className="text-coffee-200">Partner Farms</div>
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
                  src="https://images.pexels.com/photos/7125779/pexels-photo-7125779.jpeg"
                  alt="Indian coffee plantation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Meet the Founders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind BrewCraft Coffee
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-coffee-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    👨‍💼
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Arjun Sharma</h3>
                  <p className="text-primary font-medium mb-4">
                    Co-Founder & CEO
                  </p>
                  <p className="text-muted-foreground">
                    Arjun brings his passion for sustainable business practices
                    and Indian coffee heritage to lead BrewCraft's vision and
                    expansion across India.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-coffee-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    👩‍🍳
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Priya Menon</h3>
                  <p className="text-primary font-medium mb-4">
                    Co-Founder & Head Roaster
                  </p>
                  <p className="text-muted-foreground">
                    Priya's expertise in coffee roasting and quality control
                    ensures every cup meets BrewCraft's high standards while
                    honoring traditional methods.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join Our Coffee Community
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the BrewCraft difference and become part of our growing
            family of coffee lovers across India.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg">
                Visit Us Today
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Follow Our Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
