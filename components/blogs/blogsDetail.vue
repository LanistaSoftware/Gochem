/* eslint-disable eqeqeq */
<template>
  <div id="blogs-detail" class="blogs-detail content-background  overflow-scroll content">
    <div class="blogs-html" v-html="gettersBlog" />
    <div class="button-container clearfix">
      <div class="box-left ">
        <button class="btn" @click="prevBlog()">
          Önceki <i class="flaticon-left-arrow" />
        </button>
      </div>
      <div class="box-center">
        <button class="btn" @click="doneBlogs()">
          Makaleler <i class="flaticon-up-arrow" />
        </button>
      </div>
      <div class="box-right">
        <button class="btn" :disabled="disablebtn" @click="nextBlog()">
          Sonraki <i class="flaticon-next" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      disablebtn: false,
      activeBlogId: null,
      newIndex: null
    }
  },
  computed: {
    ...mapGetters({
      gettersBlog: 'gettersBlog',
      gettersBlogs: 'gettersBlogs'
    })
  },
  created () {
    if (this.gettersBlog === '') {
      this.getBlogs()
    }
    this.getBlog(this.$route.params.blogid)
    this.activeBlogId = this.$route.params.blogid
  },
  methods: {
    ...mapActions({
      getBlogs: 'getBlogs',
      getBlog: 'getBlog'
    }),
    doneBlogs () {
      this.$router.push('/blogs')
    },
    nextBlog () {
      this.gettersBlogs.forEach((element, index) => {
        if (element._id === this.activeBlogId) {
          // eslint-disable-next-line eqeqeq
          if (index == this.gettersBlogs.length) {
            console.log(index)
            this.newIndex = 0
          }
          this.newIndex = index + 1
          this.$route.params.blogid = this.gettersBlogs[this.newIndex]._id
          this.$router.push(this.$route.params.blogid)
        }
      })
    },
    prevBlog () {
      this.gettersBlogs.forEach((element, index) => {
        if (element._id === this.activeBlogId) {
          if (index === this.gettersBlogs.length) {
            this.newIndex = this.gettersBlogs.length
          }
          this.newIndex = index - 1
          this.$route.params.blogid = this.gettersBlogs[this.newIndex]._id
          this.$router.push(this.$route.params.blogid)
        }
      })
    }

  }
}
</script>
<style lang="less" scoped>
.blogs-detail{
  width: 100%;
  height: 100%;
}
.button-container {
  width: 100%;
  display: flex;

  .box-left,.box-right,.box-center {
    width: 33%;
    display: inline-block;

  }
  .box-center{
    text-align: center;
  }
  .box-right{
    text-align: right;
  }
  .btn {
    display: inline-block;
    font-size: 0.8rem;
    text-align: center;
    color: white;
    border: 1px solid white;
    border-radius: 1em;
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
