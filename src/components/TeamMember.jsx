import React from 'react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
        <img 
          src={image || "https://via.placeholder.com/150"} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;