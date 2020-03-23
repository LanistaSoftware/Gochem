<template>
  <div>
    <div v-for="item in footerList" :key="item.id" class="footer-bg">
      <div class="box">
        <p> <i class="flaticon-pin" /> {{ item.company }}</p>
      </div>
      <div class="box">
        <img class="slikonLogo" src="../../assets/img/welove.png" alt="" srcset="">
      </div>
      <div class="box">
        <div class="footer-copyright text-center py-3">
          © Copyright 2020
          <img class="lanista" src="../../assets/img/beyaz.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      footerList: [
        {
          company: 'Gochem Slikon Kimya San. Tic. Ltd. Şti',
          logo: '../../assets/img/welove.png',
          lanistaLogo: '../../assets/img/beyaz.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
 .footer-bg{
   display: table;
   color: #939393;
   width: 100%;
   height: 3vh;
   vertical-align: middle;
   text-align: center;
 }
 .box{
   display: inline-block;
   width: 33%;
   vertical-align: middle;
 }
.box .slikonLogo{
   width: 12vh;
 }
 .box .lanista{
   width: 6vh;
 }
 [class^="flaticon-"]:before {
  color: white;
  font-size: 1.2rem;

}
</style>
