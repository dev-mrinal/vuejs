<template>
 <div class="app-wrapper">
    <h1>{{ msg }}</h1>
<div>Welcome Mrinal <a href="#" v-on:click="logout" >Logout</a></div>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul> 

  </div>
</template>

<script>
import '../assets/scss/global.scss'
import axios from 'axios'
export default {
  name: 'About',
  methods: {
    checkAuth: function () {
      console.log(sessionStorage.username)
      if (sessionStorage.username === undefined && sessionStorage.password === undefined) {
        console.log('test')
        location.href = '#/'
      }
    },
    logout: function (event) {
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('password')
      location.href = '#/'
    }
  },
  data () {
    return {
      msg: 'Welcome to Aboutus page',
      posts: [],
      errors: [],
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]

    }
  },
  created () {
    this.checkAuth()
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
  }
  // Pushes posts to the server when called.
}
</script>


<style lang="scss" scoped>
$main-bg-color: #FFF;
.app-wrapper {
    width: 1024px;
    background: $main-bg-color;
}
</style>