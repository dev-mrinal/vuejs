<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      msg: 'Welcome to Aboutus page',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]

    }
  }
}
</script>