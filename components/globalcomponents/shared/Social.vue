<template>
  <ul class="social-network social-circle">
    <li class="icon-container">
      <Search />
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
import Search from '@/components/globalcomponents/shared/Search'
export default {
  components: {
    Search
  },
  data () {
    return {
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
  padding: 0.4rem;
}

ul li {
  cursor: pointer !important;
  padding-left: .6rem;
}
[class^="flaticon-twitter"]:before,[class^="flaticon-linkedin"]:before,[class^="flaticon-youtube"]:before {
  font-size: 1.5rem;
  transition: 0.5s;
}
</style>
