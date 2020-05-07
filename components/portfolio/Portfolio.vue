<template>
  <section id="portfolio">
    <div class="content content-background overflow-scroll">
      <div class="portfolio">
        <div v-for="item in gettersDocuments" :key="item._id" class="portfolio-content">
          <img class="radius-1em" :src="safariImage(imgUrl+item.imgUrl)" alt="Buraya belgeler gelecek." style="width:100%">
          <a href="#" @click.prevent="portfolioDetail(item._id)">
            <h3 class="radius-05em">{{ item.name }} </h3>
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
  data () {
    return {
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      gettersDocuments: 'gettersDocuments',
      imgUrl: 'imgUrl',
      getSafari: 'getSafari'
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
</style>
