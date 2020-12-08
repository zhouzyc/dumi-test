# 项目说明

## 项目架构

Umi(React + AntD + Less + TypeScript )

Umi中文网： [https://umijs.org/zh-CN/docs/](https://umijs.org/zh-CN/docs)

React官网： [https://react.docschina.org/](https://react.docschina.org/)

AntDesign中文网： [https://ant.design/index-cn](https://ant.design/index-cn)

AntDesign-Procomponents： [https://procomponents.ant.design/](https://procomponents.ant.design/)

Less官网： [http://lesscss.cn/](http://lesscss.cn/)

TypeScript官网： [https://www.tslang.cn/](https://www.tslang.cn/)



##组件说明（必须查看整个说明）
组件文档、使用说明: [xxxxx/~doc](xxxxx/~doc)
路径查看文档说明

## 文件结构

```txt
├── README.md //说明文件
├── config //配置目录
│   ├── config.dev.ts //线上开发环境配置文件
│   ├── config.local.ts //本地开发环境配置文件
│   ├── config.pro.ts //线上正式环境配置文件
│   ├── config.testing.ts //线上测试环境配置文件
│   ├── config.ts  //总配置入口文件
│   ├── layout.ts //后台layout配置文件
│   ├── dumi.ts //dumi文档配置
│   ├── theme.ts //全局样式变量配置
│   ├── proxy.ts //代理配置文件
│   └── route.ts //路由配置文件
├── docs //公用文档目录
│   └── demo.md //文档说明样例
├── mock //mock模拟数据目录
│   └── api.ts 
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── access.ts //umijs layout权限验证钩子
│   ├── app.ts //umijs  约定运行时配置文件
│   ├── assets //资源存放目录
│   │   └── images
│   ├── components //组件目录
│   │   ├── BasicsBusinessCustom //基础业务组件
│   │   ├── ErrorBoundary //全局错误捕获组件
│   │   ├── ProFormCustom //表单封装组件
│   │   └── TableCustom //表格封装组件
│   ├── global.css //全局样式文件
│   ├── layouts //全局路由公用layout 可以选使用
│   │   └── index.tsx
│   ├── locales //国际化
│   │   ├── en-US.js
│   │   └── zh-CN.js
│   ├── models //全局状态目录  命名已XXXXModel接口
│   │   ├── globalUserModel.ts //dva 写法
│   │   ├── useGlobalModel.ts //umijs 写法
│   │   └── useUserModel.ts
│   ├── pages
│   │   ├── 404.tsx //404页面
│   │   ├── document.ejs //html文件配置
│   │   ├── loading.tsx //页面加载文件
│   ├── services //请求目录
│   │   ├── config.ts //请求拦截器
│   │   ├── handler.ts //请求类型封装
│   │   └── index.ts //存放请求
│   └── utils //公用工具或方法存放目录
│       ├── globalUtils.ts //全局方法、webpack编译时自动加载 到全局
│       └── index.ts //业务公用 单独引入使用
├── test //自动化测试
│   ├── images
│   │   └── signIn.png
│   ├── index.e2e.ts  //浏览器测试
│   └── index.test.ts //方法测试
├── tsconfig.json //ts配置文件
└── typings.d.ts //ts类型声明
```

## 打包


本地开发环境： `yarn start`

线上开发环境： `npm run build:dev`

线上测试环境： `npm run build:test`

线上正式环境： `npm run build`


### 地址和说明


项目逻辑，交互，功能请阅读RP

环境配置：配置本地hosts `salary-dev.zh1998.com` 指向 `127.0.0.1` 域名，
配置本地 `http://jira.zh1998.comm` 指向 `39.108.122.223` 域名

项目GIT： `https://gitee.com/yjy-it/zh-salary`

项目RP： `https://gitee.com/yjy-it/zh-salary-doc`

项目UI： [蓝湖地址](https://lanhuapp.com/web/#/item/project/board?pid=244189ee-d719-46ad-9b1b-bcbfa2875475)

接口API： [接口文档](http://39.108.122.223:8038/swagger-ui.html)

测试JIRA： [JIRA地址](http://jira.zh1998.com/)



### 测试/开发登录路径


/signInM



### 账号


15882678704
密码：88888888

