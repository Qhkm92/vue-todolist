<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>


<script>
import TodoItem from './TodoItem'

export default {
    name: 'Todos', //export default Todos so that App can use
    components: {
        TodoItem //children component
    },
    props: ["todos"] //props that was passed from Top level component
}
</script>
