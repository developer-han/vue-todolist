<template>
  <div id="todolistapp">
      <div id="header" class="header">
          <div>
          <nav>
              <ul>
                  <li><router-link v-bind:to="{name:'home'}">Home</router-link></li>
                  <li><router-link v-bind:to="{name:'about'}">About</router-link></li>
                  <li><router-link v-bind:to="{name: 'contacts'}">Contacts</router-link></li>
              </ul>
          </nav>
          </div>

          <div class="container">
              <router-view></router-view>
          </div>

          <h2>Todo List App</h2>
          <input-todo></input-todo>
      </div>
      <list></list>
  </div>
</template>

<script type="text/javascript">
import VueRouter from 'vue-router';
import InputTodo from './InputTodo.vue';
import List from './List.vue';
import Home from './Home.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import ContactByNo from './ContactByNo.vue';

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/home', name:'home', component: Home},
        {path: '/about', name: 'about',  component: About},
        {path: '/contacts', name: 'contacts', component: Contact,
            children: [
                {path: ':no', name:'contactbyno', component: ContactByNo }
        ]},
    ]
})

export default {
    name: 'todo-list',
    router,
    components: {InputTodo, List },
    data() {
        return { currentView:'home'}
    },
    methods: {
        changeMenu(view) {
            this.currentView = view;
        }
    }
}
</script>

