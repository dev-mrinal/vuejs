<template>
  <div >
  

  <h1>Promotion Details</h1>


 <input type="text" placeholder="">

  <input type="text" placeholder="">

   <input type="text" placeholder=""> 

   <br><br>

    <input type="text" placeholder="">

    <input type="text" placeholder="">

  
  </div>
</template>



<script>
export default {
  name: 'AddPromotionDetails',
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