// BatterySwapDetails.js

import React from "react";

const BatterySwapDetails = ({ data }) => {
  const { name, openingHours, contact } = data;
  
  return (
    <div className="flex-1">
      <p className="text-lg font-semibold text-gray-950 dark:text-gray-950">{name}</p>
      <p className="mt-2 text-gray-950 dark:text-gray-950"><strong>Opening Hours:</strong> {openingHours}</p>
      <p className="mt-2 text-gray-950 dark:text-gray-950"><strong>Contact:</strong> {contact}</p>
    </div>
  );
};

export default BatterySwapDetails;
