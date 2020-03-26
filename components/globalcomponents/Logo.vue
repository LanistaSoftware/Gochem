<template>
  <div class="all">
    <div class="logo-container">
      <ul>
        <nuxt-link v-for="logo in logoUrl" :key="logo.id" :to="logo.path" tag="li">
          <a @mouseover="mouseover" @mouseleave="mouseleave">
            <img width="300" :src="logom"><p><small class="slogan">{{ logo.slogan }}</small></p></a>
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
      logom: require('../../assets/img/whitelogo.png')
    }
  },
  methods: {
    mouseover () {
      setTimeout(() => {
        this.logom = require('../../assets/img/coloredlogo.png')
      }, 600)
    },
    mouseleave () {
      setTimeout(() => {
        this.logom = require('../../assets/img/whitelogo.png')
      }, 600)
    }
  }
}
</script>

<style lang="less" scoped>
.all {
  display: flex;
  perspective: 10px;
  transform: perspective(300px) rotateX(20deg);
  will-change: perspective;
  perspective-origin: center center;
  transition: all 1.3s ease-out;
  justify-content: center;
  transform-style: preserve-3d;
}
.all:hover {
  perspective: 1000px;
  transition: all 1.3s ease-in;
  transform: perspective(10000px) rotateX(0deg);
  .text {
    opacity: 1;
  }
  & > div {
    opacity: 1;
    transition-delay: 0s;
  }
  .explainer {
    opacity: 0;
  }
}
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
