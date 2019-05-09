# 一个VUE的UI组件

作者：杜建武

## 安装

使用本框架前，请在 CSS 中开启 border-box

```
*{box-sizing: border-box;}
```

##parcel 打包vue
安装parcel

npm i -D parcel-bundler@1.9.7

根据parcel要求配置好路径

启动命令

npx parcel index.html --no-cache

给 package.json 进行配置

"alias": {
    "vue": "./node_modules/vue/dist/vue.common.js"
}

参考http://www.mamicode.com/info-detail-2506790.html
