/* eslint-disable eqeqeq */
<template>
  <div id="blogs-detail" class="blogs-detail content-background  overflow-scroll content">
    <div class="blogs-html" v-html="gettersBlog" />
    <div class="button-container radius-2em clearfix">
      <div class="box box-left ">
        <button class="btn" @click="prevBlog()">
          Önceki <i class="flaticon-left-arrow" />
        </button>
      </div>
      <div class="box box-center">
        <button class="btn" @click="doneBlogs()">
          Makaleler <i class="flaticon-up-arrow" />
        </button>
      </div>
      <div class="box box-right">
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
      newIndex: 0
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
      this.$store.commit('setBlog', '')
      this.gettersBlogs.forEach((element, index) => {
        if (element._id === this.activeBlogId) {
          this.newIndex = index + 1
          if (this.newIndex === this.gettersBlogs.length) {
            this.newIndex = 0
          }
          this.$route.params.blogid = this.gettersBlogs[this.newIndex]._id
          this.$router.push(this.$route.params.blogid)
        }
      })
    },
    prevBlog () {
      this.$store.commit('setBlog', '')
      this.gettersBlogs.forEach((element, index) => {
        if (element._id === this.activeBlogId) {
          this.newIndex = index - 1
          if (this.newIndex === -1) {
            this.newIndex = this.gettersBlogs.length - 1
          }
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
