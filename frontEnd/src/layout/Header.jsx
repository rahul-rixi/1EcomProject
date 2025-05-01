import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const clothingSubmenu = [
  "Dresses",
  "Tops & Blouses",
  "Skirts",
  "Shorts & Pants",
  "Co-ord Sets",
  "Premium Collection",
  "Bodysuit",
  "Jackets & Coats",
  "Gloves",
  "Men",
  "women",
  "kids"
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Clothing", hasDropdown: true },
  { label: "Shop By Video" },
  { label: "Submit Return/Exchange Request" },
  { label: "Best Sellers" },
  { label: "SALE" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showClothingDropdown, setShowClothingDropdown] = useState(false);

  const toggleClothingDropdown = () => {
    setShowClothingDropdown((prev) => !prev);
  };

  const formatToKebabCase = (str) =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="text-center flex-grow lg:flex-grow-0">
          <img src="/logo.png" alt="Logo" className="h-10 mx-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 items-center flex-1 justify-center">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={toggleClothingDropdown}
                  className="flex items-center gap-1 text-gray-700 hover:text-black text-sm font-medium"
                >
                  {link.label}
                  {showClothingDropdown ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                <AnimatePresence>
                  {showClothingDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-gray-200 shadow-2xl rounded-xl px-6 py-4 z-50 w-64 flex flex-col gap-2"
                    >
                      {clothingSubmenu.map((item) => (
                        <Link
                          key={item}
                          to={`/category/${formatToKebabCase(item)}`}
                          className="block text-sm text-gray-700 hover:text-black hover:bg-blue-50 rounded-md px-3 py-1 transition-all duration-200"
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : link.label === "Best Sellers" ? (
              <Link
                key={link.label}
                to="/bestseller"
                className="text-gray-700 hover:text-black text-sm font-medium"
              >
                {link.label}
              </Link>
            ) : link.label === "Home" ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-700 hover:text-black text-sm font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href="#"
                className="text-gray-700 hover:text-black text-sm font-medium"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Heart className="hidden lg:block" />
          <Search />
          <User className="hidden lg:block" />
          {/* Cart icon - Redirect to /cart */}
          <Link to="/cart">
            <ShoppingBag />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white shadow-md"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={toggleClothingDropdown}
                      className="flex items-center justify-between w-full text-gray-700 text-base"
                    >
                      {link.label}
                      {showClothingDropdown ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    <AnimatePresence>
                      {showClothingDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-2 grid grid-cols-1 gap-2"
                        >
                          {clothingSubmenu.map((item) => (
                            <Link
                              key={item}
                              to={`/category/${formatToKebabCase(item)}`}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 text-sm hover:text-black transition"
                            >
                              {item}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.label === "Best Sellers" ? (
                  <Link
                    key={link.label}
                    to="/bestseller"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 text-base hover:text-black"
                  >
                    {link.label}
                  </Link>
                ) : link.label === "Home" ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 text-base hover:text-black"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href="#"
                    className="text-gray-700 text-base hover:text-black"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
