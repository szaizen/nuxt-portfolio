<template>
  <div class="page-index">
    <section class="about">
      <h2>夏目漱石</h2>
      <div class="article-body">
        <img src="~/assets/images/portrait.png" alt="夏目漱石">
        <p>日本の小説家、評論家、英文学者。本名、夏目 金之助（なつめ きんのすけ）。江戸の牛込馬場下横町（現在の東京都新宿区喜久井町）出身。俳号は愚陀仏。詳細は<a href="https://ja.wikipedia.org/wiki/夏目漱石" target="_blank">ウィキペディア</a>を。</p>
      </div>
    </section>

    <section class="works">
      <h2>代表作</h2>
      <div class="article-body">
        <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
        <ul>
          <li>『吾輩は猫である』（1905年）</li>
          <li>『坊っちゃん』（1906年）</li>
          <li>『草枕』（1906年）</li>
          <li>『三四郎』（1908年）</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import "~assets/scss/variables";

  .about,
  .works {
    h2 {
      display: flex;
      align-items: center;
      margin: 50px 0 30px;
      font-size: 30px;

      &::after {
        content: '';
        display: block;
        flex: 1;
        height: 1px;
        margin-left: 10px;
        background-color: $color-black;
      }
    }
  }

  .article-body {
    h3 {
      font-size: 20px;
      margin: 30px 0 20px;
    }

    p {
      line-height: 1.75;

      + p {
        margin-top: 20px;
      }

      a {
        color: $color-blue;
      }
    }

    ul {
      list-style: circle;
      margin-top: 20px;
      margin-left: 20px;

      li {
        &:nth-of-type(n+2) {
          margin-top: 0.5em;
        }
      }
    }

    img {
      max-width: 100%;
    }
  }
</style>
