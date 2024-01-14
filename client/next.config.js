/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "p16-oec-va.ibyteimg.com",
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "cdn.builder.io",
                port: '',
                pathname: '/**',
            },
            
        ],
    },
};

module.exports = nextConfig;
