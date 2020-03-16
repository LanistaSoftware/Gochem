<template>
  <div class="logo-container">
    <!-- <nuxt-link v-for="logo in logoUrl" :key="logo" :to="logo.path" tag="li">
      <a>
        <img :src="logo.imgUrl" :alt="logo.alt">
        <p><small>{{ logo.slogan }}</small></p>
      </a>
    </nuxt-link> -->
    <ul>
      <nuxt-link v-for="logo in logoUrl" :key="logo.id" :to="logo.path" tag="li">
        <a><img src="../../assets/icons/logo.png"> <p><small>{{ logo.slogan }}</small></p></a>
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
      ]
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
  text-shadow: 0px 4px 3.5px rgba(0, 0, 0, 0.7);
}
img{
  width: 92%;
  height: auto;
}
small{
  letter-spacing: 0.07rem;
  color: white;
  font-size: .55rem;
}
</style>
