<template lang="pug">
  img.a-user-avatar(:class="styleClass" :src="srcUrl")
</template>

<script>
import img from "@/assets/image/atoms/img/unknown_user.svg"

export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: "m"
    }
  },
  computed: {
    srcUrl() {
      return this.user.thumbnailUrl || img
    },
    styleClass() {
      return `a-user-avatar--${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped>
.a-user-avatar {
  object-fit: cover;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 100%;
  box-shadow: var(--shadow);

  &--s {
    width: 30px;
    height: 30px;
  }

  &--m {
    width: 60px;
    height: 60px;
  }

  &--l {
    width: 80px;
    height: 80px;
  }
}
</style>
