<template>
  <div>
    <h2 class="section-title">
      Qiita投稿一覧
    </h2>
    <div v-if="statusCode">
      <p>
        エラーが発生しました。<br>
        恐れ入りますが、時間をおいてアクセスして下さい。
      </p>
      <p>
        エラーメッセージ<br>
        {{ message }}
      </p>
    </div>
    <div v-else>
      <ul class="article__list">
        <li v-for="(item, index) in qiitaItems" :key="index" class="article__item">
          <nuxt-link :to="'/qiita/' + item.id">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_PATH = 'https://qiita.com/api/v2/users/szaizen/items'
export default {
  data () {
    return {
      statusCode: ''
    }
  },
  async asyncData () {
    try {
      const { data } = await axios.get(API_PATH)
      return { qiitaItems: data }
    } catch (err) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message
      }
    }
  }
}
</script>

<style scoped>
  .article__item {
    margin-bottom: 10px;
  }
</style>
