<template>
  <section id="about">
    <div class="content content-background overflow-scroll clearfix">
      <div class="about-container clearfix">
        <div class="about-profile">
          <div class="profile-img">
            <img :src="aboutUs.profileImg" alt="">
          </div>
          <div class="about-information">
            <h2>{{ aboutUs.ownername }}</h2>
            <span>{{ aboutUs.company }}</span>
            <br>
            <p>{{ aboutUs.title }}</p>
          </div>
        </div>
        <div class="about-content">
          <p>
            {{ aboutUs.content }}
            {{ aboutUs.content }}
          </p>
          <div class="imza">
            <h2> {{ aboutUs.ownername }} </h2>
            <img :src="aboutUs.autograph" alt="Signature">
          </div>
        </div>
      </div>
      <div class="teams-container clearfix">
        <div class="overlay">
          <div class="teams-header">
            <div class="teams-title">
              <h2>Gochem Silikon Ekibi</h2>
            </div>
          </div>
          <div class="teams-head-card clearfix">
            <div class="twin-card f-left">
              <div class="image-card">
                <div class="profile-image-container f-right">
                  <img src="https://randomuser.me/api/portraits/men/63.jpg" alt="Profile Image">
                  <p>Gökhan Özenoğlu</p>
                  <p>Yönetim Kurulu Başkanı</p>
                </div>
              </div>
            </div>
            <div class="twin-card f-left clearfix">
              <div class="image-card">
                <div class="profile-image-container f-left">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Image">
                  <p>Gökhan Özenoğlu</p>
                  <p>Yönetim Kurulu Başkanı</p>
                </div>
              </div>
            </div>
          </div>
          <div class="teams-other-card clearfix">
            <div class="quad-card">
              <div class="image-card">
                <div class="profile-image-container">
                  <img src="https://randomuser.me/api/portraits/women/7.jpg" alt="Profile Image">
                  <p>Gökhan Özenoğlu</p>
                  <p>Yönetim Kurulu Başkanı</p>
                </div>
              </div>
            </div>
            <div class="quad-card">
              <div class="image-card">
                <div class="profile-image-container">
                  <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="Profile Image">
                  <p>Gökhan Özenoğlu</p>
                  <p>Yönetim Kurulu Başkanı</p>
                </div>
              </div>
            </div>
            <div class="quad-card">
              <div class="image-card">
                <div class="profile-image-container">
                  <img src="https://randomuser.me/api/portraits/men/99.jpg" alt="Profile Image">
                  <p>Gökhan Özenoğlu</p>
                  <p>Yönetim Kurulu Başkanı</p>
                </div>
              </div>
            </div>
            <div class="quad-card">
              <div class="image-card">
                <div class="profile-image-container">
                  <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="Profile Image">
                  <p>Gökhan Özenoğlu</p>
                  <p>Yönetim Kurulu Başkanı</p>
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
export default {
  data () {
    return {}
  },
  computed: {
    aboutUs () {
      return this.$store.getters.getAboutUs
    }
  }
}
</script>
<style lang="less" scoped>
/* Create three equal columns that floats next to each other */
.about-profile {
  float: left;
  text-align: center;
  width: 22%;
  height: 100%;

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

  .profile-img img {
    width: 100%;
    border-radius: 10%;
  }
}

.about-content {
  padding: 1rem;
  overflow: hidden;

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
  border-radius: 2em;
  background-image: url("../../assets/img/team.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;

  .overlay {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 2em;

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
  width: 10rem;
  margin: 3rem 3rem;
  text-align: center;

  img {
    width: 9rem;
    height: auto;
    border-radius: 50%;
  }

  p {
    margin-top: 0.5rem;
  }
}
</style>
