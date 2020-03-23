'use strict';

const Vue = require('vue');

// emojify returns the corresponding emoji image
function emojify(name) {
  return `<img src="emojis/` + name + `.png">`;
}

let app = new Vue({
  el: '#app',
  data: {
    active: emojify('sirius--man'),
    // sirius is an object that contains two states: man and dog
    sirius: {
      man: emojify('sirius--man'),
      dog: emojify('sirius--dog')
    }
  },
  methods: {
    // an animagus is a wizard whom can shapeshift
    animagus: function() {
      this.active = this.active == this.sirius.man ? this.sirius.dog : this.sirius.man;
    },
    // breathe returns the corresponding .breathe--*
    breathe: function() {
      return this.active == this.sirius.man ? 'breathe--man' : 'breathe--dog';
    },
    // background returns the corresponding background
    background: function() {
      return this.active == this.sirius.man ? '' : 'black';
    }
  }
});
