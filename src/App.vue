<template>
  <div id="app"> 
    <div v-for="todo in todos">
      <li>{{todo.title}}</li>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'To do one',
          completed: false
        },
        {
          id: 2,
          title: 'To do two',
          completed: true
        },
        {
          id: 3,
          title: 'To do three',
          completed: false
        },
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
