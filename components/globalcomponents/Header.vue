<template>
  <div class="header clearfix">
    <div class="logoItem">
      <Logo />
    </div>
    <div class="rightpanel">
      <div class="navigation">
        <Navigation />
      </div>
      <div class="search">
        <Search />
      </div>
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
 .header{
   width: 100%;
   border-bottom: .1rem solid white;
    padding-top: 1rem;
    vertical-align: middle;
 }
 .rightpanel{
   width: 80%;
   padding-top: 2.5rem;
   display: inline-block;
 }
 .navigation,.logoItem,.search{
   display: inline-block;
 }
 .navigation{
   width: 80%;
 }
 .search{
   width: 10;
   float: right;
   height: 100%;
 }
 .logoItem{
   width: 10%;
   height: 100%;
   float: left;
 }
</style>
