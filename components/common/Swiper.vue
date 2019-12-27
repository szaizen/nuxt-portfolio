<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <swiper-slide><img src="~/assets/images/slide1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/images/slide2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/images/slide3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="~/assets/images/slide4.jpg" alt=""></swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
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

<style scoped>
.swiper-slide img {
  height: auto;
  width: 100%;
}
</style>
