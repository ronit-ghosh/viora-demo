import { ProductCarousel } from "@/components/product-carousel"

const pharmaProducts = [
    { id: 79, name: 'Dettol Antiseptic 550ml', price: 195, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Dettol_Antiseptic_550ml_grfwbt.jpg' },
    { id: 80, name: 'Vicks Vaporub 50ml', price: 145, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Vicks_Vaporub_50ml_fmhs86.jpg' },
    { id: 81, name: 'Savlon Antiseptic 1L', price: 289, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Savlon_Antiseptic_1L_tfkz6p.webp' },
    { id: 82, name: 'Band-Aid 100 Strips', price: 165, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Band-Aid_100_Strips_sj6dsz.jpg' },
    { id: 83, name: 'Moov Spray 80g', price: 235, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Moov_Spray_80g_npoaz9.jpg' },
    { id: 84, name: 'Volini Spray 100g', price: 245, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Volini_Spray_100g_alyqio.jpg' },
  ]
  
  export default function PharmaSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Pharma & Wellness" products={pharmaProducts} />
      </div>
    )
  }