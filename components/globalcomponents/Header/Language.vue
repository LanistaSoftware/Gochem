<template>
  <div class="language-container">
    <table @mouseleave="show=false" @click="show=false">
      <tbody>
        <tr>
          <td>
            <button name="select-lang" aria-label="Justify" @click="selectLang()">
              {{ selectedLang }}
            </button>
          </td>
          <td rowspan="2">
            <button name="lang" aria-label="Justify" @mouseover="show=true" @click="show=true">
              <i class="flaticon-global" />
            </button>
          </td>
        </tr>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear>
          <tr v-show="show">
            <td>
              <button name="order-lang" @click="selectLang()">
                {{ otherLang }}
              </button>
            </td>
          </tr>
        </transition>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      lang: ['EN', 'TR'],
      selectedLang: null,
      otherLang: null
    }
  },
  created () {
    this.selectLang()
  },
  methods: {
    selectLang () {
      if (this.selectedLang == null) {
        this.selectedLang = this.lang[1]
        this.otherLang = this.lang[0]
      } else if (this.selectedLang === this.lang[0]) {
        this.selectedLang = this.lang[1]
        this.otherLang = this.lang[0]
      } else {
        this.selectedLang = this.lang[0]
        this.otherLang = this.lang[1]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.language-container{
  float: right;
}
table, tr, td{
  padding-top: .5rem;
  padding-bottom: .1rem;
  padding-left: .4rem;
  text-align: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  vertical-align: middle;
  font-size: 1.2rem;
}
button{
  color: white;
  background-color: transparent;
  border: none;
}
button:hover{
  color:lightgreen;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
table:hover{
.flaticon-global:before {
    color: lightgreen;
    -webkit-transition: 0.4s !important;
    -o-transition: 0.4s !important;
    transition: 0.4s !important;
}
}
button:active{
  color: coral;
  -webkit-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;
}

.fade-enter-active, .fade-leave-active {
  -webkit-transition: opacity .6s ;
  -o-transition: opacity .6s ;
  transition: opacity .6s ;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0 ;
}
</style>
