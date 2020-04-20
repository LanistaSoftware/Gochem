<template>
  <div id="contact-footer">
    <div class="colored-background">
      <div id="fm-container" class="form-map-container bg-container clearfix">
        <div class="box form-content">
          <h3>
            Bir sorunuz mu var ?<br>
            Bizimle iletişime geçmekten çekinmeyin.
          </h3>
          <ContactForm />
        </div>
        <div class="box map-content clearfix">
          <h3>Bizi ofisimizde <br> ziyaret edin.</h3>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3566675762777!2d28.78506281495511!3d41.08305312276978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f570baaaab%3A0xac43b09ef54311fd!2sGochem!5e0!3m2!1str!2str!4v1585750999091!5m2!1str!2str"
              frameborder="0"
              class="map radius-1em"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </div>
      <div class="contact-slogan-background">
        <section class="contact-slogan  bg-container">
          <p> Dünya ve Ülke çapındaki sayısız müşteri ağımız arasında sizde yerinizi alın.</p>
          <small>Envanterimizde bulunan ürünlerle ilgili bilgi almak için</small>
          <br>
          <button class="contact-btn radius-05em">
            <a href="tel:123-456-7890">Arayın</a>
          </button>
        </section>
      </div>
      <div id="contact-desktop-footer" class="footer-container bg-container">
        <div id="footer-rows" class=" clearfix">
          <div class="footer-row first-row">
            <h4>Bizi takip edin</h4>
            <hr>
            <ul class="social-network social-circle">
              <li v-for="sosyal in social" :key="sosyal.id" class="icon-container">
                <a :href="sosyal.href" :title="sosyal.title">
                  <i :class="sosyal.icon"> {{ sosyal.adress }}</i></a>
              </li>
            </ul>
          </div>
          <div class="footer-row">
            <h4> Şirket </h4>
            <hr>
            <ul class="contact-item">
              <li>
                <a href="/about" target="_blank">Hakkımızda</a>
              </li>
              <li>
                <a href="/about#c">Ekibimiz</a>
              </li>
              <li>
                <a href="/blogs" target="_blank">Makaleler</a>
              </li>
            </ul>
          </div>
          <div class="footer-row">
            <h4> Müşteri </h4>
            <hr>
            <ul class="contact-item">
              <li>
                <a href="/" target="_blank">Bilgi servisi</a>
              </li>
              <li>
                <a href="#">Lojistik</a>
              </li>
              <li>
                <a href="/products" target="_blank">Sipariş</a>
              </li>
            </ul>
          </div>
          <div class="footer-row">
            <h4>Destek</h4>
            <hr>
            <ul class="contact-item">
              <li>
                <a href="#contact-footer">İletişim</a>
              </li>
              <li>
                <a href="/portfolio" target="_blank">Belgeler</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="hr-copy">
        <div class="contact-footer">
          <p class="copyright">
            <i>Copyright © 2020</i>
          </p>
          <a href="https://www.lanista.com.tr/" target="_blank">
            <img class="lanista" src="../../../assets/img/beyaz.png" alt="Created by Lanista Software">
          </a>
        </div>
      </div>
      <div id="contact-mobile-footer" class="mobile-footer-container">
        <MobileFooter />
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from '@/components/contact/ContactForm'
import MobileFooter from '@/components/globalcomponents/Footer/Mobile-footer'
export default {
  components: {
    ContactForm,
    MobileFooter

  },
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
          icon: 'flaticon-linkedin',
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
/*Footer */
.contact-btn{
  a{
  color: #FD7C7C;
}
}

.footer-container {
  padding: 5rem 0 1rem 0;
}

.footer-contact {
  background-color: transparent;
  padding: 5rem 0 2rem 0;
}
#contact-mobile-footer{
  display: none;
}

.social-network {

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.1rem;
  letter-spacing: .04rem;
}

.footer-row {
  width: 25%;
  float: left;
  color: #fff;
  padding: 0 2rem;
  margin-bottom: 2rem;
  text-align: center;

  hr {
    background-color: rgba(255, 255, 255, 0.7);
  }

  h4 {
    font-size: 1.2rem;
    text-align: center;
    font-family: Georgia;
  }

  ul {
    li {
      margin: 2rem 0;
    }
  }
}

.footer-row:first-child {
  text-align: left;
}

[class^="flaticon-twitter"]:before,
[class^="flaticon-linkedin"]:before,
[class^="flaticon-youtube"]:before {
  font-size: 1.7rem;
  margin-right: 0.2rem;
}

.contact-item {
  font-family: Georgia;
  font-size: 1.1rem;
}

.hr-copy {
  background-color: rgba(255, 255, 255, 0.7);
}

.contact-footer {
  text-align: center;

  img {
    width: 7rem;
  }

  .copyright {
    display: inline-block;
    font-family: Helvetica Neue;
    color: #939393;
    margin-right: 0.5rem;
  }
}

/** form-map***/
.box {
  margin: 3rem 0;
  width: 50%;
  float: left;
  font-family: Georgia !important;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  padding: 1rem;

  h2,h3 {
    margin: 1rem;
    letter-spacing: 1px;
    word-spacing: 2px;
    padding: 0.5rem;
  }
  h3{
    font-size:1.6rem;
    margin-top: 3.3rem;
    padding: 0.2rem;
  }

}

.map-container {
  padding-top: 0.4rem;
  width: 100%;
  overflow: hidden;

  .map {
    border: 0;
    width: 100%;
    height: 23rem;
  }
}

/*Slogan*/
.contact-slogan-background {
  background-color: white;
  padding: 1rem;
  text-align: center;
  font-family: Helvetica !important;
  letter-spacing: .1rem;

  p {
    font-size: 2.2rem;
  }

  small {
    font-size: 1.4rem;
  }

  p,
  small {
    color: #166296;
    padding: 2rem;
  }

  .contact-btn {
    margin: 3rem;
    padding: 1rem 3rem;
    background: none;
    border: 1px solid rgba(24, 130, 138, .5);
    color: #FD7C7C;
    font-weight: 600;
    font-size: 1.3rem;
    transition: 0.5s;

    &:hover {
      color: lightgreen;
      text-decoration: none;
      border-color: lightgreen;
    }
  }
}

</style>
