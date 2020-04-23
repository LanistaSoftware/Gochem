<template>
  <div
    class="product-responsive-carousel radius-2em mobile-content-background"
  >
    <no-ssr>
      <carousel
        class="carousel-product radius-2em"
        :per-page="3"
        :min-swipe-distance="20"
        name="global-slide"
        :navigation-click-target-size="2"
        :pagination-enabled="false"
        :center-mode="true"
        :loop="true"
        :navigation-prev-label="previcon"
        :navigation-next-label="nexticon"
      >
        <slider v-for=" item in activeMenu" :key="item._id" class="carousel-responsive">
          <div class="slide-content">
            <h2>
              <a v-if="sectorshow" href="#" @click="oneSector(item._id)">
                {{ item.sectorname }}
              </a>
              <a v-else href="#" @click="getAproduct(item._id)">
                {{ item.prdoudctName }}
              </a>
            </h2>
          </div>
        </slider>
        <!-- <slider v-for=" item in getProductDb" v-show="!sectorshow" :key="item.id" class="carousel-responsive">
          <div class="slide-content">
            <h2>
              <a :href="'#'+item.prdoudctGroup" @click="getOneProduct(item._id)">
                {{ item.prdoudctName }}
              </a>
            </h2>
          </div>
        </slider> -->
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
      previcon: '<i class="flaticon-back"></i>',
      activeMenu: []
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
      this.sectorshow = true
      this.sectorData().then(() => {
        this.activeMenu = this.getsector
      })
    } else {
      this.sectorshow = false
      this.getProducts().then(() => {
        this.activeMenu = this.getProductDb
        this.activeMenu.push({ prdoudctName: 'pigmentler', _id: 4 })
      })
    }
  },
  methods: {
    ...mapActions({
      oneSector: 'oneSector',
      sectorData: 'sectorData',
      getProducts: 'getProducts',
      getOneProduct: 'getOneProduct'
    }),
    getAproduct (id) {
      if (id === 4) {
        this.$store.commit('setpigmentShow', true)
      } else {
        this.$store.commit('setpigmentShow', false)
        this.getOneProduct(id)
      }
    }
  }

}

</script>
<style lang="less" scoped>
  .product-responsive-carousel {
    width: 100%;
    margin-top: 5.8rem;
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
