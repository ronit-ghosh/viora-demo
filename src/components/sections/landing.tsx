import Image from 'next/image'
import BackgroundImage from '@/images/bg.jpg'
import { Cover } from '@/components/ui/cover'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'

const Landing = () => {
    const placeholders = [
        "Hyderpora",
        "Sanatnagar",
        "HMT",
        "Soura",
        "Jawaharnagar",
        "Raibagh",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <section className="relative h-screen flex items-center bg-black">
            <Image
                src={BackgroundImage}
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
                <div className="flex gap-2">

                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </section>
    )
}

export default Landing
