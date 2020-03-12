<template>
  <div>
    <!-- <div class="search-language">
    <div class="search">
      <input id="" type="text" name="">
      <span><i class="flaticon-mail" /></span>
    </div>
    <div class="language">
      <i class="flaticon-mail" />
    </div>
  </div> -->
    <div class="search-language">
      <div class="d-flex justify-content-center">
        <div class="searchbar">
          <input
            class="search_input"
            type="text"
            name=""
            placeholder="Search..."
          >
          <a href="#" class="search_icon"><i class="flaticon-content" /></a>
        </div>
      </div>
      <div class="lang">
        <i class="flaticon-search" />
        <select
          id="language-picker-select"
          class="lang-select"
          name="language-picker-select"
        >
          bde
          <option lang="tr" value="Türkçe">
            tr
          </option>
          <option lang="en" value="English" selected>
            en
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.lang {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 10rem;
  font-size: 1.4rem;
  width: 7rem;
}
.lang-select {
  background-color: transparent;
  border: none;
}
.search-language {
  padding-top: 1.2rem;
}
.flaticon-mail {
  color: white;
  font-size: 1rem;
  width: 1rem;
}

.searchbar {
  border: 1px solid white;
  border-radius: 3rem;
  padding: 0.2rem;
  height: 3rem;
}

.search_input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
  width: 20rem;
  caret-color: blanchedalmond;
}

.searchbar:hover > .search_icon {
  color: white;
  height: 0;
  padding-top: 0.1rem;
}

.search_icon {
  float: right;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  padding: 0.4rem 0.1rem;
}
</style>
