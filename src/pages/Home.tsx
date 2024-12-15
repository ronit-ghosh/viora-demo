import { Clock, ShoppingBag, Truck } from 'lucide-react';
import { type Feature } from '../types';
import TeamCarousel from '../components/TeamCarousel';
import { useState } from 'react';

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
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  function handleLocation() {
    if (!location) {
      setError('You haven\'t entered Pincode')
      setTimeout(() => {
        setError('')
      }, 2500);
      return
    } else if (location.length !== 6) {
      setError('You\'ve entered a wrong pincode')
      setTimeout(() => {
        setError('')
      }, 2500)
      return
    } else if (location === '190014' || location === '190005' || location === '190001' || location === '190011' || location === '190008') {
      alert("We're already serving in your area")
      return
    }
    alert("We're coming into your area soon!")
  }
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
        <div className="container mx-auto sm:px-4 px-2 z-10 mb-44 md:mb-0">
          <div className="grid md:grid-cols-2 items-center">
            <div>
              <h1 className="text-5xl text-center md:text-left md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex flex-col">
                Kashmir's First
                <span className="text-[#7800ff]"> 10-Minutes </span>
                Delivery App
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 md:mb-8 mb-16 md:text-left text-center">
                <span className='hover:underline cursor-pointer'>Get your groceries delivered in 10 minutes.</span> Fresh groceries and everyday essentials delivered right to your doorstep, faster than you can imagine.
              </p>
              <div className="mb-6">
                <div className="w-full">
                  <label 
                  htmlFor="pincode" 
                  className='dark:text-gray-50 text-gray-900 text-sm ml-1'>Check if we are delivering in your area <span className='text-red-500'>*</span></label>
                  <div className="flex mt-1">
                    <input type="number"
                      id='pincode'
                      placeholder='Enter Pincode'
                      className='w-2/3 mr-2 rounded-lg text-sm py-2 pl-3 bg-transparent border dark:border-gray-50 border-gray-900 text-black dark:text-white'
                      onChange={(e) => setLocation(e.target.value)} />
                    <button
                      onClick={handleLocation}
                      className="bg-[#7800ff] text-white text-sm px-2 py-2 rounded-lg font-semibold hover:bg-[#6600cc] transition-colors"
                    >
                      Check Pincode
                    </button>
                  </div>
                </div>
                <div className="text-red-500 ml-2 font-mono h-2 text-xs mt-1">
                  {error}
                </div>
              </div>
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