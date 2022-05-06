/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["o205439.ingest.sentry.io", "m.media-amazon.com"],
    },
};

module.exports = nextConfig;
