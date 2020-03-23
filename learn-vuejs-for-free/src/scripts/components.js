'use strict';

const Vue = require('vue');

// emojify returns the corresponding emoji image
function emojify(name) {
  return `<img src="emojis/` + name + `.png">`;
}

// cast returns a spell (function) that decorates the wizard
function cast(emoji) {
  let magic = emojify('magic');
  return function(wizard) {
    return wizard + ' ' + magic + ' ' + emoji + ' ' + magic;
  };
}

Vue.component('wizard', {
  props: ['name', 'spell'],
  template: `<p v-html="spell(name)"></p>`
});

let app = new Vue({
  el: '#app',
  data: {
    harry: emojify('harry'),
    ron: emojify('ron'),
    hermione: emojify('hermione')
  },
  methods: {
    // oculus_reparo returns a spell (function) that repairs glasses
    oculus_reparo: cast(emojify('oculus-reparo')),
    // wingardium_leviosa returns a spell (function) that levitates an object
    wingardium_leviosa: cast(emojify('wingardium-leviosa')),
    // alohomora returns a spell (function) that unlocks a door
    alohomora: cast(emojify('alohomora'))
  }
});
