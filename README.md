# React单车系统

This system uses ts+react reconstruction for old projects to review the use of react and help improve resumes
本系统为旧项目使用ts+react重构,旨在复习react的使用，同时帮助完善简历

## 技术选型

本项目选择React全家桶(包含Reacr16+Router4.0+Redux集成)+AntD UI组件(AntD栅格系统、ETable组件封装、BaseForm封装、表格内嵌单复选封装)+Axios(请求插件封装、错误拦截、Loading)+Map+Echarts

## 项目架构

### React全家桶

React17 Router Redux 

### 中间件/插件

Axios Map Echarts AntD

### 公共机制

菜单、权限、Header、Footer ETable EForm Loading API Axios

## 项目规范

<!-- "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.39",
    "@types/react": "^18.0.12",
    "@types/react-dom": "^18.0.5",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.7.3",
    "web-vitals": "^2.1.4" -->

1.引用antd UI库、axios
<!-- 2.高级配置，自定全局颜色等 -->
3.组件一起使用样式重叠了 => 换了一种方案解决了！
4.左边导航栏长度不够,怎么横向铺满? => 使用vh单位，一种相对单位
4.滚动条会导致内容被挤压 => 使用 overflow-y: overlay
5.如何根据数据渲染导航栏 => 直接导入数据赋值给item即可，但是如何做到根据不同人员渲染menu呢？
6.在解决根据不同人员渲染menu之前先完成登录页面，这里又引出如何使用Router =>
    react-router-dom是在浏览器端运行的前端路由，npm i react-router-dom会自己把react-router下载下来，使用时必须配置HashRouter或者BrowseRouer进行包裹，这里一般包在index.ts根文件
7.使用ts封装axios的时候遇到type类型不匹配的问题(不知道aixos的属性属于什么类型) => 使用type或者enum定义类型
<!-- 8.封装aixos如何返回then的值 => 可以返回一个Promise，在调用的时候直接点 -->
8.这里更新一个更好的做法，1.封装一个utils(http.ts),实质是一个回调函数，接受参数(url等，重点是参数定义两个钩子：成功状态和失败状态);2.基于http.ts再封装一个api实质也是一个回调函数，并接受data参数，回调函数内部通过return一个new Promise，将http.ts定义的回调函数在Promise执行器中调用并使用成功状态钩子和失败状态钩子，分别对应resolve和reject。在组件中使用这个api直接将data传进去即可
9.封装AutoRouter时，产生了一个奇怪的副作用，利用useEffect(只检测props传过来的值)加useRef(手动形成更新的生命钩子)解决。

10.为了更好的完成对于token令牌的支持，深入研究redux。=> 参照文档完成对redux的使用，使用请求数据之后保存token到local和redux中，每次访问前端路由切换的时候判断redux的路由和local中的路由是否相等来决定是否跳转
11.封装一个utils,正好学习一下date的相关api = > 日期组件



## 可用脚本

In the project directory, you can run:
在项目目录中，可以运行：

### `npm start` or `yarn start`

### `npm run build`

Builds the app for production to the `build` folder.\
将用于生产的应用程序生成到“build”文件夹\
It correctly bundles React in production mode and optimizes the build for the best performance.
它可以在生产模式下正确地捆绑反应，并优化构建以获得最佳性能。

The build is minified and the filenames include the hashes.\
构建被缩小，文件名包含哈希\
App is ready to be deployed!
应用已准备好部署！

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
**注意：这是单向操作。一旦你“弹出”，你就不能回去了**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
如果您对构建工具和配置选择不满意，可以随时“弹出”。此命令将从项目中删除单一生成依赖项。

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
相反，它会将所有配置文件和可传递依赖项（webpack、Babel、ESLint等）复制到您的项目中，以便您完全控制它们。除“eject”之外的所有命令仍能工作，但它们将指向复制的脚本，以便您可以调整它们。现在你只能靠自己了。

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
您不必使用“弹出”。策划的功能集适用于中小型部署，您不应该觉得有义务使用此功能。然而，我们理解，如果您在准备就绪时无法自定义此工具，则此工具将不会有用。

