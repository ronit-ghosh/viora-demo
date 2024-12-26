
export default function TermsPage() {
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="mx-4 md:mx-40 font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 bg-gradient-to-b from-neutral-500 to-neutral-900 py-8">
                <div className="md:mt-0 mt-72">
                    <h2 className="text-4xl mb-8 text-center">Security Policy</h2>

                    <p>At Viora, we prioritize the security of your personal information. This Security Policy outlines the measures we take to protect your data.</p>
                    <br />
                    <h2 className="font-extrabold">Data Protection</h2>
                    <p>We implement industry-standard security protocols to safeguard your personal information from unauthorized access, disclosure, alteration, and destruction. This includes encryption, firewalls, and secure server environments.</p>
                    <br />
                    <h2 className="font-extrabold">Access Control</h2>
                    <p>Access to your personal information is restricted to authorized personnel only. We ensure that our employees are trained in data protection and understand the importance of maintaining your privacy.</p>
                    <br />
                    <h2 className="font-extrabold">Secure Transactions</h2>
                    <p>All transactions on our platform are processed using secure payment gateways that comply with the highest security standards. Your payment information is encrypted and never stored on our servers.</p>
                    <br />
                    <h2 className="font-extrabold">Regular Audits</h2>
                    <p>We conduct regular security audits and assessments to identify and address potential vulnerabilities in our systems. This proactive approach helps us maintain a secure environment for your data.</p>
                    <br />
                    <h2 className="font-extrabold">Reporting Security Issues</h2>
                    <p>If you suspect any security breaches or have concerns about your data, please contact us immediately at <a href="mailto:vioranow@gmail.com">vioranow@gmail.com</a>. We take all reports seriously and will investigate promptly.</p>
                    <br />
                    <h2 className="font-extrabold">Changes to This Policy</h2>
                    <p>We may update this Security Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.</p>
                    <br />
                    <p>Thank you for trusting Viora with your security!</p>
                </div>
            </div>
        </div>

    )
}
