<template>

<div class="jumbotron" >

      <form @submit.prevent="validateBeforeSubmit">

            <div class="row">
                <div class="col-md-12">
                    <h2>{{ msg | capitalize }}</h2>
                    <hr>
                </div>
            </div>


            <div class="row">
                    <div class="form-group"  v-bind:class="{ 'has-warning': attemptSubmit && missingEmail }">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" id="email" v-model="email" class="form-control"
                                   placeholder="Email" required autofocus>
                    </div>
                    </div>
                  <div class="col-md-12" v-if="attemptSubmit && missingEmail">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fa fa-close"></i> Enter your email
                        </span>
                    </div>
                  </div>  
            </div>


            <div class="row">
                    <div class="form-group" v-bind:class="{ 'has-warning': attemptSubmit && missingPassword }">
                        <label class="sr-only" for="password">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" id="password" v-model="password" class="form-control"
                                   placeholder="Password" required>
                        </div>
                    </div>

                  <div class="col-md-12" v-if="attemptSubmit && missingPassword">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fa fa-close"></i> Enter your password
                        </span>
                    </div>
                  </div>
            </div>
      
      
            <div class="row">
                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label class="form-check-label" style="padding-left: 0;">
                            <input class="form-check-input" name="remember"
                                   type="checkbox" >
                            <span style="padding-bottom: 0.15rem;padding-left: 20px;">Remember me</span>
                        </label>
                    </div>
            </div>
      
      
            <div class="row" style="padding-top: 1rem;margin-left: -27px;">
                <div class="col-md-12">
                    <button type="submit" class="btn btn-success" v-on:click="validateBeforeSubmit"><i class="fa fa-sign-in"></i> Login</button>
                    <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                </div>
            </div>

    </form>        
      
    </div>

</template>


<script>
// import '../assets/scss/global.scss'
import axios from 'axios'
// import _ from 'lodash'
// axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.options.xhr = { withCredentials: true }

export default {
  name: 'Login',
  data: function () {
    return {
      attemptSubmit: false,
      msg: 'Promolytics Login',
      email: '',
      password: '',
      posts: [],
      postBody: '',
      errors: [],
      post: ''
    }
  },
  computed: {
    missingEmail: function () { return this.email === '' },
    missingPassword: function () { return this.password === '' }
  },
  methods: {
    validateBeforeSubmit: function (event) {
      console.log(this.missingName)
      this.attemptSubmit = true
      if (this.missingEmail || this.missingPassword) {
        event.preventDefault()
      } else {
        console.log('test...')
        this.attemptSubmit = false
        this.postPost()
      }
    },
    postPost: function () {
      // console.log('mrinal')
      // this.formSubmitted = true
      axios({
        method: 'post',
        url: 'http://engv2hfssoqa1.eng.rsicorp.local:7901/sso/json/authenticate',
        headers: {
          'X-OpenAM-Username': this.email,
          'X-OpenAM-Password': this.password,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Max-Age': true
        }
      })
    .then(response => {
      // debugger
      console.log(response)
      console.log(response.data.password)
      if (response.data.email === 'mrinal.mondal@retailsolutions.com' && response.data.password === '12345678') {
        console.log('success')
        sessionStorage.email = response.data.email
        sessionStorage.password = response.data.password
        location.href = '#/about'
      } else {
        console.log('xxxx')
        // this.attemptSubmit = true
        // this.missingPassword = false
        if (this.missingEmail || this.missingPassword) {
          event.preventDefault()
        }
        // alert('Enter Email and Password')
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
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
  width: 28.125em;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  background: #EDF0F3;
  border: 1px solid #b3b1b1;
  border-radius: 0.313em;
  box-shadow: 0.188em 0.188em 0.313em #888888;
}

.control.has-icon.has-icon-right .input {
    padding-right: 32px;
}

.input.is-danger, .textarea.is-danger {
    border-color: #ff3860;
}


.mr-sm-2, .mx-sm-2 {
    margin-right: 9.5rem !important;
}


@media screen and (max-width: 36em) {
    .jumbotron {
      position: static !important;
      top: none !important;
      left: none !important;
      transform: none !important;
      width: 100%;
      float: left;
    }

   .fixed-bottom {
     position: static !important;
   }

}
</style>
