# 为什么叫qwik?

最早其实叫qoot，但是团队成员觉得这个词可能比较难以搜索。
团队成员的一个朋友提出qwik, 经过内部成员的一些讨论后，
最终决定叫qwik。

# 我为何不选其他框架？

最简单的回答是qwik解决了一些其他框架解决不了的问题。

无论你的应用多复杂，qwik都提供了页面秒开的性能。

它通过在应用加载时，只需网络传输非常少量的js完成这一点。
并且即使当你的应用越来越复杂，组件越来越多，应用开启都仅仅需要网络传输一点点的js即可。

这里有篇文章，[qwik是第一个开源的O(1)框架](https://www.builder.io/blog/our-current-frameworks-are-on-we-need-o1)

# qwik city是什么？

可以把qwik想象成内核。city是一些外围API。
比如路由、数据加载等。

# qwik学起来复杂吗?

很好学，因为跟react很像，所以对react开发者来说，更好学。

但是因为qwik创造了一些新概念，比如可恢复性等，需要先了解这些概念。

但总之，学习曲线不陡峭。

我们也有一些教学demo。

# $是啥？

你可能注意到qwik app里面有很多$符号，比如component$(), useWatch$(), <div onClick$={() => console.log('click')} />.
他们是代码拆分的边界。qwik会根据这些边界把代码拆成chunks碎片，这些碎片比组件的粒度还小。
既提供给qwik的优化器，也提示开发者自己。

举个例子：

```javascript
import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  console.log('render');
  return <p onClick$={() => console.log('hello')}>Hello Qwik</p>;
});
```
这段代码会拆分为三个chunk.

app.js
```javascript
import { componentQrl, qrl } from "@builder.io/qwik";

const App = /*#__PURE__*/ componentQrl(qrl(()=>import('./app_component_akbu84a8zes.js'), "App_component_AkbU84a8zes"));

export { App };
```

app_component_akbu84a8zes.js

```javascript
import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { qrl } from "@builder.io/qwik";
export const App_component_AkbU84a8zes = ()=>{
    console.log('render');
    return /*#__PURE__*/ _jsx("p", {
        onClick$: qrl(()=>import("./app_component_p_onclick_01pegc10cpw"), "App_component_p_onClick_01pEgC10cpw"),
        children: "Hello Qwik"
    });
};
```

app_component_p_onclick_01pegc10cpw.js
```javascript
export const App_component_p_onClick_01pEgC10cpw = ()=>console.log('hello');
```

# 