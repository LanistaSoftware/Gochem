<template>
  <div class="footer-contact">
    <div class="bg-container clearfix">
      <div class="footer-container clearfix">
        <div class="footer-row">
          <h4>Bizi takip edin</h4>
          <hr>
          <ul class="social-network social-circle">
            <li v-for="sosyal in social" :key="sosyal.id" class="icon-container">
              <a
                :href="sosyal.href"
                :title="sosyal.title"
              >
                <i
                  :class="sosyal.icon"
                />{{ sosyal.adress }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-row">
          <h4>Bizi takip edin</h4>
          <hr>
          <ul class="social-network social-circle">
            <li class="icon-container">
              <a href="#">Hakkımızda</a>
            </li>
            <li class="icon-container">
              <a href="#">Ekibimiz</a>
            </li>
            <li class="icon-container">
              <a href="#">Makaleler</a>
            </li>
          </ul>
        </div>
        <div class="footer-row">
          <h4> Müşteri </h4>
          <hr>
          <ul class="social-network social-circle">
            <li class="icon-container">
              <a href="#">Bilgi servisi</a>
            </li>
            <li class="icon-container">
              <a href="#">Lojistik</a>
            </li>
            <li class="icon-container">
              <a href="#">Sipariş</a>
            </li>
          </ul>
        </div>
        <div class="footer-row">
          <h4>Destek</h4>
          <hr>
          <ul class="social-network social-circle">
            <li class="icon-container">
              <a href="#">İletişim</a>
            </li>
            <li class="icon-container">
              <a href="#">Belgeler</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="hr-copy">
      <div class="contact-footer">
        <p class="copyright">
          <i>Copyright © 2020</i>
        </p>
        <img class="lanista" src="../../../assets/img/beyaz.png" alt="Created by Lanista Software">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      social: [
        {
          href: '#',
          title: 'Youtube',
          icon: 'flaticon-youtube-rounded-square-logo',
          adress: 'youtube/gochem'
        },
        {
          href: '#',
          title: 'linkedin',
          icon: 'flaticon-linkedin-1',
          adress: 'linkedin/gochem'
        },
        {
          href: '#',
          title: 'Twitter',
          icon: 'flaticon-twitter',
          adress: 'twitter/gochem'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .footer-contact{
    background-color:#36666C!important;
    padding: 5rem 0 2rem 0;
  }
  .footer-row{
    width: 25%;
    float: left;
    color: #fff;
    padding: 0 3rem;
    hr{
      background-color: #ffffff;
    }
    h4{
      font-size: 1rem;
      text-align: center;
    }
    ul{
      margin: 1rem;
      li{
        margin: 1.6rem 0;
        i {
          padding-right: 1rem;
        }
      }
    }
  }
  [class^="flaticon-twitter"]:before,[class^="flaticon-linkedin-1"]:before,[class^="flaticon-youtube"]:before {
  font-size: 1.8rem;
}
.hr-copy{
  background-color: #fff;
}
.contact-footer {
    text-align: center;

    img {
      height: 3vh;
    }

    .copyright {
      display: inline-block;
      color: #939393;
      margin-right: 0.5rem;
    }
  }
</style>
