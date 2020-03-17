<template>
  <nav>
    <ul>
      <nuxt-link v-for="nav in navItems" :key="nav.id" :to="nav.path" tag="li" class="navli">
        <a><i class="naviconshow" :class="nav.icon" /><span class="nav-text">{{ nav.label }}</span></a>
      </nuxt-link>
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
          path: '/',
          icon: 'flaticon-sydney-opera-house'
        },
        {
          label: 'Hakkımızda',
          path: '/',
          icon: 'flaticon-info'
        },
        {
          label: 'Ürünler',
          path: '/products',
          icon: 'flaticon-product'
        },
        {
          label: 'Sektörler',
          path: '/',
          icon: 'flaticon-support'
        },
        {
          label: 'Belgeler',
          path: '/',
          icon: 'flaticon-deal'
        },
        {
          label: 'Makaleler',
          path: '/',
          icon: 'flaticon-content'
        },
        {
          label: 'İletişim',
          path: '/',
          icon: 'flaticon-mail'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
nav,
ul,
li,
a {
  display: inline-block;
  vertical-align: middle;
  font-size: 2vmin;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
}

li a {

  color: white;
  text-align: center;
  text-decoration: none;
}

.navli {
  padding: 0.5rem 1vmin 0.5rem 1vmin;
}

/* Change the link color to #111 (black) on hover */
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
  border-right: 0.5px solid white;

}

[class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
  color: white;
  margin-left: 0px;
  margin-right: 0.5rem;
}
</style>
