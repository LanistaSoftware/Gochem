import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      About: '',
      search: '',
      sectors: '',
      documents: '',
      pigmentShow: false,
      blog: '',
      imgurl: 'https://api.lanista.com.tr/assest/images/',
      sector: '',
      slideactive: '',
      product: '',
      productone: '',
      pigments: '',
      document: '',
      galeries: '',
      info: '',
      fileUrl: 'https://api.lanista.com.tr/assest/file/',
      productoneset: {
        name: 'name',
        desc: 'desc',
        category: 'category'
      },
      videoid: '',
      employezero: [],
      employeone: [],
      sectoritems: {
        title: '',
        desc: ''
      },
      blogs: '',
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
      references: [],
      customSlideIndex: null,
      aboutUs:
        {
          ownername: 'Gökhan Özenoğlu',
          profileImg: require('./../assets/img/profile.jpg'),
          company: 'Gochem Silikon',
          title: 'Yönetim Kurulu Başkanı',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat natus praesentium, aliquam aperiam quas eligendi similique tenetur, dicta illum reprehenderit nihil error enim. Nobis voluptas et similique vel! Fugit asperiores illo nemo quia, excepturi totam eos modi, maiores expedita, ipsum incidunt iusto! Ullam, magni accusantium? Voluptas qui quis quasi, iste et suscipit a alias velit quidem magnam, facere dolorem, beatae dignissimos! Totam quo consectetur provident, quis ad odit placeat impedit. Soluta obcaecati neque, et veniam iure rerum voluptate reiciendis commodi hic eligendi atque, aperiam deserunt ullam eum id ut. Dolor omnis aliquam illum perferendis ad hic laboriosam nesciunt provident!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid culpa facilis provident temporibus dignissimos laudantium hic facere magni tenetur! Ducimus rerum voluptatem tempora tempore labore sit velit deserunt animi odio consequatur iste et ut voluptas aliquam incidunt vel ratione nostrum sapiente recusandae obcaecati, quam quis! Assumenda, ipsum aperiam? Animi facilis iure alias earum, cum, ullam numquam at natus quam, sunt rerum voluptatibus doloremque officia in fugit dolores. Sapiente ratione modi minus quis ducimus? Cupiditate veritatis voluptate facere officia eveniet nulla delectus sint alias impedit dolor officiis repudiandae ex cum, vel in ipsum porro accusamus ut quasi.',
          autograph: require('../assets/img/beyaz.png')
        },
      products: [
        {
          id: 1,
          categoryName: 'Slikon Pigment',
          productGroup: [
            {
              productName: '',
              productDescription: ''
            }
          ]
        },
        {
          id: 4,
          categoryName: 'RTV 1',
          productGroup: [
            {
              productName: 'SS 9852',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            },
            {
              productName: 'SS 265',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            }
          ]
        },
        {
          id: 2,
          categoryName: 'RTV 2',
          productGroup: [
            {
              productName: 'SS 9852',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            },
            {
              productName: 'SS 9852',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            },
            {
              productName: 'SD 9852',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            },
            {
              productName: 'AR 52',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            }
          ]
        },
        {
          id: 3,
          categoryName: 'LSR',
          productGroup: [
            {
              productName: 'SS 9852',
              productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ab possimus, consequatur  repudiandae eveniet vitae velit dolorum sint fugiat necessitatibus est obcaecati cumque, eos iste neque, sapiente eum consequuntur exercitationem ullam culpa soluta. Minima optio eaque soluta ipsam, quia quidem dicta et fugiat quisquam sapiente, explicabo dignissimos iusto adipisci? Ratione aut laboriosam error  repudiandae debitis saepe eligendi quos natus, nemo non architecto consequatur cum autem culpa maxime necessitatibus a. Enim, nemo reprehenderit exercitationem odio harum blanditiis illum, sint fuga impedit eligendi asperiores, minus accusamus ullam cum. Eos, nostrum nihil? Sed ullam deserunt cum aut vero corporis dicta atque quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nobis possimus non quaerat sed. Impedit dignissimos sint eligendi eaque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi inventore nesciunt consequatur unde! Sapiente, pariatur sunt ut architecto ipsum velit unde, iure beatae tempora, inventore suscipit ab  repellendus nobis!'
            }
          ]
        }
      ],
      searchStatus: false
    }),
    mutations,
    actions,
    getters
  })
}
export default createStore
