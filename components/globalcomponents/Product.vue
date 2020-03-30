<template>
  <section>
    <Social class="social" />
    <div class="content content-background">
      <div class="sidenav">
        <h1> Slikon Pigment</h1>
        <div class="head rtv-1">
          <h2> RTV 1</h2>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
        </div>
        <div class="head rtv-2">
          <h2> RTV 2</h2>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
        </div>
        <div class="head lsr">
          <h2> LSR </h2>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Search</a>
        </div>
      </div>
      <div class="product-content">
        <div class="product-item">
          <h2>SS 9852</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab repellendus nobis!
          </p>
        </div>
        <div class="product-link">
          <div class="btn-product">
            <i class="flaticon-product" />
            <br>
            <button class="btn">
              Online sipariş çok yakında
            </button>
          </div>
          <div class="btn-product">
            <i class="flaticon-deal" />
            <br>
            <button class="btn">
              Hemen teklif alın
            </button>
          </div>
          <div class="btn-product">
            <i class="flaticon-info" />
            <br>
            <button class="btn">
              Daha fazla bilgi alın
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Social from '@/components/globalcomponents/Social'
export default {
  components: {
    Social
  },
  computed: {
    slideSets () {
      return this.$store.getters.getSlideSets
    }
  }
}
</script>
<style lang="less" scoped>
*{
  color: #fff;
  font-family: Arial, sans-serif;
}
.sidenav {
  height: 100%;
  width: 20%;
  overflow-x: hidden;
  float: left;
  padding: 3rem;
  h1 {
    padding-bottom: 1.1rem;
    font-size: 1.8rem;
  }
  .head{
    h2{
      padding: 1rem;
      font-size: 1.5rem;
    }

  }
}
.sidenav a {
  padding: .3rem .3rem .3rem 1rem;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  &:hover{
    color: lightgreen;
  }
}
.product-content{
  width: 70%;
  float: left;
  padding-left: 6rem;
  padding-top:2rem ;
}
.product-item{
  height: 40vh;
  h2{
    font-size: 2rem;
    padding-bottom: 2rem;
    line-height:initial;
  }
  p{
    text-indent: 2rem;
    font-size: 1.1rem;
  }
}
.product-link{
  width: 100%;
  text-align: center;
  .btn-product{
    width: 30%;
    float: left;
    .btn{
      width: 80%;
      border: 1px solid;
      border-radius: .6rem;
      margin-top: 1.3rem;
      font-size: 1.2rem;
      padding: 0 2rem 0 2rem;
      text-align: center;
    }
    .btn:hover{
      background-color: lightgreen;
    }
  }
  [class^="flaticon-"]:before,
[class*=" flaticon-"]:before,
[class^="flaticon-"]:after,
[class*=" flaticon-"]:after {
  font-size: 3rem;
  cursor: pointer;
}
}
</style>
