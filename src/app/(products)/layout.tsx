import Footer from "@/components/Footer"
import Header from "@/components/header"

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <div className="">
                {children}
            </div>
            <Footer />
        </>
    )
}
