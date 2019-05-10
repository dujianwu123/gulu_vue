import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon'
Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
new Vue({
  el: '#app'
})
