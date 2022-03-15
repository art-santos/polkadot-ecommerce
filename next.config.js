const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {});

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["fakestoreapi.com"],
    },
};
