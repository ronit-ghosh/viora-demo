import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 bg-gray-50 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-50">Viora</h3>
            <p className="dark:text-gray-400 text-gray-600">Kashmir's 10-minutes delivery app</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Quick Links</h4>
            <ul className="space-y-2 ">
              <li><a href="/about" className="hover:text-white dark:text-gray-400 text-gray-600">About Us</a></li>
              <li><a href="/team" className="hover:text-white dark:text-gray-400 text-gray-600">Our Team</a></li>
              <li><a href="/privacy" className="hover:text-white dark:text-gray-400 text-gray-600">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white dark:text-gray-400 text-gray-600">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Contact</h4>
            <ul className="space-y-2 dark:text-gray-400 text-gray-600">
              <li>Office: Soura, Srinagar</li>
              <li>Phone: +91 96821 79829</li>
              <li>Email: vioranow@gmail.com</li>
              <li>Insta: viora_now</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="dark:text-gray-400 text-gray-600">
                <Facebook />
              </a>
              <a href="#" className="dark:text-gray-400 text-gray-600">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/viora_now/" target='_blank' className="dark:text-gray-400 text-gray-600 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-400 text-gray-600">
          <p>&copy; {new Date().getFullYear()} Viora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}