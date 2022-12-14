# 构想Qwik

qwik从使用上跟其他框架是非常相似的。
通过渲染一颗组件树从而构建出一个应用。

但qwik和其他框架不同的点，不在于要做什么(what)，而在于怎么做到(how)这个目标。
Qwik 的目标是提供即时应用程序，即使在移动设备上也是如此。Qwik 通过两个主要策略实现了这一点：
* 尽可能长时间地延迟 JavaScript 的执行和下载。
* 在服务器端序列化应用程序和框架的执行状态，在客户端恢复。
  Qwik 的目标是只需下载和执行最低限度的应用程序。

# 核心原则

::: tip
尽可能延迟js的执行
:::


qwik应用启动(页面打开)的非常快，因为它只需要执行很少的js.（1kb左右）

通过渐进地延迟和加载js，qwik应用提供了其他框架无法匹敌的 **接近瞬时** 的启动速度。

qwik非常快不是因为它使用了多么聪明的算法，而在于它提供了一种方式，即：大多数js永远不需要下载和执行。

它的快来自于 不需要做其他框架必须要做的事，比如hydration。


# 可恢复性 和 序列化

可恢复性可以让应用在服务端停止工作后继续执行。现在的框架都需要hydration，但是qwik不用。

qwik会在服务器侧序列化 框架数据结构，应用状态，事件监听器到HTML。
因为所有信息都在HTML上序列化好了，客户端才可以延续应用的执行。

# 问题是什么？

现代网站很复杂，交互性很强，因此需要大量js，大量js会产生两个问题：
* 网络带宽：大量代码要下载到客户端，网慢情况下需要很长时间进行网络传输。
* 启动时间：代码到了客户端，还要hydration，使应用变的可交互。

这些年应用的复杂度越来越高、交互越来越复杂，且没有停止的趋势。
应用的复杂意味着代码变的越来越多。
越来越多的代码会降低应用的启动时间。

更糟糕的是，js是单线程的，没法充分利用多核cpu。

## 事情是怎么走到这一步的？（好惨😭）

解决上述问题的方案 非常明显 但是也 非常难：减少JavaScript！

非常明显是因为我们都同意：js越少，网站性能越好。

非常难是因为我们的现有工具都很难做到这一点。
这是因为我们的工具大都是用来解决特定的问题的，但他们并未考虑因为引入这些工具而产生了许多js代码。

比如你的应用要加动画，加样式，加a/b测试等等，你都可以引入很多工具可选。
你只需要写个script标签就可以把工具引进来，然后解决问题。
但是代价是你的代码包更大了。

整个业界，我们都未能考虑到代码包大小会带来的严重后果，许多工具都是用来解决特定问题的，
但是代码包大小问题却从未被当成一个问题来解决。
只有当你把许多工具包集合在一起组成应用的时候，
包大小的严重性才凸显出来，但此时，只有极少数开发者还能为此（减少js）做什么。

## 解决方案是什么

qwik从设计之初就致力于解决代码包大小问题。
更小的bundle size是它最初始的目标（初心），所有其他架构设计上的决策都要屈从于该目标。

但请注意，qwik并不会创建更少的js代码。
它是方案是：在应用启动的时候，不要一口气把所有js代码都传输到客户端。
qwik把尽可能延迟加载js（这个思想）运用到了极致。

## 包大小不应成为开发者的困扰/问题

今天，代码包大小是开发者的问题。但问题是即使你按照框架/工具的最佳实践来写代码，
你还是会得到一个很大的bundle size。然后你开始做一些延迟加载的优化工作，
但是任何试过这些方案的开发者都会告诉你，这些优化方案起到的作用也很有限。

关于业界工具最好实践导致budle size很大，web世界有太多例子可以举例。

qwik的理念是bundle size大小问题不应该是开发者的问题，而应该是框架设计的问题。
它应该作为框架设计的一部分，从框架侧解决。

qwik从一开始就设计了很多代码懒加载的边界，根据这些懒加载的边界把代码拆成很多的chunks,
qwik运行时只有在必要的时候才会下载这些chunks。

## 为何不修补现存框架/工具

简言之，懒加载技术体系/qwik设计方案 是比较底层的，现有框架没办法在不改变底层设计的情况下，
完整的加入该功能体系。


## 为什么创造qwik?

因为我们相信有更好的创建应用的方式。

不再是 **应用启动时就要尽快加载大量的js，为了使应用可交互** 这种方式。

不再是需要用户绞尽脑汁地想办法把打包代码拆为不同的chunks。

qwik提供了一种新的创建应用的方式，
在该方式下，**开发者只需要安心写业务（不用管最终的budle size） 并且 应用可以秒开（不管你的应用多复杂）**。