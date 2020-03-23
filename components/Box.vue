/* eslint-disable vue/require-default-prop */
<template>
  <div class="box-container">
    <div class="box-border">
      <!--  <div v-for="item in slideSets" :key="item.id" :item="item" class="box-group">
        <div class="box-item">
          <h3>{{ item.page }} / <sup>{{ item.pageTwo }}</sup></h3>
          <p>
            {{ item.content }}
          </p>
          <button class="btn btn-primary" @click="counterShow">
            tıkla
          </button>
          <p>{{ counterGet }}</p>
        </div>
      </div>-->
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    },
    counterGet () {
      return this.$store.getters.getCounter
    },
    counter () {
      return this.$store.dispatch.counter
    }
  },
  methods: {
    counterShow () {
      this.$store.dispatch('counter')
    }
  }
}
</script>
<style scoped>
.box-group{
  max-width: 24%;
  display: inline;
}
 h3{
   color: #fff;
   font-weight: bold;
   text-align: center;
   padding-top: 1rem;
 }
 p{
   font-size: .8rem;
   margin-top: 1vh;
   margin-bottom: .6vh;
 }
 .box-container{
    width: 24%;
    display: block;
    margin: .1rem;
    color: #fff;
    height: 20vh;
    padding: .8vh;
    background-image: linear-gradient(to bottom, rgba(22, 98, 150,.6), rgba(23, 104, 31,.4));
    float: left;
}
 .box-border{
   height: 100%;
   border: 1px solid #fff;
 }
</style>
