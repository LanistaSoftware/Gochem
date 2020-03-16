<template>
  <div class="box">
    <div v-for="item in slideList" :key="item.id" :item="item" class="box-group">
      <div class="box-item">
        <h3>{{ item.page }} / <sup>{{ item.pageTwo }}</sup></h3>
        <p>
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slideList: [
        {
          page: '02',
          pageTwo: '03',
          title: 'Doğa',
          titleTwo: 'Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          page: '02',
          pageTwo: '03',
          title: 'Doğa',
          titleTwo: 'Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          page: '02',
          pageTwo: '03',
          title: 'Doğa',
          titleTwo: 'Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          page: '02',
          pageTwo: '03',
          title: 'Doğa',
          titleTwo: 'Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        }
      ]
    }
  }
}
</script>
<style scoped>
.box-group{
  max-width: 24%;
  display: inline;
}
 h3{
   color: #fff;
   font-weight: bold;
   text-align: center;
   padding-top: 1rem;
 }
 p{
   font-size: .8rem;
   margin-top: 1vh;
   margin-bottom: .6vh;
 }
 .box-item{
   position: relative;
   width: 24%;
   display: inline-block;
   border: 1px solid #fff;
   color: #fff;
   padding: 1vh;
   background-image: linear-gradient(to bottom, rgba(22, 98, 150,.6), rgba(23, 104, 31,.4));
 }
</style>
