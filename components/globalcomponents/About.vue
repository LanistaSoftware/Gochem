<template>
  <div>
    <div v-for="(ceo,index) in aboutUs" :key="index.id" class="about">
      <div class="about-profile">
        <div class="profile fill">
          <img :src="ceo.ceoImgUrl" alt="">
        </div>
        <h2>{{ ceo.username }}</h2>
        <span>{{ ceo.company }}</span>
        <br>
        <p>{{ ceo.auth }}</p>
      </div>

      <div class="about-left">
        <p>
          {{ ceo.content }}
        </p>
        <div class="imza">
          <h2> {{ ceo.username }} </h2>
          <img width="100" :src="ceo.autograph" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    aboutUs () {
      return this.$store.getters.getAboutUs
    }
  }
}
</script>
<style lang="less" scoped>
*{
  color:white
}

.profile img {
  width: 100%;
}

.fill img {
  object-fit: fill;
}

.about:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 1000px 1000px 1000px #354b50;
    /* -webkit-filter: blur(10px); */
    -webkit-filter: blur(10px);
    filter: blur(20px);
}
.about{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  margin-top: 4rem;
  float: left;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
}
/* Create three equal columns that floats next to each other */
.about-profile {
  float: left;
  text-align: center;
  width: 22%;
  h2{
    font-size: 1.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  span{
    font-size: 1rem;
    padding: 1rem;
  }
  p{
    padding-top: .5rem;
  }
  img {
    border-radius: 10%;
  }
}
.about-left {
 column-count: 2;
 -webkit-column-count: 2;
 -moz-column-count: 2;
 column-rule-style: solid;
 -webkit-column-rule-style: solid;
 -moz-column-rule-style: solid;
 column-rule-width: 1px;
 -webkit-column-rule-width: 1px;
 -moz-column-rule-width: 1px;
 p{
   padding-right: 2rem;
   padding-left: 2rem;
 }
}
.imza{
  padding-top: 3rem;
  float: right;
  img{
    padding-top: 2rem;
  }
}

</style>
