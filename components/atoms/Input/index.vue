<template lang="pug">
  input.a-input(v-model="inputValue" @blur='onBlur' @change='onChange' @input='onInput')
</template>
<script>
export default {
  name: "Input",
  props: {
    initialValue: {
      type: [String, Number],
      required: false,
      default: null
    },
    validationTiming: {
      type: [String, Boolean],
      required: false,
      default: "input",
      validator: (value) => {
        return ["change", "input", true, false].includes(value)
      }
    }
  },
  data() {
    return {
      inputValue: this.initialValue
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
    onInput(e) {
      this.$emit("input", e)
      if (this.validationTiming === "input") {
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
.a-input {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--input-height);
  padding: 0 var(--margin--base);
  font-size: 1.2em;
  user-select: none;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--color--theme-light);
  border-radius: 2px;
  outline: none;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:not(:disabled):not(:read-only) {
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

  &:disabled,
  &:read-only {
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

  &[type="range"] {
    background: transparent;
    border: none;
    &::-webkit-slider-runnable-track {
      display: flex;
      align-items: center;
      width: 100%;
      height: 8px;
      cursor: pointer;
      background: #3f51b5;
      border-radius: 1.3px;
    }
  }
}
</style>
