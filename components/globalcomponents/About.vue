<template>
  <div class="about">
    <div class="about-profile">
      <div class="profile-img">
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
        Lorem ipsum
      </p>
      <div class="imza">
        <h2> {{ aboutUs.ownername }} </h2>
        <img width="100" :src="aboutUs.autograph" alt="">
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
.about{
color:white;
background-color: rgba(0, 0, 0, .01);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(10px);
width: 100%;
height: 70vh;
padding: 2rem;
margin-top: 4rem;
border-radius: 1em;
}

/* Create three equal columns that floats next to each other */
.about-profile {
float: left;
text-align: center;
width: 22%;
height: 100%;
h2 {
font-size: 1.6rem;
padding-top: 1rem;
padding-bottom: 1rem;
}
span {
font-size: 1rem;
padding: 1rem;
}
p {
padding-top: .5rem;
}
.profile-img img {
width: 100%;
border-radius: 10%;
}
}
.about-content {
height: 50rem;
column-count: 2;
-webkit-column-count: 2;
-moz-column-count: 2;
column-rule-style: solid;
-webkit-column-rule-style: solid;
-moz-column-rule-style: solid;
column-rule-width: 1px;
-webkit-column-rule-width: 1px;
-moz-column-rule-width: 1px;
padding: 1rem;
p{

padding-right: 2rem;
padding-left: 2rem;
font: menu;
font-size: 1.06rem;
}
overflow: hidden;
}
.imza{
padding-left: 6rem;
text-align: center;
padding-top: 3rem;
h2{
font-size: 2rem;
}
img{
padding-top: 2rem;
}
}
</style>
