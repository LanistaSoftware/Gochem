<template>
  <nav>
    <ul>
      <li v-for="nav in navItems" :key="nav.id">
        <a :href="nav.path"><i class="naviconshow" :class="nav.icon" />{{ nav.label }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      navItems: [
        {
          label: 'Anasayfa',
          path: '/home',
          icon: 'flaticon-sydney-opera-house'
        },
        {
          label: 'Hakkımızda',
          path: '/home',
          icon: 'flaticon-info'
        },
        {
          label: 'Ürünler',
          path: '/home',
          icon: 'flaticon-product'
        },
        {
          label: 'Sektörler',
          path: '/home',
          icon: 'flaticon-support'
        },
        {
          label: 'Belgeler',
          path: '/home',
          icon: 'flaticon-deal'
        },
        {
          label: 'Makaleler',
          path: '/home',
          icon: 'flaticon-content'
        },
        {
          label: 'İletişim',
          path: '/home',
          icon: 'flaticon-mail'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
nav, ul, li, a{
  display: inline-block;
  vertical-align: middle;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
}

li a {
  font-size: 1.1rem;
  color: white;
  text-align: center;
  padding: .5rem .8rem;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
color: darkred;
 [class^="flaticon-"]:before{
color: darkred;
  }
}

li:not(:last-child) {
  border-right: 0.5px solid white;
}
[class^="flaticon-"]:before{

    font-size: 1.1rem;
    padding-right: .2rem;
    font-style:normal;
    margin-left: 0;
    color: white;
}
</style>
