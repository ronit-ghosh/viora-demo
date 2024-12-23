import Image from 'next/image'
import React from 'react'
import TenMinDelivery from "@/images/10mindelivery.jpeg"
import GroceryEssentials from "@/images/groceryessentials.jpeg"
import RealtimeTracking from "@/images/realtimetracking.jpeg"
const Feature = () => {
    const features = [
        {
            title: "10-Minutes Delivery",
            description: "Get your essentials delivered in just 10 minutes across Kashmir",
            image: TenMinDelivery
        },
        {
            title: "Wide Selection",
            description: "From groceries to daily essentials, find everything you need",
            image: GroceryEssentials
        },
        {
            title: "Real-time Tracking",
            description: "Track your delivery in real-time with our advanced system",
            image: RealtimeTracking
        }
    ]
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-card overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 pb-4">
                            <div className="h-56 overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    className="mb-4 w-full"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-3 mb-1 mx-3">{feature.title}</h3>
                            <p className='mx-3'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature
