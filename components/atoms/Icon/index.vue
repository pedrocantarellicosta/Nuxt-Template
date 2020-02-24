<template lang="pug">
  i.material-icons.a-icon
    slot {{name}}
</template>
<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.a-icon {
  font-size: 1.25em;
}
</style>
