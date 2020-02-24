<template lang="pug">
  .t-single-page
    Header.t-single-page__header(:user="user" :onlyLogo="onlyLogo" :links="headerMenu")
    PageTitle.t-single-page__title(v-if="title") {{title}}
    .t-single-page__top-option(v-if="$slots.topOption")
      slot(name="topOption")
    main.t-single-page__main(v-if="$slots.main")
      slot(name="main")
    .t-single-page__bottom-option(v-if="$slots.bottomOption")
      slot(name="bottomOption")
</template>

<script>
import PageTitle from '@/components/atoms/PageTitle/';
import Header from '@/components/organisms/Header/';

export default {
  components: {
    Header,
    PageTitle
  },
  props: {
    user: {
      type: Object,
      required: false,
      default: null
    },
    onlyLogo: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    headerMenu: {
      type: Array,
      required: false,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.t-single-page {
  display: grid;
  grid-template:
    'header header header header' 50px
    '  .      .    .    .  ' var(--margin--base)
    '  .     title to       .  ' auto
    '  .      .    .    .  ' var(--margin--base)
    '  .     main main     .  ' auto
    '  .      .    .    .  ' var(--margin--base)
    '  .     bo bo     .  ' minmax(auto, 1fr)
    '  .      .    .    .  ' var(--margin--base) /
    minmax(var(--margin--base), 1fr) minmax(auto, 400px) minmax(auto, 400px) minmax(var(--margin--base), 1fr);
  min-height: 100vh;

  &__header {
    position: sticky;
    top: 0;
    z-index: 2;
    grid-area: header;
    box-shadow: var(--shadow);
  }

  &__title {
    grid-area: title;
    align-self: center;
  }

  &__top-option {
    display: grid;
    grid-area: to;
    grid-auto-flow: column;
    gap: var(--margin--base);
    justify-self: flex-end;
  }
  &__main {
    display: grid;
    grid-area: main;
    grid-auto-flow: row;
    gap: var(--margin--section);
    overflow: visible;
  }

  &__bottom-option {
    display: grid;
    grid-area: bo;
    grid-auto-flow: column;
    gap: var(--margin--base);
    align-self: flex-start;
    justify-self: center;
  }
}
</style>
