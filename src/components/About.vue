<template>
 <div class="app-wrapper">
  <!--  <h1>{{ msg }}</h1> -->
<div>Welcome Mrinal <a href="#" v-on:click="logout" >Logout</a></div>
  <!-- <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul> -->

<!-- <div>
  <b-alert show variant="primary">Primary Alert</b-alert>
  <b-alert show variant="secondary">Secondary Alert</b-alert>
  <b-alert show variant="success">Success Alert</b-alert>
  <b-alert show variant="danger">Danger Alert</b-alert>
  <b-alert show variant="warning">Warning Alert</b-alert>
  <b-alert show variant="info">Info Alert</b-alert>
  <b-alert show variant="light">Light Alert</b-alert>
  <b-alert show variant="dark">Dark Alert</b-alert>
</div> -->

<br>
<div>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
</div>
<br>
<promotion  
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery" >
</promotion>




  </div>
</template>

<script>
import Promotion from '@/components/Promotion'
import '../assets/scss/global.scss'
import axios from 'axios'
export default {
  name: 'About',
  components: {
    'promotion': Promotion
  },
  methods: {
    checkAuth: function () {
      // console.log(sessionStorage.username)
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
  data: function () {
    return {
      msg: 'Promotional List',
      searchQuery: '',
      gridColumns: ['id', 'promotionName', 'clientRef', 'retailer', 'products', 'startDate', 'endDate', 'status'],
      gridData: [
            { id: '1', promotionName: 'promotion A', clientRef: '2323', retailer: 'Cocacola', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '2', promotionName: 'promotion B', clientRef: '75574', retailer: 'Wallmart', products: 'Product B', startDate: '22-12-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '3', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '4', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '5', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '6', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '7', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '8', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '9', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '10', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '11', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '12', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' },
            { id: '13', promotionName: 'promotion C', clientRef: '6767', retailer: 'P&G', products: 'Product A', startDate: '22-10-2017', endDate: '22-12-2017', status: 'Retailer Forcast' }
      ],
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
    width: 100%;
    background: $main-bg-color;
}
</style>