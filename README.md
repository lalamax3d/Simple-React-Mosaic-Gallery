# React Gallery App

## Description

<img src="./src/img/img0.jpg" alt="drawing" width="300" align="right"/>
Most simple mosaic gallery app with React and Material UI one can possibly imagine.

Started following this [YouTube Tutorial](https://www.youtube.com/watch?v=cDwa_JwuC-w) and then added some of my own features.

- lazy loading using [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component)
- simple python script to generate json file with image urls from a folder(quick and dirty / minimalist approach)
- 

## How Project was Created

- npx create-react-app gallery
- cd gallery
- code .
- npm install @material-ui/icons
- npm install @material-ui/core
- npm start
- npm install @mui/icons-material
- result is slightly different, top model behaviour

## TODO

- [ ] css variables for columns in javascript
- [ ] make json more detailed, description / prompts / etc
- [x] 2022-12-23 - lazy loading
- [x] 2022-12-23 - python script to generate json file with image urls from a directory

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
