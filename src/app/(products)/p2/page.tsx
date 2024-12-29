import { ProductCarousel } from "@/components/product-carousel"

const bakeryProducts = [
    { id: 7, name: 'Parle-G Gold 1kg', price: 140, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396577/Parle-G_Gold_1kg_e20w71.jpg' },
    { id: 8, name: 'Britannia Good Day 200g', price: 30, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396579/Britannia_Good_Day_200g_puutfa.jpg' },
    { id: 9, name: 'Sunfeast Dark Fantasy 100g', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396578/Sunfeast_Dark_Fantasy_100g_v8rvtf.jpg' },
    { id: 10, name: 'Hide & Seek 200g', price: 45, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396578/Hide_Seek_200g_jrpdif.jpg' },
    { id: 11, name: 'Marie Gold 250g', price: 30, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396579/Marie_Gold_250g_cqltsn.jpg' },
    { id: 12, name: 'Jim Jam 100g', price: 35, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396578/Jim_Jam_100g_vtgok7.jpg' },
  ]
  
  export default function BakerySection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Bakery & Biscuits" products={bakeryProducts} />
      </div>
    )
  }
  