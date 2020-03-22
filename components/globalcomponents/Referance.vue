<template>
  <div class="ref">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="ref in referans"
        :key="ref"
        :img-src="ref.photo"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    referans: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      slides: 0,
      sliding: null
    }
  }
}
</script>
<style lang="less" scoped>
</style>
