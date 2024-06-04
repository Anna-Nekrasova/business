import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle } from 'styled-components';
import Regular from '../src/vendor/TTFirsNeue-Regular.ttf';
import Medium from '../src/vendor/TTFirsNeue-Medium.ttf';
import Bold from '../src/vendor/TTFirsNeue-Bold.ttf';
import Abhaya from '../src/vendor/AbhayaLibre-ExtraBold.ttf';

const Global = createGlobalStyle`
@font-face {
  font-family: TTFirsNeue;
  src: url(${Regular});
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: TTFirsNeue;
  src: url(${Medium});
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: TTFirsNeue;
  src: url(${Bold});
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: Abhaya;
  src: url(${Abhaya});
  font-style: normal;
  font-weight: 800;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: TTFirsNeue, Arial, sans-serif;
  font-style:  normal;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
