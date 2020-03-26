<template>
  <div class="logo-container">
    <ul @mouseover="mouseover" @mouseleave="mouseleave">
      <nuxt-link v-for="logo in logoUrl" :key="logo.id" :to="logo.path" tag="li">
        <a><img :src="logom"> <p><small class="slogan">{{ logo.slogan }}</small></p></a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoUrl: [
        {
          slogan: 'people & silicone',
          path: '/'
        }
      ],
      logom: require('../../assets/img/whitelogo.png')
    }
  },
  methods: {
    mouseover () {
      this.logom = require('../../assets/img/coloredlogo.png')
    },
    mouseleave () {
      this.logom = require('../../assets/img/whitelogo.png')
    }
  }
}
</script>

<style lang="less" scoped>
.logo-container{
  display: inline-block;
  p{
  text-shadow: 0px .4rem .35rem rgba(0, 0, 0, 0.7);
}
}

img{
  width: 6rem;
  height: auto;
}
.slogan{
  letter-spacing: 0.07rem;
  color: white;
  font-size: .6rem;
}
a{
  text-decoration: none;
}
</style>
