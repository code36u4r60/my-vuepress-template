module.exports = {
    plugins: [
        ['@vuepress/back-to-top'],
        ['mathjax', {
            macros: {
                '\\Z': '\\mathbb{Z}',
            },
        }],
    ],
    dest: '/',
    title: 'Site Title',
    description: 'Site Description',
    serviceWorker: true,
    themeConfig: {
        logo: '/assets/img/logo.png',

        lastUpdated: 'Last Updated',

        repo: 'code36u4r60/my-vuepress-template',
        docsRepo: 'code36u4r60/my-vuepress-template',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Plugins', link: '/plugins/' },
            { text: 'About', link: '/about' },
        ],
        displayAllHeaders: true,
        sidebarDepth: 3,
        sidebar: {
            '/guide/': [
                '',
                'sub1/',
                'sub2/'
            ],
            '/plugins/': [
                '',
            ]
        }
    }//End ThemeConfig
}