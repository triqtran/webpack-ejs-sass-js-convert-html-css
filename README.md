# webpack-ejs-sass-js-convert-html-css
Setup project using webpack, ejs, sass, javascript (es6) for building template (HTML/CSS)

## Initialize project for setting project

Step 1: Check NodeJS and NPM has been installed in you device

```
- stable lastest version
node v12.13.1
npm  v6.12.1
```

Step 2: Install global `webpack`, `webpack-cli` and `webpack-dev-server`

```
webpack v4.41.5
webpack-cli 3.3.10
```

Step 3: Install libraries focusing **package.json**.

Step 4: Start project with port default **8080**. Then, try on example:

```
yarn start

http://localhost:8080 || http://localhost:8080/index.html
http://localhost:8080/user.html
http://localhost:8080/nunjucks.html
```
Step 5: Build project:
```
yarn build
```

## Using to convert HTML/CSS

### 1. CSS - Coding Stylist - Process in src/assets/scss

* ```main.scss```: main file to build css bundle file.

* ```reset.scss```: reset all efficient css before process stylist.

* ```variables.scss```: you can define variables for css-style.

* ```responsive.scss```: handle responsive for template.

* ```hacked.scss```: hot fix css without effect to others.

* ```components/```: you can write css for components and then load into this folder.

* ```partials/```: you can write css for header, footer or layout... and then load into this folder.

### 2. Nunjucjs template - Clean and reusable html-code betweens pages - src/views.

* ```./views/```: all main pages of template will be rendered directly in here.

* ```layouts/```: define layout for page.

* ```components/```: define component supporting for template.

### 3. Using Nunjucks Template for building faster.

Doc: [Nunjucks Template](https://mozilla.github.io/nunjucks/templating.html){:target="_blank"}