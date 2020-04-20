<template>
  <section id="portfolio">
    <div class="content content-background overflow-scroll">
      <div v-if="false" class="portfolio">
        <div v-for="item in 9" :key="item" class="portfolio-content">
          <img class="radius-1em" src="../../assets/img/bg1.jpg" alt="Buraya belgeler gelecek." style="width:100%">
          <a href="#">
            <h3 class="radius-05em">oekotex </h3>
          </a>
        </div>
      </div>
      <div v-else class="portfolio-detail overflow-scroll">
        <div class="button-container clearfix">
          <div class="box-left ">
            <button class="btn radius-05em">
              Önceki <i class="flaticon-left-arrow" />
            </button>
          </div>
          <div class="box-center">
            <button class="btn radius-05em">
              Makaleler <i class="flaticon-up-arrow" />
            </button>
          </div>
          <div class="box-right">
            <button class="btn radius-05em">
              Sonraki <i class="flaticon-next" />
            </button>
          </div>
        </div>
        <div class="portfolio-document" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.portfolio,
.portfolio>.portfolio-content {
  padding: 1rem 3rem 0 3rem;
}

.portfolio-document {
  margin-top: 2rem;
}

.portfolio-content {
  float: left;
  width: 33%;

  img {
    height: 50vh;
    object-fit: cover;
  }

  img:hover {
    z-index: 2;
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    -moz-transform: scale(1.01);
    transform: scale(1.01);
    cursor: pointer;
    border: 1px solid white;
  }

  h3 {
    border: 1px solid white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding: .5rem 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  h3:hover {
    color: lightgreen;
    border-color: lightgreen;
  }
}
.portfolio-detail{
  width: 100%;
  height: 100%;
}
.button-container {
  width: 100%;
  display: flex;

  .box-left,.box-right,.box-center {
    width: 33%;
    display: inline-block;

  }
  .box-center{
    text-align: center;
  }
  .box-right{
    text-align: right;
  }

  .btn {
    display: inline-block;
    font-size: 0.8rem;
    text-align: center;
    color: white;
    border: 1px solid white;
    transition: 0.5s;
  }
}

.btn:hover {
  color: lightgreen;
  border-color: lightgreen;

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    color: lightgreen;
  }

}
</style>
