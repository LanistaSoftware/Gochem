<template>
  <li class="icon-container first-li" @mouseover="show=true" @mouseleave="show=false">
    <div class="search-input">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <input
          v-if="show"
          v-model="Search.searchitem"
          type="text"
          size="20"
          height="48"
          @keyup="searchdata"
        >
      </transition>
      <i class="flaticon-search" i />
      <div>
        <span v-for="item in products" :key="item._id">
          <a href="/products">
            {{ item.prdoudctName }}
          </a>
        </span>
        <span v-for="item in sectors" :key="item._id">
          <a href="/sectors">
            {{ item.sectorname }}
          </a>
        </span>
        <span v-for="item in pigments" :key="item._id">
          <a href="/products">
            {{ item.prdoudctName }}
          </a>
        </span>
      </div>
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
        })
      } else {
        this.sectors = null
        this.products = null
        this.pigments = null
      }
    }
  }
}
</script>
<style lang="less" scoped>

.icon-container {
  padding: 0.5rem 0.5rem;
  display: inline-block;
  background-color: transparent;
  vertical-align: middle;

  .search-input{
  padding: 0.9rem 0.5rem 0.9rem 1rem;
  border-radius: 3em;
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
