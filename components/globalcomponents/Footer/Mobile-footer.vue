<template>
  <section>
    <MobileNav />
    <div class="footer-mobile">
      <div class="clearfix">
        <div v-for="item in footerList" :key="item.id" class="footer-container clearfix">
          <div class="company-group">
            <div class="companydesc">
              <p>
                <i class="flaticon-pin" /> {{ item.company }}
              </p>
            </div>
            <hr>
            <Social />
            <hr>
            <div class="mobil-box">
              <div class="icon-gochem">
                <img class="slikonLogo" src="../../../assets/img/welove.png" alt="We Love Slicone">
              </div>
            </div>
            <div class="mobil-box">
              <div class="icon-copy">
                <p class="copyright">
                  <i>Copyright © 2020</i>
                </p>
                <img src="../../../assets/img/beyaz.png" alt="Created by Lanista Software">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileNav from '@/components/globalcomponents/header/MobileNav'
import Social from '@/components/globalcomponents/shared/Social'
export default {
  components: {
    MobileNav,
    Social
  },
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
.footer-mobile{
    background-color: rgba(0,0,0,0.6);
    padding-bottom: 8rem !important;
  }
  hr {
    background-color: #fff;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  .company-group{
    text-align: center;
    p{
      color: #939393;
    }
    .companydesc{
       p{
      font-size: 1.3rem;
      padding-top: 2.2rem;
      padding-right: 2rem;
    }
    }
  }
  .social{
    display: block;
    text-align: center;
  }
  [class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
  font-size: 1.3rem !important;
}
.mobil-box{
  width: 50%;
  float: left;
  padding-top: 2rem;
  .icon-gochem img{
    width: 50%;
  }
  .icon-copy img{
    font-size: 1rem;
    width: 30%;
  }
  .copyright {
      display: inline-block;
      margin-right: 0.5rem;
    }
}
</style>
