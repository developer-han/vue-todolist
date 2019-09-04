import Vue from 'vue'
import VueRouter from 'vue-router'
// import 'bootstrap/dist/css/bootstrap.css'
import TodoList from './components/TodoList.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
    store,
    render: h => h(TodoList),
}).$mount('#app')