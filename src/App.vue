<template>
  <div id="app" class="container-fluid">
  
  <header class="row"> 
  <div class="col-sm-2"><img src="./assets/images/logo.jpg" class="img-fluid logo"  /></div>
  <div class="col-sm-10" v-if="['login'].indexOf($route.name) == -1">&nbsp;</div>
  </header>

  <nav v-if="['login'].indexOf($route.name) == -1">
    <router-link to="/home">Home</router-link>
    <router-link to="/createpromotion">Create Promotion</router-link>
  </nav>
  
  <main>
    <router-view/>
  </main>   
  
  <footer class="fixed-bottom">
  <div class="col text-align"> <p class="h6">&copy; Retail Solutions Inc. - All rights reserved.</p> </div>
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
  padding: 10px 0;
}

.fixed-bottom {
  height: 2.5em;
  background: #eee;
}


@media screen and (max-width: 36em) {

   .fixed-bottom {
     position: static !important;
  }

}

</style>