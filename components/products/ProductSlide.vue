<template>
  <div class="product-responsive-carousel">
    <carousel
      class="carousel-product"
      :per-page-custom="[[200, 2.5], [1024, 3]]"
      :navigation-enabled="true"
      :navigation-next-label="nexticon"
      :navigation-prev-label="previcon"
      :navigation-click-target-size="2"
      :pagination-enabled="false"
    >
      <slide v-for="(slide,index) in 5" :key="index" class="carousel-responsive">
        Slide 1 Content
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
   background-color:rgba(0, 0, 0, 0.2);
 }
.carousel-product{
   margin-left: 18rem;
   margin-right: 30rem !important;
   color: white !important;
   border: none;
   text-align: center;
   height: 9rem;
   width: 50%;
   border-radius:10px ;
   font-size: 10px;
}
  .product-sidenav{
    display: none;
  }
  .carousel-responsive:not(:last-child){
    border-right: 1px solid white;
 }
 .carousel-responsive{
   margin-top: 3rem;
 }

</style>
