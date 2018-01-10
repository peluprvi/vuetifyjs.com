export default {
  header: '概述',
  headerText: '本概览旨在帮助您流利使用**Vuetify的**Vue SSR模版。如果您尚未安装`webpack-ssr`模版，请在[在快速入门中](/vuetify/quick-start)安装。',
  structureHeader: '构造',
  structureText1: '这个Vue CLI模版是为性能和SEO优化而设计的。这个模版配置好了一个开箱即用的css, sass and stylus预处理器。',
  structureText2: '**Build**文件夹包含您的项目的所有webpack特定的构建配置。**Src**是所有开发项目文件所在的地方。请注意，Webpack-SSR模版被配置成开箱即用地使用[Vue Router](https://router.vuejs.org/en/)、[Vuex](https://vuex.vuejs.org/en/intro.html)和[Vue Server Renderer](https://vuejs.org/v2/guide/ssr.html)。这将允许您开发简单或复杂的应用程序。',
  structureSubHeader: '文件夹结构',
  applicationHeader: '应用程序',
  applicationText1: '导航到**src**文件夹并打开`App.vue`.Vuetify是一个以语义为中心的框架，您写的代码应该很容易记住，而且易于管理。为此，Vuetify的主要组件之一是`v-app`，这个组件允许您定义您的应用程序布局，这与`v-toolbar`、`v-navigation-drawer`和`v-footer`结合使用。',
  applicationText2: '下面的标记告诉应用程序您有一个`toolbar`和`footer`。一旦定义，内容区域将被调整到适应的大小。有关布局的更多信息，请导航到[布局](/layouts/pre-defined)部分。',
  applicationText3: '举个例子，将所有静态提供的资源放在`static`目录，这样可以通过引用`/static/picture.png`。',
  applicationText4: '组件文件夹是您的自定义组件应放置的位置，编辑`components/_index.js`文件以使这些文件自动为您启动。',
  applicationSubHeader1: '静态资源',
  applicationSubHeader2: '组件',
  routingHeader: '路由',
  routingText1: 'Webpack-SSR模版使用了官方Vue路由器来控制应用程序流程。位于`/src/router/index.js`中，所有的应用程序路由和路由逻辑将在这里定义。在里面您也会看到一个允许您设置动态加载页面的功能，这不是必须的，但是，这将有助于分解您的应用程序，只加载所需的视图，清理最终输出的仓储空间。',
  routingText2: 'These routes can be accessed by creating a link to the specified path, or by using Vue Router\'s `<router-link>` component. For more information, review the official Vue Router [documentation](https://router.vuejs.org/en/). The default function assumes you are placing views in the <kbd>/pages</kbd> folder containing **View** on the end of the file. Example <code>HomeView.vue</code>.',
  stateControlHeader: 'State control',
  stateControlText1: 'State control is managed by the official Vuex library. This Vue plugin follows Facebooks\' Reflux design pattern. Navigate to <code>/store/index.js</code>. By default, Vuex is setup to prefetch data for the store before your page is initially rendered. To hook into this functionality, create a <code>preFetch</code> method on your view component.',
  stateControlText2: 'This is useful for bootstrapping your application so that any necessary data is available before the initial render.',
  stateControlText3: 'For more information on State Control and Vuex, view the official [documentation](https://vuex.vuejs.org/en/intro.html).',
  stateControlText4: 'Vuetify integrates into Vuex to allow for easy debugging and access to stored properties. You can also use watchers to hook into store states and react when they change. More information can be found [here](https://vuejs.org/v2/guide/reactivity.html).',
  metaDataHeader: 'Meta data',
  metaDataText: 'In order to ensure that page specific meta data is viewable when your pages are crawled, you can define your applications page specific information in <code>router/meta.json</code>. This will allow you to set page title, description and keywords for every route. This will automatically be applied for you on page load and change.',
  redirectsHeader: 'Redirects',
  redirectsText: 'As applications evolve, routes change. If you want to maintain the authority already garnered from bots that index your page, it is best to assign a 301 redirect to the new location. Located in <code>router/301.json</code> you can define 301 redirects for your pages which will automatically be handled for you on page load.',
  webAppSupportHeader: 'Web App support',
  webAppSupportText: 'Vuetify SSR has support for native Web Applications on smart phones. Also known as progressive web apps, your websites can be saved on the homescreen of a device, allowing it to be usable offline and receive push notifications. For more information on Web App Manifest\'s, navigate to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Manifest). To see a live example, add the Vuetify documentation on your mobile device\'s homescreen.',
  toc: [
    {
      text: '概述',
      href: 'introduction'
    },
    {
      text: '结构',
      href: 'structure'
    },
    {
      text: '应用',
      href: 'application'
    },
    {
      text: '路由',
      href: 'routing'
    },
    {
      text: '状态控制',
      href: 'state-control'
    },
    {
      text: '元数据',
      href: 'meta-data'
    },
    {
      text: '重定向',
      href: 'redirects'
    },
    {
      text: 'Web App支持',
      href: 'web-app-support'
    }
  ]
}
