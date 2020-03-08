<template>
  <div class="loader-container">
  </div>
</template>


<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .loader-container{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 15em;
    height: 15em;
    margin-top: -6em;
    margin-left: -8em;
    background:url('../assets/images/loader.gif') no-repeat;
  }
</style>
