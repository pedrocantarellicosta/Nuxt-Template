<template lang="pug">
  Button(type="submit" :title="title" :color="color" :border="border" @click="signout")
    slot {{title}}
</template>
<script>
import { mapActions } from 'vuex';
import Button from '@/components/atoms/Button/';

export default {
  components: { Button },
  props: {
    title: {
      type: String,
      required: false,
      default: 'LOGOUT'
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: 'normal',
      validator: value => {
        return ['normal', 'primary', 'danger'].includes(value);
      }
    }
  },
  methods: {
    ...mapActions({
      logout: 'authUser/logout',
      clear: 'user/clear'
    }),
    signout() {
      this.logout().then(() => {
        this.clear();
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
