import { FaUser, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* Contact Section */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {/* Name */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 group transition-colors hover:bg-white hover:shadow-sm">
              <FaUser className="text-gray-400 group-hover:text-blue-500 text-sm transition-colors" />
              <span className="text-gray-600 text-sm font-medium">Yoftahe Tadele</span>
            </div>

            {/* Phone */}
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 group transition-all hover:bg-white hover:shadow-sm"
            >
              <FaPhone className="text-gray-400 group-hover:text-green-500 text-sm transition-colors" />
              <span className="text-gray-600 text-sm font-medium">+251 956 262 290</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 group transition-colors hover:bg-white hover:shadow-sm">
              <FaLocationDot className="text-gray-400 group-hover:text-red-500 text-sm transition-colors" />
              <span className="text-gray-600 text-sm font-medium">Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Copyright Section */}
          <p className="text-gray-400 text-xs tracking-wide uppercase font-medium">
            © 2024 Yoftahe Tadele. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}