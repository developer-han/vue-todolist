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
import {mapState} from 'vuex'

export default {
    name: 'List',
    computed: mapState(['todolist']),
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
        deleteTodo: function(payload) {
            this.$store.dispatch(Constant.DELETE_TODO, payload);
        },
        doneToggle: function(payload) {
            this.$store.dispatch(Constant.DONE_TOGGLE, payload);
        }
    }
}
</script>

