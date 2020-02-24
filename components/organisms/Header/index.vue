<template lang="pug">
  Header.o-header
    NavigationLinkMenu.o-header__nav(v-if="loggedIn" :links="links")
    NLink.o-header__logo(to="/")
      img.o-header__logo__img(:src="logoSrc")
    LoginButton.o-header__auth(v-if="showLoginButton" color="primary")
    NLink.o-header__auth(v-if="loggedIn" to="/mypage")
      UserAvatar( size="s" :user="user")
</template>

<script>
import LoginButton from '@/components/organisms/LoginButton/';
import NavigationLinkMenu from '@/components/molecules/NavigationLinkMenu/';
import UserAvatar from '@/components/atoms/UserAvatar/';
import logo from '@/assets/image/logo/white.svg';

export default {
  components: { NavigationLinkMenu, LoginButton, UserAvatar },
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
    links: {
      type: Array,
      required: false,
      default: null
    }
  },
  data() {
    return {
      logoSrc: logo
    };
  },
  computed: {
    showLoginButton() {
      return !this.onlyLogo && this.user && !this.user.loggedIn;
    },
    loggedIn() {
      return !this.onlyLogo && this.user && this.user.loggedIn;
    }
  }
};
</script>

<style lang="scss" scoped>
.o-header {
  --m: var(--margin--base);
  display: grid;
  grid-template:
    '   .     .     .       .     .      .     .' 1fr
    '   .    nav    .     logo    .    auth    .' auto
    '   .     .     .       .     .      .     .' 1fr /
    var(--m) 1fr var(--m) auto var(--m) 1fr var(--m);
  height: 100%;
  background: var(--color--theme);

  &__logo {
    grid-area: logo;
    &__img {
      width: auto;
      height: var(--input-height);
      object-fit: contain;
    }
  }

  &__nav {
    grid-area: nav;
  }

  &__auth {
    grid-area: auth;
    justify-self: flex-end;
    height: var(--input-height);
  }
}
</style>
