<template>
  <div class="carousel-container">
    <no-ssr>
      <carousel-3d
        :count="contactSlides.length"
        :perspective="1"
        :display="5"
        :width="360"
        :height="450"
        :space="450"
      >
        <slide v-for="(slide, i) in contactSlides" :key="i" :index="i">
          <div class="slide-card-container">
            <div class="slide-card">
              <div class="slide-card-header clearfix">
                <span class="icon-container">
                  <i :class="slide.icons" />
                </span>
                <span class="header-container">
                  <h2>
                    {{ slide.title }}
                  </h2>
                </span>
              </div>
              <div class="slide-card-body">
                <h3> {{ slide.info }} </h3>
                <p v-html="slide.content" />
              </div>
              <div class="slide-card-button">
                <button><a href="#contact-footer">{{ slide.contactBtn }}</a> </button>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactSlides: [
        {
          icons: 'flaticon-warehouse',
          title: 'Ofis Adresi',
          info: '',
          content: '<address><strong>Merkez Ofis</strong> : Atatür Mahallesi Marmara Sanayi Sitesi M Blok No: 7/a ikitelli K.Çekmece/İstanbul <br><strong>Telefon</strong> : 0 212 485 3754<br><strong>Fax </strong> : 0 212 485 3754<br><strong>GSM</strong> : 0 532 626 6355<br><strong>E-Mail</strong> : go@gochem.com.tr</address>',
          contactBtn: 'Sizi Arayalım.'
        },
        {
          icons: 'flaticon-support-1',
          title: 'Hızlı Bilgi Alma Servisi',
          info: 'Almak istediğiniz bilgi için sizi hemen arayalım',
          content: 'Bize bilgilerinizi bırakın, almak istediğiniz bilgi için biz sizi arayalım. Hem istediğiniz bilgilere çabuk ulaşın hemde bütün servislerimiz hakkında sizi bilgilendirelim',
          contactBtn: 'Sizi arayalım'
        },
        {
          icons: 'flaticon-customer-service',
          title: 'Stoklu Ürünlerle Hızlı Hizmet',
          info: 'Stoklu ürünlerimizle kesintisiz hizmet ',
          content: 'Size uygun olan stoklu ürünlerimizi keşfetmek için bizden ayrıntılı bilgi alabilirsiniz. Müşteri destek personelimizden gerekli bilgileri alabilirsiniz.',
          contactBtn: 'Stok durumunu öğrenin'
        },
        {
          icons: 'flaticon-loupe',
          title: 'Zamanında Teslimat',
          info: 'Hızlı ve zamanında teslimat ',
          content: 'Stoktaki ürünlerimizden vereceğiniz siparişlerde İstanbul içine 1 iş gününde teslimat',
          contactBtn: 'Hemen sipariş verin'
        },
        {
          icons: 'flaticon-customer-service',
          title: 'Müşteri Destek',
          info: 'Sorularınızı sorun destek personelimiz size dönüş yapsın ',
          content: 'Sorularınızı mail yoluyla bize iletin, uzman müşteri destek personelimiz kısa sürede size dönüş yapsın.',
          contactBtn: 'Bilgi formunu doldurun'
        }
      ]
    }
  }
}

</script>
<style lang="less" scoped>
.carousel-container {
  width: 100%;
  padding: 50px 0;
  margin-bottom: 40px;
}

.carousel-3d-slide {
  border: none;
  background-color: #fff;
  border-radius: 2em;
  padding: 25px;

}

.slide-card-container {
  box-shadow: 0px 3px 15px 6px rgba(216, 238, 255, 0.7);
  border-radius: 2em;
  height: 405px;
}

.slide-card-header {
  width: 100%;
  padding: 20px 45px 10px 20px;
  word-wrap: break-word;
  border-bottom: 2px solid #166296;

  span {
    display: block;
    float: left;
  }

  .icon-container {
    width: 30%;
    text-align: center;

    [class^="flaticon-"]:before,
    [class*=" flaticon-"]:before,
    [class^="flaticon-"]:after,
    [class*=" flaticon-"]:after {
      font-size: 55px;
      color: #FB5757;
    }
  }

  .header-container {
    width: 70%;
    text-align: center;
    vertical-align: bottom;
    padding-top: 4%;

    h2 {
      display: inline-block;
      color: #FB5757;
      font-size: 20px;
      vertical-align: middle;

    }
  }
}

.slide-card-body {
  margin-top: 30px;
  padding: 0 10px;
  h3 {
    font-weight: bold;
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  p,
  h3 {
    color: #166296;
    padding: 10px;
  }
}
.slide-card-button {
  text-align: center;
  button{
    margin-top: 90px;
    width:120px;
    padding:5px 20px;
    background: none;
    border: 1px solid #166296;
    border-radius: 0.7em;
    transition: 0.5s;
a{
 color: #166296;
    font-size:14px;
    word-wrap: break;
}
    &:hover {
      color: lightgreen;
      text-decoration: none;
      border-color: lightgreen;
    }
  }
}
</style>
