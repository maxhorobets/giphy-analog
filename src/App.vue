<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: inherit;
  border-radius: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: none;
  text-decoration: none;
  list-style: none;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, 
img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, 
i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, 
embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, 
ruby, section, summary, time, mark, audio, video {
  vertical-align: baseline;
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  font: inherit;
}

body {
  background-color: rgb(18, 18, 18);
  color: rgb(255, 255, 255);
  font-size: 16px;  
  font-weight: normal;
  height: 100%;
  letter-spacing: 0px;
  min-height: 500px;
  overflow-y: scroll;
  text-align: left;
  max-width: 1040px;
  vertical-align: baseline;
  line-height: unset;
  margin: 0px auto;
  padding: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  list-style: none;
}

#app {
  font-family: 'Righteous', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1040px;
}
</style>
