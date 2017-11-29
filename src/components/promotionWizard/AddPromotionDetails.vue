<template>
  <div>
  <h1>{{msg}}</h1>

<form @submit.prevent="validateBeforeSubmit" novalidate>
  <div class="row">

    <div class="col-md-4 mb-3"  v-bind:class="{ 'has-warning': attemptSubmit && missCustomerRef }">
      <label for="customerRef">Customer Ref#</label>
      <input type="text" class="form-control" id="customerRef" v-model="customerRef" placeholder="Customer Reference no" required>
      <div class="invalid-feedback" v-if="attemptSubmit && missCustomerRef">
        Please provide Customer ref#.
      </div>
    </div>

    <div class="col-md-4 mb-3" v-bind:class="{ 'has-warning': attemptSubmit && missPromotionName }">
      <label for="promotionName">Promotion Name</label>
      <input type="text" class="form-control" id="promotionName" v-model="promotionName" placeholder="Promotion Name" required>
      <div class="invalid-feedback" v-if="attemptSubmit && missPromotionName">
        Please provide a promotion name.
      </div>
    </div>
    <div class="col-md-4 mb-3" v-bind:class="{ 'has-warning': attemptSubmit && missDateRange }">
      <label for="validationCustom05">Default Date Ranges</label>
      <date-picker v-model="dateRange" id="dateRange" placeholder="Click to select the Data range"  lang="en" range :shortcuts="shortcuts" format="yyyy-MM-dd" style="width:100%;" confirm></date-picker>
      <div class="invalid-feedback" v-if="attemptSubmit && missDateRange">
        Please provide the data range.
      </div>
    </div>
  </div>


    <div class="row">
    <div class="col-md-4 mb-3" v-bind:class="{ 'has-warning': attemptSubmit && missRetailerName }">
      <label for="retailerName">Retailer</label>
      <select class="form-control" id="retailerName" v-model="retailerName">
      <option value="">Select Retailer</option>
      <option value="1" v-for="retailerName in retailerNameList" v-bind:value="retailerName.title" >{{ retailerName.title }}</option>
      </select>
      <div class="invalid-feedback"  v-if="attemptSubmit && missRetailerName">
        Please select retailer name.
      </div>
    </div>
    <div class="col-md-8 mb-3" v-bind:class="{ 'has-warning': attemptSubmit && missPromotionDesc }">
      <label for="promotionDescription">Description</label>
      <textarea class="form-control" id="promotionDescription" v-model="promotionDescription" placeholder="Enter notes or description" rows="3"></textarea>
      <div class="invalid-feedback" v-if="attemptSubmit && missPromotionDesc">
        Please provide a valid state.
      </div>
    </div>
  </div>

<div class="float-right"><button class="btn btn-primary" type="submit" v-on:click="validateBeforeSubmit">Next -></button></div>

</form>

  
  </div>
</template>



<script>
import DatePicker from 'vue2-datepicker'
import axios from 'axios'

export default {
  name: 'AddPromotionDetails',
  components: { DatePicker },
  data: function () {
    return {
      msg: 'Promotional details',
      attemptSubmit: false,
      customerRef: '',
      promotionName: '',
      dateRange: '',
      retailerName: '',
      promotionDescription: '',
      retailerNameList: [],
      postBody: '',
      errors: [],
      post: '',
      shortcuts: [
        {
          // text: 'Today',
          start: new Date(),
          end: new Date()
        }
      ]
    }
  },
  computed: {
    missCustomerRef: function () { return this.customerRef === '' },
    missPromotionName: function () { return this.promotionName === '' },
    missDateRange: function () { return this.dateRange === '' },
    missRetailerName: function () { return this.retailerName === '' },
    missPromotionDesc: function () { return this.promotionDescription === '' }
  },
  methods: {
    validateBeforeSubmit: function (event) {
      this.attemptSubmit = true
      if (this.missCustomerRef || this.missPromotionName || this.missDateRange || this.missRetailerName || this.missPromotionDesc) {
        event.preventDefault()
      } else {
        console.log('test...')
        this.attemptSubmit = false
        this.addpromotionDetail()
      }
    },
    addpromotionDetail: function () {
      var promoDetails = { 'customerRef': this.customerRef, 'promotionName': this.promotionName, 'dateRange': this.dateRange, 'retailerName': this.retailerName, 'promotionDescription': this.promotionDescription }
      sessionStorage.setItem('savePromoDetails', JSON.stringify(promoDetails))
      var getPromoDetails = JSON.parse(sessionStorage.savePromoDetails)
      console.log(getPromoDetails)
      // location.href = '#/promotionproducts'
    }
  },
  created () {
    // $("#test1").text("Hello world!");
    // this.checkAuth()
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data)
        this.retailerNameList = response.data
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