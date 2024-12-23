import Image from 'next/image'
import KashmirImage from "@/images/kashmir.jpeg"

const Places = () => {
    const places = [
        { name: "Hyderpora" },
        { name: "Sanatnagar" },
        { name: "HMT" },
        { name: "Soura" },
        { name: "Jawaharnagar" },
        { name: "Raibagh" },
    ]

    return (
        <section className="py-8 md:py-16 relative min-h-[400px] md:h-[500px]">
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src={KashmirImage}
                    alt="Google Maps"
                    fill
                    style={{ objectFit: 'cover' }}
                    className='opacity-60 blur-sm'
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white">
                    We're Currently Serving in
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
                    {places.map((place, index) => (
                        <div 
                            key={index} 
                            className="backdrop-blur-md bg-white/50 dark:bg-gray-800/50 p-4 md:p-6 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-center">
                                {place.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Places