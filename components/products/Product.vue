<template>
  <div class="carousel-content">
    <div v-for="slide in slideSets" :key="slide.id" class="carousel-items">
      <h4> <strong> 03/ </strong>  <sup> 03 </sup></h4>
      <h2>{{ slide.header }}</h2>
      <p class="content">
        {{ slide.content }}
      </p>
      <small>dede </small>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    }
  }
}
</script>
<style lang="less" scoped>
  .carousel-content{
    background-color: black;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
  }
  .carousel-items{
    padding: 3vh;
    color: #fff;
  }
  .carousel-content h4{
    font-size: 2rem;
    font-weight: bolder;
    padding-bottom: 1.2vh;
    font-family: 'Headland One', serif;
  }
  .carousel-content h2{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5.2rem;
    font-weight: bold;
    padding-bottom: 1vh;
  }
  .carousel-content p{
    font-family: Arial, Helvetica, sans-serif;
    font-size:1rem;
    font-weight: bold;
    text-align-last:inherit;
    caret-color: lawngreen;
  }
</style>
