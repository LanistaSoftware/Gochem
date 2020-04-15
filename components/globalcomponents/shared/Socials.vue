<template>
  <div class="social-container social">
    <ul class="social-network social-circle">
      <Search class="search" />
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
  </div>
</template>
<script>
import Search from '@/components/globalcomponents/shared/Search'
export default {
  components: {
    Search
  },
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
  }
}
</script>
<style lang="less" scoped>
/*=========================
  Icons
 ================= */

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
