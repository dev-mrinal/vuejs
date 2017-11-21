<template>
 <!-- <div>
  <h1>{{ msg | capitalize }}</h1>
  <div><input type="text" name="username" id="username" v-model="username" placeholder="Type Username" /></div>
  <div><input type="password" name="password" id="password" v-model="password" placeholder="Type Password" /></div>
  <div><button id="createAccount" v-on:click="postPost" >Login</button></div>
  <div><label><input type="checkbox" value=""> Remember Me. </label></div>
</div> -->


<div class="jumbotron"  >

            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>Please Login</h2>
                    <hr>
                </div>
            </div>



            <div class="row">
                    
                    <div class="form-group has-danger">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" class="form-control" id="email"
                                   placeholder="you@example.com" required autofocus>
                    </div>
                    </div>


                  <div class="col-md-12">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fa fa-close"></i> Example error message
                        </span>
                    </div>
                  </div>
            </div>



            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only" for="password">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="Password" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                        <!-- Put password error message here -->    
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" style="padding-top: .35rem">
                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label class="form-check-label">
                            <input class="form-check-input" name="remember"
                                   type="checkbox" >
                            <span style="padding-bottom: .15rem">Remember me</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 1rem">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-success"><i class="fa fa-sign-in"></i> Login</button>
                    <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                </div>
            </div>
        </div>

</template>

<script>
// import '../assets/scss/global.scss'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'Login',
  methods: {
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
      msg: 'welcome to promolytics',
      username: '',
      password: '',
      posts: [],
      postBody: '',
      errors: [],
      post: ''
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
  color: #FFF;
  border: 1px solid #c1c1c1;
  padding: 10px;
  font-size: 1.2em;
  margin-bottom: 5px;
  border-radius: 3px;
  background: #007aff;
}

.jumbotron {
  width: 450px;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 1px dashed deeppink;
}
</style>
