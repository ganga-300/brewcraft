import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Wifi, Car } from "lucide-react";

export default function Locations() {
  const locations = [
    {
      name: "Connaught Place Flagship",
      address: "Block A, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43210",
      hours: {
        weekdays: "6:00 AM - 9:00 PM",
        saturday: "7:00 AM - 10:00 PM", 
        sunday: "7:00 AM - 8:00 PM"
      },
      amenities: ["Free WiFi", "AC Seating", "Outdoor Terrace", "Valet Parking"],
      description: "Our flagship location in the heart of Delhi, featuring our full menu and signature Indian fusion drinks."
    },
    {
      name: "Koregaon Park",
      address: "Lane 5, Koregaon Park, Pune - 411001",
      phone: "+91 98765 43211",
      hours: {
        weekdays: "5:30 AM - 11:00 PM",
        saturday: "6:00 AM - 11:00 PM",
        sunday: "6:00 AM - 10:00 PM"
      },
      amenities: ["Free WiFi", "Study Areas", "Group Seating", "Co-working Space"],
      description: "Perfect for students and professionals, with extended hours and dedicated co-working spaces."
    },
    {
      name: "Phoenix Mall",
      address: "Phoenix MarketCity, Whitefield, Bangalore - 560066",
      phone: "+91 98765 43212",
      hours: {
        weekdays: "10:00 AM - 10:00 PM",
        saturday: "10:00 AM - 11:00 PM",
        sunday: "10:00 AM - 10:00 PM"
      },
      amenities: ["Free WiFi", "Mall Parking", "Kids Play Corner", "Quick Service"],
      description: "Family-friendly location with convenient mall parking and a dedicated kids corner."
    },
    {
      name: "Bandra West",
      address: "Linking Road, Bandra West, Mumbai - 400050",
      phone: "+91 98765 43213",
      hours: {
        weekdays: "6:00 AM - 11:00 PM",
        saturday: "6:00 AM - 12:00 AM",
        sunday: "6:00 AM - 11:00 PM"
      },
      amenities: ["Free WiFi", "Street Parking", "Live Music", "Late Night Service"],
      description: "Mumbai's vibrant coffee culture meets our artisan brews in this bustling Bandra location."
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("WiFi")) return <Wifi className="h-4 w-4" />;
    if (amenity.includes("Parking") || amenity.includes("Valet")) return <Car className="h-4 w-4" />;
    return <MapPin className="h-4 w-4" />;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Locations</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find a BrewCraft Coffee near you across India. Each location offers our full menu with unique local touches.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-primary" />
                {location.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{location.description}</p>
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{location.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">{location.phone}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Hours</p>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: {location.hours.weekdays}</p>
                    <p>Saturday: {location.hours.saturday}</p>
                    <p>Sunday: {location.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="font-medium mb-3">Amenities</p>
                <div className="grid grid-cols-2 gap-2">
                  {location.amenities.map((amenity, amenityIndex) => (
                    <div key={amenityIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">
                  Get Directions
                </Button>
                <Button variant="outline" className="flex-1">
                  Order for Pickup
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us Across India</h2>
        <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium">Interactive Map</p>
            <p className="text-muted-foreground">
              Map integration showing our locations across Delhi, Mumbai, Pune, and Bangalore
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center bg-primary text-primary-foreground p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Looking for a New Location?</h3>
        <p className="mb-6 opacity-90">
          We're expanding across India! Let us know where you'd like to see BrewCraft Coffee next.
        </p>
        <Button variant="secondary" size="lg">
          Suggest a Location
        </Button>
      </div>
    </div>
  );
}
