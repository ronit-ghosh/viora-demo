import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { type TeamMember } from '../types';
import SayakImage from "../images/sayak.png"
import RonitImage from "../images/ronit.jpg"
import JoydeepImage from "../images/joydeep.jpeg"
import ShariqImage from "../images/shariq.jpg"
const team: TeamMember[] = [
  {
    name: "Shariq Showkat Kadla",
    role: "Founder",
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

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  };

  useEffect(() => {
    let interval: number;
    if (autoPlay) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#7800ff]"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-[#7800ff] font-medium text-lg mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate about delivering the best experience to our customers.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-[#7800ff]' : 'bg-gray-300 dark:bg-gray-600'
              }`}
          />
        ))}
      </div>
    </div>
  );
}