'use strict';

const Vue = require('vue');

// emojify returns the corresponding emoji image
function emojify(name) {
  return `<img src="emojis/` + name + `.png">`;
}

// rand returns a random item from an array
function rand(...arr) {
  var x = Math.floor(Math.random() * arr.length);
  return arr[x];
}

let app = new Vue({
  el: '#app',
  data: {
    cat: emojify('box'),
    alive_cats: [
      emojify('cat--smile'),
      emojify('cat--cheer'),
      emojify('cat--laugh'),
      emojify('cat--love'),
      emojify('cat--smirk'),
      emojify('cat--kiss'),
      emojify('cat--fear'),
      emojify('cat--sad'),
      emojify('cat--mad')
    ],
    dead_cats: [emojify('crossbones'), emojify('skull')]
  },
  methods: {
    // is_open returns whether the box is open
    is_open: function() {
      return this.cat != emojify('box');
    },
    // is_alive returns whether the cat is alive
    is_alive: function() {
      return this.cat != emojify('crossbones') && this.cat != emojify('skull');
    },
    // quantum_fluctuation observes whether the cat is alive or dead
    quantum_fluctuation: function() {
      if (this.is_open()) {
        this.cat = emojify('box');
        return;
      }
      this.cat = rand(rand(...this.alive_cats), rand(...this.dead_cats));
    },
    theme: function() {
      return { 'theme--alive': this.is_open() && this.is_alive(), 'theme--dead': !this.is_alive() };
    }
  }
});
