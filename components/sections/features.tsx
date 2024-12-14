import { Card } from "@/components/ui/card";
import { Clock, ShieldCheck, Truck } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Viora?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Get your essentials delivered in just 10 minutes or less.</p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-muted-foreground">We carefully select and verify all our products for quality.</p>
          </Card>
          <Card className="p-6">
            <Truck className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
            <p className="text-muted-foreground">Available across multiple locations in Kashmir.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}