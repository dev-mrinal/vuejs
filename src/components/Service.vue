<template>
  <div class="app-wrapper">
  <h1>  Service </h1>

  <ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>

  </div>
</template>

<script>
import '../assets/scss/global.scss'
export default {
  name: 'Service',
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

<style lang="scss" scoped>
$main-bg-color: #FFF;
.app-wrapper {
    width: 1024px;
    height: 768px;
    background: $main-bg-color;
}
</style>