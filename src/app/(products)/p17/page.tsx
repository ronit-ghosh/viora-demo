import { ProductCarousel } from "@/components/product-carousel"

const stapleProducts = [
    { id: 97, name: 'Aashirvaad Atta 5kg', price: 275, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396591/Aashirvaad_Atta_5kg_qu8rqi.jpg' },
    { id: 98, name: 'India Gate Basmati 5kg', price: 399, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396591/India_Gate_Basmati_5kg_juig55.jpg' },
    { id: 99, name: 'Toor Dal 1kg', price: 145, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396592/Toor_Dal_1kg_gu6k7e.jpg' },
    { id: 100, name: 'Moong Dal 1kg', price: 160, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396591/Moong_Dal_1kg_ccgjem.jpg' },
    { id: 101, name: 'Fortune Chakki Atta 5kg', price: 265, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396591/Fortune_Chakki_Atta_5kg_fp3iw6.webp' },
    { id: 102, name: 'Sona Masoori Rice 5kg', price: 325, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396592/Sona_Masoori_Rice_5kg_k7m3iv.jpg' },
  ]
  
  export default function StaplesSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Atta, Rice & Dal" products={stapleProducts} />
      </div>
    )
  }