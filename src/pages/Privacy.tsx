export default function Privacy() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At Viora, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Name and contact information</li>
            <li>Delivery addresses</li>
            <li>Order history</li>
            <li>Payment information</li>
            <li>Device information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Process and deliver your orders</li>
            <li>Improve our services</li>
            <li>Communicate with you about your orders</li>
            <li>Send you promotional offers (with your consent)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}