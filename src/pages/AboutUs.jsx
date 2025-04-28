import React from 'react';
import TeamMember from '../components/TeamMember';
import { teamMembers } from '../data/mockData';

const AboutUs = () => {
  return (
    <div>
      {/* Banner */}
      <div>
  {/* Full-width blue background */}
  <div className="bg-irc-blue py-16 mt-9">  {/* Adjust mt-16 based on your nav height */}
    {/* Full-width black background */}
    <div className="bg-black w-full">
      {/* Centered container for content */}
      <div className="container mx-auto text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Get to know the creative minds behind Image Ravi Creations
        </p>
      </div>
    </div>
  </div>
</div>
      
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              IRC is a professionally managed firm specializing in online designing and printing services. If you are looking for online designing as well as printing services, look no further…
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Established with a vision to deliver exceptional creative solutions, Image Ravi Creations has grown into a trusted partner for businesses and individuals seeking quality design and print services. Our extensive experience in the industry has enabled us to understand and cater to the unique needs of our diverse clientele.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine creativity with technical expertise to produce designs that not only look good but also effectively communicate your message to your target audience. Our state-of-the-art printing facilities ensure that every project is delivered with impeccable quality and attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Leadership</h2>
          
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto mt-10">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                <img 
                  src={teamMembers[0].image} 
                  alt={teamMembers[0].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-3">Director</h3>
              <h4 className="text-xl text-irc-blue font-semibold mb-4">{teamMembers[0].name}</h4>
              <p className="text-gray-700 leading-relaxed">
                With over 15 years of experience in the creative industry, our director has led Image Ravi Creations from its inception to become a leading design and print service provider. Their vision and dedication to excellence continue to drive our company forward, ensuring that we remain at the forefront of innovation and quality in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-irc-blue">Brand Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as the leading design and print service provider, known for our innovation, quality, and customer-centric approach. We aim to empower businesses and individuals to communicate effectively through outstanding visual communication materials.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-irc-blue">Promise</h3>
              <p className="text-gray-700 leading-relaxed">
                At Image Ravi Creations, we promise to deliver designs that not only meet but exceed your expectations. We commit to understanding your unique requirements and translating them into visual solutions that effectively communicate your message and enhance your brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* We Promise For */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">We Promise For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-irc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Uncompromising commitment to delivering the highest quality in every project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-irc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timeliness</h3>
              <p className="text-gray-600">
                Respecting deadlines and delivering projects on time, every time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-irc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                Exceptional customer support throughout your project journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-irc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continually pushing creative boundaries to deliver unique designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;