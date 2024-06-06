// BatterySwapDetails.js

import React from "react";

const BatterySwapDetails = ({ data }) => {
  const { name, openingHours, contact } = data;
  
  return (
    <div className="flex-1">
      <p className="text-lg font-semibold">{name}</p>
      <p className="mt-2"><strong>Opening Hours:</strong> {openingHours}</p>
      <p className="mt-2"><strong>Contact:</strong> {contact}</p>
    </div>
  );
};

export default BatterySwapDetails;
