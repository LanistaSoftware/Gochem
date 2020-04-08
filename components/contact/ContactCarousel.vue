<template>
  <div class="carousel-container">
    <carousel-3d
      :count="contactSlides.length"
      :controls-visible="carouselControls"
      :autoplay="autoplayEnabled"
      :disable3d="disable3d"
      :space="slideSpace"
      :perspective="slidePerspective"
      :loop="infinite"
      :animation-speed="animationSpeed"
      :dir="direction"
      :border="slideBorder"
      :start-index="startIndex"
    >
      <slide v-for="(slide, i) in contactSlides" :key="i" :index="i">
        <div class="contact-slide">
          <div class="contact-head">
            <i :class="slide.icons" />
            <h2>
              {{ slide.title }}
            </h2>
          </div>
          <hr>
          <div class="contact-item">
            <h3> {{ slide.info }} </h3>
            <p> {{ slide.content }} </p>
          </div>
          <div class="contact-btn">
            <button> {{ slide.contactBtn }} </button>
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
      carouselControls: false,
      slideWidth: 225,
      slideHeight: 280,
      slideBorder: 1,
      slideSpace: 245,
      slidePerspective: 0,
      slideScaling: 3,
      animationSpeed: 500,
      startIndex: 0,
      autoplayEnabled: false,
      visible: 5,
      direction: 'rtl',
      infinite: true,
      disable3d: false,
      contactSlides: [
        {
          icons: 'flaticon-sydney-opera-house',
          title: 'Ofis Adresi',
          info: 'bilgiler',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          contactBtn: 'Tıkla'
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
  },
  methods: {
    addSlide () {
      this.slides.push({
        title: 'Slide X',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
        src: 'https://placehold.it/360x270'
      })
    },
    removeSlide () {
      this.slides.pop()
    }
  }
}

</script>
<style lang="less" scoped>
.carousel-container{
  height: 60px;
}
// .contact-slide{
//   height: 100%;
//   //box-shadow: 1rem 1rem 1rem 1rem #D8EEFF;
//   box-shadow: 0 4px 8px 0 rgba(216, 238, 255,.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
//   border-radius: 1rem;
// }
// .carousel-3d-slide{
//   background-color: #fff;
//   border-radius: .6rem;
//   text-align: center;
//   padding: 1.3rem;
//   height: 80%!important;
// }
// .contact-head{
//   width: 100%;
//   margin-bottom: 2rem;
//  i{
//     float: left;
//     padding: 1rem;
//   }
//  h2 {
//     color:#FB5757;
//     padding-top: 1rem;
//     font-size: 1.3rem;
//  }
// }
// .contact-item{
//   margin-top: 2rem;
//     h3{
//     font-weight: bold;
//     font-size: 1rem;
//   }
//   p,h3{
//     color: #166296;
//     padding: .6rem;
//   }
// }
// .contact-btn{
//   bottom: 10%;
//   width: 90%;
//   position: fixed;
//   button{
//     padding: 1rem 3rem;
//     background: none;
//     border: 1px solid #18828A;
//     border-radius: .5rem;
//     transition: 0.5s;
//     color: #18828A;
//     &:hover{
//      color: lightgreen;
//   text-decoration: none;
//   border-color: lightgreen;
//   }
// }
// }
// [class^="flaticon-"]:before,
// [class*=" flaticon-"]:before,
// [class^="flaticon-"]:after,
// [class*=" flaticon-"]:after {
//   font-size:3rem;
//   cursor: pointer;
//   color: #FB5757;
// }
</style>
