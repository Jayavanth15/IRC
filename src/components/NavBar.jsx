import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Mail, Phone, Home, Info, Contact } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <a href="mailto:info@imageravicreations.in" className="flex items-center space-x-1 text-sm">
              <Mail size={16} />
              <span>info@imageravicreations.in</span>
            </a>
            <span className="flex items-center space-x-1 text-sm">
              <Phone size={16} />
              <span>Call Us: +91 77999 73336</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-irc-blue">IRC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4 w-full justify-end">
              <Link to="/home" className="flex items-center space-x-1 px-4 py-2 rounded-lg text-black bg-irc-blue hover:bg-white-800 transition duration-300">
                <Home size={18} />
                <span>Home</span>
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <Link className="flex items-center space-x-1 px-4 py-2 rounded-lg text-black bg-irc-blue hover:bg-white-800 transition duration-300">
                  <Menu size={18} />
                  <span>Categories</span>
                </Link>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    {/* Social Media Designs */}
                    <div className="group/social relative">
                      <Link to="/categories/smd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Social Media Designs
                      </Link>
                      <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/social:opacity-100 group-hover/social:visible transition-all duration-300 z-50">
                        <Link to="/categories/smd/festivalsmpd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Festival SMPD
                        </Link>
                      </div>
                    </div>

                    {/* PSD Designs */}
                    <div className="group/psd relative">
                      <Link to="/categories/psd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        PSD Designs
                      </Link>
                      <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/psd:opacity-100 group-hover/psd:visible transition-all duration-300 z-50">
                        <Link to="/categories/psd/designerpack" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Designers Pack
                        </Link>
                        <Link to="/categories/psd/politicalandfestivaldesign" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Political & Festival Designs
                        </Link>
                      </div>
                    </div>

                    {/* Graphic Designer Products */}
                    <div className="group/graphic relative">
                      <Link to="/categories/designerproducts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Graphic Designer Products
                      </Link>
                      <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/graphic:opacity-100 group-hover/graphic:visible transition-all duration-300 z-50">
                        <Link to="/categories/imagesstock" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Images Stock
                        </Link>
                        <Link to="/categories/psdstock" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          PSD Stock
                        </Link>
                        <Link to="/categories/cdrstock" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          CDR Stock
                        </Link>
                      </div>
                    </div>

                    {/* Free Downloads */}
                    <div className="group/free relative">
                      <Link to="/categories/freedownloads" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Free Downloads
                      </Link>
                      <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/free:opacity-100 group-hover/free:visible transition-all duration-300 z-50">
                        <Link to="/categories/freestock" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Free Stock
                        </Link>
                      </div>
                    </div>

                    {/* Political Designs */}
                    <div className="group/political relative">
                      <Link to="/categories/politicaldesigns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Political Designs
                      </Link>
                      <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/political:opacity-100 group-hover/political:visible transition-all duration-300 z-50">
                        <Link to="/categories/ysrcp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          YSRCP
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <Link to="/about" className="flex items-center space-x-1 px-4 py-2 rounded-lg text-black bg-irc-blue hover:bg-white-800 transition duration-300">
                <Info size={18} />
                <span>About Us</span>
              </Link>

              <Link to="/contact" className="flex items-center space-x-1 px-4 py-2 rounded-lg text-black bg-irc-blue hover:bg-white-800 transition duration-300">
                <Contact size={18} />
                <span>Contact Us</span>
              </Link>

              <Link to="/cart" className="flex items-center space-x-1 px-4 py-2 rounded-lg text-black bg-irc-blue hover:bg-white-800 transition duration-300">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </Link>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex md:hidden items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
