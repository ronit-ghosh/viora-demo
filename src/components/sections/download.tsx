import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import ImageBG from "@/images/download.png"
import PlayStore from "@/images/playstore.svg"
import AppStore from "@/images/appstore.svg"

const Download = () => {
    const [email, setEmail] = useState('')
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto md:px-48 px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <Image
                            src={ImageBG}
                            alt="Viora App"
                            height={7000}
                            width={7000}
                            className="mx-auto w-96"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-4">Get the Viora App</h2>
                        <p className="mb-4">We will send you a link, open it on your phone to download the app</p>
                        <div className="flex gap-2 mb-4">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow dark:border-neutral-400"
                            />
                            <Button>Share App Link</Button>
                        </div>
                        <div className="flex gap-4">
                            <Image
                                src={AppStore}
                                alt="Download on App Store"
                                width={135}
                                height={40}
                                className='cursor-pointer'
                                onClick={() => alert('hi')}
                            />
                            <Image
                                src={PlayStore}
                                alt="Get it on Google Play"
                                width={135}
                                height={40}
                                className='cursor-pointer'
                                onClick={() => alert('hi')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download
