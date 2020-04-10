<template>
  <div class="product-responsive-carousel mobile-content-background">
    <no-ssr>
      <carousel
        class="carousel-product"
        :per-page="2.5"
        :navigation-enabled="true"
        :min-swipe-distance="20"
        :navigation-click-target-size="2"
        :pagination-enabled="false"
        :center-mode="true"
        :class="active"
      >
        <slide v-for="(slide,index) in 10" :key="index" class="carousel-responsive">
          <div class="slide-content">
            <h2>
              <a href="#">
                Serkan
              </a>
            </h2>
          </div>
        </slide>
      </carousel>
    </no-ssr>
  </div>
</template>
<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      i: '',
      activeproduct: '',
      nexticon: '<i class="flaticon-next"></i>',
      previcon: '<i class="flaticon-back"></i>'
    }
  }
}

</script>
<style lang="less" scoped>
//  .product-responsive-carousel{
//    width: 100%;
//    height: 50%;
//    margin-top:2rem;
//    padding-right:2rem;
//    border-radius:10px ;
//  }
// .carousel-product{
//    color: white !important;
//    text-align: center;
//    border: none;
//    width: 80%;
//    padding: .2rem 0 0 0;
//    border-radius:10px ;
//    margin: 2rem 0 0 6rem;
//     font-size: 2rem;
// }
//   .product-sidenav{
//     display: none;
//   }

//   .carousel-product {
//     color: white !important;
//     text-align: center;
//     border: none;
//     width:100%;
//     border-radius: 2em;
//     font-size: 1rem;
//   }

//   .carousel-responsive:not(:last-child) {
//     div {
//       border-right: 1px solid white;
//     }
//   }

//   .carousel-responsive {
//     margin-top: 2.8rem;
//   }
//   .activeproduct{
//     color: red;
//   }
  .product-responsive-carousel {
    width: 100%;
    margin-top: 2rem;
  }
  .carousel-product {
    color: white !important;
    text-align: center;
    border: none;
    width:100%;
    border-radius: 2em;
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
