import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, ShieldCheck, Truck, Smartphone, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20">
        <div className="container flex justify-center items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get your groceries delivered in 10 minutes</h1>
            <p className="text-xl mb-8 text-white/90">Fresh groceries and everyday essentials delivered right to your doorstep, faster than you can imagine.</p>
            <div className="flex gap-4 justify-center items-center">
              <Button size="lg" variant="secondary">Get Started</Button>
              <Button size="lg" variant="outline" className="bg-white/10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <p className="text-muted-foreground">Available across multiple locations in your city.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Download & Order</h3>
              <p className="text-muted-foreground">Get our app and browse thousands of products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. We Prepare</h3>
              <p className="text-muted-foreground">Our team quickly prepares your order</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Fast Delivery</h3>
              <p className="text-muted-foreground">Receive your order in 10 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started with Viora Today</h2>
            <p className="text-xl text-muted-foreground mb-8">Download our app and experience lightning-fast grocery delivery</p>
            <Button size="lg" className="gap-2">
              Download App <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Viora</h3>
              <p className="text-muted-foreground">Making grocery shopping faster and more convenient than ever.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>How It Works</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Refund Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Viora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}