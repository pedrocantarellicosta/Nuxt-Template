<template lang="pug">
  select.a-select(v-model="selected" @blur='onBlur' @change='onChange')
    option.a-select__option(v-if="placeholder" value="") {{placeholder}}
    option.a-select__option(v-for="option in options" :value="option.value") {{option.label}}
</template>
<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      required: true
    },
    initialValue: {
      type: [String, Number],
      required: false,
      default: null
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: null
    },
    validationTiming: {
      type: [String, Boolean],
      required: false,
      default: "change",
      validator: (value) => {
        return ["change", true, false].includes(value)
      }
    }
  },
  data() {
    return {
      selected: this.initialValue ? this.initialValue : ""
    }
  },
  methods: {
    checkValidity() {
      this.$el.removeAttribute("aria-invalid")
      if (!this.$el.checkValidity()) {
        this.$el.setAttribute("aria-invalid", "true")
      }
    },

    onBlur(e) {
      this.$emit("blur", e)
      if (this.validationTiming) {
        this.checkValidity()
      }
    },
    onChange(e) {
      this.$emit("change", e)
      if (
        this.validationTiming === "change" ||
        this.validationTiming === true
      ) {
        this.checkValidity()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.a-select {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--input-height);
  padding: 0 var(--margin--base);
  font-size: 1.2em;
  cursor: pointer;
  user-select: none;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--color--theme-light);
  border-radius: 2px;
  outline: none;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:not(:disabled) {
    &:hover {
      border-color: var(--color--theme);
      box-shadow: var(--shadow--hover);
      opacity: 0.9;
    }

    &:active {
      box-shadow: var(--shadow--active);
      opacity: 1;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--color--disabled);
  }

  &:focus {
    background: rgba(255, 255, 255, 1);
    border-color: var(--color--theme);
  }

  &[aria-invalid] {
    border-color: var(--color--danger);
  }
}
</style>
