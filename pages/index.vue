<template>
  <div class="page-index">
    <section class="photo">
      <h2 class="section-title">
        My photo
      </h2>
      <SliderList :option="swiperOption" :data="swiperImage" />
    </section>

    <section class="about">
      <h2 class="section-title">
        プロフィール
      </h2>
      <ArticleBody>
        <p>福岡生まれ、福岡育ち。好きなものは以下。</p>
        <ul>
          <li>幕末志士</li>
          <li>ゲーム</li>
          <li>音楽</li>
          <li>開発</li>
        </ul>
      </ArticleBody>
    </section>
    <section class="work">
      <h2 class="section-title">
        開発実績
      </h2>
      <div id="app">
        <button @click="showModal = true">
          コーポレートサイト
        </button>
        <ModalItem v-show="showModal" @close="showModal = false" :showAnimation="showAnimation">
          <h3 class="panel__title">
            制作実績
          </h3>
          <img class="panel__image" src="~/assets/images/work1.png" alt="">
        </ModalItem>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleBody from '~/components/common/ArticleBody'
import SliderList from '~/components/common/SliderList'
import ModalItem from '~/components/common/ModalItem'
export default {
  name: 'App',
  components: {
    ArticleBody, SliderList, ModalItem
  },
  data () {
    return {
      showModal: false,
      /*
      *   fade : ゆっくり表示
      *   fade-down : 上からゆっくり表示
      */
      showAnimation: 'fade-down',
      swiperImage: [
        { src: '_nuxt/assets/images/slide1.jpg', alt: '画像1' },
        { src: '_nuxt/assets/images/slide2.jpg', alt: '画像2' },
        { src: '_nuxt/assets/images/slide3.jpg', alt: '画像3' },
        { src: '_nuxt/assets/images/slide4.jpg', alt: '画像4' }
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        updateOnImagesReady: true,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
