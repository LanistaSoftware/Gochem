<template>
  <div class="ref">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(ref, index) in getReferences"
        :key="index"
        :img-src="ref.photo"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      slideSets: []
    }
  },
  computed: {
    getReferences () {
      // eslint-disable-next-line no-console
      console.log(this.$store.getters.getReferences)
      return this.$store.getters.getReferences
    }
  },
  created () {
    this.slideSets = this.getReferences
  }
}
</script>
<style lang="less" scoped>
</style>
