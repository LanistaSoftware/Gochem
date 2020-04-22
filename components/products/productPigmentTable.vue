<template>
  <div id="pigment">
    <b-table
      hover
      striped
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :total-rows="8"
      :per-page="perPage"
      responsive="sm"
      class="pigment-table"
    >
      <template v-slot:cell(color)="data">
        <p :style="{color:data.item.color}">
          {{ data.item.color }}
        </p>
      </template>
    </b-table>
    <div class="button-container">
      <button class="btn" @click="prevPigment()">
        <i class="flaticon-back" />
      </button>
      <button class="btn" @click="nextPigment()">
        <i class="flaticon-chevron" />
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      productone: {
        name: 'name',
        desc: 'desc',
        category: 'category'
      },
      currentPage: 1,
      perPage: 6,
      sortBy: 'age',
      maxPage: '',
      sortDesc: false,
      fields: [
        { key: 'prdoudctName', sortable: true },
        { key: 'color', sortable: false },
        { key: 'migrationFastness', sortable: true },
        { key: 'heatFastness', sortable: true },
        { key: 'lightFastness', sortable: true }
      ],
      items: []
    }
  },
  computed: {
    ...mapGetters({
      gettersPigments: 'gettersPigments'
    })
  },
  created () {
    this.getPigments().then(() => {
      this.items = this.gettersPigments
      this.maxPage = Math.ceil(this.gettersPigments.length / this.perPage)
    })
  },
  methods: {
    ...mapActions({
      getPigments: 'getPigments'
    }),
    nextPigment () {
      if (this.currentPage <= this.maxPage) {
        this.currentPage += 1
      }
      if (this.currentPage > this.maxPage) {
        this.currentPage = 1
      }
    },
    prevPigment () {
      if (this.currentPage <= this.maxPage) {
        this.currentPage -= 1
      }
      if (this.currentPage === 0) {
        this.currentPage = this.maxPage
      }
    }
  }
}
</script>
<style lang="less" scoped>
#pigment{
.button-container{
  width: 100%;
  text-align: center;
}
}
</style>
