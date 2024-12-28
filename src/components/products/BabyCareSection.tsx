import { ProductCarousel } from "../product-carousel"

const babyCareProducts = [
    { id: 1, name: 'Pampers Diapers L 50pcs', price: 899, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396578/Pampers_Diapers_L_50pcs_d3gugc.webp' },
    { id: 2, name: 'Johnson\'s Baby Powder 400g', price: 235, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396577/Johnsons_Baby_Oil_200ml_jxu871.jpg' },
    { id: 3, name: 'Himalaya Baby Soap 125g', price: 85, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396577/Himalaya_Baby_Soap_125g_oxxckm.jpg' },
    { id: 4, name: 'Cerelac Wheat 300g', price: 245, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396577/Cerelac_Wheat_300g_xbtiqb.jpg' },
    { id: 5, name: 'Huggies Wipes 72pcs', price: 149, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396577/Huggies_Wipes_72pcs_a0xt0f.webp' },
    { id: 6, name: 'Johnson\'s Baby Oil 200ml', price: 165, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396577/Johnsons_Baby_Powder_400g_gpszvn.jpg' },
  ]
  
  export function BabyCareSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Baby Care" products={babyCareProducts} />
      </div>
    )
  }