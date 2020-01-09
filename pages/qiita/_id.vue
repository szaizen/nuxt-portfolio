<template>
  <div>
    <h2 class="section-title">
      {{ qiitaItems.title }}
    </h2>
    <article>
      <div class="head">
        <a :href="qiitaItems.url" target="_blank">Qiitaのページに飛ぶ</a>
        <div>いいねの数：{{ qiitaItems.likes_count }}</div>
        <div>タグ：<span v-for="(value,index) in qiitaItems.tags" :key="index">{{ value.name }}</span></div>
        <div>投稿日：{{ qiitaItems.created_at }}</div>
      </div>
      <div v-html="qiitaItems.rendered_body"></div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
const API_PATH_BASE = 'https://qiita.com/api/v2/items/'

export default {
  data () {
    return {
      id: '',
      qiitaItems: ''
    }
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(API_PATH_BASE + params.id)
    console.log(data)
    return { qiitaItems: data }
  }
}
</script>

<style lang="scss">
article {
  line-height: 1.3;
  p {
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
  h1 {
    font-size: 1.4rem;
    margin: 20px 0;
  }
}
.head {
  margin-bottom: 30px;
}
.code-frame {
  background-color: white;
  padding: 15px;
  overflow: scroll;
  font-size: .7rem;
}
</style>
