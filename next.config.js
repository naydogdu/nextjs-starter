const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'src/images'),
    /*images: {
        formats: ['image/avif', 'image/webp'],
    },*/
    async rewrites() {
        return [
            {
                source: "/admin",
                destination: "/admin/index.html",
            },
        ];
    },
    webpack(config, options) {
        return config
    }
})
