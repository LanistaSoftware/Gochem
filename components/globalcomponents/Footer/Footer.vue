<template>
  <div>
    <div v-for="item in footerList" :key="item.id" class="footer-bg">
      <div class="box">
        <a :href="item.gochemLink" target="_blank">
          <p class="companydesc">
            <i class="flaticon-pin" /> {{ item.company }}
          </p>
        </a>
      </div>
      <div class="box">
        <div class="imgcontainer">
          <a :href="item.logoLink" target="_blank">
            <img class="slikonLogo" :src="item.logo" alt="We Love Slicone"></a>
        </div>
      </div>
      <div class="box">
        <div class="imgcontainer">
          <p class="copyright">
            <i>Copyright © 2020</i>
          </p>
          <a :href="item.lanistaLink" target="_blank"><img :src="item.lanistaLogo" alt="Created by Lanista Software"></a>
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
          gochemLink: '/contact',
          logo: require('../../../assets/img/welove.png'),
          logoLink: '/about',
          lanistaLogo: require('../../../assets/img/beyaz.png'),
          lanistaLink: 'https://www.lanista.com.tr/'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
a{
  color: #939393;
  font-size: .8rem;
}
.box {

  width: 33.3%;
  height: 100%;
  float: left;
  text-align: center;

  .companydesc {
    position: relative;
    top: 25%;
    margin-top: .4rem;
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
