import { ProductCarousel } from "../product-carousel"

const cleaningProducts = [
    { id: 25, name: 'Surf Excel 4kg', price: 549, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Surf_Excel_4kg_qfzvd0.jpg' },
    { id: 26, name: 'Harpic 1L', price: 165, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Harpic_1L_lexryu.jpg' },
    { id: 27, name: 'Lizol Floor Cleaner 2L', price: 299, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Lizol_Floor_Cleaner_2L_qvgjve.jpg' },
    { id: 28, name: 'Colin Glass Cleaner 500ml', price: 99, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Colin_Glass_Cleaner_500ml_bspepl.jpg' },
    { id: 29, name: 'Vim Dishwash Bar 200g', price: 45, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Vim_Dishwash_Bar_200g_afll03.jpg' },
    { id: 30, name: 'Comfort Fabric Conditioner 1L', price: 220, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Comfort_Fabric_Conditioner_1L_grpf6z.jpg' },
  ]
  
  export function CleaningSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Cleaning Essentials" products={cleaningProducts} />
      </div>
    )
  }