<template>
    <ul id="todolist">
        <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle(a.id)">
            <span>{{a.todo}}</span>
            <span v-if="a.done">(완료)</span>
            <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span>
        </li>
    </ul>
</template>

<script type="text/javascript">
import Constant from '../Constant'

export default {
    name: 'List',
    computed: {
        todolist() {
            return this.$store.state.todolist;
        }
    },
    methods: {
        checked: function(done) {
            if (done) {
                return {
                    checked:true
                };
            } else {
                return {
                    checked:false
                };
            }
        },
        doneToggle: function(id) {
            this.$store.commit(Constant.DONE_TOGGLE, {id:id});
        },
        deleteTodo: function(id) {
            this.$store.commit(Constant.DELETE_TODO, {id:id});
        }
    }
}
</script>

