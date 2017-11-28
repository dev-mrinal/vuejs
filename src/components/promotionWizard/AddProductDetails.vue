<template>
  <div >
  
  <h1>Products</h1>
  
  </div>
</template>



<script>
export default {
  name: 'AddProductDetails',
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
  }
}
</script>