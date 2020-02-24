<template lang="pug">
  nav.m-navigation-link-menu
    ul.m-navigation-link-menu__list
      li.m-navigation-link-menu__list__item(v-for="link in links")
        NLink.m-navigation-link-menu__list__item__link(:to="link.path" active-class="m-navigation-link-menu__list__item__link--active") {{link.title}}
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.m-navigation-link-menu {
  &__list {
    display: grid;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      &__link {
        font-size: 1.5rem;
        font-weight: 800;
        color: #fff;
        text-decoration: none;
        opacity: 0.6;
        transition: var(--transition);

        &--active,
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
