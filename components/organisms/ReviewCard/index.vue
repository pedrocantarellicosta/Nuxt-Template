<template lang="pug">
  Card.o-review-card(element="dl")
    dt.o-review-card__title type
    dd.o-review-card__data {{review.type}}
    dt.o-review-card__title name
    dd.o-review-card__data {{review.name}}
    dt.o-review-card__title brand
    dd.o-review-card__data {{review.brand}}
    dt.o-review-card__title manufacturer
    dd.o-review-card__data {{review.manufacturer}}
    dt.o-review-card__title yearOfPurchase
    dd.o-review-card__data {{review.yearOfPurchase}}
    dt.o-review-card__title frequencyOfUse
    dd.o-review-card__data {{review.frequencyOfUse}}
    template(v-for="key in review.numericalReview")
      dt.o-review-card__title {{key}}
      dd.o-review-card__data {{numericalReview[key]}}
    template(v-for="key in review.textReview")
      dt.o-review-card__title {{key}}
      dd.o-review-card__data {{textReview[key]}}
    dt.o-review-card__title reviewer
    dd.o-review-card__data
      UserBlock(:user="review.reviewer")
</template>

<script>
import Card from '@/components/atoms/Card/';
import UserBlock from '@/components/molecules/UserBlock/';

export default {
  components: {
    Card,
    UserBlock
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.o-review-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;

  &__title {
    font-weight: 700;
    text-align: right;
  }
}
</style>
