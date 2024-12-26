import Image from 'next/image'
import { SweetToothSection } from '@/components/products/sweet-tooth-section'
import { Meteors } from '@/components/ui/meteors'
import Header from '@/components/header'

const categories = [
  { name: "Dairy & Bread & Eggs", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245230/dairy-milk-bread_awudzj.jpg" },
  { name: "Fruits & Vegetables", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Fruits_Vegetables_vscfmd.jpg" },
  { name: "Cold Drinks & Juices", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245230/Cold_Drinks_Juices_dace6t.jpg" },
  { name: "Snacks & Munchies", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245232/snacks_munchies_nbtc7s.jpg" },
  { name: "Breakfast & Instant Food", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Breakfast_Instant_Food_n4ugcg.jpg" },
  { name: "Sweet Tooth", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245232/Sweet_Tooth_dey3mz.webp" },
  { name: "Bakery & Biscuits", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245229/Bakery_Biscuits_mxybqt.avif" },
  { name: "Tea, Coffee & Health Drink", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245232/Tea_Coffee_Health_Drink_ndr6ic.jpg" },
  { name: "Atta, Rice & Dal", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245232/Atta_Rice_Dal_wsjlp9.jpg" },
  { name: "Masala, Oil & More", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245229/Masala_Oil_More_mgrjut.jpg" },
  { name: "Sauces & Spices", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245233/Sauces_Spices_h8vscm.webp" },
  { name: "Organic & Healthy Living", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Organic_Healthy_Living_ihz2za.jpg" },
  { name: "Baby Care", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245232/Baby_Care_gpexcw.jpg" },
  { name: "Pharma & Wellness", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Pharma_Wellness_uthxbw.jpg" },
  { name: "Cleaning Essentials", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Cleaning_Essentials_q3lu4o.jpg" },
  { name: "Home & Office", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245230/Home_Office_he0yvf.webp" },
  { name: "Personal Care", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Personal_Care_fsspcd.jpg" },
  { name: "Pet Care", image: "https://res.cloudinary.com/drynqkitl/image/upload/v1735245231/Pet_Care_nmm58w.webp" },
]

export default function BuyPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Banner */}
        <div className="">
          <div className="w-full relative mb-12">
            <div className="absolute inset-0 h-full w-full  rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-centerr">
              <h1 className="font-bold text-xl text-white relative z-50 flex justify-center ">
                Delivering Holiday Cheer: Enjoy 25% off your first order this Christmas!
              </h1>
              <Meteors number={40} />

            </div>
          </div>
        </div>

        {/* Categories */}
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src={category.image}
                alt={category.name}
                width={1000}
                height={1000}
                className="w-full h-24 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium text-center">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Sweet Tooth Section */}
        <SweetToothSection />
      </div>
    </>
  )
}
