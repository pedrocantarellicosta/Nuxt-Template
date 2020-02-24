<template lang="pug">
  Card.o-profile-card(:element="element")
    label.o-profile-card__avatar
      UserAvatar.o-profile-card__avatar__image(:user="user" size="l")
      input(v-if="edditable" type="file" accept="image/*" ref="image" hidden @input="onInput")
    dl.o-profile-card__item
      dt.o-profile-card__item-title User Name
      dd.o-profile-card__item-data
        span(v-if="mode === 'show'") {{user.username || '未設定'}}
        Input(v-if="edditable" :initialValue="user.username" ref="username" @input="onInput" required autocomplete="username")
    dl.o-profile-card__item
      dt.o-profile-card__item-title Email
      dd.o-profile-card__item-data
        span(v-if="mode === 'show'") {{user.email || '未設定'}}
        Input(v-if="edditable" :initialValue="user.email" ref="email" type="email" @input="onInput" required autocomplete="email" :readonly="mode === 'registory'" )
    dl.o-profile-card__item
      dt.o-profile-card__item-title Age
      dd.o-profile-card__item-data
        span(v-if="mode === 'show'") {{user.age || '未設定'}}
        Input(v-if="edditable" :initialValue="user.age" ref="age" type="number" @input="onInput" required autocomplete="age")
    dl.o-profile-card__item
      dt.o-profile-card__item-title Country
      dd.o-profile-card__item-data
        span(v-if="mode === 'show'") {{user.country || '未設定'}}
        Input(v-if="edditable" :initialValue="user.country" ref="country" @input="onInput" required autocomplete="country")
</template>

<script>
import Card from '@/components/atoms/Card/';
import UserAvatar from '@/components/atoms/UserAvatar/';
import Input from '@/components/atoms/Input/';
import Button from '@/components/atoms/Button/';
import LogoutButton from '@/components/organisms/LogoutButton/';

export default {
  components: { Card, UserAvatar, Input, Button, LogoutButton },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'show',
      validator: value => {
        return ['show', 'registory', 'edit'].includes(value);
      }
    },
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    edditable() {
      return ['registory', 'edit'].includes(this.mode);
    },
    element() {
      return this.edditable ? 'form' : 'div';
    }
  },
  methods: {
    loadThumbnail(file) {
      return new Promise((resolve, reject) => {
        // ローカルにある画像ファイルのURLを取得する
        const reader = new FileReader();
        reader.onload = event => {
          resolve(event.target.result);
        };
        reader.onerror = event => {
          reject(event);
        };
        reader.readAsDataURL(file);
      });
    },
    onInput() {
      const { username, email, age, country, image } = this.$refs;
      const that = this;
      const prevThumbnailUrl = this.user.thumbnailUrl;
      const formData = {
        username: username.inputValue,
        email: email.inputValue,
        age: age.inputValue,
        country: country.inputValue,
        thumbnailUrl: prevThumbnailUrl
      };
      this.loadThumbnail(image.files[0])
        .then(src => {
          that.$emit('change', { ...formData, thumbnailUrl: src });
        })
        .catch(() => {
          that.$emit('change', formData);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.o-profile-card {
  --avatar-size: 80px;
  --card-offset: calc(var(--avatar-size) / 4);
  --avatar-offset: calc(-1 * (var(--inner-padding) + var(--card-offset)));
  display: grid;
  margin-top: var(--card-offset);
  gap: var(--margin--base) 0;

  &__avatar {
    position: relative;
    top: var(--avatar-offset);
    justify-self: center;
    margin-bottom: var(--avatar-offset);
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    &-data {
      margin-top: 0.2em;
      font-size: 1.4rem;
    }
  }
}
</style>
