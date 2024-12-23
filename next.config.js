/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.forEach((rule) => {
            const { oneOf } = rule;
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes("_app")) return;
                    one.issuer.and = [path.resolve(__dirname)];
                });
            }
        });
        return config;
    },
    sassOptions: {
        additionalData: `@import "styles/root/_mixins.scss";@import "styles/root/_variables.scss";`,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
     optimizeFonts: false,

};
module.exports = nextConfig;
