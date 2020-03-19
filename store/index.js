import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slideSets: [
        {
          header: 'Doğa Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          header: 'Doğa Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        },
        {
          header: 'Doğa Dostu Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        }
        // {
        //   page: '02',
        //   pageTwo: '03',
        //   title: 'Doğa',
        //   titleTwo: 'Dostu Üretim',
        //   content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        // },
        // {
        //   page: '02',
        //   pageTwo: '03',
        //   title: 'Doğa',
        //   titleTwo: 'Dostu Üretim',
        //   content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        // }
      ],
      counter: 0
    },
    mutations: {
      setSlideSets (state, slide) {
        state.slideSets = slide
      },
      setCount (state) {
        state.counter++
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
      },
      addToSlide (vuexContext, slide) {

      },
      removeSlide (vuexContext, slide) {

      },
      counter (vuexContext, counter) {
        vuexContext.commit('setCount', counter)
      }
    },
    getters: {
      getSlideSets (state) {
        return state.slideSets
      },
      getCounter (state) {
        return state.counter
      }
    }
  })
}
export default createStore
