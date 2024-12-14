export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about Viora? We're here to help! Reach out to us through any of the following channels.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">vioranow@viora.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 96821 79829</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  Viora Headquarters<br />
                  Srinagar, Kashmir
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 10:00 PM</p>
              <p className="text-muted-foreground">Sunday: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}