
export default function TermsPage() {
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="md:mx-96 mx-5 font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 bg-gradient-to-b from-neutral-500 to-neutral-900">
                <div className="text-xl text-center">
                    If you suspect any fraudulent activity related to Viora, please report it immediately. Email us at <a href="mailto:vioranow@gmail.com" className="hover:underline underline-offset-1 cursor-pointer">vioranow@gmail.com</a> with a brief description of the incident and any relevant details. Your vigilance helps us maintain a safe shopping experience for everyone. Thank you!
                </div>
            </div>
        </div>

    )
}

