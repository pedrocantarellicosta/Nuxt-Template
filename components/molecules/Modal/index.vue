<template lang="pug">
  .m-modal(:aria-hidden="hidden")
    Card.m-modal__content
      slot
    button.m-modal__close(@click="close")

</template>
<script>
import Card from '@/components/atoms/Card/';
export default {
  name: "modal",
  components: { Card },
  data() {
    return {
      hidden: true
    };
  },
  methods: {
    open() {
      this.toggleFix();
      this.hidden = false;
      this.$emit("open");
    },
    close() {
      this.toggleFix();
      this.hidden = true;
      this.$emit("close");
    },
    toggleFix() {
      const bodyScrollY = $("body").css("top");
      if ($("body").css("position") !== "fixed") {
        $("body").css({
          position: "fixed",
          top: `-${window.scrollY}px`
        });

        return false;
      }

      $("body").css({
        position: "",
        top: ""
      });
      window.scrollTo(0, parseInt(bodyScrollY || "0") * -1);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-modal {
  display: grid;
  align-items: center;
  grid-template-columns: 20px 40px 1fr 40px 20px;
  grid-template-rows: 1fr auto 1fr;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.7);

  &[aria-hidden="true"] {
    transform: scale(0);
    opacity: 0;
    transition: transform 0s 0.3s, opacity 0.3s;
  }

  &[aria-hidden="false"] {
    transform: scale(1);
    opacity: 1;
    transition: opacity 0.25s, transform 0s;
  }

  &__close {
    grid-row: 2;
    grid-column: 4;
    align-self: flex-start;
    justify-self: flex-end;
    position: relative;
    top: 8px;
    right: 8px;
    z-index: 2;
    display: flex;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background-image: url("./modal_close.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__content {
    grid-row: 2;
    grid-column: 2/5;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    padding: 40px 20px;
    overflow: scroll;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    background: #fff;
    max-height: 80vh;
    border-radius: 12pt;
  }
}
</style>
