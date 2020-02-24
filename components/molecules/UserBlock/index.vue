<template lang="pug">
  .m-user-block
    UserAvatar.m-user-block__avatar(:user="user")
    span.m-user-block__name {{user.username}}
</template>

<script>
import UserAvatar from '@/components/atoms/UserAvatar/';

export default {
  components: { UserAvatar },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      username: this.user.username || this.user.name || ''
    };
  }
};
</script>

<style lang="scss" scoped>
.m-user-block {
  display: flex;

  &__avatar {
    width: var(--input-height);
    height: var(--input-height);
  }

  &__name {
    display: flex;
    align-items: center;
    margin-left: 2px;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
