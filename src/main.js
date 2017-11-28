// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import 'jquery/dist/jquery.min.js'
window.$ = window.jQuery = require('jquery')
// import $ from 'jquery'
// var SimpleVueValidation = require('simple-vue-validator');
// import SimpleVueValidation from 'simple-vue-validator'
// console.log(SimpleVueValidation.Validator)
// var Validator = SimpleVueValidation.Validator
// import VeeValidate from 'vee-validate'
// import Paginate from 'vuejs-paginate'
// require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
// require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
// Vue.component('paginate', Paginate)
// Vue.use(SimpleVueValidation)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
// Vue.use(VeeValidate)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
