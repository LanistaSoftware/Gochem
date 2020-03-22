import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      slideSets: [
        {
          index: 1,
          imageUrl: require('../assets/img/bg1.jpg'),
          header: 'Doğa Dostu Üretim',
          content: ' Sürdürülebilir bir gelecek için daha yaşanabilir bir dünya hedefi doğrultusunda hareket eden Zorluteks, doğa dostu akıllı üretim teknolojileri, etkin enerji yönetimi ve geri dönüşüm uygulamalarının yanı sıra 11 ton siyah boya geri kazanımı ve dünya ortalamalarının çok üzerinde su tasarrufu ile doğayı korumaya katkı sağlıyor. Şirket ayrıca, katı atıklarının yüzde 90’nını da geri dönüşüm ile yeniden değerlendiriyor..'
        },
        {
          index: 2,
          imageUrl: require('../assets/img/bg2.jpg'),
          header: 'Korona Dostu Üretim',
          content: ' Corona virüsü nedeniyle 1 haftalık tatil yapan öğrenciler yarından itibaren uzaktan eğitime geçiyor. Milli Eğitim Bakanlığı konuyla ilgili detaylı bir açıklama yaparak TRT EBA TV (ilkokul-ortaöğretim-lise) uydu frekans bilgilerini paylaştı. MEB aynı zamanda TRT EBA TV kurulumu nasıl yapılır? sorusuna da cevap verdi..'
        },
        {
          index: 3,
          imageUrl: require('../assets/img/bg3.jpg'),
          header: 'Ne Kadar Enteresan Üretim',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        }
      ],
      imageUrl: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'],
      slideIndex: 0,
      referance: [
        {
          id: 1,
          photo: require('../assets/img/beyaz.png')
        },
        {
          id: 2,
          photo: require('../assets/img/ref.png')
        },
        {
          id: 3,
          photo: require('../assets/img/ref2.png')
        },
        {
          id: 4,
          photo: require('../assets/img/welove.png')
        }
      ]
    }),
    mutations: {
      setSlideSets (state, slide) {
        state.slideSets = slide
      },
      setSlideIndex (state, index) {
        state.slideIndex = index
      },
      setReferance (state, referans) {
        state.referance = referans
      }
    },
    actions: {
      getImgUrl (vuexContext, imageUrl) {
        vuexContext.commit('setImgUrl', imageUrl)
      },
      setSlideIndex (vuexContext, index) {
        vuexContext.commit('setSlideIndex', index)
      },
      addReferans (vuexContext, referans) {
        vuexContext.commit('setReferance', referans)
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
      },
      getReferans (state) {
        return state.referance
      }
    }
  })
}
export default createStore
