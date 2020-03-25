<template>
  <div class="logo-container">
    <ul @mouseover="mouseover" @mouseleave="mouseleave">
      <nuxt-link v-for="logo in logoUrl" :key="logo.id" :to="logo.path" tag="li">
        <a><img :src="logom"> <p><small>{{ logo.slogan }}</small></p></a>
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
      logom: require('../../assets/icons/logo.png')
    }
  },
  methods: {
    mouseover () {
      this.logom = require('../../assets/img/logo.png')
    },
    mouseleave () {
      this.logom = require('../../assets/icons/logo.png')
    }
  }
}
</script>

<style scoped>
.logo-container{
  display: inline-block;
}
p{
  margin: -0.60rem 0;
  text-shadow: 0px .4rem .35rem rgba(0, 0, 0, 0.7);
}
img{
  width: 13vmin;
  height: auto;
}
small{
  letter-spacing: 0.07rem;
  color: white;
  font-size: .6rem;
}
a{
  text-decoration: none;
}
</style>
