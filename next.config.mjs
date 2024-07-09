/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true
	},
	experimental: {
		webpackBuildWorker: true
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		})
		return config
	},
	
	typescript: {
		
		ignoreBuildErrors: true
	},
    eslint: {
        ignoreDuringBuilds: true, // Optionally ignore all ESLint errors during build
      },
}

export default nextConfig
