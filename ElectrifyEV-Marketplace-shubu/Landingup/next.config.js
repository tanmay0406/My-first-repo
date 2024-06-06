// next.config.js

module.exports = {
    reactStrictMode: false,
    
    // Custom routing configuration
    exportPathMap: async function () {
      return {
        'app/vehicle-detail/page/:id': { page: '/app/vehicle-detail/page' }, // Update the path accordingly
      };
    },
    
    images: {
      domains: ['localhost'],
    },
  };
 