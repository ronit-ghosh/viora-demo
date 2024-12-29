import { ProductCarousel } from "@/components/product-carousel"

const masalaProducts = [
    { id: 55, name: 'Fortune Sunflower Oil 1L', price: 155, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396585/Fortune_Sunflower_Oil_1L_yykwjd.jpg' },
    { id: 56, name: 'MDH Garam Masala 100g', price: 78, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396585/MDH_Garam_Masala_100g_zchocj.jpg' },
    { id: 57, name: 'Saffola Gold Oil 1L', price: 185, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396585/Saffola_Gold_Oil_1L_muv0rh.jpg' },
    { id: 58, name: 'Everest Turmeric 200g', price: 56, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Everest_Turmeric_200g_zrs3da.jpg' },
    { id: 59, name: 'Catch Chaat Masala 100g', price: 65, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Catch_Chaat_Masala_100g_s8fagc.jpg' },
    { id: 60, name: 'Tata Salt 1kg', price: 24, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396585/Tata_Salt_1kg_tumbg6.jpg' },
  ]
  
  export default function MasalaSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Masala, Oil & More" products={masalaProducts} />
      </div>
    )
  }