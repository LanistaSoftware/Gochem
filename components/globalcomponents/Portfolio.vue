<template>
  <section>
    <Social class="social clearfix" />
    <div class="content content-background overflow-scroll">
      <div class="portfolio">
        <div v-for="item in 27" :key="item" class="portfolio-content">
          <img src="../../assets/img/bg1.jpg" alt="Mountains" style="width:100%">
          <a href="#"><h3>oekotex </h3></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.portfolio,
.portfolio > .portfolio-content {
  padding: 1rem 3rem 0 3rem;
}
.portfolio-content {
  float: left;
  width: 33%;
  img {
      height: 50vh;
      object-fit: cover;
  }
  img:hover{
    z-index:2;
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    -moz-transform: scale(1.01);
    transform: scale(1.01);
    cursor: pointer;
    border: 1px solid lightgreen;
  }
  h3 {
    border: 1px solid darkgray;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding: .5rem 0 .5rem 0;
    text-align: center;
    border-radius: .6rem;
    text-transform: uppercase;
    font-size: 1.5rem;
}
h3:hover{
    color: lightgreen;
    border-color: lightgreen;
}
}

</style>
