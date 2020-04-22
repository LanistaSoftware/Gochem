<template>
  <div class="s">
    <div id="search-window" class="content-background radius-1em">
      <div class="inputBox">
        <input
          v-if="true"
          v-model="Search.searchitem"
          type="text"
          size="20"
          name="search"
          class="input radius-1em"
          placeholder="Ara"
          @keyup="searchdata"
        >
      </div>
      <div class="result-box">
        <ul v-if="true" class="search-sn">
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
            <a href="/products" v-html="getHeader(item.content)" />
          </span>
        </ul>
      </div>
    </div>
  </div>
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
.s{
    position: relative;
}
#search-window{
    position: absolute;
    width: 100%;
    text-align:center;
    z-index: 1000;
}
input{
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 0.8rem 1rem 1.2rem;
  width: 60%;
  margin: 0.5rem;
  border: none;
  color:white;
  font-size:0.9rem;
  background-color: transparent;
  border: 1px solid white;
}
::placeholder{
  color:white;
  font-size: 1rem;
}
</style>
