<template>
  <div id="app" class="container-fluid">
  
  <header class="row"> 
  <div class="col-sm-2"><img src="./assets/images/logo.jpg" class="img-fluid logo"  /></div>
  <div class="col-sm-10">&nbsp;</div>
  </header>

  <nav v-if="['login'].indexOf($route.name) == -1">
  {{ ['login'].indexOf($route.name) }}
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/promotion">promotion</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  
  <main>
    <router-view/>
  </main>   
  
  <footer class="fixed-bottom">
  <div class="col text-align">@ Retail Solutions Inc. - All rights reserved.</div>
  </footer>
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped >

.logo {
  margin: 22px;
  width: 150px;
}
.text-align {
  text-align: center;
}

</style>
