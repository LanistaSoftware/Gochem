<template>
  <div id="portfolioDetail" class="portfolio-detail content-background  overflow-scroll content">
    <div class="portfolio-document">
      <img id="getdocument" name="getdocument" class="radius-05em" :src="imgUrl + gettersDocument.imgUrl" alt="portfolio detay">
    </div>
    <div class="button-container radius-2em clearfix">
      <div class="box box-left ">
        <button class="btn radius-05em" name="prev-portfolio" @click="prevDocument">
          Önceki <i class="flaticon-left-arrow" />
        </button>
      </div>
      <div class="box box-center">
        <button class="btn radius-05em" name="list-portfolio" @click="doneDocument">
          Belgeler <i class="flaticon-up-arrow" />
        </button>
      </div>
      <div class="box box-right">
        <button class="btn radius-05em" name="next-portfolio" @click="nextDocument">
          Sonraki <i class="flaticon-next" />
        </button>
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
      newIndex: 0,
      activeDocumentId: ''
    }
  },
  plugins: [{
    src: '~/plugins/both-sides.js'
  },
  {
    src: '~/plugins/client-only.js',
    mode: 'client'
  },
  {
    src: '~/plugins/server-only.js',
    mode: 'server'
  }
  ],
  computed: {
    ...mapGetters({
      gettersDocument: 'gettersDocument',
      gettersDocuments: 'gettersDocuments',
      gettersFileurl: 'gettersFileurl',
      imgUrl: 'imgUrl'
    })
  },
  created () {
    if (this.gettersDocument === '') {
      this.getDocuments()
    }
    this.activeDocumentId = this.$route.params.portfolioid
    this.getDocument(this.$route.params.portfolioid)
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.document.body.addEventListener('contextmenu', function (e) {
        e.preventDefault()
      }, false)
    }
  },
  methods: {
    ...mapActions({
      getDocument: 'getDocument',
      getDocuments: 'getDocuments'
    }),
    doneDocument () {
      this.$router.push('/portfolio')
    },
    nextDocument () {
      this.gettersDocuments.forEach((element, index) => {
        if (element._id === this.activeDocumentId) {
          this.newIndex = index + 1
          if (this.newIndex === this.gettersDocuments.length) {
            this.newIndex = 0
          }
          this.$route.params.portfolioid = this.gettersDocuments[this.newIndex]._id
          this.$router.push(this.$route.params.portfolioid)
        }
      })
    },
    prevDocument () {
      this.gettersDocuments.forEach((element, index) => {
        if (element._id === this.activeDocumentId) {
          this.newIndex = index - 1
          if (this.newIndex === -1) {
            this.newIndex = this.gettersDocuments.length - 1
          }
          this.$route.params.portfolioid = this.gettersDocuments[this.newIndex]._id
          this.$router.push(this.$route.params.portfolioid)
        }
      })
    }
  }
}
</script>
