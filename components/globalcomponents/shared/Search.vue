<template>
  <li class="icon-container first-li" @mouseover="show=true" @mouseleave="show=false">
    <div class="search-input radius-2em">
      <i class="flaticon-search" i />
    </div>
  </li>
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
.icon-container {
  //padding: 0.5rem 0.5rem;
  display: inline-block;
  background-color: transparent;
  vertical-align: middle;
  z-index: 1;

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
</style>
