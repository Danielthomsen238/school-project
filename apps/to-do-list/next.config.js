// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');


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


module.exports = withNx(nextConfig)
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/]
	}
});