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
  width: 768px;
}
.bg-container{
    width: 90%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
}
</style>
