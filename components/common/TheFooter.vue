<template>
  <footer class="footer">
    © my-portfolio.<font-awesome-icon style="width: 1.25em;" icon="coffee" />
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped lang="scss">
  .footer {
    background-color: $color-gray;
    text-align: center;
    line-height: 30px;
  }
</style>
