<template>
  <div class="s">
    <div id="search-window" class="content-background radius-1em">
      <div class="input-box">
        <input
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
        <ul class="search-results-lists">
          <li class="search-result-section">
            <h4 v-if="products.length>0">
              Ürünler sayfasından sonuçlar.
            </h4>
            <ul>
              <li v-for="item in products" :key="item._id" class="search-result-list">
                <a href="/products" @click="oneProductItem(item._id)">
                  {{ item.prdoudctName }}
                </a>
              </li>
            </ul>
          </li>
          <li class="search-result-section">
            <h4 v-if="sectors.length>0">
              Sektörler sayfasından sonuçlar.
            </h4>
            <ul>
              <li v-for="item in sectors" :key="item._id" class="search-result-list">
                <a href="/sectors" @click="oneSectoritem(item._id)">
                  {{ item.sectorname }}
                </a>
              </li>
            </ul>
          </li>
          <li class="search-result-section">
            <h4 v-if="pigments.length>0">
              Pigmentler sayfasından sonuçlar.
            </h4>
            <ul>
              <li v-for="item in pigments" :key="item._id" class="search-result-list">
                <a href="/products " @click="pigmentShow(item._id)">
                  {{ item.prdoudctName }}
                </a>
              </li>
            </ul>
          </li>
          <li class="search-result-section">
            <h4 v-if="blogs.length>0">
              Makalaler sayfasından sonuçlar.
            </h4>
            <ul>
              <li v-for="item in blogs" :key="item._id" class="search-result-list">
                <a class="blog-results" :href="'/blogs/'+item._id" v-html="getHeader(item.content)" />
              </li>
            </ul>
          </li>
          <li class="search-result-section">
            <h4 v-if="documents.length>0">
              Belgeler sayfasından sonuçlar.
            </h4>
            <ul>
              <li v-for="item in documents" :key="item._id" class="search-result-list">
                <a :href="'/portfolio/' + item._id">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="btn-icon-container">
        <a @click="changeSearchStatus">
          <i class="flaticon-up-arrow" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      products: [],
      sectors: [],
      pigments: [],
      blogs: [],
      documents: [],
      Search: {
        searchitem: ''
      }
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
    pigmentShow (id) {
      localStorage.setItem('pigmentid', id)
    },
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
        return headerTag
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
          if (this.getSearchItem.documentdetail) {
            this.documents = this.getSearchItem.documentdetail
          }
        })
      } else {
        this.sectors = []
        this.products = []
        this.pigments = []
        this.blogs = []
        this.documents = []
      }
    },
    changeSearchStatus () {
      this.$store.commit('setSearchStatus', false)
      this.Search.searchitem = ''
    }
  }
}
</script>
<style lang="less" scoped>
.s {
  position: relative;
}

#search-window {
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 1000;
}

input {
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 0.8rem 1rem 1.2rem;
  width: 60%;
  margin-top: 1.8rem;
  border: none;
  color: white;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid white;
}

::-webkit-input-placeholder {
  color: white;
  font-size: 1rem;
}

::-moz-placeholder {
  color: white;
  font-size: 1rem;
}

:-ms-input-placeholder {
  color: white;
  font-size: 1rem;
}

::-ms-input-placeholder {
  color: white;
  font-size: 1rem;
}

::placeholder {
  color: white;
  font-size: 1rem;
}

.search-results-lists {
  display: inline-block;
  width: 60%;
  text-align: left;
  padding: 0 1rem 1rem 1rem;

  .search-result-section {
    margin: 0.5rem 0;
    color: white;

    .search-result-list {
      margin: 1rem 1rem 0 1rem;

      a {
        font-size: 1.2rem;
      }
    }
  }
}

.btn-icon-container {
  padding: 1rem;

  a {
    font-size: 1.5rem;

  }
}
</style>
