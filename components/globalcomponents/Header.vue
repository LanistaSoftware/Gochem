<template>
  <div class="header clearfix">
    <div class="logobox">
      <Logo />
    </div>
    <div class="navigation">
      <Navigation />
    </div>
    <div class="search">
      <Search />
    </div>
  </div>
</template>
<script>
import Logo from '@/components/globalcomponents/Logo'
import Navigation from '@/components/globalcomponents/Navigation'
import Search from '@/components/globalcomponents/Search'
export default {
  components: {
    Logo,
    Navigation,
    Search
  }
}
</script>
<style scoped>
 .header {
   width: 100%;
   border-bottom: 0.05rem solid white;
   padding: 2rem 0;
   vertical-align: middle;
 }
 .logobox {
   float: left;
   width: 15%;
   text-align: center;
 }
 .navigation {
   width: 70%;
   float: left;

 }

 .search {
   width: 15%;
   float: right;
 }
</style>
