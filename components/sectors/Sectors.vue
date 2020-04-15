<template>
  <section id="sektors">
    <Sliderp />
    <div class="content content-background">
      <section class="sidenav overflow-scroll">
        <div class="sector-link">
          <a v-for="item in getsector" :key="item._id" :href="'#'+item.sectorname" @click="getSectorItem(item._id)">
            {{ item.sectorname }}
          </a>
        </div>
      </section>
      <div class="sector-container">
        <div class="title-sektor">
          <h3>{{ sectoritems.sectorname }}</h3>
        </div>
        <div class="sector-row">
          <SectorAlbum class="skCar" />
        </div>
        <div class="sector-row">
          <p>
            {{ sectoritems.sectordescription }}
          </p>
          <SectorAlbum class="skCar-mobil" />
          <div v-if="sectoropen" class="btn-link-sector">
            <div class="sector-btn">
              <button class="btn">
                <span class="sector-btn-info">
                  Daha fazla bilgi al !
                </span>
              </button>
            </div>
            <div class="sector-btn">
              <button class="btn">
                <span class="sector-btn-info">
                  Uygun ürün bul !
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import SectorAlbum from '@/components/sectors/SectorAlbum'
import Sliderp from '@/components/products/globalSlide.vue'
export default {
  components: {
    SectorAlbum,
    Sliderp
  },
  data () {
    return {
      sector: {
        title: '',
        desc: ''
      },
      sectoropen: false
    }
  },
  computed: {
    ...mapGetters({
      getsector: 'getsector',
      getASector: 'getASector',
      sectoritems: 'sectoritems',
      sectorid: 'sectorid'
    })
  },
  mounted () {
    const id = localStorage.getItem('sectorid')
    if (id !== null || id !== '') {
      this.getSectorItem(id)
      localStorage.removeItem('sectorid')
    }
  },
  created () {
    this.sectorData()
    this.sectoropen = false
    this.$store.commit('setActiveSlide', 'sector')
  },
  methods: {
    ...mapActions({
      sectorData: 'sectorData',
      oneSector: 'oneSector'
    }),
    getSectorItem (id) {
      this.oneSector(id).then(() => {
        this.sectoropen = true
        this.sector.title = this.getASector.sectorname
        this.sector.desc = this.getASector.sectordescription
      })
    }
  }
}
</script>
<style lang="less" scoped>
.sector-link{
  a {
    display: block;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    padding-top: 1rem;
    line-height: 2.5rem;
  }
}
.carousel {
  margin-top:0 !important;
}
.sector-container {
  width: 80%;
  float: left;
  overflow-x: auto;
  height: 100%;
  h3 {
    text-align: center;
  }
  .sector-row {
    margin-top:3rem;
    width: 50%;
    float: left;
    .skCar {
      margin: 3rem 2rem 1rem 1rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.4;
      font-family: Arial;
    }
  }
}

.carousel-sector {
  border: 1px solid;
  height: 50vh;
}

.btn-link-sector {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
   font-family: Georgia;

  .sector-btn {
    width: 50%;
    float: left;

    .btn {
      margin-top: 1.3rem;
      text-align: center;

      .sector-btn-info {
        font-size: 1rem;
        padding: 1rem 0.5rem;
        text-align: center;
        color: white;
        border: 1px solid white;
        border-radius: 1em;
        display: block;
        width: 10rem;
        height: 4rem;
        transition: 0.5s;
      }
    }

    .btn:hover span:hover {
      color: lightgreen;
      border-color: lightgreen;
    }
  }

}
.skCar-mobil{
  display: none;
}
.title-sektor{
  width: 30%;
  margin: auto;
}
</style>
