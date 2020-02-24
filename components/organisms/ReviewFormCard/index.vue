<template lang="pug">
  Card.o-review-form-card(element="form")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title Type
      dd.o-review-form-card__item-data
        Select(:initialValue="review.type" :options="type" placeholder="Select type" ref="type" @change="onInput" required autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title Name
      dd.o-review-form-card__item-data
        Input(:initialValue="review.name" ref="name" @input="onInput" required autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title Brand
      dd.o-review-form-card__item-data
        Input(:initialValue="review.brand" ref="brand" @input="onInput" required autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title Manufacturer
      dd.o-review-form-card__item-data
        Input(:initialValue="review.manufacturer" ref="manufacturer" @input="onInput" required autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title yearOfPurchase
      dd.o-review-form-card__item-data
        Input(:initialValue="review.yearOfPurchase" ref="yearOfPurchase" @input="onInput" autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title frequencyOfUse
      dd.o-review-form-card__item-data
        Input(:initialValue="review.frequencyOfUse" ref="frequencyOfUse" @input="onInput" autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title numericalReview.highRange
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.highRange : 0" ref="numericalReview.highRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.middleHighRange
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.middleHighRange : 0" ref="numericalReview.middleHighRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.middleRange
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.middleRange : 0" ref="numericalReview.middleRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.lowMiddleRange
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.lowMiddleRange : 0" ref="numericalReview.lowMiddleRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.lowRange
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.lowRange : 0" ref="numericalReview.lowRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.spatialRepresentation
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.spatialRepresentation : 0" ref="numericalReview.spatialRepresentation" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.resolution
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.resolution : 0" ref="numericalReview.resolution" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.portablity
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.portablity : 0" ref="numericalReview.portablity" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title numericalReview.satisfaction
      dd.o-review-form-card__item-data
        Input(type="range" :initialValue="review.numericalReview ? review.numericalReview.satisfaction : 0" ref="numericalReview.satisfaction" @input="onInput" autocomplete="none")
    dl.o-review-form-card__item
      dt.o-review-form-card__item-title textReview.highRange
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.highRange : ''" ref="textReview.highRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.middleHighRange
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.middleHighRange : ''" ref="textReview.middleHighRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.middleRange
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.middleRange : ''" ref="textReview.middleRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.lowMiddleRange
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.lowMiddleRange : ''" ref="textReview.lowMiddleRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.lowRange
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.lowRange : ''" ref="textReview.lowRange" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.spatialRepresentation
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.spatialRepresentation : ''" ref="textReview.spatialRepresentation" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.resolution
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.resolution : ''" ref="textReview.resolution" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.portablity
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.portablity : ''" ref="textReview.portablity" @input="onInput" autocomplete="none")
      dt.o-review-form-card__item-title textReview.satisfaction
      dd.o-review-form-card__item-data
        Input(:initialValue="review.textReview ? review.textReview.satisfaction : ''" ref="textReview.satisfaction" @input="onInput" autocomplete="none")
</template>

<script>
import Input from '@/components/atoms/Input/';
import Select from '@/components/atoms/Select/';
import Button from '@/components/atoms/Button/';
import Card from '@/components/atoms/Card/';

export default {
  components: { Input, Select, Button, Card },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'registory',
      validator: value => {
        return ['registory', 'edit'].includes(value);
      }
    },
    review: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      type: [
        {
          label: 'DAC',
          value: 'dac',
          selecting: false
        },
        {
          label: 'Earphone',
          value: 'earphone',
          selecting: false
        },
        {
          label: 'Headphone',
          value: 'headphone',
          selecting: false
        }
      ]
    };
  },
  methods: {
    onInput() {
      const { type, name, brand, manufacturer } = this.$refs;
      const formData = {
        type: type.selected,
        name: name.inputValue,
        brand: brand.inputValue,
        manufacturer: manufacturer.inputValue
      };
      this.$emit('change', formData);

      this.type.forEach((elm, index) => {
        this.type[index].selecting = false;
        if (type.selected === this.type[index].value) {
          this.type[index].selecting = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.o-review-form-card {
  display: grid;
  gap: var(--margin--base) 0;
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
