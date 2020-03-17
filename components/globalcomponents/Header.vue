<template>
  <div class="header">
    <div class="logobox">
      <Logo />
    </div>
    <div class="navigation">
      <Navigation />
    </div>
    <div class="search-language">
      <Language />
    </div>
  </div>
</template>
<script>
import Logo from '@/components/globalcomponents/Logo'
import Navigation from '@/components/globalcomponents/Navigation'
import Language from '@/components/globalcomponents/Language'
export default {
  components: {
    Logo,
    Navigation,
    Language
  }
}
</script>
<style scoped>
 .header {
   display: inline-block;
   width: 100%;
   border-bottom: 0.03rem solid white;
   padding: 1.5vmin 0;
   text-align: center;
   height: 11vmin;
 }

 .logobox {
   display: inline-block;
   width: 9%;
   vertical-align: middle;
   text-align: center;
 }

 .navigation {
   display: inline-block;
   width: 81.1%;
   vertical-align: middle;
 }

 .search-language {
   display: inline-block;
   width: 9%;
   vertical-align: middle;
   text-align: right;
 }
</style>
