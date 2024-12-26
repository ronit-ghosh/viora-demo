import Image from 'next/image'
import { Cover } from '@/components/ui/cover'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Landing = () => {
    const [location, setLocation] = useState('')
    const [error, setError] = useState('')
    const placeholders = [
        "Hyderpora",
        "Sanatnagar",
        "HMT",
        "Soura",
        "Jawaharnagar",
        "Raibagh",
    ];
    function handleLocation() {
        if (!location) {
            setError('You haven\'t entered Pincode')
            setTimeout(() => {
                setError('')
            }, 2500);
            return
        } else if (location.length !== 6) {
            setError('Enter a correct pincode')
            setTimeout(() => {
                setError('')
            }, 2500)
            return
        } else if (location === '190014' || location === '190005' || location === '190001' || location === '190011' || location === '190008') {
            toast("🔍 We're already serving in your area", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return
        }
        toast("👋 We're coming into your area soon!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    return (
        <section className="relative h-screen flex items-center bg-black">
            <Image
                src="https://res.cloudinary.com/drynqkitl/image/upload/v1735236697/bg_qbipqd.jpg"
                alt="Viora Delivery"
                fill
                style={{ objectFit: 'cover' }}
                className="z-0 dark:opacity-25 opacity-70 blur-sm"

            />
            <div className="container mx-auto px-4 relative z-20 text-white">
                <div className="lg:text-7xl text-5xl font-extrabold font-sans mb-8 text-center gap-3 flex flex-col">
                    <span>Kashmir&apos;s First</span>
                    <span><Cover> 10-Minutes</Cover></span>
                    <span> Delivery App</span>
                </div>
                <h2 className="mt-10 text-center text-white font-sans font-bold text-md mb-1 capitalize">
                    enter pincode Check if we are delivering in your area <span className='text-red-500'>*</span>
                </h2>
                <div className="text-center text-red-500 font-mono h-6">{error}</div>
                <div className="flex gap-2">
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={(e) => setLocation(e.target.value)}
                        onSubmit={handleLocation}
                    />
                </div>
            </div>
        </section>
    )
}

export default Landing
