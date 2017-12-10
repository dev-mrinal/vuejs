
<template>
  <div>
  <!--<b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" /> -->
  <img src="../assets/images/bg.jpg" class="img-fluid" />
  <h1>{{ msg | capitalize }}</h1>
  <div><input type="text" name="username" id="username" v-model="username" placeholder="Type Username" /></div>
  <div><input type="password" name="password" id="password" v-model="password" placeholder="Type Password" /></div>
  <div><button id="createAccount" v-on:click="postPost" >Login</button></div>
  <div>{{count}} - {{counts}}</div>
  <div><button v-on:click="increment">Increment</button></div>
  <div><button v-on:click="increments">Increments</button></div>
</div>
</template>


<script>
import '../assets/scss/global.scss'
import axios from 'axios'
import _ from 'lodash'
import store from './store/store'

export default {
  name: 'Home',
  methods: {
    increment: function () {
      return store.commit('increment')
    },
    increments: function () {
      return store.commit('increments')
    },
    postPost: function () {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        username: this.username,
        password: this.password,
        body: this.postBody
      })
    .then(response => {
      console.log(response.data.username)
      console.log(response.data.password)
      if (response.data.username === 'mrinal' && response.data.password === 'mrinal') {
        console.log('success')
        sessionStorage.username = response.data.username
        sessionStorage.password = response.data.password
        location.href = '#/about'
      } else {
        alert('Enter Username and Password')
      }
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
  data: function () {
    return {
      msg: '',
      username: '',
      password: '',
      posts: [],
      postBody: '',
      errors: [],
      post: ''
    }
  },
  computed: {
    counts: function () {
      return store.state.home.count
    },
    count: function () {
      return store.state.login.count
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$main-bg-color: #FFF;
.app-wrapper {
    width: 1024px;
    height: 768px;
    background: $main-bg-color;
}
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
  margin-bottom: 5px;
  border-radius: 3px;
}
</style>
