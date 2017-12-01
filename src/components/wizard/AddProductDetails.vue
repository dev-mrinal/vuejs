<template>
  <div>
  
  <h1>{{msg}}</h1>



<promotion  
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"
    :page-item="itemsPerPage" >
</promotion>


<!-- 
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
-->
  
  </div>
</template>



<script>
import Promotion from '@/components/promotionList/Promotion'
import axios from 'axios'
export default {
  name: 'AddProductDetails',
  components: {
    'promotion': Promotion
  },
  data: function () {
    return {
      msg: 'Products',
      itemsPerPage: 10,
      searchQuery: '',
      gridColumns: ['RetailerItemCode', 'barcode', 'productname', 'ranged'],
      gridData: [
            { RetailerItemCode: '324324', barcode: '2323', productname: 'Product A', ranged: '856 Stores' },
            { RetailerItemCode: '433435', barcode: '2323', productname: 'Product B', ranged: '856 Stores' },
            { RetailerItemCode: '3426432', barcode: '2323', productname: 'Product C', ranged: '856 Stores' },
            { RetailerItemCode: '34324323', barcode: '2323', productname: 'Product D', ranged: '856 Stores' },
            { RetailerItemCode: '3463243', barcode: '2323', productname: 'Product E', ranged: '856 Stores' },
            { RetailerItemCode: '346328432', barcode: '2323', productname: 'Product F', ranged: '856 Stores' }
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
  methods: {},
  created () {
    // $("#test1").text("Hello world!");
    // this.checkAuth()
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
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.invalid-feedback {
  display: block;
}

</style>