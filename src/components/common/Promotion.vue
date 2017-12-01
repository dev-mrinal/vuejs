<template>
  <div class="app-wrapper">


     <table>
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
          {{ key | capitalize }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData ">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>  

      <tr v-if="['promotionproducts'].indexOf($route.name) != -1">

       <!-- <autocomplete
        url="http://jsonplaceholder.typicode.com/posts"
        v-model="RetailerItemCode"
        anchor="title"
        :onSelect="getData"
        :customParams="{ token: 'dev' }"
        :customHeaders="{ Authorization: 'bearer abc123' }"
        :onShouldRenderChild="renderChild"
        :required="true"
        className="form-control" >
        </autocomplete> -->
  
        <td><autocomplete :suggestions="suggestions" v-model="selection"></autocomplete></td>
        <td><autocomplete :suggestions="suggestions" v-model="selection"></autocomplete></td>  
        <td><autocomplete :suggestions="suggestions" v-model="selection"></autocomplete></td>
        <!-- <td><input type="text" id="stdprice" v-model="stdprice" /></td>
        <td><input type="text" id="promoprice" v-model="promoprice" /></td>
        <td><input type="checkbox" id="display" v-model="display" /></td> -->
        <td><button class="btn btn-primary" type="submit" v-on:click="addProduct">Add Product</button></td>  

      </tr>  

    </tbody>
  </table>


<!-- Pagination -->
<br>

<div>
<span @click="setPage((currentPage + 1) - 1)">Prev</span>
<ul><li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
<a href="javascript:void(0)" @click="setPage(pageNumber)"  :class="{current: currentPage === (pageNumber - 1), last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
    </li></ul>
<span @click="setPage(currentPage + 2)">Next</span>
</div>


</div>
</template>

<script>
import '../../assets/scss/global.scss'
import Autocomplete from '@/components/promotionWizard/Autocomplete'
// import Autocomplete from './components/Autocomplete'
// import Autocomplete from 'vue2-autocomplete-js'
export default {
  name: 'Promotion',
  components: { Autocomplete },
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
    pageItem: Number
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      currentPage: 0,
      itemsPerPage: this.pageItem,
      resultCount: 0,
      RetailerItemCode: '',
      barcode: '',
      productname: '',
      stdprice: '',
      promoprice: '',
      display: '',
      ranged: '',
      anchor: '',
      selection: '',
      suggestions: [
        { RetailerItemCode: '3453453', barcode: '34634634', productname: 'product A' },
        { RetailerItemCode: '3734373', barcode: '4234839', productname: 'product B' },
        { RetailerItemCode: '593264', barcode: '3463434', productname: 'product C' },
        { RetailerItemCode: '23462723', barcode: '473243743', productname: 'product D' },
        { RetailerItemCode: '384328476', barcode: '38472384', productname: 'product E' }
      ]
    }
  },
  computed: {
    totalPages: function () {
      return Math.ceil(this.resultCount / this.itemsPerPage)
    },
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      this.resultCount = data.length
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1
      }
      var index = this.currentPage * this.itemsPerPage
      return data.slice(index, index + this.itemsPerPage)
      // return data
    }
  },
  filters: {
    capitalize: function (str) {
      if (str === 'promotionName') {
        str = 'Promotion name'
      } else if (str === 'clientRef') {
        str = 'Client Ref'
      }
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    setPage: function (pageNumber) {
      console.log(pageNumber)
      if (pageNumber > 0) {
        this.currentPage = pageNumber - 1
        console.log(this.currentPage)
      }
    },
    addProduct: function (event) {
      console.log(this.anchor)
      var newProduct = { 'RetailerItemCode': this.RetailerItemCode, 'barcode': this.barcode, 'productname': this.productname, 'stdprice': this.stdprice, 'promoprice': this.promoprice, 'display': this.display, 'ranged': this.ranged }
      this.data.push(newProduct)
      // document.getElementById('myForm').reset()
      this.RetailerItemCode = ''
      this.barcode = ''
      this.productname = ''
      this.stdprice = ''
      this.promoprice = ''
      this.display = ''
      this.ranged = ''
    },
    getData: function (data) {
      console.log(data.title)
      this.RetailerItemCode = data.title
    },
    renderChild: function (data) {
      return `<span>${data.id}</span> <span>${data.title}</span> <span>${data.body}</span>`
    }
  }
}
</script>

<style lang="scss" scoped>
$main-bg-color: #FFF;
.app-wrapper {
    width: 100%;
    background: $main-bg-color;
}
table {
  border: 2px solid #ddd;
  border-radius: 3px;
  background-color: #fff;
  width: 100%;
}

th {
  background-color: #ddd;
  color: #222;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #222;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #222;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #222;
}

a {
  color: #999;
}
.current {
  color: red;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline;
  margin: 5px 5px;
}

a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}

</style>