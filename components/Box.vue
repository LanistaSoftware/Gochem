/* eslint-disable vue/require-default-prop */
<template>
  <div class="box-container clearfix">
    <div class="box-border clearfix">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
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
 .box-container{
    width: 24%;
    display: block;
    margin: .1rem;
    color: #fff;
    height: 20vh;
    padding: .8vh;
    margin-bottom: 3vh;
    background-image: linear-gradient(to bottom, rgba(22, 98, 150,.6), rgba(23, 104, 31,.4));
    float: left;
}
 .box-border{
   height: 100%;
   border: 1px solid #fff;
 }
</style>
