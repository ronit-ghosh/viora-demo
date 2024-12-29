import { ProductCarousel } from "@/components/product-carousel"

const beverageProducts = [
    { id: 13, name: 'Tata Tea Premium 500g', price: 260, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396579/Tata_Tea_Premium_500g_tlaisz.webp' },
    { id: 14, name: 'Nescafe Classic 200g', price: 525, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396579/Nescafe_Classic_200g_vlod2c.jpg' },
    { id: 15, name: 'Horlicks Classic 500g', price: 245, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396579/Horlicks_Classic_500g_sd00yr.jpg' },
    { id: 16, name: 'Bournvita 500g', price: 230, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396578/Bournvita_500g_vs2zuv.jpg' },
    { id: 17, name: 'Red Label Tea 500g', price: 285, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/Red_Label_Tea_500g_bozqxa.webp' },
    { id: 18, name: 'Boost 500g', price: 235, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396578/Boost_500g_tgui9h.jpg' },
  ]
  
  export default function BeverageSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Tea, Coffee & Health Drink" products={beverageProducts} />
      </div>
    )
  }