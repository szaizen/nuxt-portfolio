export default {
  mounted () {
    // Router 遷移をキャッチする
    console.log('mounted')
    this._runCallbackAfterVueMeta(this._ga)
  },
  watch: {
    $route () {
      // クエリの変更をキャッチする
      console.log('watch')
      this._runCallbackAfterVueMeta(this._ga)
    }
  },
  methods: {
    _ga () {
      if (!process.browser) { return }
      const gaPayload = {
        page: this.$route.fullPath,
        title: window.document.title,
        location: window.location.href
      }
      console.log(gaPayload)
      this.$ga.page(gaPayload)
    },
    _runCallbackAfterVueMeta (callback) {
      // DOM 描画後、非同期で実行する
      console.log('DOM 描画後、非同期で実行する')
      this.$nextTick(() => {
        setTimeout(callback, 400)
      })
    }
  }
}
