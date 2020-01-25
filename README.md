# templates-react-webpack
- 1. `git clone https://github.com/codemodify/templates-react-webpack.git`
- 2. `cd templates-react-webpack`
- 3. `./helper-files/fetch-latest-deps.sh`

#### React + Babel + Webpack
- https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637
- npm init -y
- npm i react react-dom --save-dev
- npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
- npm i webpack webpack-cli --save-dev
- touch webpack.config.js
- npm i webpack-dev-server --save-dev
- npm i css-loader style-loader --save-dev
- touch .babelrc
- npm i html-webpack-plugin html-loader --save-dev

#### Material UI
- npm install @material-ui/core --save-dev

#### Run DEV server
- npm run build-dev

#### Build PROD
- npm run build-prod
