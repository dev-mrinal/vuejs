<template>
<div>
<input type="text" v-model="searchKey">
mmmm
<ul>
<li v-for="user in paginate ">
{{ user.name }}
</li>
</ul>

<span @click="setPage(currentPage-1)">Prev</span>

<ul><li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0"><a href="#" @click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ (pageNumber-1)+1 }}</a>
    </li></ul>

<span @click="setPage(currentPage+1)">Next</span>
</div>
</template>


<script>
import '../assets/scss/global.scss'
export default {
  name: 'Contact',
  props: {
    searchKey: String
  },
  data: function () {
    return {
      users: [
            {id: 1, name: 'Tom'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Mrinal'},
            {id: 4, name: 'Tom'},
            {id: 5, name: 'Kate'},
            {id: 6, name: 'Mrinal'}
      ],
      currentPage: 0,
      itemsPerPage: 1,
      resultCount: 0
    }
  },
  computed: {
    totalPages: function () {
      console.log(Math.ceil(this.resultCount / this.itemsPerPage))
      return Math.ceil(this.resultCount / this.itemsPerPage)
    },
    paginate: function () {
     // console.log(this.users)
      this.resultCount = this.users.length
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1
      }
      var index = this.currentPage * this.itemsPerPage
      console.log(index)
      if (index > -1) {
        return this.users.slice(index, index + this.itemsPerPage)
      }
    }
  },
  methods: {
    setPage: function (pageNumber) {
     // console.log(pageNumber)
      this.currentPage = pageNumber
    }
  }
}
</script>

<style lang="scss" scoped>
$main-bg-color: #FFF;
.app-wrapper {
    width: 1024px;
    height: 768px;
    background: $main-bg-color;
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