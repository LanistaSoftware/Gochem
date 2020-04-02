<template>
  <div class="social-container social">
    <ul class="social-network social-circle">
      <li class="icon-container first-li" @mouseover="show=true" @mouseleave="show=false">
        <span class="search-input">
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <input v-if="show" type="text" size="20" height="48">
          </transition>
          <i class="flaticon-search" i />
        </span>
      </li>
      <li v-for="sosyal in social" :key="sosyal.id" class="icon-container">
        <a
          :href="sosyal.href"
          :title="sosyal.title"
        >
          <i
            :class="sosyal.icon"
          /></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
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
          icon: 'flaticon-youtube-rounded-square-logo'
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
  display: inline-block;
  vertical-align: middle;
}

ul li {
  cursor: pointer !important;
}
[class^="flaticon-twitter"]:before,[class^="flaticon-linkedin-1"]:before,[class^="flaticon-youtube"]:before {
  font-size: 1.5rem;
}
[class^="flaticon-search"]:before{
  font-size: 1.5rem;
}
// [class^="flaticon-youtube"]:hover:before {
//   color: #ff0000;
// }
// [class^="flaticon-twitter"]:hover:before {
//   color: #33ccff;
// }
// [class^="flaticon-linkedin-1"]:hover:before {
//   color: #007bb7;
// }
.first-li{
  position: relative;
  left: 0.6rem;
}
.icon-container {
  height: 2rem;
  padding: 0.5rem 0.5rem;
  display: inline-block;
  background-color: transparent;
  vertical-align: middle;

  .search-input{
  padding: 0.7rem 0.3rem 0.5rem 0.3rem;
  border-radius: 3em;
  transition: 1.3s;
  }

  [class^="flaticon-search"]:hover:before {
    color: lightgreen;
  }

  input {
    color: white;
    border: none;
    background: transparent;
    vertical-align: middle;
    z-index: 1000;
  }
}

.search-input:hover {
  background-color: rgba(144, 238, 144, 0.3);
}
</style>
