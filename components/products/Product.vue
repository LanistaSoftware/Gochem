<template>
  <section id="product">
    <productSlide />
    <div class="content clearfix content-background mobile-content-background">
      <div id="rescat" class="responsive-category">
        <h2>Responsive Category</h2>
      </div>
      <section class="sidenav product-sidenav overflow-scroll">
        <div class="product-category">
          <h2> Slikon Pigment</h2>
        </div>
        <div class="product-category">
          <h2> RTV 1</h2>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
        </div>
        <!-- <div class="product-category">
          <h2> RTV 2</h2>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
        </div>
        <div class="product-category">
          <h2> LSR </h2>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
        </div> -->
      </section>
      <div class="product-container">
        <div class="product-content">
          <h2>SS 9852</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur
            repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque,
            sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem
            dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error
            repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime
            necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit
            eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis
            dicta atque quos?
          </p>
        </div>
        <div class="product-link">
          <div class="product-btn">
            <button class="btn">
              <i class="flaticon-product" />
              <span class="product-btn-info">
                Online sipariş çok yakında.
              </span>
            </button>
          </div>
          <div class="product-btn">
            <button class="btn">
              <i class="flaticon-customer-service" />
              <span class="product-btn-info">
                Hemen teklif alın.
              </span>
            </button>
          </div>
          <div class="product-btn">
            <button class="btn">
              <i class="flaticon-question" />
              <span class="product-btn-info">
                Daha fazla bilgi alın.
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
import productSlide from '@/components/products/globalSlide.vue'
export default {
  components: {
    productSlide
  },
  computed: {
    getProduct () {
      return this.$store.getters.getProducts
    }
  },
  created () {
    this.$store.commit('setActiveSlide', 'product')
    this.getProducts()
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts'
    })
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
.responsive-category{
  text-align: center;
  display: none;
}

.product-container {
  width: 80%;
  float: left;
  text-align: left;
  padding: 2rem 5rem;

  .product-content {
    h2 {
      font-size: 2rem;
      padding-bottom: 2rem;

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
    margin-top: 1rem;

    .product-btn {
      width: 33%;
      float: left;

      .btn {
        margin-top: 1.2rem;
        text-align: center;

        [class^="flaticon-"]:before,
        [class*=" flaticon-"]:before,
        [class^="flaticon-"]:after,
        [class*=" flaticon-"]:after {
          font-size: 3.5rem;
          transition: 0.5s;
        }

        .product-btn-info {
          font-size: 1rem;
          padding: 0.8rem 3.7rem;
          text-align: center;
          color: white;
          border: 1px solid white;
          border-radius: 1em;
          display: block;
          width: 14rem;
          transition: 0.5s;
        }
      }

      .btn:hover {

        [class^="flaticon-"]:before,
        [class*=" flaticon-"]:before,
        [class^="flaticon-"]:after,
        [class*=" flaticon-"]:after {
          color: lightgreen;
        }

        .product-btn-info {
          color: lightgreen;
          border-color: lightgreen;
        }

      }
    }

  }
}

</style>
