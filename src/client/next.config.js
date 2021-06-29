module.exports = {
    async rewrites() {
        return [{
            source: '/api/:path*',
            destination: 'http://server-container:8000/api/:path*' // Proxy to Backend
        }]
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                        publicPath: `/_next/static/images/`,
                        outputPath: 'static/images',
                    },
                },
            ],
        })

        return config
    },
}