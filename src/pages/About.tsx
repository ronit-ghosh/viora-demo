export default function About() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Viora
        </h1>
        
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Viora is Kashmir's pioneering 5-minutes delivery platform, revolutionizing how people receive their daily essentials. Founded with a vision to make life easier for Kashmir's residents, we've built a network of strategic locations across the region to ensure ultra-fast delivery of groceries and essential items.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            To provide the fastest and most reliable delivery service in Kashmir, ensuring that our customers have access to their daily needs within minutes, not hours.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            To become the most trusted and efficient delivery platform in Kashmir, setting new standards for speed and reliability in the delivery industry.
          </p>
        </div>
      </div>
    </div>
  );
}