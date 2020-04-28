<template>
  <section id="blogs">
    <div class="content content-background">
      <div class="content-blog">
        <div class="blogs content-blog overflow-scroll">
          <div v-for="item in gettersBlogs" :key="item._id" class="blogs-content">
            <div class="img-tag" alt="Buraya belgeler gelecek." v-html="getImage(item.content)" />
            <a href="#" @click.prevent="doneBlog(item._id)"><div v-html="getHeader(item.content)" /></a>
            <h2>{{ getDate(item.date) }} </h2>
          </div>
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
      tarih: new Date().getUTCDay() + ' / ' + new Date().getUTCMonth() + ' / ' + new Date().getUTCFullYear(),
      blogData: ''
    }
  },
  computed: {
    ...mapGetters({
      gettersBlogs: 'gettersBlogs',
      imgUrl: 'imgUrl'
    })
  },
  created () {
    this.getBlogs()
  },
  methods: {
    ...mapActions({
      getBlogs: 'getBlogs'
    }),
    doneBlog (id) {
      this.$route.params.blogid = id
      this.$router.push('blogs/' + this.$route.params.blogid)
    },
    getDate (item) {
      const date = item.split('T')[0]
      return date
    },
    getImage (item) {
      let imgUrl = ''
      let firstIndex = null
      let lastIndex = null
      firstIndex = item.search('<img ')
      item = item.slice(firstIndex)
      lastIndex = item.search('">')
      imgUrl = item.slice(0, lastIndex + 2)
      if (lastIndex === -1 || firstIndex === -1) {
        imgUrl = '<img src="https://via.placeholder.com/300x200" alt="Tanımsız blog fotoğrafı."><br><small>Bu makalede fotoğraf bulunamadı</small>'
        return imgUrl
      } else {
        return imgUrl
      }
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
        headerTag = '<h2>Bu makalede başlık bulunamadı.</h2>'
        return headerTag
      } else if (lastIndex === -1 || firstIndex === -1) {
        alert('Başlık bulunamadı.')
        headerTag = '<h2>Bu makalede başlık bulunamadı.</h2>'
        return headerTag
      } else {
        return headerTag
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content-blog{
  height: 100%;
  padding: 1rem;
}
.blogs,
.blogs>.blogs-content {
  padding: 1rem 3rem 0 3rem;
  margin-bottom: 2rem;
}
.blogs{
  overflow-y: auto;
}
.blogs-html {
  margin-top: 2rem;
}
.blogs-content {
  float: left;
  width: 33%;

  img {
    height: 50vh;
    object-fit: cover;
  }

  h3 {
    cursor: pointer;
  }
  h3,
  h2 {
    border: 1px solid white;
    margin-top: 1rem;
    padding: .5rem 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  h3:hover {
    color: lightgreen;
    border-color: lightgreen;
  }
}

.blogs-detail {
  width: 100%;
  height: 100%;
}

.button-container {
  width: 100%;
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
