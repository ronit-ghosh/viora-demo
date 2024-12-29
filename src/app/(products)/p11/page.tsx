import { ProductCarousel } from "@/components/product-carousel"

const organicProducts = [
    { id: 61, name: 'Organic Tattva Quinoa 500g', price: 299, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396586/Organic_Tattva_Quinoa_500g_ao4w1x.jpg' },
    { id: 62, name: '24 Mantra Organic Atta 5kg', price: 399, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396585/24_Mantra_Organic_Atta_5kg_ccvyff.webp' },
    { id: 63, name: 'True Elements Muesli 1kg', price: 549, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396586/True_Elements_Muesli_1kg_ucy6bi.jpg' },
    { id: 64, name: 'Conscious Food Jaggery 500g', price: 95, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396585/Conscious_Food_Jaggery_500g_rsluej.jpg' },
    { id: 65, name: 'Pro Nature Organic Dal 1kg', price: 199, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396586/Pro_Nature_Organic_Dal_1kg_qnkwh3.jpg' },
    { id: 66, name: 'Urban Platter Chia Seeds 400g', price: 299, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396586/Urban_Platter_Chia_Seeds_400g_nyicw9.jpg' },
  ]
  
  export default function OrganicSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Organic & Healthy Living" products={organicProducts} />
      </div>
    )
  }
  