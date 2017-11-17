<template>
  <div id="app" class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/promotion">promotion</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
