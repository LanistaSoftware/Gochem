<template>
  <section>
    <Social class="social clearfix" />
    <div class="content content-background">
      <div class="sidenav overflow-scroll sektor-link">
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
      <div class="sektor-container">
        <div class="sektor-row">
          <h3>TEKSTİL</h3>
          <SektorCarousel class="skCar" />
        </div>
        <div class="sektor-row">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident maxime optio ea. Repellat incidunt perspiciatis eveniet in repellendus, pariatur ratione possimus deserunt vero architecto, velit minus, inventore aliquid. Labore odio alias modi eum unde, totam molestias tempore dolorum maxime, commodi inventore asperiores, atque explicabo sunt. Sint itaque neque ullam sapiente libero ducimus distinctio, ad, velit, numquam repellendus possimus a nemo quisquam? Non reprehenderit nihil quos, suscipit fuga, labore velit cumque mollitia minima eaque doloribus tenetur adipisci, accusamus ab sunt animi voluptates. Iusto recusandae, a fugit consequatur nostrum sed quibusdam ipsa facere culpa id ab eos ipsam numquam unde deserunt exercitationem enim consectetur illum consequuntur blanditiis sequi. Quidem vel porro dolorem! Ea voluptatem eveniet et quidem eos ab nisi ex.</p>
          <div class="btn-link-sector">
            <div class="sektor-btn">
              <button class="btn">
                <span class="sektor-btn-info">
                  Daha fazla teklif al !
                </span>
              </button>
            </div>
            <div class="sektor-btn">
              <button class="btn">
                <span class="sektor-btn-info">
                  Uygun ürünü bul
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
import Social from '@/components/globalcomponents/Social'
import SektorCarousel from '@/components/sektors/SektorCarousel'
export default {
  components: {
    Social,
    SektorCarousel
  }
}
</script>
<style lang="less" scoped>
.sidenav {
  height: 55vh;
    width: 15%;
    float: left;
    margin-top: 4rem;
  a {
    display: block;
    font-size: 1.2rem;
    border-bottom: 1px solid;
    border-bottom-style: groove;
    margin-left: 1rem;
    margin-right: 5rem;
    padding-top: 1rem;
    line-height: 2.5rem;
}
}
.sektor-container{
    width: 80%;
    float: left;
    h3{
        text-align: center;
    }
    .sektor-row{
        width: 50%;
        float: left;
        .skCar{
            margin-left:3rem;
        }
        p{
            font-size: 1rem;
            margin: 4rem 0 0 3rem;
            line-height: 1.3rem;
        }
    }
}
.carousel-sektor{
    border: 1px solid;
    height: 50vh;
}
  .btn-link-sector {
    width: 100%;
    text-align: center;
    margin-top: 2rem;

    .sektor-btn {
      width: 50%;
      float: left;

      .btn {
        margin-top: 1.3rem;
        text-align: center;

        .sektor-btn-info {
          font-size: .9rem;
          padding: 1rem 0.5rem;
          text-align: center;
          color: white;
          border: 1px solid dimgray;
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
</style>
