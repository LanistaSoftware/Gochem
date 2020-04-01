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
import Logo from '@/components/globalcomponents/Header/Logo'
import Navigation from '@/components/globalcomponents/Header/Navigation'
import Language from '@/components/globalcomponents/Header/Language'
export default {
  components: {
    Logo,
    Navigation,
    Language
  }
}
</script>
<style scoped>
 .logobox {
   display: inline-block;
   width: 9%;
   vertical-align: middle;
   text-align: center;
 }

 .navigation {
   display: inline-block;
   width: 83.1%;
   vertical-align: middle;
 }

 .search-language {
   display: inline-block;
   width: 7%;
   vertical-align: middle;
   text-align: right;
 }
</style>
