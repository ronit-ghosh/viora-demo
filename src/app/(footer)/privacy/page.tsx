export default function TermsPage() {
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="mx-4 md:mx-40 font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 bg-gradient-to-b from-neutral-500 to-neutral-900 py-8">
                <div className="md:mt-0 mt-20">
                    <h2 className="text-4xl mb-8 text-center">Privacy Policy</h2>

                    <p>At Viora, your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>

                    <h2>Information We Collect</h2>
                    <p>We collect personal information such as your name, email, phone number, and delivery address when you create an account or place an order, as well as non-personal data to improve our services.</p>
                    <br />
                    <h2 className="font-extrabold">How We Use Your Information</h2>
                    <p>Your information is used to process orders, communicate with you, and enhance your shopping experience. We may also use it for marketing purposes with your consent.</p>
                    <br />
                    <h2 className="font-extrabold">Data Protection</h2>
                    <p>We implement security measures to protect your information from unauthorized access and ensure it is only accessible to authorized personnel.</p>
                    <br />
                    <h2 className="font-extrabold">Sharing Your Information</h2>
                    <p>We do not sell or rent your personal information. We may share it with trusted partners who help us operate our services, under strict confidentiality.</p>
                    <br />
                    <h2 className="font-extrabold">Your Rights</h2>
                    <p>You can access, correct, or delete your personal information at any time. For inquiries, contact us at <a href="mailto:vioranow@gmail.com">vioranow@gmail.com</a>.</p>
                    <br />
                    <h2 className="font-extrabold">Changes to This Policy</h2>
                    <p>We may update this policy occasionally, and any changes will be posted here.</p>
                    <br />
                    <p>Thank you for trusting Viora with your information!</p>
                </div>
            </div>
        </div>

    )
}
