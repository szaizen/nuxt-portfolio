<template>
  <div>
    <h2 class="section-title">
      Qiita投稿一覧
    </h2>
    <ul class="article__list">
      <li v-for="(item, index) in qiitaItems" :key="index" class="article__item">
        <nuxt-link :to="'/qiita/' + item.id">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

const API_PATH = 'https://qiita.com/api/v2/users/szaizen/items'
export default {
  data () {
    return {
      qiitaItems: ''
    }
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(API_PATH)
    return { qiitaItems: data }
  }
}
</script>

<style scoped>
  .article__item {
    margin-bottom: 10px;
  }
</style>
