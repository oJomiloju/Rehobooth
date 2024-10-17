import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Name */}
          <div>
            <h3 className="text-2xl font-bold">Rehobooth Attorneys</h3>
            <p className="mt-2">Providing expert legal solutions for your needs.</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold">Location</h3>
            <p className="mt-2">123 Legal Street</p>
            <p>Suite 456</p>
            <p>City, State, ZIP</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="mt-2">Email: contact@rehoboothattorneys.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
