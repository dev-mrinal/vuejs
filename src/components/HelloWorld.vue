<template>
  <div class="">
  <h1>{{ msg }}</h1>
<button @click="throttledMethod()">Click me as fast as you can!</button>
  <input type="text" v-model="post" v-on:change="postPost()"/>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>

  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul> 
  <div><input type="text" name="username" id="username" v-model="username" placeholder="Type Username" /></div>
  <div><input type="password" name="password" id="password" v-model="password" placeholder="Type Password" /></div>
  <button id="createAccount" v-on:click="greet" >Create Account</button>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'HelloWorld',
  methods: {
    greet: function (event) {
      alert('Username: ' + this.username + ' Password: ' + this.password)
    },
    postPost () {
      axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        body: this.postBody
      })
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (postPost() becomes async postPost())
    //
    // try {
    //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    //     body: this.postBody
    //   })
    // } catch (e) {
    //   this.errors.push(e)
    // }
    },
    throttledMethod: _.debounce(() => {
      console.log('I get fired every two seconds!')
    }, 2000)
  },
  data () {
    return {
      msg: 'Welcome to RSI INDIA',
      username: '',
      password: '',
      posts: [],
      postBody: '',
      errors: [],
      post: ''
    }
  },
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #787878;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #787878;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #787878;
}
:-moz-placeholder { /* Firefox 18- */
  color: #787878;
}
input {
  border: 1px solid #c1c1c1;
  padding: 10px;
  font-size: 1.2em;
  width: 50%;
  margin-bottom: 5px;
  border-radius: 3px;
}
button {
  border: 1px solid #c1c1c1;
  padding: 10px;
  font-size: 1.2em;
  width: 50%;
  margin-bottom: 5px;
  border-radius: 3px;
}
</style>
