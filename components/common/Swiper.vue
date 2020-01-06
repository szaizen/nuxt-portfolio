<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(entryVal, entryKey) in swiperData" :key="entryKey">
        <img :src="entryVal.src" :alt="entryVal.alt">
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
    data: Array,
    option: Object
  },
  computed: {
    swiperData () {
      const data = this.data
      return data
    },
    swiperOption () {
      const option = this.option
      return option
    }
  }
}
</script>

<style>
.swiper-slide img {
  height: auto;
  width: 100%;
}
</style>
