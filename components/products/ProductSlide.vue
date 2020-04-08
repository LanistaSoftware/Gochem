<template>
  <div class="product-responsive-carousel mobile-content-background">
    <carousel
      class="carousel-product"
      :per-page="2.3"
      :navigation-enabled="true"
      :min-swipe-distance="20"
      :navigation-click-target-size="2"
      :pagination-enabled="false"
      :center-mode="true"
    >
      <slide v-for="(slide,index) in 10" :key="index" class="carousel-responsive">
        <div class="slide-content">
          <h2>
            Serkan
          </h2>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: { Carousel, Slide },
  data () {
    return {
      nexticon: '<div class="cl-prev-next"><i class="flaticon-next"></i></div>',
      previcon: '<div class="cl-prev-next"><i class="flaticon-back"></i></div>'
    }
  }
}
</script>
<style lang="less" scoped>
 .product-responsive-carousel{
   width: 100%;
   height: 50%;
   margin-top:2rem;
   border-radius:10px ;
 }
.carousel-product{
   color: white !important;
   text-align: center;
   border: none;
   width: 80%;
   border-radius:10px ;
   font-size: 10px;
}
  .product-sidenav{
    display: none;
  }
  .carousel-responsive:not(:last-child){
    div{
      border-right: 1px solid white;
    }
 }
 .carousel-responsive{
   margin-top: 4.8rem;
 }

</style>
