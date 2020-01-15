<template>
  <div class="page-about">
    <section class="about">
      <h2 class="section-title">
        はじめまして
      </h2>
      <ArticleBody>
        <p>
          フロントエンドエンジニアのぜんちゃんです。<br>
          福岡県出身で、東京歴は社会人歴と同じです。<br>
          HTML、CSS、JavaScriptやjQuery、Vue.js、Nuxt.jsなどフロント周りを得意としており、
          Wordpress、Node.js、Ruby on Railsなどサーバーサイド側や
          Salesforceの経験があります。
        </p>
      </ArticleBody>
    </section>

    <section class="history">
      <h2 class="section-title">
        経歴
      </h2>
      <ArticleBody>
        <h3>高校</h3>
        <p>福岡県立小郡高校</p>
        <h3>大学</h3>
        <p>
          国立大学法人佐賀大学<br>
          文化教育学部人間環境課程地域生活文化分野<br>
        </p>
        <h3>社会人</h3>
        <p>
          2017年4月〜2019年10月<br>
          株式会社パソナテック ITエンジニア職<br>
          Salesforce、SQLServerを用いたデータ移行や運用・保守<br>
          自社コーポレートサイトリニューアル デザイン・開発<br>
          ECサイト（Ebisumart）の運用・保守
        </p>
        <h3>社外活動</h3>
        <p>
          株式会社Another works<br>
          コーポレートサイト、メディアサイトの新規開発（Wordpressの組み込み含む）<br>
        </p>
      </ArticleBody>
    </section>
  </div>
</template>

<script>
import ArticleBody from '~/components/common/ArticleBody'
import ga from '~/assets/js/mixin/ga.js'

export default {
  components: {
    ArticleBody
  },
  mixins: [ ga ],
  head () {
    return {
      title: '自己紹介',
      meta: [
        { hid: 'description', name: 'description', content: 'ポートフォリオサイトの自己紹介ページです。' }
      ]
    }
  }
}
</script>
