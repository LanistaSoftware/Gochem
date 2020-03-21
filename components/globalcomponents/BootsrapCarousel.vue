<template>
  <div class="carousel-container">
    <i class="sliderBtn left-btn rt flaticon-next" @click="prev()" />
    <i class="sliderBtn right-btn flaticon-next" @click="next()" />
    <b-carousel
      id="carousel-1"
      ref="myCarousel"
      v-model="slide"
      :interval="2000"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide v-for="(slayt,index) in slideSets" :key="index.id">
        <template v-slot:img>
          <img width="100" :src="slayt.imageUrl" alt="" srcset="">
          <div class="carousel-content">
            <div class="carousel-items">
              <h4> <strong> 0{{ index+1 }} </strong><span>/</span>  <sup> 0{{ slideSets.length }} </sup></h4>
              <h2>{{ slayt.header }} </h2>
              <p class="content">
                {{ slayt.content }}
              </p>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    prev () {
      this.$refs.myCarousel.prev()
    },
    next () {
      this.$refs.myCarousel.next()
    }
  }
}
</script>
<style lang="less">
.sliderBtn {
  position: absolute;
  margin-top: 20vh;
  background-color: transparent;
  padding: .6vh;
  z-index: 2000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
}
.sliderBtn::before {
  margin-left: 0;
}
.rt{
   transform: rotate(180deg) !important;
}
.right-btn{
    right: 0;
 }
 .carousel-content{
   width: 80%;
   margin-left: auto;
   margin-right: auto;
  }
  .carousel-items{
    padding: 3vh;
    color: #fff;
    text-align: left;
    height: 45vh;
    vertical-align: middle;
    display: table-cell;
  }
  .carousel-content h4{
    font-weight: bold;
    padding-bottom: 1.2vh;
    font-family: utopia-std-headline, serif;
  }
  .carousel-content span{
    font-size: 3.2rem;
  }
  .carousel-content sup{
    font-size: 2rem;
  }
  .carousel-content strong{
    font-size: 3rem;
  }
  .carousel-content h2{
    font-family: Arial, serif;
    font-size: 5.7rem;
    font-weight: bold;
    padding-bottom: 1vh;
  }
  .carousel-content p{
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bold;
  }
  .carousel-items {
    color: #fff;
    text-align: left;
    padding-bottom: 10vh;
    padding: 0;
}

</style>
