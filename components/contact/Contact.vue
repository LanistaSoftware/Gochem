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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3566675762777!2d28.78506281495511!3d41.08305312276978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f570baaaab%3A0xac43b09ef54311fd!2sGochem!5e0!3m2!1str!2str!4v1585750999091!5m2!1str!2str"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
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
