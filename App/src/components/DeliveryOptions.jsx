import React from 'react';

const DeliveryOptions = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Delivery Options</h2>
      <div className="space-y-6">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-700">Standard Delivery</h3>
          <p className="text-gray-600">Delivery within 3-5 business days.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-700">Express Delivery</h3>
          <p className="text-gray-600">Delivery within 1-2 business days.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;
