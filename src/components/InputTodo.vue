<template>
    <div>
        <input class="input" type="text" id="task" v-model.trim="todo" placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo">
        <span class="addbutton" v-on:click="addTodo">추가</span>
    </div>
</template>

<script type="text/javascript">
import Constant from '../Constant'

export default {
    name: 'input-todo',
    data: function() {
        return {
            todo: ''
        }
    },
    methods: {
        addTodo: function() {
            this.$store.dispatch(Constant.ADD_TODO, {todo: this.todo});
            this.todo='';
        }
    }
}

</script>