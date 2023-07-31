const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    // output: 'export'
    webpack: (config, env) => {
        // do some stuff here
        return config;
    },
}

module.exports = nextConfig
