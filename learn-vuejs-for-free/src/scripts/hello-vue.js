'use strict';

const Vue = require('vue');

// emojify returns the corresponding emoji image
function emojify(name) {
  return `<img src="emojis/` + name + `.png">`;
}

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Skerwe! ' + emojify('celebration')
  }
});
