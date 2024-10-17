import React from 'react';
import sheggs from '../assets/images/sheggs.jpeg';
import service1 from '../assets/images/service1.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Our Company</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src={service1}
              alt="Founder"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 md:pl-8 w-full">
            <p className="text-lg text-gray-700 mb-4">
              Our company was founded by [Founder Name], a visionary leader with over [X years] of
              experience in the legal industry. With a mission to provide expert legal services,
              [Founder Name] has built a team dedicated to delivering solutions that meet the unique
              needs of every client.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our company was founded by [Founder Name], a visionary leader with over [X years] of
              experience in the legal industry. With a mission to provide expert legal services,
            </p>
            {/* Learn More Button */}
            <div className="mt-6 w-full">
  <button className="w-full px-6 py-3 bg-blue-950 text-white text-lg  rounded-3xl shadow hover:bg-neutral-500 transition duration-300">
    <Link to='/about'>Learn More</Link>
  </button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
