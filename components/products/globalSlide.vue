<template>
  <div class="product-responsive-carousel mobile-content-background">
    <no-ssr>
      <carousel
        class="carousel-product radius-2em"
        :per-page="2.5"
        :navigation-enabled="true"
        :min-swipe-distance="20"
        name="global-slide"
        :navigation-click-target-size="2"
        :pagination-enabled="false"
        :center-mode="true"
        :loop="true"
      >
        <slider v-for=" item in getsector" v-show="sectorshow" :key="item.id" class="carousel-responsive">
          <div class="slide-content">
            <h2>
              <a href="#" @click="oneSector(item._id)">
                {{ item.sectorname }}
              </a>
            </h2>
          </div>
        </slider>
        <slider v-for=" item in getProductDb" v-show="!sectorshow" :key="item.id" class="carousel-responsive">
          <div class="slide-content">
            <h2>
              <a :href="'#'+item.prdoudctGroup" @click="getOneProduct(item._id)">
                {{ item.prdoudctName }}
              </a>
            </h2>
          </div>
        </slider>
      </carousel>
    </no-ssr>
  </div>
</template>
<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import slider from 'vue-carousel/src/Slide.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Carousel,
    slider
  },
  data () {
    return {
      i: '',
      sectorshow: false,
      activeproduct: '',
      nexticon: '<i class="flaticon-next"></i>',
      previcon: '<i class="flaticon-back"></i>'
    }
  },
  computed: {
    ...mapGetters({
      activeslide: 'activeslide',
      getsector: 'getsector',
      getProductDb: 'getProductDb'
    })
  },
  mounted () {
    if (this.activeslide === 'sector') {
      this.sectorData()
      this.sectorshow = true
    } else {
      this.sectorshow = false
    }
  },
  methods: {
    ...mapActions({
      oneSector: 'oneSector',
      sectorData: 'sectorData',
      getOneProduct: 'getOneProduct'
    })
  }

}

</script>
<style lang="less" scoped>
  .product-responsive-carousel {
    width: 100%;
    margin-top: 2rem;
  }
  .carousel-product {
    color: white !important;
    text-align: center;
    border: none;
    width:100%;
    font-size: 1rem;
  }
  .carousel-responsive:not(:last-child) {
    div {
      border-right: 1px solid white;
    }
  }
  .carousel-responsive {
    margin-top: 2.8rem;
  }
  .activeproduct{
    color: red;
  }

</style>
