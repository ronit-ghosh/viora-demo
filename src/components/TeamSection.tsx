import { type TeamMember } from '../types';
import SayakImage from "../images/sayak.jpg"
import RonitImage from "../images/ronit.jpg"
import JoydeepImage from "../images/joydeep.jpeg"
import ShariqImage from "../images/shariq.jpg"

const team: TeamMember[] = [
  {
    name: "Shariq Kadla",
    role: "Founder / CEO",
    image: ShariqImage,
    desc: "Visionary leader driving Viora's mission to revolutionize delivery services in Kashmir."
  },
  {
    name: "Ronit Ghosh",
    role: "Backend Developer",
    image: RonitImage,
    desc: "Expert in building robust and scalable backend systems."
  },
  {
    name: "Sayak Dey",
    role: "Frontend Developer",
    image: SayakImage,
    desc: "Creating beautiful and intuitive user experiences."
  },
  {
    name: "Joydeep Roy",
    role: "Design Head",
    image: JoydeepImage,
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