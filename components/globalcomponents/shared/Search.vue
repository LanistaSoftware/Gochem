<template>
  <li class="icon-container first-li" @mouseover="show=true" @mouseleave="show=false">
    <span class="search-input">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <input v-if="show" type="text" size="20" height="48">
      </transition>
      <i class="flaticon-search" i />
    </span>
  </li>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
<style lang="less" scoped>

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

.first-li{
  position: relative;
  left: 0.6rem;
}
</style>
