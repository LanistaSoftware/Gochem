<template>
  <nav class="mobile-nav">
    <transition
      enter-class=""
      enter-active-class="animated fadeIn"
      leave-class=""
      leave-active-class="animated fadeOut"
      appear
    >
      <ul>
        <nuxt-link v-for="nav in navItems" :key="nav.id" :to="nav.path" tag="li" class="navli">
          <a><i class="naviconshow" :class="nav.icon" /></a>
        </nuxt-link>
      </ul>
    </transition>
  </nav>
</template>
<script >
export default {
  data () {
    return {
      navItems: [{
        label: 'Anasayfa',
        path: '/home',
        icon: 'flaticon-sydney-opera-house'
      },
      {
        label: 'Hakkımızda',
        path: '/about',
        icon: 'flaticon-info'
      },
      {
        label: 'Ürünler',
        path: '/products',
        icon: 'flaticon-product'
      },
      {
        label: 'Sektörler',
        path: '/sectors',
        icon: 'flaticon-support'
      },
      {
        label: 'Belgeler',
        path: '/portfolio',
        icon: 'flaticon-deal'
      },
      {
        label: 'Makaleler',
        path: '/blogs',
        icon: 'flaticon-content'
      },
      {
        label: 'İletişim',
        path: '/contact',
        icon: 'flaticon-mail'
      }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.mobile-nav{
  text-align: center;
  width: 100%;
  background-color: rgba(29, 56, 65,.8);
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
nav,
ul,
li,
a {
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
}

.navli {
  padding: 0 1rem 0 1rem;
}

li a:hover {
  color: lightgreen;

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    color: lightgreen;
  }
}

li:not(:last-child) {
  border-right: 0.01rem solid white;

}
</style>
