import Image from 'next/image'

const teamMembers = [
  {
    name: 'Shariq Kadla',
    role: 'CEO / Founder',
    description: 'Visionary leader driving Viora\'s mission to revolutionize delivery services in Kashmir.',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735237367/shariq_ss1h32.jpg'
  },
  {
    name: 'Ronit Ghosh',
    role: 'Backend Developer',
    description: 'Expert in building robust and scalable backend systems.',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735237500/ronit_bvhgot.png'
  },
  {
    name: 'Sayak Dey',
    role: 'Frontend Developer',
    description: 'Creating beautiful and intuitive user experiences.',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735237370/sayak_sto0u2.png'
  },
  {
    name: 'Joydeep Roy',
    role: 'Design Head',
    description: 'Leading the visual and user experience direction of Viora.',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735237369/joydeep_wxhvpo.png'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center  px-4">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-7xl mx-auto w-full relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <h1 className="text-3xl text-neutral-800 dark:text-neutral-300 font-bold text-center mb-5">Meet Our Team</h1>
        
        {/* Founder Section */}
        <div className="mb-5">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-2">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-neutral-800 dark:text-neutral-300">{teamMembers[0].name}</h2>
            <h3 className="text-primary text-xl mb-3">{teamMembers[0].role}</h3>
            <p className="text-muted-foreground text-base md:text-lg font-light max-w-xl">
              {teamMembers[0].description}
            </p>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {teamMembers.slice(1).map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-300">{member.name}</h2>
              <h3 className="text-primary text-lg mb-2">{member.role}</h3>
              <p className="text-muted-foreground text-sm md:text-base font-light max-w-md text-neutral-600 dark:text-neutral-500">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}