<template>
  <div class="slider clearfix ontainer">
    <div class="slider-group">
      <div class="slideshow-pagination" />
      <div class="slideshow-navigation">
        <div class="slideshow-navigation-button prev">
          <span class="flaticon-back" />
        </div>
        <div class="slideshow-navigation-button next">
          <span class="flaticon-next" />
        </div>
      </div>
    </div>
    <div class="slider-item">
      <h3>01 / <sup>03</sup></h3>
      <h2>Doğa <br> Dostu Üretim.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.
      </p>
    </div>
    <ol>
      <li>1</li>
      <li>2</li>
    </ol>
  </div>
</template>
<style scoped>
 .slider{
     width: 100%;
     height: 43vh;
     margin-top: 3vh;
 }
 .slider-group{
  max-width: 24%;
  display: inline;
}
 h3{
   color: #fff;
   font-weight: bold;
 }
 h2{
   font-size: 4rem;
   font-weight: bold;
   padding-top: 2vh;
 }
 p{
   font-size: .8rem;
   margin-top: 1vh;
   margin-bottom: .6vh;
 }
 .slider-item{
   position: relative;
   width: 100%;
   display: inline-block;
   color: #fff;
   padding: 1vh;
 }
 /*** */

.slideshow-pagination-item .pagination-number {
  opacity: 0.5;
}
.slideshow-pagination-item:hover, .slideshow-pagination-item:focus {
  cursor: pointer;
}
.slideshow-pagination-item:last-of-type .pagination-separator {
  width: 0;
}
.slideshow-pagination-item.active .pagination-number {
  opacity: 1;
}
.slideshow-pagination-item.active .pagination-separator {
  width: 10vw;
}
.slideshow-navigation-button {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5rem;
  z-index: 1000;
  transition: all .3s ease;
  color: #FFF;
}
.slideshow-navigation-button:hover, .slideshow-navigation-button:focus {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
}
.slideshow-navigation-button.prev {
  left: 0;
}
.slideshow-navigation-button.next {
  right: 0;
}
.slideshow-navigation-button span{
  border: 1px solid;
  border-radius: 50%;
  padding: .6rem;
}

.pagination-separator-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  transform-origin: 0 0;
}

</style>
