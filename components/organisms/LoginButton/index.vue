<template lang="pug">
  Button(type="submit" :title="title" :color="color" :border="border" @click="login")
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
      default: 'LOGIN'
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
      login: 'authUser/login'
    })
  }
};
</script>
<style lang="scss" scoped></style>
