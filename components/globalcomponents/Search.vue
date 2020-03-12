<template>
  <div class="search-language-container">
    <div class="search">
      <div class="search-icon">
        <i class="flaticon-search" />
      </div>
      <div v-if="false" class="search-input">
        <b-form-input />
      </div>
    </div>
    <div class="language">
      <div class="icon-border">
        <ul>
          <li><i class="flaticon-global" /></li>
          <li><span>TR</span></li>
          <li><i class="flaticon-download" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.search-language-container{
 padding-top: 1.4rem;
}
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
