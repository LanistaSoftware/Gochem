<template>
  <div class="search-language-container">
    a
  </div>
</template>
<script>
export default {
  data () {
    return {
      showInput: false,
      searchText: null
    }
  },
  methods: {
    isNull () {
      if (this.searchText == null) {
        this.showInput = false
      } else {
        this.showInput = true
      }
    }
  }
}
</script>
<style lang="less" scoped>

.search, .language{
  width: 50%;
  float: left;
}

.search-icon{
  margin-left: 3rem;
  width: 2.6rem;
  height: 2.6rem;
  border: 0.1rem solid white;
  border-radius: 100%;
    i{
      position: relative;
      top:30%;
      left: 30%;
    }
}

ul{
  border: 0.12rem solid white;
  text-align: center;
  padding:.7rem;
  border-radius: 40%;
}
li{
  display: inline;
  color: white;
  font-size: 0.7rem;
  i,span{
    padding:0.2rem;
    }
}
[class^="flaticon-"]:before {
font-size: 1.1rem;
}

</style>
