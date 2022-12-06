const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'src/images'),
    /*images: {
        formats: ['image/avif', 'image/webp'],
    },*/
    webpack(config, options) {
        return config
    }
})
