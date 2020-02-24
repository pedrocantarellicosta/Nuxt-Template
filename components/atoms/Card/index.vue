<template lang="pug">
  component.a-card(:is="element" @submit.prevent="submit")
    slot
</template>

<script>
export default {
  props: {
    element: {
      type: String,
      required: false,
      default: "div"
    }
  },
  methods: {
    submit(e) {
      this.$emit("submit", e)
    }
  }
}
</script>

<style lang="scss" scoped>
.a-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--inner-padding);
  background: var(--card-bg-color);
  border-radius: 8px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  &:hover {
    box-shadow: var(--shadow--hover);
  }
  &:active {
    box-shadow: var(--shadow--active);
  }
}
</style>
