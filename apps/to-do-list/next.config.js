// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA  = require("next-pwa");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const runtimeCaching = require('next-pwa/cache') 
runtimeCaching[0].handler = 'StaleWhileRevalidate' 
runtimeCaching[0].urlPattern = 'https://to-do-list-beta-dun.vercel.app/'

module.exports = withPWA({
  //...before
    
     dest: "public",
     register: true,
     skipWaiting: true,
   
   //...after
 })
  


 
