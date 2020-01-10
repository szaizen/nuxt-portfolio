<template>
  <div>
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
      <h2 class="section-title">
        {{ qiitaItem.title }}
      </h2>
      <article class="article">
        <div class="head">
          <a :href="qiitaItem.url" target="_blank">Qiitaのページに飛ぶ</a>
          <div>いいねの数：{{ qiitaItem.likes_count }}</div>
          <div>タグ：<span v-for="(value,index) in qiitaItem.tags" :key="index">{{ value.name }}</span></div>
          <div>投稿日：{{ qiitaItem.created_at }}</div>
        </div>
        <div v-html="qiitaItem.rendered_body" />
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_PATH_BASE = process.env.API_PATH_QIITA + 'items/'

export default {
  head () {
    return {
      title: this.qiitaItem.title
    }
  },
  data () {
    return {
      statusCode: ''
    }
  },
  async asyncData ({ params }) {
    try {
      const { data } = await axios.get(API_PATH_BASE + params.id)
      console.log(data)
      return { qiitaItem: data }
    } catch (err) {
      return {
        statusCode: err.response.status,
        message: err.response.data.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .article {
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
  .code-frame {
    overflow: scroll;
    background-color: #ffffff;
    margin: 26px 0;
    padding: 15px 20px;
    font-size: 0.8rem;
    border-radius: 8px;
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
