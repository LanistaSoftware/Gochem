<template>
  <li class="icon-container first-li" @mouseover="show=true" @mouseleave="show=false">
    <div class="search-input radius-2em">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <input
          v-if="show"
          v-model="Search.searchitem"
          type="text"
          size="20"
          @keyup="searchdata"
        >
      </transition>
      <i class="flaticon-search" i />
      <ul v-if="show" class="search-sn">
        <li v-for="item in products" :key="item._id">
          <a href="/products" @click="oneProductItem(item._id)">
            Ürün- {{ item.prdoudctName }}
          </a>
        </li>
        <li v-for="item in sectors" :key="item._id">
          <a href="/sectors" @click="oneSectoritem(item._id)">
            Sektör- {{ item.sectorname }}
          </a>
        </li>
        <li v-for="item in pigments" :key="item._id">
          <a href="/products">
            Pigment- {{ item.prdoudctName }}
          </a>
        </li>
        <span v-for="item in blogs" :key="item._id">
          <a :href="'/blogs/'+item._id" v-html="getHeader(item.content)" />
        </span>
      </ul>
    </div>
  </li>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      products: {},
      sectors: {},
      pigments: {},
      blogs: {},
      Search: { searchitem: '' },
      show: false
    }
  },
  computed: {
    ...mapGetters({
      getSearchItem: 'getSearchItem'
    })
  },
  methods: {
    ...mapActions({
      search: 'search'
    }),
    oneSectoritem (id) {
      localStorage.setItem('sectorid', id)
    },
    oneProductItem (id) {
      localStorage.setItem('productid', id)
    },
    getHeader (item, index) {
      let headerTag = ''
      let firstIndex = null
      let lastIndex = null
      firstIndex = item.search('<h')
      item = item.slice(firstIndex)
      firstIndex = 0
      lastIndex = item.search('</' + item.slice(firstIndex + 1, 3) + '>') + 5
      headerTag = item.slice(firstIndex, lastIndex)
      if (headerTag.search('<img') !== -1) {
        headerTag = '<p>Bu makalede başlık bulunamadı.</p>'
        return headerTag
      } else if (lastIndex === -1 || firstIndex === -1) {
        alert('Başlık bulunamadı.')
        headerTag = '<p>Bu makalede başlık bulunamadı.</p>'
        return headerTag
      } else {
        return 'Bu makalede aradığınız kelime mevcut' + headerTag
      }
    },
    searchdata () {
      if (this.Search.searchitem.length >= 2) {
        this.search(this.Search).then(() => {
          if (this.getSearchItem.sectordetail) {
            this.sectors = this.getSearchItem.sectordetail
          }
          if (this.getSearchItem.proddetail) {
            this.products = this.getSearchItem.proddetail
          }
          if (this.getSearchItem.pigmentdetail) {
            this.pigments = this.getSearchItem.pigmentdetail
          }
          if (this.getSearchItem.blogdetail) {
            this.blogs = this.getSearchItem.blogdetail
          }
        })
      } else {
        this.sectors = null
        this.products = null
        this.pigments = null
        this.blogs = null
      }
    }
  }
}
</script>
<style lang="less" scoped>
.search-results{
  text-align: left;
  li{
    margin-top: 0.7rem;
  }
}
.navli {
  position: relative;
  float:left;
}

.icon-container {
  padding: 0.5rem 0.5rem;
  display: inline-block;
  background-color: transparent;
  vertical-align: middle;
  z-index: 1;

  .search-input{
  padding: 1.2rem 0.5rem 0.9rem 1rem;
  transition: 1.3s;
  a{
    color: red;
  }
  }

  [class^="flaticon-search"]:hover:before {
    color: lightgreen;
  }

  input {
    color: white;
    border: none;
    background: transparent;
    vertical-align: middle;
    z-index: 1000;
  }
}

.search-input:hover {
  background-color: rgba(144, 238, 144, 0.3);
}

.first-li{
  position: relative;
  left: 0.6rem;
}
.search-result{
  position: relative;
  top: 5px;
}
</style>
