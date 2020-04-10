<template>
  <div class="carousel-container">
    <carousel-3d
      :count="contactSlides.length"
      :perspective="1"
      :display="5"
      :width="360"
      :height="450"
      :space="450"
    >
      <slide v-for="(slide, i) in contactSlides" :key="i" :index="i">
        <!-- <div class="contact-slide">
          <div class="contact-head clearfix">
            <span class="icon-container">
              <i :class="slide.icons" />

            </span>
            <span class="heading-text-container">
              <h2>
                {{ slide.title }}
              </h2>
            </span>
          </div>
          <hr>
          <div class="contact-item">
            <h3> {{ slide.info }} </h3>
            <p> {{ slide.content }} </p>
          </div>
          <div class="contact-btn">
            <button> {{ slide.contactBtn }} </button>
          </div>
        </div> -->
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
              <p> {{ slide.content }} </p>
            </div>
            <div class="slide-card-button">
              <button> {{ slide.contactBtn }} </button>
            </div>
          </div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactSlides: [
        {
          icons: 'flaticon-sydney-opera-house',
          title: 'Ofis Adresi',
          info: 'bilgiler',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Sizi Arayalım.'
        },
        {
          icons: 'flaticon-customer-service',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        },
        {
          icons: 'flaticon-mail',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        },
        {
          icons: 'flaticon-mail',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        },
        {
          icons: 'flaticon-mail',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        },
        {
          icons: 'flaticon-mail',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        },
        {
          icons: 'flaticon-mail',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        },
        {
          icons: 'flaticon-mail',
          title: 'Hızlı bilgi alma servisi',
          info: 'Lorem ipsum dolor sit amet ',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Destek'
        }
      ]
    }
  }
}

</script>
<style lang="less" scoped>
.carousel-container {
  width: 82.5vw;
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
  text-align: center;
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
  button {
    margin-top: 120px;
    width:120px;
    padding:5px 20px;
    background: none;
    border: 1px solid #166296;
    border-radius: 0.7em;
    transition: 0.5s;
    color: #166296;
    font-size:14px;
    word-wrap: break;

    &:hover {
      color: lightgreen;
      text-decoration: none;
      border-color: lightgreen;
    }
  }
}
</style>
