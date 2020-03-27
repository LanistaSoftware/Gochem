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
          header: 'Uzman Üretim kadrosu.',
          content: ' Corona virüsü nedeniyle 1 haftalık tatil yapan öğrenciler yarından itibaren uzaktan eğitime geçiyor. Milli Eğitim Bakanlığı konuyla ilgili detaylı bir açıklama yaparak TRT EBA TV (ilkokul-ortaöğretim-lise) uydu frekans bilgilerini paylaştı. MEB aynı zamanda TRT EBA TV kurulumu nasıl yapılır? sorusuna da cevap verdi..'
        },
        {
          index: 3,
          imageUrl: require('../assets/img/bg3.jpg'),
          header: 'Silikonda Çözüm ortağınız',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        }
      ],
      slideIndex: 0,
      references: [
        {
          id: 1,
          name: 'lanista',
          photo: require('../assets/img/beyaz.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'lanista'
        },
        {
          id: 2,
          name: 'referansımız',
          photo: require('../assets/img/whitelogo.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'linke git'
        },
        {
          id: 3,
          name: 'son durum',
          photo: require('../assets/img/coloredlogo.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'lanista sitesine git'
        },
        {
          id: 4,
          name: 'slogann',
          photo: require('../assets/img/play-button.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'lanista.com.tr'
        }
      ],
      customSlideIndex: null
    }),
    mutations: {
      setSlideSets (state, slide) {
        state.slideSets = slide
      },
      setSlideIndex (state, index) {
        state.slideIndex = index
      },
      setReferences (state, reference) {
        state.referance = reference
      },
      changeSlideIndex (state, customSlideIndex) {
        state.customSlideIndex = customSlideIndex
      }
    },
    actions: {
      addReferences (vuexContext, reference) {
        vuexContext.commit('setReferance', reference)
      }
    },
    getters: {
      getSlideSets (state) {
        return state.slideSets
      },
      getSlideIndex (state) {
        return state.slideIndex
      },
      getReferences (state) {
        return state.references
      },
      getCustomIndex (state) {
        return state.customSlideIndex
      }
    }
  })
}
export default createStore
