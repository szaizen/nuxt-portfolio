<template>
  <header class="header">
    <div class="header-inner">
      <h1>
        <nuxt-link to="/">
          my-portfolio
        </nuxt-link>
      </h1>
      <div>
        <nuxt-link to="/qiita">
          Qiita
        </nuxt-link>
        <nuxt-link to="/about">
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
</style>
