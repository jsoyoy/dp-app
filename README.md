### React 项目总结

##### 1.图片SRC加载403解决方案
    <meta name="referrer" content="no-referrer">
##### 2.windows运行脚本需安装cross-env
      "scripts": {
            "start": "cross-env NODE_ENV=dev webpack-dev-server --progress --colors",
            "mock": "node --harmony ./app/mock/server.js",
            "build": "rimraf ./build && cross-env NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
        }

