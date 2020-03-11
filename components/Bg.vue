<template>
  <div class="bg " :class="bgImageUrl">
    <div class="bg-container">
      <Header />
    </div>
  </div>
</template>
<script>
import Header from '@/components/globalcomponents/Header'
export default {
  components: {
    Header
  },
  data () {
    return {
      bgImageUrl: 'bgUrl1'
    }
  }
}
</script>
<style scoped>
.bgUrl1{
background: url(../assets/img/bg1.jpg);
}
.bgUrl2{
background: url(../assets/img/bg2.jpg);
}
.bgUrl3{
background: url(../assets/img/bg3.jpg);
}
.bg{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
}
.bg-container{
    width: 80vw;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
