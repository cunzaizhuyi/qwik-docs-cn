const guidePath = '/docs/guide';

export default [
    {
        text: '指引',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: '概览', link: `${guidePath}/overview.md` },
            { text: '快速开始', link: `${guidePath}/getting_started.md` },
            { text: '构想qwik', link: `${guidePath}/think_qwik.md` },
            { text: '常见问答', link: `${guidePath}/d.md` },
            { text: '路由', link: `${guidePath}/e.md` },
        ]
    },
    // {
    //     text: '组件API',
    //     collapsible: true,
    //     collapsed: false,
    //     items: [
    //         { text: 'c', link: `${commonPath}/c.md` },
    //         { text: 'd', link: `${commonPath}/d.md` } // /guide/one.md
    //     ]
    // }
]