'use strict';

const Vue = require('vue');

// emojify returns the corresponding emoji image
function emojify(name) {
  return `<img src="emojis/` + name + `.png">`;
}

// cast returns a spell (function) that decorates the wizard
function cast(emoji) {
  if (!emoji) {
    emoji = '¯\\_(ツ)_/¯';
  }
  return function(wizard) {
    return emoji + wizard + emoji;
  };
}

let app = new Vue({
  el: '#app',
  data: {
    wizard: emojify('wizard')
  },
  methods: {
    lumos: cast(emojify('lumos')),
    incendio: cast(emojify('incendio'))
  }
});
