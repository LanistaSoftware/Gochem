<template>
  <div class="com-container">
    <div class="com-carousel">
      <h2>Carousel Alanı</h2>
      <b-carousel>
        <b-carousel-slide />
      </b-carousel>
    </div>
    <div class="contact">
      <div class="contact-item">
        <h2> Form alanı </h2>
      </div>
      <div class="contact-item">
        <h2> Harita alanı </h2>
      </div>
    </div>
    <div class="com-info">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores?</p>
      <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
      <button>Tıklayın</button>
    </div>
    <div class="com-footer">
      <h2> Footer Alanı</h2>
    </div>
  </div>
</template>
<style lang="less" scoped>
 .com-container{
     background-color: aquamarine;
     border: 3px solid;
 }
 .com-carousel{
     background-color: blue;
 }
 .contact{
     background-color: brown;
     width: 100%;
     .contact-item{
         width: 50%;
         float: left;
         background-color: burlywood;
     }
 }
 .com-info{
     background-color: chartreuse;
 }
 .com-footer{
     text-align: center;
     background-color: coral;
 }
 .footer{
     height: 20vh!important;
 }
</style>
