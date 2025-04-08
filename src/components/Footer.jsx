import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 bottom-0 w-full flex justify-between items-start ">
      {/* Company Info */}
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-2">Image Ravi Creations</h2>
        <div className="border-t border-gray-200 my-6 w-40"></div>
        <p>IRC is a professionally managed organization. Our rapid growth is attributed to our emphasis on Quality, Cost-effectiveness, and Customer Service. Our penchant for embracing the latest technology enabled us to produce quality with economy.</p>
      </div>
      
      {/* Useful Links */}
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
        <div className="border-t border-gray-200 my-6 w-40"></div>
        <ul className="space-y-1">
          <li><a href="/home" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Refund Policy</a></li>
        </ul>
      </div>
      
      {/* Address */}
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-2">Our Address</h2>
        <div className="border-t border-gray-200 my-6 w-40"></div>
        <p>S-14, Addepalli Complex,</p>
        <p>Gowrisankarapuram, GUDIVADA- 521301,</p>
        <p>Krishna Dist., A.P, INDIA</p>
      </div>
    </footer>
  );
};

export default Footer;