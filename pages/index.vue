<template>
  <div class="page-index">
    <section class="photo">
      <h2 class="section-title">
        My photo
      </h2>
      <Swiper />
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
      <div id="app">
        <button @click="showModal = true">
          コーポレートサイト
        </button>
        <modal v-if="showModal" @close="showModal = false" />
      </div>
    </section>
  </div>
</template>

<script>
import ArticleBody from '~/components/common/ArticleBody'
import Swiper from '~/components/common/Swiper'
import Modal from '~/components/common/Modal'
export default {
  name: 'App',
  components: {
    ArticleBody, Swiper, Modal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>
