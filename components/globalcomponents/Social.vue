<template>
  <ul class="social-network social-circle">
    <li>
      <span class="search-bar" @mouseover="show=true" @mouseleave="show=false">
        <transition name="fade">
          <input v-if="show" type="text">
        </transition>
        <i class="flaticon-search" i />
      </span>
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
  display: inline-block;
  vertical-align: middle;
  margin-left: 1rem;
}

[class^="flaticon-youtube"]:hover:before {
  color: #ff0000;
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

.search-bar {
  padding: 0.5rem;
  border: 0.1rem solid white;
  border-radius: 3em;
  display: inline-block;
  background-color: transparent;
  vertical-align: middle;
  cursor: pointer;

      [class^="flaticon-search"]:before {
        font-size: 1.4rem;
      }

      [class^="flaticon-search"]:hover:before {
        color: lightgreen;
      }

      input {
        color:white;
        width: 80%;
        height: 100%;
        background-color: transparent;
        border: none;
        font-size: 2.4vmin;
      }
}
.search-bar:hover {
  background-color: rgba(144,238,144,0.3);
  cursor: pointer;
  transition: 2s;
  }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transition: opacity 5s;
}
</style>
