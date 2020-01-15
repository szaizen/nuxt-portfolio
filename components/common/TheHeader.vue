<template>
  <header class="header">
    <div class="header-inner">
      <h1>
        <nuxt-link to="/" class="gnav">
          my-portfolio
        </nuxt-link>
      </h1>
      <div>
        <nuxt-link to="/qiita" class="gnav">
          Qiita
        </nuxt-link>
        <nuxt-link to="/about" class="gnav">
          自己紹介
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    background-color: $color-gray;
  }

  .header-inner {
    height: 60px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: inherit;
    }
  }

  .gnav {
    margin-right: 15px;
    transition: all 0.5s;
    &:nth-last-child(1) {
      margin-right: 0;
    }
    &:hover {
      opacity: 0.6;
    }
  }

</style>
