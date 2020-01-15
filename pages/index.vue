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
      <ul class="work-list">
        <li v-for="(value, index) in workList" :key="index" class="work-item">
          <div @click="value.open = true">
            <img :src="value.src" class="work__image" alt="">
          </div>
          <ModalItem v-show="value.open" @close="value.open = false" :showAnimation="showAnimation">
            <h3 class="panel__title">
              {{ value.title }}
            </h3>
            <img :src="value.src" class="panel__image" alt="">
          </ModalItem>
        </li>
      </ul>
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
import ga from '~/assets/js/mixin/ga.js'

import slideImage1 from '~/assets/images/slide1.jpg'
import slideImage2 from '~/assets/images/slide2.jpg'
import slideImage3 from '~/assets/images/slide3.jpg'
import slideImage4 from '~/assets/images/slide4.jpg'

import workImage1 from '~/assets/images/work1.png'

export default {
  components: {
    ArticleBody, SliderList, contactForm, ModalItem
  },
  mixins: [ ga ],
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
      },
      workList: [
        { open: false, src: workImage1, title: '制作実績' },
        { open: false, src: slideImage1, title: '制作実績' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .work__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: left;
  }
  .work-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .work-item {
    width: 48%;
  }
</style>
