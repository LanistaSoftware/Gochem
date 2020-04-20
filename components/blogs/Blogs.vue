<template>
  <section id="blogs">
    <div class="content content-background overflow-scroll">
      <div v-if="false" class="blogs">
        <div v-for="item in 9" :key="item" class="blogs-content">
          <img class="radius-1em" src="../../assets/img/bg1.jpg" alt="Buraya belgeler gelecek." style="width:100%">
          <a href="#"><h3 class="radius-05em">Slikon Nedir ? </h3></a>
          <h2 class="radius-05em">
            {{ tarih }}
          </h2>
        </div>
      </div>
      <div v-else class="blogs-detail overflow-scroll">
        <div class="button-container clearfix">
          <div class="box-left ">
            <button class="btn radius-05em">
              Önceki <i class="flaticon-left-arrow" />
            </button>
          </div>
          <div class="box-center">
            <button class="btn radius-05em">
              Makaleler <i class="flaticon-up-arrow" />
            </button>
          </div>
          <div class="box-right">
            <button class="btn radius-05em">
              Sonraki <i class="flaticon-next" />
            </button>
          </div>
        </div>
        <div class="blogs-html" v-html="blogData" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      tarih: new Date().getUTCDay() + ' / ' + new Date().getUTCMonth() + ' / ' + new Date().getUTCFullYear(),
      blogData: '<div class="entry"><p>Geçtiğimiz günlerde nöroloji alanında yayınlanan yeni bir araştırmada, birden fazla dil bilmenin kişininbeyin yapısını<strong> değiştireceği</strong> öne sürüldü. Örneğin; birkaç araştırmada iki veya daha fazla dilbilen insanlar ile tek dil bilen insanların beyni karşılaştırıldığında,<strong> kortikal ve sub-kortikal</strong>bölgelerinde gri maddeye ilişkin <strong>önemli farklar </strong>tespit edildi.</p><p>Elde edilen bu bulgular<strong> yeni bir yetenek </strong>kazanıldığında beyin yapısındaki değişimlerleilişkilendiriliyor. Örneğin,piyano çalma, yeni alet kullanmayı öğrenmek gibi yetenek gerektiren eylemler.</p><p>Reading ve Georgetown Üniversiteleri’nden araştırmacılar, çocukluktan yetişkinliğe kadar geçen sürede <strong>birden fazla dil bilmenin</strong> beyin gelişimine etkilerini inceleyen bir araştırma yaptılar.PsyArXiv ve <em>Brain Structure &amp; Function dergilerinde yayınlanacak olan makale gerçekten ilginç verileredayanıyor.</em></p><p>“<strong>İki dillilik(bilingualizm) </strong>nedeniyle beyni etkilenen bölgeleri, dilin her kullanımda nasılkontrol edildiği,kazanıldığı ve işlendiğine bağlı olarak etkileniyor. Bu yapısal değişimler nedeniyle beyninverilen görevleri daha verimli şekilde işlediği düşünülüyor ve iki dilli olduğunuzda gerçekleşen değişimler deyoğunlaşıyor,” diyor baş araştırmacı Christos Pliatsikas.</p><p>Pliatsikas ve arkadaşlarının daha önce yaptığı araştırmada iki dilli ve çok dilli kişilerin beyinlerindeki          yapısal değişimlerin, bu dilleri hangi sıklıkla kullandıklarına bağlı olarak değiştiği bulunmuştu. Yeni          araştırmada, bu değişimler daha derinlemesine araştırılarak, iki dilli ve tek dilli kişilerin çocukluktan,          yetişkinliğin başlangıcına kadar olan dönemdeki beyin gelişimi gözlendi.        </p>        <h3>Katılımcıların Beyin Emarları İncelendi</h3>        <p>         “<strong>Yaşları 3 ila 21</strong> arasında değişen ve bir yada birkaç dil konuşabilen katılımcıların,halka          açık,<strong>manyetik rezonans görüntüsü </strong>verilerini kullandık. Bu veriler sayesinde tüm beyin          yapısını boyutlarını daha küçük bölümlere ayrılabilecek şekilde elde ettik,” diyor Pliatsikas.        </p>        <p>          Araştırmacılar <strong>emar (MRI) </strong>beyin görüntülerine bakarak tek dilli ve iki dilli beyinleri          arasındaki gelişimsel farkları analiz etti. Özellikle<strong> 41 kortikal ve subkortikal</strong> beyin          bölgelerindeki <strong>gri madde</strong> kalınlık,hacim ve yüzey alanını inceledi. Ayrıca 20 beyin yolundaki          <strong>beyaz madde </strong>karakteristiklerini de inceledi .        </p>        <p>          Araştırmacılar gelişmiş istatistikler kullanarak yaşa bağlı gelişimsel gidişattaki sıçramaları da hesaba          kattı.        </p>        <p>          Pliatsikas, Michael Ullman ve meslektaşlarının yaptığı analizler enteresan sonuçlar doğurdu. İlk olarak iki          dillilik nedeniyle beyindeki birkaç bölgenin gelişimi etkileniyor. Örneğin, çocuklukta <strong>beyin biraz            küçülür </strong>fakat bu küçülme iki dilli olunca özellikle beynin bir kaç bölümünde yavaşlıyor.        </p>        <p>          Beynin bu bölümleri, özellikle dil işleme ve kontrolüyle ilişkili olarak, <strong>iki dilli</strong>          olanlarda küçülüyor gibi g<strong>örünmüyor.</strong> İşte bu iki dilli veya çok dilli olanların beyin          bölgelerinin, dil öğrenme,işleme ve kontrolü nedeniyle gelişimsel etkilere karşı <strong>daha esnek          </strong>olduğunu gösteriyor.        </p>        <p>          “Elde ettiğimiz bu bulgular daha öce iki dilli beyninin, beyninin, beyninin, tek dilli beynine oranla yapısal olarak farklılık          gösterdiğini ilişki önceki iddiaları doğrulamakla kalmayıp, yetişkinlerdeki bazı etkilerin gelişimsel          kökenleri olabileceği gösterildi, “diyor Ullman .        </p>       <p>          Araştırmacıların iki dilliliğin beyni nasıl etkilediğine dair elde ettiği yeni bulgular, gelecek nöroloji          çalışmalarını da etkileyebilir. Aslında Pliatsikas,Ullman ve meslektaşlarının çocuklukta iki dilliliğin beyin          gelişimini nasıl etkilediğine ilişkin elde ettiği beyninin, tek dilli beynine oranla yapısal olarak farklılık          gösterdiğini ilişki önceki iddiaları doğrulamakla kalmayıp, yetişkinlerdeki bazı etkilerin gelişimsel          kökenleri olabileceği gösterildi, “diyor Ullman .        </p>       <p>          Araştırmacıların iki dilliliğin beyni nasıl etkilediğine dair elde ettiği yeni bulgular, gelecek nöroloji          çalışmalarını da etkileyebilir. Aslında Pliatsikas,Ullman ve meslektaşlarının çocuklukta iki dilliliğin beyin          gelişimini nasıl etkilediğine ilişkin elde ettiği tek dilli beynine oranla yapısal olarak farklılık          gösterdiğini ilişki önceki iddiaları doğrulamakla kalmayıp, yetişkinlerdeki bazı etkilerin gelişimsel          kökenleri olabileceği gösterildi, “diyor Ullman .        </p>       <p>          Araştırmacıların iki dilliliğin beyni nasıl etkilediğine dair elde ettiği yeni bulgular, gelecek nöroloji          çalışmalarını da etkileyebilir. Aslında Pliatsikas,Ullman ve meslektaşlarının çocuklukta iki dilliliğin beyin          gelişimini nasıl etkilediğine ilişkin elde ettiği beyninin, tek dilli beynine oranla yapısal olarak farklılık          gösterdiğini ilişki önceki iddiaları doğrulamakla kalmayıp, yetişkinlerdeki bazı etkilerin gelişimsel          kökenleri olabileceği gösterildi, “diyor Ullman .        </p>       <p>          Araştırmacıların iki dilliliğin beyni nasıl etkilediğine dair elde ettiği yeni bulgular, gelecek nöroloji          çalışmalarını da etkileyebilir. Aslında Pliatsikas,Ullman ve meslektaşlarının çocuklukta iki dilliliğin beyin          gelişimini nasıl etkilediğine ilişkin elde ettiği tek dilli beynine oranla yapısal olarak farklılık          gösterdiğini ilişki önceki iddiaları doğrulamakla kalmayıp, yetişkinlerdeki bazı etkilerin gelişimsel          kökenleri olabileceği gösterildi, “diyor Ullman .        </p>       <p>          Araştırmacıların iki dilliliğin beyni nasıl etkilediğine dair elde ettiği yeni bulgular, gelecek nöroloji          çalışmalarını da etkileyebilir. Aslında Pliatsikas,Ullman ve meslektaşlarının çocuklukta iki dilliliğin beyin          gelişimini nasıl etkilediğine ilişkin elde ettiği bulgular, iki dilli yetişkinlerin beyninde görülen yapısal          değişkenliklerle ilişkilendirilebilir ya da açıklanabilir.        </p>       <p>          “Sonraki araştırmalarımda, iki dilliliğin özellikle yaşlanan beyin üzerindeki uzun süreli etkileri üzerine          çalışma istiyorum. Eğer iki dillilik beyin yapısını daha verimli kılabiliyorsa, yaşa bağlı beyin bozunmasında,          iki dilli sağlıklı ve hasta bireylerde beyni daha esnek hale getirebilme potansiyeli olabilir mi? “ diyor          Pliatsikas ve araştırmalara devam ediyor.        </p>        <p>          Kaynak: <a            href="https://medicalxpress.com/news/2020-04-explores-effects-bilingualism-brain.html"          >https://medicalxpress.com/news/2020-04-explores-effects-bilingualism-brain.html</a>        </p>        <div id="wpdevar_comment_4" style="width:100%;text-align:left;">          <span            style="padding: 10px;font-size:22px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#000000;"          >Facebook            Yorumları </span>        </div>        <p style="font-style:italic; font-size:1.1em;">          Bu haber 11330 kez görüntülendi.        </p><a          rel="author"          href=""        >Google+</a>      </div>'
    }
  }
}
</script>
<style lang="less" scoped>
.blogs,
.blogs > .blogs-content {
  padding: 1rem 3rem 0 3rem;
  margin-bottom: 2rem;
}
.blogs-html {
  margin-top: 2rem;
}
.blogs-content {
  float: left;
  width: 33%;
  img {
      height: 50vh;
      object-fit: cover;
  }
  h3{
    cursor: pointer;
  }
  h3,h2 {
    border: 1px solid white;
    margin-top: 1rem;
    padding: .5rem 0;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  h3:hover{
    color: lightgreen;
    border-color: lightgreen;
  }
}

.blogs-detail{
  width: 100%;
  height: 100%;
}
.button-container {
  width: 100%;
  display: flex;

  .box-left,.box-right,.box-center {
    width: 33%;
    display: inline-block;

  }
  .box-center{
    text-align: center;
  }
  .box-right{
    text-align: right;
  }

  .btn {
    display: inline-block;
    font-size: 0.8rem;
    text-align: center;
    color: white;
    border: 1px solid white;
    transition: 0.5s;
  }
}

.btn:hover {
  color: lightgreen;
  border-color: lightgreen;

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    color: lightgreen;
  }

}

</style>
