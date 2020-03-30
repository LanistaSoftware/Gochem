<template>
  <div>
    <div class="about">
      <div class="about-profile">
        <div class="profile fill">
          <img :src="aboutUs.profileImg" alt="">
        </div>
        <h2>{{ aboutUs.ownername }}</h2>
        <span>{{ aboutUs.company }}</span>
        <br>
        <p>{{ aboutUs.title }}</p>
      </div>
      <div class="about-content">
        <p>
          {{ aboutUs.content }}
        </p>
        <div class="imza">
          <h2> {{ aboutUs.ownername }} </h2>
          <img width="120" :src="aboutUs.autograph" alt="">
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
  color:white;
}

.profile img {
  width: 100%;
}

.fill img {
  object-fit: fill;
}

.about{
  width: 100%;
  height:70vh;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  margin-top: 5rem;
  font-family: Arial, sans-serif;
}
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
    font-size: 1rem;
  }
  img {
    border-radius: 10%;
  }
}
.about-content {
 column-count: 2;
 -webkit-column-count: 2;
 -moz-column-count: 2;
 column-rule-style: solid;
 -webkit-column-rule-style: solid;
 -moz-column-rule-style: solid;
 column-rule-width: 1px;
 -webkit-column-rule-width: 1px;
 -moz-column-rule-width: 1px;
 column-rule: 1px solid #fff;
 column-gap: 4rem;
 p{
   font-size:.9rem ;
   line-height: 1.4rem;
 }
}
.imza{
  padding-top: 3rem;
  float: right;
  img{
    padding-top: 1.2rem;
  }
  h2{
    font-size: 1.6rem;
  }
}
</style>
