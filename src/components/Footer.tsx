
import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-airline-blue to-airline-lightBlue text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">AeroVR Voyager</span>
            </div>
            <p className="text-sm text-blue-100">
              Experience flights before you book with our immersive VR cabin and seat viewer technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/cabins" className="hover:text-white transition-colors">Cabin Explorer</a></li>
              <li><a href="/seats" className="hover:text-white transition-colors">Seat Viewer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Flight</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-blue-100">Subscribe to our newsletter</p>
              <div className="mt-2 flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 text-sm rounded-l-md focus:outline-none text-gray-800 w-full" />
                <button className="bg-airline-gold text-airline-blue px-3 py-2 rounded-r-md font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-blue-400 text-center text-sm text-blue-100">
          <p>© {new Date().getFullYear()} AeroVR Voyager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
