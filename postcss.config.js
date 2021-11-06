module.exports = (api) => {
    if (/\.css$/.test(api.file)) {
        return {
            // You can specify any options from https://postcss.org/api/#processoptions here
            parser: "sugarss",
            plugins: [
                // Plugins for PostCSS
                ["postcss-short", { prefix: "x" }],
                "postcss-preset-env",
            ],
        };
    }

    return {
        // You can specify any options from https://postcss.org/api/#processoptions here
        plugins: [
            // Plugins for PostCSS
            ["postcss-short", { prefix: "x" }],
            "postcss-preset-env",
        ],
    };
};