import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-[#7800ff]">
              VIORA
            </a>
          </div>

          <div className="flex gap-6">
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-[#7800ff] dark:hover:text-[#7800ff]">
                Home
              </a>
              <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#7800ff] dark:hover:text-[#7800ff]">
                About
              </a>
              <a href="/team" className="text-gray-700 dark:text-gray-300 hover:text-[#7800ff] dark:hover:text-[#7800ff]">
                Team
              </a>
            </div>
            <div className=""><ThemeToggle /></div>

            <button
              className="md:hidden flex items-center gap-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className='dark:text-white text-black' /> : <Menu className='dark:text-white text-black' />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <a href="/" className="block py-2 text-gray-700 dark:text-gray-300">Home</a>
            <a href="/about" className="block py-2 text-gray-700 dark:text-gray-300">About</a>
            <a href="/team" className="block py-2 text-gray-700 dark:text-gray-300">Team</a>
          </div>
        )}
      </div>
    </nav>
  );
}