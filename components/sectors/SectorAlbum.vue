<template>
  <b-carousel id="carousel-1" v-model="slide" fade :interval="4000">
    <b-carousel-slide v-for="item in getterGalery" :key="item._id">
      <template v-slot:img>
        <div class="img-sector-container">
          <img class="img-fluid radius-1em" :src="imgUrl+item.imgUrl" alt="image slot">
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>
<script >
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapGetters({
      getterGalery: 'getterGalery',
      imgUrl: 'imgUrl'
    })
  },
  created () {
    this.getGalery()
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    ...mapActions({
      getGalery: 'getGalery'
    })
  }
}
</script>
<style lang="less" scoped>
.img-fluid {
  height: 100%;
  width: auto;
}

.img-sector-container {
  width: 30rem;
  height: 30rem;
}
</style>
