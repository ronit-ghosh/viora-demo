import { Clock, ShoppingBag, Truck } from 'lucide-react';
import { type Feature } from '../types';
import TeamCarousel from '../components/TeamCarousel';

const features: Feature[] = [
  {
    title: "10-Minutes Delivery",
    description: "Get your essentials delivered in just 10 minutes across Kashmir",
    icon: "Clock"
  },
  {
    title: "Wide Selection",
    description: "From groceries to daily essentials, find everything you need",
    icon: "ShoppingBag"
  },
  {
    title: "Real-time Tracking",
    description: "Track your delivery in real-time with our advanced system",
    icon: "Truck"
  }
];

const iconComponents = {
  Clock,
  ShoppingBag,
  Truck
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80"
            alt="Delivery Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[2.5rem] text-center md:text-left md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Kashmir's First
                <span className="text-[#7800ff]"> 10-Minutes </span>
                Delivery App
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                <span className='hover:underline cursor-pointer'>Get your groceries delivered in 10 minutes.</span> Fresh groceries and everyday essentials delivered right to your doorstep, faster than you can imagine.
              </p>
              <button
                onClick={() => alert('App is currently under maintenance. Please check back later!')}
                className="bg-[#7800ff] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6600cc] transition-colors"
              >
                Download Now
              </button>
            </div>
            <div className="hidden md:block opacity-75">
              <img
                src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&q=80"
                alt="Delivery Illustration"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Why Choose Viora?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => {
              const Icon = iconComponents[feature.icon as keyof typeof iconComponents];
              return (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg"
                >
                  <div className="inline-block p-4 rounded-full bg-[#7800ff] text-white mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <TeamCarousel />
        </div>
      </section>
    </div>
  );
}