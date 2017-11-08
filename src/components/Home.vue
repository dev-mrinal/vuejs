<template>
  <div class="app-wrapper">
  <div>&nbsp;</div>
  <h1>{{ msg }}</h1>
  <div>Username: mrinal <br /> Password: mrinal</div>
  <div><input type="text" name="username" id="username" v-model="username" placeholder="Type Username" /></div>
  <div><input type="password" name="password" id="password" v-model="password" placeholder="Type Password" /></div>
  <div><button id="createAccount" v-on:click="postPost" >Login</button></div>
  </div>
</template>

<script>
import '../assets/scss/global.scss'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'Home',
  methods: {
    postPost () {
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
  data () {
    return {
      msg: 'Welcome to Promolytics',
      username: '',
      password: '',
      posts: [],
      postBody: '',
      errors: [],
      post: ''
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
