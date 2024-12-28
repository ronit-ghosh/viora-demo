import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"
import { useRef } from "react"

const Feature = () => {
    const carouselRef = useRef(null)
    
    const features = [
        {
            title: "10-Minutes Delivery",
            description: "Get your essentials delivered in just 10 minutes across Kashmir",
            image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735236698/10mindelivery_hrnvua.jpg"
        },
        {
            title: "Wide Selection",
            description: "From groceries to daily essentials, find everything you need",
            image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735236697/groceryessentials_hsuxbe.jpg"
        },
        {
            title: "Real-time Tracking",
            description: "Track your delivery in real-time with our advanced system",
            image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735236698/realtimetracking_b43vje.jpg"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const carousel: any = carouselRef.current
                const next = carousel.querySelector('[data-carousel-next]')
                if (next) next.click()
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
                <div ref={carouselRef}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {features.map((feature, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="bg-card overflow-hidden rounded-xl shadow-lg">
                                        <CardContent className="p-0">
                                            <div className="h-56 overflow-hidden">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-full object-cover  hover:scale-105 transition-transform"
                                                    width={1000}
                                                    height={1000}
                                                    priority={index === 0}
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                                <p className="text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden" data-carousel-prev />
                        <CarouselNext className="hidden" data-carousel-next />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Feature