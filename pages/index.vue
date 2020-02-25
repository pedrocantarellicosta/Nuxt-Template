<template lang="pug">
  SinglePage
    template(slot="main")
      .container
        div
          h1.title
            | Nuxt-Template
          h2.subtitle
            | Original Nuxt.js templates in Atomic Design
          .links
            a.button--green(href="https://nuxtjs.org/" target="_blank")
              | Documentation
            a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank")
              | GitHub
        Button(@click="onClick1")
          | モーダル開くよ
        Button(@click="onClick2")
          | モーダル開くよ
    template(slot="modal")
      Modal(ref="modal1")
        ProfileCard(:user="user")
      Modal(ref="modal2")
        | ユーザーつくるよ
</template>

<script>
import SinglePage from "@/components/templates/SinglePage"
import ProfileCard from "@/components/organisms/ProfileCard"
import Button from "@/components/atoms/Button"
import Modal from '@/components/molecules/Modal'
export default {
  components: {
    SinglePage,
    ProfileCard,
    Button,
    Modal
  },
  data(){
    return {
      user: {
  email: "8beeeaaat@gmail.com",
  locale: "ja",
  username: "8beeeaaat",
  age: 30,
  thumbnailUrl: "https://avatars3.githubusercontent.com/u/57888149?s=40&v=4",
  loggedIn: true
}
    }
  },
  methods: {
    onClick1() {
      this.$refs.modal1.open()
    },
    onClick2() {
      this.$refs.modal2.open()
    }
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>
