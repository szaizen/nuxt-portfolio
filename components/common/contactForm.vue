<template>
  <div>
    <div class="row">
      <div class="title">
        <label for="name">名前</label>
      </div>
      <div class="input">
        <input id="name" v-model.trim="contactData.name" type="text">
      </div>
    </div>
    <div class="row">
      <div class="title">
        <label for="title">タイトル</label>
      </div>
      <div class="input">
        <input id="title" v-model.lazy="contactData.title" type="text">
      </div>
    </div>
    <div class="row">
      <div class="title">
        <label for="inquiry">問い合わせ内容</label>
      </div>
      <div class="input">
        <textarea id="inquiry" v-model="contactData.inquiry" />
      </div>
    </div>
    <div class="row">
      <input @click="contactFormSubmit" type="submit" value="送信">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactData: {
        title: '',
        name: '',
        inquiry: ''
      }
    }
  },
  methods: {
    contactFormSubmit () {
      console.log('名前：' + this.contactData.name)
      console.log('タイトル：' + this.contactData.title)
      console.log('問い合わせ内容：' + this.contactData.inquiry)
    }
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 10px;
}
.input input {
  width: 50%;
  padding: 7px;
  border-radius: 3px;
  border: none;
}
.input textarea {
  width: 100%;
  height: 100px;
  border: none;
}
input[type="submit"] {
  padding: 10px 27px;
  display: block;
  border: none;
  font-size: .8rem;
  background-color: black;
  color: #fff;
}
.title {
  margin: 15px 0 5px;
}
</style>
