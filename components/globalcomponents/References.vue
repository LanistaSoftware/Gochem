<template>
  <div class="ref-container">
    <b-carousel
      id="carousel-1"
      ref="myRef"
      v-model="slide"
      :interval="4000"
    >
      <div class="ref">
        <i class="refBtn rf flaticon-next" @click="prev()" />
        <i class="refBtn rg btn-right flaticon-next" @click="next()" />

        <b-carousel-slide v-for="(ref,index) in references" :key="index.id">
          <template v-slot:img>
            <a :href="ref.webLink" :title="ref.title" target="_blank">
              <div class="title">
                <p> {{ ref.name }} </p>
                <hr>
              </div>
              <img
                class="d-block img-fluid w-100"
                :src="ref.photo"
                :alt="ref.name"
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
  },
  methods: {
    prev () {
      this.$refs.myRef.prev()
    },
    next () {
      this.$refs.myRef.next()
    }
  }
}
</script>
<style lang="less" scoped>
a{
  color: #fff;
}
.refBtn {
  position: absolute;
  background-color: transparent;
  z-index: 2000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  top: 50%;
  margin: 0 .5rem 0 .5rem;
  padding: 0 .3rem .3rem .4rem;
}
.refBtn::before {
  margin-left: 0;
}
.btn-right{
  right: 0;
}
hr {
 margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 2px solid rgba(255, 255, 0, 0.1);
}
.rf{
   transform: rotate(180deg) !important;
   //padding-bottom: .3rem;
}
.flaticon-next:before {
    content: "\f10f";
    font-size: .2rem;
}
 .ref-container{
   display: table-cell;
   vertical-align: middle;
   background-color: rgba(147, 147, 147,.5);
   width: 30vh;
  }
.ref img{
  height: 5vh;
  padding-left: 5vh;
  padding-right: 5vh;
 }
 .ref p {
   text-align: center;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: bold;
 }
 .ref .title{
   width: 70%;
   margin-left: auto;
   margin-right: auto;
 }
</style>
