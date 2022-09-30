import menu1Sidebar from "./menu1Sidebar";
import menu2Sidebar from "./menu2Sidebar";
import menu3Sidebar from "./menu3Sidebar";

export default {
    base: '/',

    title: 'qwik', // 所有文档的浏览器标签title
    description: 'qwik中文文档', // 会渲染成<meta>标签，SEO用

    themeConfig: {

        siteTitle: 'qwik中文文档',
        logo: '/logo.jpg',


        nav: [
            { text: '文档', link: '/docs/', activeMatch: '/docs/' },
            // { text: '菜单2', link: '/menu2/', activeMatch: '/menu2/' },
            // { text: '菜单3', link: '/menu3/', activeMatch: '/menu3/' },
        ],

        sidebar: {
            '/docs/': menu1Sidebar,
            // '/menu2/': menu2Sidebar,
            // '/menu3/': menu3Sidebar,
        },


        socialLinks: [
            { icon: 'github', link: 'https://github.com/cunzaizhuyi/qwik-docs-cn' },
            // { icon: 'twitter', link: '...' },
            // { icon: 'discord', link: '...' }
        ],


        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present feiye'
        },
    }
}