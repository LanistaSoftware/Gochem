<template>
  <ul class="social-network social-circle">
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
// [class^="flaticon-search"]:before{
//   font-size: 1.5rem;
// }
</style>
