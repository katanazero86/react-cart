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
npm i -D copy-webpack-plugin

// scss
npm i -D style-loader css-loader sass-loader node-sass

// axios
npm i -S axios

// local server
npm i -S serve

// modal lib
npm i -S sweetalert2


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
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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

- redux 생성은 여러 reducer 를 combineReducers 를 한 후, createStore 로 생성하여 <Provide></Provide> 컴포넌트를 이용하여 store 속성에 지정 
- redux-saga 생성은 createSagaMiddleware, applyMiddleware 를 이용. createStore 시, applyMiddleware 주입
- 주입 완료 후, 생성된 사가미들웨어에 run() 호출 -> 인자값은 rootSaga 전달

```

## project about

> - react toy project
> - react + redux + redux-saga + webpack + babel + scss 로 구성
> - e-commerce 장바구니를 구현
> - 함수형 컴포넌트로 작성(Functional Component) : 간결하고, 추론하기 쉬운 코드
> - Container Component 와 Presentation Component 구조로 구성 : 책임과 역할 분리 -> 재사용성 증가 또는 유지보수 편리
> - SCSS 로 작성 -> CSS 를 작성하면 기본적으로 전역범위이며, 자식요소 상속 및 우선순위연산에 여러움이 있음 -> 혼란스러움 -> 이를 보안하고 쉽게 작성하고자 SCSS 사용
> - redux-saga 를 이용하여 비동기 액션을 처리 -> 코드량이 늘어나는거같음 + 비동기 흐름을 쉽게 테스트 가능