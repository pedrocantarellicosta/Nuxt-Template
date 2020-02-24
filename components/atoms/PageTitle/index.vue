<template lang="pug">
  component.a-page-title(:is="element")
    slot
</template>

<script>
export default {
  props: {
    element: {
      type: String,
      required: false,
      default: "h1"
    }
  }
}
</script>

<style lang="scss" scoped>
.a-page-title {
  font-size: 2rem;
  font-weight: 900;
}
</style>
