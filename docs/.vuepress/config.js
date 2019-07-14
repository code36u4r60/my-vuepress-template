module.exports = {
    dest: '/',
    serviceWorker: true,
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: 'Last Updated',
        repo: 'code36u4r60/my-vuepress-template',
        repoLabel: 'Contribute!',
        docsRepo: 'code36u4r60/my-vuepress-template',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Theme 1', link: '/theme1/' },
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
            '/theme1/': [
                '',
            ]
        }
    }//End ThemeConfig
}