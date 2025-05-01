import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
   
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 mt-20 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" alt="Logo" className="h-24" />
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Return/Exchange Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Place Return/ Exchange Request</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>
        </div>
  
        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-gray-300">
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Facebook size={20} /></a>
    
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Youtube size={20} /></a>
        </div>
  
        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2025, diamondlady Powered by Shopify
        </div>
  
        {/* WhatsApp Chat Floating Button */}
        <a
          href="https://wa.me/916204920113"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.38 0 0 5.38 0 12a11.93 11.93 0 001.68 6.12L0 24l5.88-1.56A11.93 11.93 0 0012 24c6.62 0 12-5.38 12-12 0-3.18-1.23-6.17-3.48-8.52zM12 22a9.87 9.87 0 01-5.22-1.44l-.38-.23-3.48.93.93-3.42-.25-.4A9.85 9.85 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.28-7.68l-1.8-.9c-.24-.12-.52-.1-.72.08l-.9.88a7.38 7.38 0 01-3.66-3.66l.88-.9c.18-.2.2-.48.08-.72l-.9-1.8a.63.63 0 00-.66-.34 6.07 6.07 0 00-2.1.86.63.63 0 00-.28.44c-.3 2.44.72 4.84 2.58 6.7a8.76 8.76 0 006.7 2.58c.18 0 .34-.1.44-.28a6.07 6.07 0 00.86-2.1.63.63 0 00-.34-.66z"/>
          </svg>
        </a>
      </footer>
    );
  };
  
  export default Footer;
  