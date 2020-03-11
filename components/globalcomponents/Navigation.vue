<template>
  <nav>
    <ul>
      <li v-for="nav in navItems" :key="nav.id">
        <a :href="nav.path">{{ nav.label }}</a>
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
          label: 'Home',
          path: '/home'
        },
        {
          label: 'Hakkımızda',
          path: '/home'
        },
        {
          label: 'Home',
          path: '/home'
        },
        {
          label: 'Home',
          path: '/home'
        },
        {
          label: 'Home',
          path: '/home'
        },
        {
          label: 'Home',
          path: '/home'
        },
        {
          label: 'Home',
          path: '/home'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
ul,li{

  list-style: none;
}

ul{
  display: block;
    width: 100%;
    margin: 0;
}
li{
  display:inline-block;
  padding: .7rem 0;
  a{
    color: #ffffff;
    padding: 0 3.3rem;
  }
}
li:not(:last-child){
    border-right: .1rem solid white;
}
</style>
