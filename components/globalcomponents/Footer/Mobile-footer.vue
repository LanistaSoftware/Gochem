<template>
  <section>
    <MobileNav />
    <div class="footer-mobile">
      <div class="">
        <div v-for="item in footerList" :key="item.id" class="footer-container clearfix">
          <div class="company-group">
            <div class="companydesc">
              <a :href="item.gochemLink" target="_blank">
                <p>
                  <i class="flaticon-pin" /> {{ getInfo.name }}
                </p>
              </a>
            </div>
            <hr>
            <Social :show-search="showSearch" class="mobile-social-footer" />
            <hr>
            <div class="mobil-box">
              <div class="icon-gochem">
                <a :href="item.logoLink" target="_blank">
                  <img class="slikonLogo" :src="item.logo" alt="We Love Slicone"></a>
              </div>
            </div>
            <div class="mobil-box">
              <div class="icon-copy">
                <p class="copyright">
                  <i>Copyright © 2020</i>
                </p>
                <a :href="item.lanistaLink" target="_blank" rel="noopener"><img
                  :src="item.lanistaLogo"
                  alt="Created by Lanista Software"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import MobileNav from '../Header/MobileNav'
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
          gochemLink: '/contact',
          logo: require('../../../assets/img/welove.png'),
          logoLink: '/about',
          lanistaLogo: require('../../../assets/img/beyaz.png'),
          lanistaLink: 'https://www.lanista.com.tr/'
        }
      ],
      showSearch: false
    }
  },
  computed: {
    ...mapGetters({
      getInfo: 'getInfo'
    })
  }
}
</script>
<style lang="less" scoped>
.footer-mobile {
  background-color: rgba(0, 0, 0, 0.6);
  padding-bottom: 6rem;
  height: 100%;
}

hr {
  background-color: #fff;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.company-group {
  text-align: center;

  p {
    color: #939393;
  }

  .companydesc {
    p {
      font-size: 1rem;
      padding-top: 2.2rem;
      padding-right: 2rem;
    }
  }
}

.social {
  display: block;
  text-align: center;
}

.mobil-box {
  width: 50%;
  float: left;
  padding-top: 2rem;

  .icon-gochem img {
    width: 50%;
  }

  .icon-copy {
    display: inline;

    img {
      font-size: 1rem;
      width: 30%;
    }
  }

  .copyright {
    display: inline-block;
    margin-right: 0.5rem;
  }
}

.mobile-social-footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
