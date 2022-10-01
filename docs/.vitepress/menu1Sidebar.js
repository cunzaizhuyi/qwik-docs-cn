const guidePath = '/docs/guide';
const conceptsPath = '/docs/concepts';
const advancedPath = '/docs/advanced';

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
            { text: '常见问答', link: `${guidePath}/faq.md` },
            { text: '路由', link: `${guidePath}/e.md` },
        ]
    },
    // {
    //     text: '概念',
    //     collapsible: true,
    //     collapsed: false,
    //     items: [
    //         { text: 'c', link: `${conceptsPath}/c.md` },
    //         { text: 'd', link: `${conceptsPath}/d.md` },
    //     ]
    // },
    {
        text: '高级',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '预取', link: `${advancedPath}/prefetching.md` },
            { text: '容器', link: `${advancedPath}/containers.md` },
            { text: '优化器', link: `${advancedPath}/optimizer.md` },
            { text: 'qrl', link: `${advancedPath}/qrl.md` },
            { text: 'qwikloader', link: `${advancedPath}/qwikloader.md` },
            { text: '自定义build目录', link: `${advancedPath}/costom-build-dir.md` },
        ]
    }
]