<template>
  <div class="com-container">
    <div class="content bg-container content-background overflow-scroll clearfix">
      <ContactCarousel />
    </div>
    <div class="contact-group clearfix">
      <div class="form-container bg-container">
        <div class="contact-item ">
          <span>Bir sorunuz mu var ?</span>
          <p>Bizimle iletişime geçmekten çekinmeyin.</p>
          <ContactForm />
        </div>
        <div class="contact-item">
          <h2> Harita alanı </h2>
        </div>
      </div>
    </div>
    <div class="com-info">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores?</p>
      <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
      <button>Tıklayın</button>
    </div>
  </div>
</template>
<script>
import ContactCarousel from '@/components/contact/ContactCarousel'
import ContactForm from '@/components/contact/ContactForm'
export default {
  components: {
    ContactCarousel,
    ContactForm
  }
}
</script>
<style lang="less" scoped>
.content{
  height: 100%!important;
}
 .contact-group{
     background-color: #002239!important;
     width: 100%;
     .contact-item{
         width: 50%;
         float: left;
     }
 }
 .com-info{
   background-color: black;
 }
 .com-footer{
     text-align: center;
     background-color: coral;
 }
</style>
