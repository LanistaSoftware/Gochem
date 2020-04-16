/* eslint-disable indent */
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Carousel3d from 'vue-carousel-3d'
import VueCarousel from 'vue-carousel'
import Sticky from 'vue-sticky-directive'
Vue.use(Sticky)
Vue.use(VueCarousel)

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(Carousel3d)
    // Optionally install the BootstrapVue icon components plugin
    // eslint-disable-next-line eol-last
Vue.use(IconsPlugin)