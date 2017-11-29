<template>
  <div >
  
   <br>

  <ul>
  <li> <router-link to="/promotiondetails">Promotion Details</router-link> </li>
  <li> <router-link to="/promotionproducts">Products</router-link> </li>
  </ul>
  
 
 <router-view/>
  

  </div>
</template>


<script>
export default {
  name: 'CreatePromotion',
  data: function () {
    return {
      attemptSubmit: false,
      msg: 'Create promotion',
      email: '',
      password: '',
      posts: [],
      postBody: '',
      errors: [],
      post: ''
    }
  }
}
</script>