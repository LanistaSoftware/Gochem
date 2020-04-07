<template>
  <div class="contact">
    <section class="content content-background bg-container">
      <h1> Content bölümü</h1>
      <ContactCarousel />
    </section>
    <div class="colored-background">
      <section class="content content-background bg-container">
        <div class="form-map-container">
          <div class="box form-content">
            <p>
              Bir sorunuz mu var ?<br>
              Bizimle iletişime geçmekten çekinmeyin.
            </p>
            <ContactForm />
          </div>
          <div class="box map-content clearfix">
            <p>Bizi ofisimizde <br> ziyaret edin.</p>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3566675762777!2d28.78506281495511!3d41.08305312276978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f570baaaab%3A0xac43b09ef54311fd!2sGochem!5e0!3m2!1str!2str!4v1585750999091!5m2!1str!2str"
                frameborder="0"
                class="map"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              />
            </div>
          </div>
        </div>
      </section>
      <div class="contact-slogan-background clearfix">
        <section class="contact-slogan">
          <p> Dünya ve Ülke çapındaki sayısız müşteri ağımız arasında sizde yerinizi alın.</p>
          <small>Envanterimizde bulunan ürünlerle ilgili bilgi almak için</small>
          <br>
          <button class="contact-btn">
            Arayın
          </button>
        </section>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import ContactCarousel from '@/components/contact/ContactCarousel'
import ContactForm from '@/components/contact/ContactForm'
import Footer from '@/components/globalcomponents/footer/ContactFooter'
export default {
  components: {
    ContactCarousel,
    ContactForm,
    Footer
  }
}
</script>
<style lang="less" scoped>
.form-map-container {
  width: 100%;
.box {
  margin: 3rem 0;
  width: 50%;
  float: left;
  font-family: Georgia !important;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  padding: 1rem;
   p{
     margin: 1rem;
     letter-spacing: 1px;
     word-spacing: 2px;
     padding: 0.5rem;
   }
}
}

.contact-slogan-background{
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
    border-radius: .6rem;
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
.map-container{
  padding-top: 0.4rem;
  width: 100%;
  height: 39vh;
  overflow: hidden;
.map{
  border:0;
  border-radius: .6rem;
  width: 100%;
  height: 100%;

}
}

</style>
