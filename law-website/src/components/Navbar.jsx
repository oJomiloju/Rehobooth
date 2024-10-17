import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl"><Link to='/'>Rehobooth Attorneys</Link></div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="text-black hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-black hover:text-gray-300">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu with transition */}
      <div
        className={`${
          isOpen ? 'max-h-40' : 'max-h-0'
        } overflow-hidden transition-max-height duration-500 ease-in-out md:hidden text-center`}
      >
        <br></br>
        <Link to='/about' className="block py-2 px-4 text-xl text-black hover:text-white transition-colors duration-300">About</Link>
        <Link to='/contact' className="block py-2 px-4 text-xl text-black hover:text-white transition-colors duration-300">Contact</Link>
        <br></br>
      </div>
    </nav>
  );
};

export default Navbar;
