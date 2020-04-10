# react-cart 프로젝트

> 프로젝트 목적
> - react 학습
> - 간단한 toy project
> - 마크업 연습 및 학습
> - react 프로젝트 구성을 하면서, 필요한 라이브러리 및 설정에 익숙해지자


## project dependency & setting

```
- 직접 하나하나 구성.

npm init -y

// react lib
npm i -S react react-dom
npm i -S redux react-redux redux-saga
npm i -S react-router-dom

// babel
npm i -D @babel/core @babel/preset-react @babel/preset-env
npm i -D babel-loader
npm i -S @babel/polyfill

// webpack
npm i -D webpack webpack-dev-server webpack-cli
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D clean-webpack-plugin

// scss
npm i -D style-loader css-loader sass-loader node-sass


* loader 는 웹팩이 번들링을 할때 JS가 아닌 자원(CSS, HTML, Image 등)들을 변환하게 해준다.
* plugin 은 부가적인 기능이며 번들링된 결과물에 추가효과를 부여한다고 이해하면 된다.
```

## babel & webpack config

```

- 프로젝트 root 경로에 webpack.config.js 생성
- 프로젝트 root 경로에 .babelrc 생성


// .babelrc
// 주의할점은 @babel 버전이 올라가면서 @babel/preset-env 형태로 작성을 안함
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": []
}


// webpack.config.js
const path = require('path');

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [],
    output : {

    },
    module : {

    },
    plugins : [

    ],
}

- https://webpack.js.org/configuration/


- /src/index.js 에 import '@babel/polyfill'; 코드 적용(polyfill)

```
