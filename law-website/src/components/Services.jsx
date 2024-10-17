import React from 'react';
import serviceImage1 from '../assets/images/service1.jpg'; // Replace with actual images
import serviceImage2 from '../assets/images/service2.jpg';
import serviceImage3 from '../assets/images/service3.jpg';

const Services = () => {
  return (
    <section className="py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-left text-neutral-800 mb-8">Our Services</h2>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={serviceImage1} alt="Service 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-2">Patents</h3>
              <p className="text-neutral-600">Expert patent services to help you protect your intellectual property with comprehensive legal solutions.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={serviceImage2} alt="Service 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-2">Copyrights</h3>
              <p className="text-neutral-600">Ensure your creative works are protected with our expert copyright services, tailored to your needs.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={serviceImage3} alt="Service 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-2">Trademarks</h3>
              <p className="text-neutral-600">Safeguard your brand identity with our trademark services, ensuring legal protection and long-term success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
