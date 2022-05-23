<!--
 * @Author: your name
 * @Date: 2021-01-06 17:27:07
 * @LastEditTime: 2021-01-26 15:20:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \liangzhi_examinationd:\2021WebCode\blockChain_SupplyFinance1.0\README.md
-->
# 区块链产品

> 区块链产品会计版

## 风格
项目启用了eslint，主风格eslint配置使用了[standard](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)。

自定义：
* 项目使用tab（4个字符）进行缩进；
* 语句结尾必须使用分号。

## UI组件库
本项目UI组件库使用[element-ui](http://element.eleme.io/#/zh-CN/)

## 组件
命名规范：组件名称首字母必须大写，如果是多个单词组成，请使用驼峰法命名。

## 字体图标
项目中使用到的小图标，如果不是多色的，一律使用公司统一的字体图标[iconfont](http://www.iconfont.cn)。
引入方式，在index.html使用link方式直接引入alicn上的在线链接。

注意：如果设计师更新了UI图标后，需要更新链接，更新后链接地址会发生变化，需要重新更改。

## 整站更换字体
目前可更换的字体为宋体和黑体。

任何元素标签皆不可再单独设置字体，统一给body元素设置字体，子元素全部来继承body的字体样式。

通过给html元素添加类名来控制宋体的切换：
* font-simsun: 宋体
* font-simhei: 黑体

## 注意
* 项目打包过后的dist目录不需要提交;
* 不再使用npm run build来打包，请使用npm run deploy来打包并部署。

## vue-particles

```
// https://segmentfault.com/a/1190000014758993
// vue-particles / src /vue-particles / index.js

install: function (Vue, options) {
    Vue.component('vue-particles', particles)
}
```

## vue swiper

```
// 高纬度swiper IE 报错

npm install swiper@3.4.1 --save-dev

```


## vue - eslint 禁用
···

/* eslint-disable */

···

## 构建步骤

``` bash
# 安装依赖
npm install | cnpm install

# 打开开发环境
npm run dev

# 打包
npm run build

```

## 项目目录
```
|- build    webpack配置文件
|- config    项目打包配置
|- node_modules    项目依赖模块
|- src    项目源码目录
|----- assets    项目静态资源目录(图片资源、公共样式文件、公共js文件)
|----- components    组件
|----- router    路由配置
|----- App.vue    页面入口组件
|----- main.js    程序入口文件
|- static
|- .babelrc    babel配置文件
|- .editorconfig    代码风格配置
|- .eslintignore    eslint校验屏蔽设置
|- .eslintrc.js    eslint配置文件
|- .gitignore    git屏蔽设置
|— .postcssrc.js
|- index.html    入口html文件
|- package.json 
|- README.md
```