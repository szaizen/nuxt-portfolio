<template>
  <div class="page-index">
    <section class="about">
      <h2 class="section-title">
        My photo
      </h2>
      <Swiper></Swiper>
    </section>

    <section class="works">
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
  </div>
</template>

<script>
import ArticleBody from '~/components/common/ArticleBody'
import Swiper from '~/components/common/Swiper'
export default {
  components: {
    ArticleBody, Swiper
  }
}
</script>
