import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-:/]+/g) || []
    }
}

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title:
            process.env.npm_package_name ||
            'Bryan J. Hickey | Personal Website',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    "Hi! I'm a full-stack web developer living in Melbourne, Australia."
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~/assets/css/tailwind.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Manifest becuase it's the right thing to do
     */
    manifest: {
        name: 'Bryan J. Hickey | Personal Website',
        lang: 'en',
        background_color: '#DE2929'
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        postcss: {
            from: undefined,
            plugins: {
                tailwindcss: './tailwind.config.js'
            },
            preset: { autoprefixer: { grid: true } }
        },
        extend(config, { isDev }) {
            if (!isDev) {
                config.plugins.push(
                    new PurgecssPlugin({
                        // purgecss configuration
                        // https://github.com/FullHuman/purgecss
                        paths: glob.sync([
                            path.join(__dirname, './pages/**/*.vue'),
                            path.join(__dirname, './layouts/**/*.vue'),
                            path.join(__dirname, './components/**/*.vue')
                        ]),
                        extractors: [
                            {
                                extractor: TailwindExtractor,
                                extensions: ['vue']
                            }
                        ],
                        whitelist: ['html', 'body', 'nuxt-progress']
                    })
                )
            }
        },
        css: ['~/assets/css/tailwind.css'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
