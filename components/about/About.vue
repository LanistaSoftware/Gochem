<template>
  <section id="about">
    <div class="content content-background overflow-scroll clearfix">
      <div class="about-container clearfix">
        <div class="about-profile">
          <div class="profile-img">
            <img class="radius-1em" :src="'https://api.lanista.com.tr/assest/images/'+getAbout.imgUrl" alt="">
          </div>
          <div class="about-information">
            <h2>{{ getAboutUs.ownername }}</h2>
            <span>{{ getAboutUs.company }}</span>
            <br>
            <p>{{ getAboutUs.title }}</p>
          </div>
        </div>
        <div class="about-content">
          <div v-html="getAbout.content" />
          <div class="imza">
            <h2 class="d-none">
              {{ getAboutUs.ownername }}
            </h2>
          </div>
        </div>
      </div>
      <div id="c" class="teams-container radius-1em clearfix">
        <div class="overlay radius-1em">
          <div class="teams-header">
            <div class="teams-title">
              <h2>Gochem Silikon Ekibi</h2>
            </div>
          </div>
          <div class="teams-head-card clearfix">
            <div v-for="item in employezero" :key="item._id" class="twin-card f-left">
              <div class="image-card">
                <div class="profile-image-container">
                  <img class="radius-circle" :src="imgUrl+item.imgUrl" alt="Profile Image">
                  <p>{{ item.name }}</p>
                  <p>{{ item.task }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="teams-other-card clearfix">
            <div v-for="item in employeone " :key="item._id" class="quad-card">
              <div class="image-card">
                <div class="profile-image-container">
                  <img class="radius-circle" :src="imgUrl+item.imgUrl" alt="Profile Image">
                  <p>{{ item.name }}</p>
                  <p>{{ item.task }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      getAbout: 'getAbout',
      getAboutUs: 'getAboutUs',
      employezero: 'employezero',
      employeone: 'employeone',
      imgUrl: 'imgUrl'
    })
  },
  created () {
    this.getAboutUsAction()
    this.getEmploye()
  },
  mounted () {
    this.$store.commit('setNullemploye')
  },
  methods: {
    ...mapActions({
      getAboutUsAction: 'getAboutUs',
      getEmploye: 'getEmploye'
    })
  }
}
</script>
<style lang="less" scoped>
/* Create three equal columns that floats next to each other */
.about-container{
  padding: 2rem 1rem 2rem 1rem;
}
.about-profile {
  float: left;
  text-align: center;
  width: 22%;

  h2 {
    font-size: 1.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  span {
    font-size: 1rem;
    padding: 1rem;
  }

  p {
    font-size: 1rem;
    padding-top: .5rem;
  }
.twin-card {
  .profile-image-container:not(:first-child){
    float: left;
  }
  .profile-image-container:not(:last-child){
    float: right;
  }
}
  .profile-img img {
    width: 100%;
  }
}
.about-content {
  padding: 0 0 0 3rem;
  overflow: hidden;
  padding-top:0;

  p {
    text-indent: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    font: menu;
    font-size: 1.06rem;
  }

}

.imza {
  padding-right: 3rem;
  padding-left: 2rem;
  text-align: right;
  padding-top: 3rem;

  h2 {
    font-size: 2rem;
  }

  img {
    width: 15%;
    height: auto;
    padding-top: 2rem;
  }
}

.teams-container {
  margin-top: 2rem;
  background-image: url("../../assets/img/team.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;

  .overlay {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.70);

  }
}

.teams-header {
  width: 100%;
  height: 6rem;
  text-align: center;

  .teams-title {
    display: inline-block;
    width: 33%;
    height: 6rem;
    border-bottom: 1px solid white;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-top: 2rem;
  }

}
.teams-other-card{
  margin-top: 3rem;
  text-align: center;
}

.twin-card {
  width: 50%;
  text-align: center;

}

.quad-card {
  display: inline-block;
  width: 20%;
  text-align: center;

}
.image-card{
  text-align: center;
}
.profile-image-container {
  display: inline-block;
  width: 13rem;
  margin: 3rem 3rem;
  text-align: center;

  img {
    width: 10rem;
    height: auto;
  }

  p {
    margin-top: 0.5rem;
  }
}
</style>
