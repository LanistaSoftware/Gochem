<template>
  <div class="all">
    <div class="logo-container">
      <ul>
        <nuxt-link v-for="logo in logoUrl" :key="logo.id" :to="logo.path" tag="li">
          <a @mouseover="mouseover" @mouseleave="mouseleave">
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <img v-show="showColor" width="300" :src="logom">
            </transition>
            <p><small class="slogan">{{ logo.slogan }}</small></p></a>
        </nuxt-link>
      </ul>
    </div>
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
      logom: require('../../assets/img/whitelogo.png'),
      showColor: true
    }
  },
  methods: {
    mouseover () {
      this.showColor = false
      setTimeout(() => {
        this.showColor = true
        this.logom = require('../../assets/img/coloredlogo.png')
      }, 700)
    },
    mouseleave () {
      this.showColor = false
      setTimeout(() => {
        this.showColor = true
        this.logom = require('../../assets/img/whitelogo.png')
      }, 700)
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
