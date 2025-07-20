import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="p-12">
          <Coffee className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{description}</p>
          <p className="text-muted-foreground mb-8">
            This page is coming soon! We're brewing up something special for
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline">Stay Updated</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
