# 预取

预取指的在用户 **可能** 实际需要模块以前，以后台任务的形式下载js模块。
最理想的方式当然是只取 用户即将进行的交互 所需的最小粒度的代码集，不会用到的js尽量避免下载。

只下载即将用到的最小代码块，是qwik擅长的领域。
因为qwik能理解一个组件哪一块不用，怎么被使用等，
因此它可以做出最准确的决策，去预取哪些chunks。

因为qwik从根本上把组件的事件、状态、渲染函数分开了，所以预取的代码量是很小的。

# 收集已使用的符号

qwik渲染应用时，会收集哪些符号在渲染阶段被使用了。
所谓符号可能是一个组件的各个部分。
符号是由qwik的优化器提取的，为的是拆分应用。
单独的事件监听器、组件状态、组件渲染器本身都是符号。


比如，一个页面有一个"加入购物车"按钮，按钮点击时，用户应该立即得到反馈，
把物品加入页面上的小车图标。在这个例子中，qwik可以理解，用户将要交互的唯一符号是
那个"加入购物车"的按钮的事件处理程序。

在这个例子里，。。。。TODO 缺一段，没看懂

因为qwik理解什么将会发生，所以它可以仅预取事件处理程序代码，而不是整个应用的js或者
整个路由的js。这就和传统方式形成了鲜明对比，传统方式的预取通常是预取整个应用或者整个路由的js,
只有通过取全部的js，才能把时间处理程序也取过来。

# 预取策略

预取策略是指：谁来决定预取哪些js。如果不设置的话，默认是后台任务的形式预取，
且预取的都是页面上可见的事件处理程序。可以通过下面代码配置预取策略，不过这块qwik还正在研究，
处于试验阶段。

```javascript
export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    prefetchStrategy: {
      // custom prefetching config
    },
    ...opts,
  });
}

```

# 预取实现

浏览器提供了多种方式可以"实现"，或者说应用，预取策略。
因为浏览器这些实现，各有优缺点，因此qwik提供了配置项让你选。

```javascript
export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    prefetchStrategy: {
      implementation: {
        // custom prefetching implementation
      },
    },
    ...opts,
  });
}
```

| 选项  | 描述  |
|-----|-----|
|   prefetchEvent  |     |
|   linkInsert  |     |
|   linkRel  |     |
|   workerFetchInsert  |     |

## 请求/响应缓存 和 service worker

## link rel

## web worker fetch

# 关于预取的常见问答


