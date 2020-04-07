<template>
  <div class="cadfsard">
    <div>
      <Slide />
    </div>
    <Product />
  </div>
</template>
<script>
import Product from '@/components/products/Product'
import Slide from '@/components/products/ProductSlide'

export default {
  components: {
    Product,
    Slide
  }
}
</script>
