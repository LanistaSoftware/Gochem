import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      slideSets: [
        {
          index: 1,
          imageUrl: require('../assets/img/bg1.jpg'),
          header: 'Doğa Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          index: 2,
          imageUrl: require('../assets/img/bg2.jpg'),
          header: 'Korona Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          index: 3,
          imageUrl: require('../assets/img/bg3.jpg'),
          header: 'Ne Kadar Enteresan Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        }
      ],
      imageUrl: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'],
      slideIndex: 0
    }),
    mutations: {
      setSlideSets (state, slide) {
        state.slideSets = slide
      },
      setSlideIndex (state, index) {
        state.slideIndex = index
      }
    },
    actions: {
      getImgUrl (vuexContext, imageUrl) {
        vuexContext.commit('setImgUrl', imageUrl)
      },
      setSlideIndex (vuexContext, index) {
        vuexContext.commit('setSlideIndex', index)
      }
    },
    getters: {
      getSlideSets (state) {
        return state.slideSets
      },
      getImgUrl (state) {
        return state.imageUrl
      },
      getSlideIndex (state) {
        return state.slideIndex
      }
    }
  })
}
export default createStore
