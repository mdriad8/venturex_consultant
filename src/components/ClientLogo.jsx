import React from "react";

const ClientLogo = ({ name, image }) => {
  return (
    <div className="flex items-center justify-center h-20">
      <img
        src={image}
        alt={name}
        className="client-logo max-h-16 max-w-full object-contain"
      />
    </div>
  );
};

export default ClientLogo;
