<template>
  <section id="blogs">
    <div class="content content-background overflow-scroll">
      <div class="blogs">
        <div v-for="item in 9" :key="item" class="blogs-content">
          <img src="../../assets/img/bg1.jpg" alt="Buraya belgeler gelecek." style="width:100%">
          <a href="#"><h3>Slikon Nedir ? </h3></a>
          <h2>{{ tarih }} </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      tarih: new Date().getUTCDay() + ' / ' + new Date().getUTCMonth() + ' / ' + new Date().getUTCFullYear()
    }
  }
}
</script>
<style lang="less" scoped>
.blogs,
.blogs > .blogs-content {
  padding: 1rem 3rem 0 3rem;
  margin-bottom: 2rem;
}
.blogs-content {
  float: left;
  width: 33%;
  img {
      height: 50vh;
      object-fit: cover;
      border-radius: 0.5em;
  }
  h3{
    cursor: pointer;
  }
  h3,h2 {
    border: 1px solid white;
    margin-top: 1rem;
    padding: .5rem 0;
    text-align: center;
    border-radius: 0.3em;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  h3:hover{
    color: lightgreen;
    border-color: lightgreen;
  }
}

</style>
