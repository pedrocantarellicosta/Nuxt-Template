<template lang="pug">
  .a-loader
    img.a-loader__img(:src="src")
</template>

<script>
import logo from "@/assets/image/logo/theme.svg"

export default {
  data() {
    return {
      src: logo
    }
  }
}
</script>

<style lang="scss" scoped>
.a-loader {
  @keyframes loader {
    0% {
      opacity: 0.7;
      transform: scale(0.9);
    }
    70% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
  &__img {
    animation: loader 1.6s ease-in-out infinite;
  }
}
</style>
