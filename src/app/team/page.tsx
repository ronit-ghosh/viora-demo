import Image from 'next/image'

const teamMembers = [
  {
    name: 'Shariq Kadla',
    role: 'CEO/Founder',
    description: 'Visionary leader driving Viora\'s mission to revolutionize delivery services in Kashmir.',
    image: '/images/shariq-kadla.jpg'
  },
  {
    name: 'Sayak Dey',
    role: 'Frontend Developer',
    description: 'Creating beautiful and intuitive user experiences.',
    image: '/images/sayak-dey.jpg'
  },
  {
    name: 'Ronit Ghosh',
    role: 'Backend Developer',
    description: 'Expert in building robust and scalable backend systems.',
    image: '/images/ronit-ghosh.jpg'
  },
  {
    name: 'Joydeep Roy',
    role: 'Design Head',
    description: 'Leading the visual and user experience direction of Viora.',
    image: '/images/joydeep-roy.jpg'
  }
]

export default function TeamPage() {
  return (
    <div className="py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={member.name} className={`flex flex-col items-center text-center ${index === 0 ? 'lg:col-span-4 mb-8 lg:mb-12' : ''}`}>
            <div className={`relative ${index === 0 ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-28 h-28 sm:w-32 sm:h-32'} mb-4`}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </div>
            <h2 className={`font-bold ${index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'} mb-2`}>{member.name}</h2>
            <h3 className="text-primary mb-2">{member.role}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

