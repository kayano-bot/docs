const { sidebar } = require('./sidebar');
const { config } = require("vuepress-theme-hope");

module.exports = config({
    title: 'Kayano Docs',
    description: 'The official Documentation for Kayano',
    base: '/docs/',
    themeConfig: {
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        darkmode: 'switch',
        blog: false,
        repo: 'https://github.com/kayano-bot',
        hostname: 'https://kayano.pukima.site/',
        themeColor: {
            old_blurple: '#7289DA',
            dark_blurple: '#4E5D94',
            red: '#F26D6D',
            orange: '#EF9F75'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Get Started', link: '/get-started/' },
        ],
        sidebar: sidebar,
    },
    plugins: [
        [
          "@mr-hope/pwa",
          {
            favicon: './images/icon.jpg',
          },
        ],
    ],
});
