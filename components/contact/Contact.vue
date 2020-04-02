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
          <span>Bizi ofisimizde ziyaret edin.</span>
          <p />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3566675762777!2d28.78506281495511!3d41.08305312276978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f570baaaab%3A0xac43b09ef54311fd!2sGochem!5e0!3m2!1str!2str!4v1585750999091!5m2!1str!2str"
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
      <br>
      <button class="contact-btn">
        Tıklayın
      </button>
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
.bg-container{
  margin-bottom: 4rem;
}
.content{
  height: 100%!important;
}
 .contact-group{
     background-color: #002239!important;
     width: 100%;
     display: table;
     height: 80vh;
     .form-container{
       display: table-cell;
       vertical-align: middle;
     }
     .contact-item{
         width: 50%;
         float: left;
         text-align: center;
         iframe{
           width: 100%!important;
           height: 50vh;
         }
         p,span{
           color: #fff;
           padding-bottom: 3rem;
           font-size: 1.6rem;
         }
     }
 }
 /**bilgi alanı beyaz colun */
 .com-info{
   background-color: #fff;
   padding: 1rem;
   text-align: center;
   p{
     font-size: 2rem;
   }
   small{
     font-size: 1.5rem;
   }
   p,small{
     color: #166296;
     padding: 2rem;
   }
   .contact-btn{
     margin: 3rem;
     padding:  1rem 3rem;
     background: none;
     border: 1px solid rgba(24, 130, 138,.5);
     border-radius: .6rem;
     color: #FD7C7C;
     font-weight: 600;
     transition: 0.5s;
      &:hover{
     color: lightgreen;
  text-decoration: none;
  border-color: lightgreen;
   }
   }
 }
 .com-footer{
     text-align: center;
     background-color: coral;
 }
</style>
