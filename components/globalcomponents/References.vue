<template>
  <div class="ref-container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
    >
      <div v-for="(ref, index) in references" :key="index.id" class="referance">
        <b-carousel-slide>
          <template v-slot:img>
            <a :href="ref.webLink" target="_blank">
              <h2> {{ ref.name }} </h2>
              <hr>
              <img
                :title="ref.title"
                class="ref-img"
                :src="ref.photo"
                width="500"
                height="300"
                alt="image slot"
              >
            </a>
          </template>
        </b-carousel-slide>
      </div>
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
    references () {
      return this.$store.getters.getReferences
    }
  }
}
</script>
<style lang="less" scoped>
a{
  text-decoration: none;
}
 .referance h2:hover{
  color: lightgreen;
}
 .ref-container{
   display: table-cell;
   vertical-align: middle;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
 }
 .ref-img{
   width: 70%;
   height: 10vh;
   margin-bottom: 3vh;
   object-fit:contain;
 }
 .referance h2 {
   font-size: 1.2rem;
   font-weight: 600;
   color: #fff;
   font-family: Arial, Helvetica, sans-serif;
   margin-top: 1.4vh;
   margin-bottom: .2vh;
 }
 hr{
    margin-top: 0.5vh;
    margin-bottom: .5vh;
    width: 70%;
    display: inline-block;
    background-color: rgba(255, 255, 255,.3 );
 }
</style>
