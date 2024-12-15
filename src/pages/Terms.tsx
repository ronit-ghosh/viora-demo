export default function Terms() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Terms of Service
        </h1>
        
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            By using Viora's services, you agree to these terms. Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            Service Description
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Viora provides a 10-minutes delivery service for groceries and essential items in Kashmir. While we strive to meet this delivery time, actual delivery times may vary based on factors beyond our control.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Provide accurate delivery information</li>
            <li>Maintain account security</li>
            <li>Use the service in compliance with local laws</li>
            <li>Pay for orders promptly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}