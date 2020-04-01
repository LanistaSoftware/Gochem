<template>
  <carousel-3d
    :count="slides.length"
    :controls-visible="carouselControls"
    :width="slideWidth"
    :height="slideHeight"
    :autoplay="autoplayEnabled"
    :disable3d="disable3d"
    :space="slideSpace"
    :perspective="slidePerspective"
    :display="visible"
    :loop="infinite"
    :animation-speed="animationSpeed"
    :dir="direction"
    :border="slideBorder"
    :start-index="startIndex"
    :inverse-scaling="slideScaling"
  >
    <slide v-for="(slide, i) in slides" :key="i" :index="i">
      <img :src="slide.src">
    </slide>
  </carousel-3d>
</template>

<script>
export default {
  data () {
    return {
      carouselControls: true,
      slideWidth: 220,
      slideHeight: 280,
      slideBorder: 1,
      slideSpace: 260,
      slidePerspective: 0,
      slideScaling: 10,
      animationSpeed: 500,
      startIndex: 0,
      autoplayEnabled: false,
      visible: 5,
      direction: 'rtl',
      infinite: true,
      disable3d: false,
      slides: [
        {
          title: 'Slide 1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 2',
          desc: 'Lorem ipsum dolor sit amet ',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 4',
          desc: 'Lorem ipsum dolor sit amet,  Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 5',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 6',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 7',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 8',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 9',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
        },
        {
          title: 'Slide 10',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
          src: 'https://placehold.it/360x270'
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
