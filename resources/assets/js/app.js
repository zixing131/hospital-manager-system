
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueEvents from 'vue-events'

Vue.use(VueEvents);

// 引入font-awesome
import 'font-awesome/css/font-awesome.min.css'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('department-component', require('./components/Departments/DepartmentComponent.vue'));
Vue.component('department-tree', require('./components/Departments/DepartmentTree.vue'));
Vue.component('department-model', require('./components/Departments/DepartmentModel.vue'));
Vue.component('department-lists', require('./components/Departments/DepartmentLists.vue'));
Vue.component('department-users', require('./components/Departments/DepartmentUsers.vue'));
Vue.component('my-detail-row', require('./components/Departments/DetailRow.vue'));
Vue.component('filter-bar', require('./components/Departments/FilterBar.vue'));
Vue.component('pagination', require('laravel-vue-pagination'));


const app = new Vue({
    el: '#app'
});
