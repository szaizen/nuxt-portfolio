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
      <div>
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
    <section class="contact">
      <h2 class="section-title">
        お問い合わせ
      </h2>
      <contactForm />
    </section>
  </div>
</template>

<script>
import ArticleBody from '~/components/common/ArticleBody'
import SliderList from '~/components/common/SliderList'
import ModalItem from '~/components/common/ModalItem'
import contactForm from '~/components/common/contactForm'

import slideImage1 from '~/assets/images/slide1.jpg'
import slideImage2 from '~/assets/images/slide2.jpg'
import slideImage3 from '~/assets/images/slide3.jpg'
import slideImage4 from '~/assets/images/slide4.jpg'

export default {
  components: {
    ArticleBody, SliderList, ModalItem, contactForm
  },
  head () {
    return {
      title: 'ポートフォリオサイト',
      titleTemplate: '',
      meta: [
        { hid: 'description', name: 'description', content: 'ポートフォリオサイトのトップページです。プロフィール、開発実績が載っております。' }
      ]
    }
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
        { src: slideImage1, alt: '画像1' },
        { src: slideImage2, alt: '画像2' },
        { src: slideImage3, alt: '画像3' },
        { src: slideImage4, alt: '画像4' }
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
