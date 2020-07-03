<template>
  <section id="portfolio">
    <div class="content content-background overflow-scroll">
      <div class="portfolio">
        <div v-for="item in gettersDocuments" :key="item._id" class="portfolio-content">
          <div class="portfolio-title">
            <h4>{{ item.name }} </h4>
          </div>
          <div v-if="call && activeid ===item._id" class="call">
            <div>
              <p>
                Belgeyi talep etmek için
                <br>
                bizi arayabilirsiniz
              </p>
              <a :href="'tel:'+getInfo.telephone" style="margin-top:0.5rem">
                <p>
                  <i class="flaticon-phone" />

                  {{ getInfo.telephone | formatNumber }}
                </p>
              </a>
            </div>
          </div>
          <picture v-if="activeid !== item._id">
            <source :srcset="imgUrl+item.imgUrl+'.webp'" type="image/webp">
            <source :srcset="imgUrl+item.imgUrl" type="image/jpeg">
            <img class="radius-1em" alt="Buraya belgeler gelecek." style="width:100%">
          </picture>
          <a v-if="activeid !==item._id" href="#" @click.prevent="talepClick(item._id)">
            <h3 class="radius-05em">Talep Et</h3>
          </a>
          <a v-if="call && activeid ==item._id" href="#" @click.prevent="call=!call ,activeid=null">
            <h3 class="radius-05em">Geri</h3>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  filters: {
    formatNumber (value) {
      if (!value) { return '' }
      const x = new Intl.NumberFormat().format(value)
      const res = x.replace('.', ' ')
      const res2 = res.replace('.', ' ')
      return res2
    }
  },
  data () {
    return {
      menu: false,
      activeid: null,
      call: false
    }
  },
  computed: {
    ...mapGetters({
      gettersDocuments: 'gettersDocuments',
      imgUrl: 'imgUrl',
      getSafari: 'getSafari',
      getInfo: 'getInfo'
    })
  },
  created () {
    // this.getDocuments()
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.document.body.addEventListener('contextmenu', function (e) {
        e.preventDefault()
      }, false)
    }
  },
  methods: {
    ...mapActions({
      getDocuments: 'getDocuments'
    }),
    talepClick (id) {
      if (this.activeid !== null) {
        this.activeid = null
        this.activeid = id
        this.call = true
        return true
      }
      this.activeid = id
      this.call = !this.call
    },
    safariImage (item) {
      if (this.getSafari) {
        return item
      } else {
        return item + '.webp'
      }
    },
    portfolioDetail (id) {
      this.$route.params.portfolioid = id
      this.$router.push('portfolio/' + this.$route.params.portfolioid)
    }
  }
}
</script>
<style lang="less" scoped>
.portfolio,
.portfolio>.portfolio-content {
  padding: 1rem 3rem 0 3rem;
}

.portfolio-document {
  margin-top: 2rem;
  height: 95vh;
}

.portfolio-content {
  float: left;
  width: 33%;

  img {
    height: 50vh;
    -o-object-fit: cover;
    object-fit: cover;
  }

  img:hover {
    z-index: 2;
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
    cursor: pointer;
    border: 1px solid white;
  }

  h3 {
    border: 1px solid white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding: .5rem 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  h3:hover {
    color: lightgreen;
    border-color: lightgreen;
  }
}

.call {
  display: flex !important;
  justify-content: center !important;
  text-align: center;
  height: 50vh!important;
  p {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding: .5rem 0;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1rem;
  }
}
.portfolio-detail {
  width: 100%;
  height: 100%;
}

.button-container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  .box-left,
  .box-right,
  .box-center {
    width: 33%;
    display: inline-block;

  }

  .box-center {
    text-align: center;
  }

  .box-right {
    text-align: right;
  }

  .btn {
    display: inline-block;
    font-size: 0.8rem;
    text-align: center;
    color: white;
    border: 1px solid white;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
}
.portfolio-title{
  display: flex;
  justify-content: center;
  margin-bottom:0.8rem;
  font-size: 1rem;
}
.btn:hover {
  color: lightgreen;
  border-color: lightgreen;

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    color: lightgreen;
  }
}
.call{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  border-radius:1em ;
  z-index: 2;
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
    cursor: pointer;
    border: 1px solid white;
  h3{
    padding: 1rem;
  }
}
</style>
