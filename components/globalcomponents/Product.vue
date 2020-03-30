<template>
  <div>
    <div class="product">
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos?</p>
        </div>
        <div class="product-link">
          <div class="btn-product">
            <i>icon</i>
            <button>tıkla</button>
          </div>
          <div class="btn-product">
            <i>icon</i>
            <button>tıkla</button>
          </div>
          <div class="btn-product">
            <i>icon</i>
            <button>tıkla</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
.product{
  width: 100%;
  height: 70vh;
  padding: 2rem;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, .4);
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
::-webkit-scrollbar {
  width: .3rem;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, .4);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
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
}
.product-content{
  width: 70%;
  float: left;
  padding-left: 6rem;
  padding-top:2rem ;
}
.product-item{
  h2{
    font-size: 2rem;
    padding-bottom: 2rem;
    line-height:initial;
  }
}
</style>
