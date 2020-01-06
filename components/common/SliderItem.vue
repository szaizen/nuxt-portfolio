<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(value, index) in swiperData" :key="index">
        <img :src="value.src" :alt="value.alt">
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    option: {
      type: Object,
      required: true
    }
  },
  computed: {
    swiperData () {
      return this.data
    },
    swiperOption () {
      return this.option
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
