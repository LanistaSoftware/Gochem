
<template>
  <div class="bg" :class="bgImageUrl">
    <div class="bg-container">
      <Header />
      <nuxt />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header'
// import Social from '@/components/globalcomponents/Social'
import Footer from '@/components/globalcomponents/Footer'
// import Carousel from '@/components/globalcomponents/Carousel'
// import Box from '@/components/Box'
export default {
  components: {
    Header,
    // Social,
    Footer
    // Carousel,
    // Box
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1'
    }
  }
}
</script>
<style lang="less">

.bgUrl1 {
  background: url(../assets/img/bg1.jpg);
}

.bgUrl2 {
  background: url(../assets/img/bg2.jpg);
}

.bgUrl3 {
  background: url(../assets/img/bg3.jpg);
}

.bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  width: 100%;
}

.bg-container {
  width: 90%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.social {
  padding-top: 1rem;
  text-align: right;
}

.boxes {
  width: 80%;
  margin: auto;
  margin-top: 5vh;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
[class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
  font-size: 2.5vmin;
  cursor: pointer;
}
input {
outline: none;
}
@media (min-width: 0px) {
  html{
    font-size: 8px;
  }
    .bg-container {
    width: 100%;

  }
  .naviconshow {
    display: inline !important;
  }

  .nav-text {
    display: none !important;
  }
.navli{
  padding: 0.5rem 1.3rem 0.5rem 1.3rem !important;
}
 .navigation {
   width: 80.1% !important;
 }
 .search-language {
   width: 10% !important;
 }
}
@media (min-width: 576px) {
    html{
    font-size: 9px;
  }
    .bg-container {
    width: 95%;

  }
  .naviconshow {
    display: inline !important;
  }

  .nav-text {
    display: none !important;
  }
.navli{
  padding: 0.5rem 2rem 0.5rem 2rem !important;
}
 .navigation {
   width: 80.1%;
 }
 .search-language {
   width: 10%;
 }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    html{
    font-size: 10px;
  }
  .naviconshow {
    display: none !important;
  }
  .nav-text {
    display: inline !important;
  }

  .bg-container {
    width: 90%;

  }
.navli{
  padding: 0.5rem 1.3rem 0.5rem 1.3rem !important;
}
 .navigation {
   width: 80.1% !important;
 }
 .search-language {
   width: 9% !important;
 }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    html{
    font-size: 11px;
  }
  .naviconshow {
    display: inline !important;
  }
  .bg-container {
    width: 85%;

  }
    .nav-text {
    display: inline !important;
  }
  .navli{
  padding: 0.5rem 1rem 0.5rem 1rem !important;
}
 .navigation {
   width: 80.1%;
 }
 .search-language {
   width: 10%;
 }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    html{
    font-size: 12px;
  }
  .naviconshow {
    display: inline !important;
  }

  .bg-container {
    width: 80%;

  }
    .nav-text {
  display: inline !important;
  }
  .navli{
  padding: 0.5rem 1rem 0.5rem 1rem !important;
}
 .navigation {
   width: 76.1%;
 }
 .search-language {
   width: 15%;
 }
}
</style>
