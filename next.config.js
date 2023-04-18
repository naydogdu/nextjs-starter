const path = require('path')

/**
 * @type {import('next-react-svg').NextReactSvgConfig}
 */
const nextReactSvgConfig = {
    include: path.resolve(__dirname, 'src/images'),
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
};

const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

module.exports = withReactSvg(nextConfig);
