<template>
  <ul class="social-network social-circle">
    <li>
      <div class="search-bar">
        <input type="text">
        <i class="flaticon-search" i />
      </div>
    </li>
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
<style lang="less" scoped>
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
  text-align: center;
}
.search-bar{
  padding-right: 1rem;
  border-radius: 3em;
  display: inline-block;
  background-color:gray;
  height: 2.4rem;
  vertical-align: middle;
// [class^="flaticon-search"]:before {

// }
[class^="flaticon-search"]:hover:before {
  color:lightgreen;

}
  input{
    width: 80%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 2.4vmin;
  }
}
</style>
