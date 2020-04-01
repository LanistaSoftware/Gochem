<template>
  <div>
    <div v-for="item in footerList" :key="item.id" class="footer-bg">
      <div class="box">
        <p class="companydesc">
          <i class="flaticon-pin" /> {{ item.company }}
        </p>
      </div>
      <div class="box">
        <div class="imgcontainer">
          <img class="slikonLogo" src="../../assets/img/welove.png" alt="We Love Slicone">
        </div>
      </div>
      <div class="box">
        <div class="imgcontainer">
          <p class="copyright">
            <i>Copyright © 2020</i>
          </p>
          <img class="lanista" src="../../assets/img/beyaz.png" alt="Created by Lanista Software">
        </div>
        <!-- <div class="footer-copyright text-center py-3">
          © Copyright 2020
          <img class="lanista" src="../../assets/img/beyaz.png">
        </div> -->
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
<style lang="less" scoped>
.box {

  width: 33.3%;
  height: 100%;
  float: left;
  text-align: center;

  .companydesc {
    position: relative;
    top: 25%;

  }

  .imgcontainer {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 0.4rem;

    img {
      height: 100%;
      width: auto;
    }

    .copyright {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

}
</style>
