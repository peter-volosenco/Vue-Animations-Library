const env = {};

// List of environment variables made available to the app
/* Manange Env -- */
[
    'VERSION',
    'TITLE',
    'TEST',
].forEach(function(key) {
    if (!process.env[key]) {
        throw new Error(`Environment variable ${key} must be set. Check vue.config.js and .env.development`);
    }
    env[key] = JSON.stringify(process.env[key]);
});
/* -- Manange Env */


// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('vue', '@vue/compat')

        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                return {
                    ...options,
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2
                        }
                    }
                }
            })

        /* Manange Env -- */
        config
            .plugin('define')
            .tap(args => {
                const base = args[0]['process.env'];
                args[0]['process.env'] = {
                    ...base,
                    ...env,
                };
                return args;
            })
            /* -- Manange Env */

    },
    publicPath: process.env.NODE_ENV.trim() === 'production' ? '' : '/'
}