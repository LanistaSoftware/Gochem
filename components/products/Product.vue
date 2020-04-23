<template>
  <section id="product" class="clearfix">
    <productSlide />
    <div class="content clearfix content-background mobile-content-background">
      <div v-if="!getpigmentShow" id="rescat" class="responsive-category">
        <h2>{{ getProductone.prdoudctGroup }}</h2>
      </div>
      <section class="sidenav product-sidenav overflow-scroll">
        <div class="product-category">
          <h2 @click="setpigmentShow(true)">
            Slikon Pigment
          </h2>
        </div>
        <div v-for="item in getsector" :key="item.id" class="product-category">
          <h2>{{ item.sectorname }}</h2>
          <span v-for="product in getProductdb" :key="product._id">
            <a v-if="item.sectorname==product.prdoudctGroup" :href="'#'+product.prdoudctName " @click="getAproduct(product._id)">{{ product.prdoudctName }}</a>
          </span>
        </div>
      </section>
      <div class="product-container">
        <div class="product-content">
          <div v-if="!getpigmentShow" class="products-section">
            <h2>{{ getProductone.prdoudctName }}</h2>
            <p>
              {{ getProductone.productMoreDesc }}
            </p>
          </div>
          <div v-if="getpigmentShow" class="pigments-section">
            <pigment-table />
          </div>
        </div>
        <div class="product-link">
          <div class="product-btn">
            <button class="btn">
              <i class="flaticon-product" />
              <span class="product-btn-info radius-1em">
                <a href="/contact#form-container"> Online sipariş çok yakında.</a>
              </span>
            </button>
          </div>
          <div class="product-btn">
            <button class="btn">
              <i class="flaticon-customer-service" />
              <span class="product-btn-info radius-1em">
                <a href="/contact#form-container">Hemen teklif alın.</a>
              </span>
            </button>
          </div>
          <div class="product-btn">
            <button class="btn">
              <i class="flaticon-question" />
              <span class="product-btn-info radius-1em">
                <a href="/contact#form-container"> Daha fazla bilgi alın.</a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import pigmentTable from './productPigmentTable.vue'
import productSlide from '@/components/globalcomponents/shared/MobileSliderNavigation.vue'
export default {
  components: {
    productSlide,
    pigmentTable
  },
  data () {
    return {
      defaultProduct: '',
      productone: {
        name: 'name',
        desc: 'desc',
        category: 'category'
      },
      pigmentShow: false
    }
  },
  computed: {
    ...mapGetters({
      getsector: 'getsector',
      getProductdb: 'getProductDb',
      getProductone: 'getProductone',
      getpigmentShow: 'getpigmentShow'
    })
  },
  created () {
    this.$store.commit('setActiveSlide', 'product')
    this.getProducts().then(() => {
      this.defaultProduct = this.getProductdb[0]._id
      localStorage.setItem('productid', this.defaultProduct)
    })
    this.sectorData()
  },
  mounted () {
    const id = localStorage.getItem('productid')
    if (id !== null) {
      this.getOneProduct(id)
      localStorage.removeItem('productid')
    }
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
      sectorData: 'sectorData',
      getOneProduct: 'getOneProduct'
    }),
    ...mapMutations({
      setpigmentShow: 'setpigmentShow'
    }),
    getAproduct (id) {
      this.pigmentShow = false
      this.setpigmentShow(false)
      this.getOneProduct(id).then(() => {
        this.productone.name = this.getProductone.prdoudctName
        this.productone.desc = this.getProductone.productMoreDesc
        this.productone.category = this.getProductone.prdoudctGroup
      })
    }
  }
}
</script>
<style lang="less" scoped>
.sidenav {
  padding: 3rem;
  h1 {
    padding-bottom: 1.1rem;
    font-size: 1.8rem;
  }

  .product-category {
    h2 {
      padding: 1rem;
      font-size: 1.5rem;
    }

  }

  a {
    padding: .3rem .3rem .3rem 1rem;
    display: block;
  }

}

.responsive-category {
  text-align: center;
  display: none;
}

.product-container {
  width: 80%;
  float: left;
  height: 100%;
  text-align: left;
  padding: 1.5rem 3rem;

  .product-content {
    overflow-x: auto;
    height: 72%;
    h2 {
      font-size: 2rem;
      padding-bottom: 1rem;

    }

    p {
      text-indent: 3rem;
      font: menu;
      font-size: 1.06rem;
    }
  }

  .product-link {
    width: 100%;
    text-align: center;
    //margin-top: 1rem;

    .product-btn {
      width: 33%;
      float: left;

      .btn {
        margin-top: .6rem;
        text-align: center;

        .product-btn-info {
          font-size: .6rem;
          padding: .5rem 2rem;
          text-align: center;
          color: white;
          border: 1px solid white;
          display: block;
          width: 10rem;
          height: 2.7rem;
          transition: 0.5s;
        }
      }
    }

  }
}

</style>
