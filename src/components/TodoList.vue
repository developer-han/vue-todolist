<template>
  <div id="todolistapp">
      <div id="header" class="header">
          <div>
          <nav>
              <ul>
                  <li>
                      <a href="#" @click="changeMenu('home')">Home</a>
                  </li>
                  <li>
                      <a href="#" @click="changeMenu('about')">About</a>
                  </li>
                  <li>
                      <a href="#" @click="changeMenu('contact')">Contact</a>
                  </li>
              </ul>
          </nav>
          </div>

          <div>
              <keep-alive include="about, home">
              <component v-bind:is="currentView"></component>
              </keep-alive>
          </div>

          <h2>Todo List App</h2>
          <input-todo></input-todo>
      </div>
      <list></list>
  </div>
</template>

<script type="text/javascript">
import InputTodo from './InputTodo.vue';
import List from './List.vue';
import Home from './Home.vue';
import About from './About.vue';
import Contact from './Contact.vue';

export default {
    name: 'todo-list',
    components: {InputTodo, List, Home, About, Contact },
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

