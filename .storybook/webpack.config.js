const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

module.exports = ({ config }) => {
    let tsconfigPath = __dirname + "/../tsconfig.storybook.json";

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: () => ({ before: [createStyledComponentsTransformer()] }),
                    configFile: tsconfigPath
                }
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
                options: {
                    tsconfigPath: tsconfigPath
                }
            }
        ],
    });

    config.externals = config.externals || [];
    // This is a copy-paste from plugin boilerplate
    config.externals.push(
        function(context, request, callback) {
            if (/^plugin-api\/.+$/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    );

    config.module.rules.push({
        test: /\.stories\.tsx?$/,
        loaders: [{
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: "typescript" }
        }],
        enforce: 'pre',
    });

    let esLintLoaderIndex = config.module.rules.findIndex(r => r.use && r.use.find(u => u.loader && u.loader.match(/eslint-loader/)));
    if (esLintLoaderIndex !== -1) {
        config.module.rules.splice(esLintLoaderIndex, 1);
    }

    let babelLoaderIndex = config.module.rules.findIndex(r => r.loader && r.loader.match(/babel-loader/))
    if (babelLoaderIndex !== -1) {
        config.module.rules.splice(babelLoaderIndex, 1);
    }

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
