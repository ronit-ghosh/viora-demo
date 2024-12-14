export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Viora</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Viora is Kashmir's first 5-minute delivery app, revolutionizing how people shop for groceries
            and essential items. Our mission is to make daily shopping effortless and time-efficient for
            the people of Kashmir.
          </p>
          <p>
            Founded with a vision to transform the local delivery landscape, we combine cutting-edge
            technology with deep local market understanding to provide an unparalleled service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
          <p>
            To be the most trusted and efficient delivery service in Kashmir, making quality products
            accessible to everyone within minutes.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customer First: Every decision we make prioritizes our customers' needs</li>
            <li>Quality Assurance: We never compromise on the quality of products we deliver</li>
            <li>Speed & Reliability: We believe in keeping our promise of 5-minute delivery</li>
            <li>Local Impact: We're committed to contributing to Kashmir's economic growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}