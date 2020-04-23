<template>
  <ul class="social-network social-circle">
    <li class="icon-container">
      <a
        title="search"
        @click="changeSearchStatus"
      >
        <i
          class="flaticon-search"
        /></a>
    </li>
    <li v-for="sosyal in social" :key="sosyal.id" class="icon-container">
      <a
        :href="sosyal.href"
        :title="sosyal.title"
      >
        <i
          :class="sosyal.icon"
        /></a>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      social: [
        {
          href: '#',
          title: 'Twitter',
          icon: 'flaticon-twitter'
        },
        {
          href: '#',
          title: 'linkedin',
          icon: 'flaticon-linkedin'
        },
        {
          href: '#',
          title: 'Youtube',
          icon: 'flaticon-youtube-rounded-square-logo'
        }
      ]
    }
  },
  methods: {
    changeSearchStatus () {
      this.$store.commit('setSearchStatus', true)
    }
  }
}
</script>
<style lang="less" scoped>

ul.social-network li {
  display: inline-block;
  vertical-align: middle;
}

ul li {
  cursor: pointer !important;
  padding-left: .6rem;
}
[class^="flaticon-twitter"]:before,[class^="flaticon-linkedin"]:before,[class^="flaticon-youtube"]:before {
  font-size: 1.5rem;
}
[class^="flaticon-search"]:before{
  font-size: 1.5rem;
}
</style>
