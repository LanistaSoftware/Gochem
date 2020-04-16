<template>
  <section id="sektors">
    <Sliderp />
    <div class="content content-background">
      <section class="sidenav overflow-scroll">
        <div class="sector-link">
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
          <a href="#contact">Search</a>
        </div>
      </section>
      <div class="sector-container">
        <div class="title-sektor">
          <h3>TEKSTİL</h3>
        </div>
        <div class="sector-row">
          <SectorAlbum class="skCar" />
        </div>
        <div class="sector-row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident maxime optio ea. Repellat incidunt perspiciatis eveniet in repellendus, pariatur ratione possimus deserunt vero architecto, velit minus, inventore aliquid. Labore odio alias modi eum unde, totam molestias tempore dolorum maxime, commodi inventore asperiores, atque explicabo sunt. Sint itaque neque ullam sapiente libero ducimus distinctio, ad, velit, numquam repellendus possimus a nemo quisquam? Non reprehenderit nihil quos, suscipit fuga, labore velit cumque mollitia minima eaque doloribus tenetur adipisci, accusamus ab sunt animi voluptates. Iusto recusandae, a fugit consequatur nostrum sed quibusdam ipsa facere culpa id ab eos ipsam numquam unde deserunt exercitationem enim consectetur illum consequuntur blanditiis sequi. Quidem vel porro dolorem! Ea voluptatem eveniet et quidem eos ab nisi ex.
          </p>
          <SectorAlbum class="skCar-mobil" />
          <div class="btn-link-sector">
            <div class="sector-btn">
              <button class="btn">
                <span class="sector-btn-info">
                  Daha fazla bilgi al !
                </span>
              </button>
            </div>
            <div class="sector-btn">
              <button class="btn">
                <span class="sector-btn-info">
                  Uygun ürün bul !
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectorAlbum from '@/components/sectors/SectorAlbum'
import Sliderp from '@/components/products/ProductSlide'
export default {
  components: {
    SectorAlbum,
    Sliderp
  }
}
</script>
<style lang="less" scoped>
.sidenav{
  margin-top: 5rem;
  height: 80%;
::-webkit-scrollbar-track {
  margin-top:5rem
}
}
.sector-link{
  a {
    display: block;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    padding-top: 1rem;
    line-height: 2.5rem;
    transition: 1s;
  }
}
.carousel {
  margin-top:0 !important;
}
.sector-container {
  width: 80%;
  float: left;
  overflow-x: auto;
  padding-right: 1.5rem;
  height: 100%;
  h3 {
    text-align: center;
  }
  .sector-row {
    margin-top:3rem;
    width: 50%;
    float: left;
    .skCar {
      margin: 3rem 2rem 1rem 1rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.4;
      font-family: Arial;
    }
  }
}

.carousel-sector {
  border: 1px solid;
  height: 50vh;
}

.btn-link-sector {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
   font-family: Georgia;

  .sector-btn {
    width: 50%;
    float: left;

    .btn {
      margin-top: 1.3rem;
      text-align: center;

      .sector-btn-info {
        font-size: 1rem;
        padding: 1rem 0.5rem;
        text-align: center;
        color: white;
        border: 1px solid white;
        border-radius: 1em;
        display: block;
        width: 10rem;
        height: 4rem;
        transition: 0.5s;
      }
    }

    .btn:hover span:hover {
      color: lightgreen;
      border-color: lightgreen;
    }
  }

}
.skCar-mobil{
  display: none;
}
.title-sektor{
  width: 30%;
  margin: auto;
}
</style>
