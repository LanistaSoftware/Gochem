<template>
  <ul class="social-network social-circle">
    <li v-for="sosyal in social" :key="sosyal.id">
      <a
        :href="sosyal.href"
        :title="sosyal.title"
      ><i
        :class="sosyal.icon"
      /></a>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      social: [
        {
          href: '#',
          title: 'Twitter',
          icon: 'flaticon-twitter'
        },
        {
          href: '#',
          title: 'linkedin',
          icon: 'flaticon-linkedin-1'
        },
        {
          href: '#',
          title: 'Youtube',
          icon: 'flaticon-youtube'
        }
      ]
    }
  }
}
</script>
<style scoped>
/*=========================
  Icons
 ================= */

ul.social-network li {
  display: inline;
  margin-left: 1rem;
}
[class^="flaticon-youtube"]:hover:before {
  color:#ff0000;
}
[class^="flaticon-twitter"]:hover:before {
  color: #33ccff;
}
[class^="flaticon-linkedin-1"]:hover:before {
  color: #007bb7;
}

.social-circle li a {
  display: inline-block;
}
.social-circle li i {
  margin: 0;
  line-height: 4rem;
  text-align: center;
}

[class^="flaticon-"]:before {
  font-size: 1.6rem;
}
</style>
