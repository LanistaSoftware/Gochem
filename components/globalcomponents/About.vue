<template>
  <section>
    <Social class="social" />
    <div class="content content-background">
      <div class="about-profile">
        <div class="profile-img">
          <img :src="aboutUs.profileImg" alt="">
        </div>
        <h2>{{ aboutUs.ownername }}</h2>
        <span>{{ aboutUs.company }}</span>
        <br>
        <p>{{ aboutUs.title }}</p>
      </div>
      <div class="about-content">
        <p>
          {{ aboutUs.content }}
        </p>
        <div class="imza">
          <h2> {{ aboutUs.ownername }} </h2>
          <img :src="aboutUs.autograph" alt="Signature">
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
    height: 100%;
    // column-count: 2;
    // column-rule-style: solid;
    // column-rule-width: 1px;
    padding: 1rem;
    overflow: hidden;

    p {
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
      width: 30%;
      padding-top: 2rem;
    }
  }

</style>
