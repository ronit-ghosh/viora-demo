import { type TeamMember } from '../types';

const team: TeamMember[] = [
  {
    name: "Shariq Shokawat Kadla",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
    desc: "Visionary leader driving Viora's mission to revolutionize delivery services in Kashmir."
  },
  {
    name: "Ronit Ghosh",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=800&q=80",
    desc: "Expert in building robust and scalable backend systems."
  },
  {
    name: "Sayak Dey",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=800&q=80",
    desc: "Creating beautiful and intuitive user experiences."
  },
  {
    name: "Joydeep Roy",
    role: "Design Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80",
    desc: "Leading the visual and user experience direction of Viora."
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mb-4 inline-block">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#7800ff]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 font-thin">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}