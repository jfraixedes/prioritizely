import Vue from 'vue'
import App from './App.vue'
import { DataComponents } from './mixins/DataComponents.js'
import ProgressBar from './components/progress-bar/ProgressBar.vue'

import { store } from './store/store';

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.component('ProgressBar', ProgressBar)

Vue.mixin(DataComponents)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
