<template lang="pug">
  button.a-button(:type="type" :class="styleClass" @click='onClick')
    slot {{title}}
</template>
<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: false,
      default: "button"
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: "normal",
      validator: (value) => {
        return ["normal", "primary", "danger"].includes(value)
      }
    }
  },
  computed: {
    styleClass() {
      const color = this.color ? `a-button--${this.color}` : null
      const border = this.border ? "a-button--border" : null
      return [color, border]
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e)
    }
  }
}
</script>
<style lang="scss" scoped>
.a-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--input-height);
  padding: 0 var(--margin--base);
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  background-color: var(--b-color);
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:not(:disabled):hover {
    box-shadow: var(--shadow--hover);
    opacity: 0.9;
    transform: scale(0.98);
  }

  &:not(:disabled):active {
    box-shadow: var(--shadow--active);
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &--border {
    color: var(--b-color);
    background: transparent;
    border: 1px solid;
    &:not(:disabled):hover {
      color: #fff;
      background-color: var(--b-color);
      border-color: transparent;

      &.a-button--normal {
        color: var(--button-color);
      }
    }
  }

  &--normal {
    color: var(--button-color);
    --b-color: var(--color);
  }

  &--primary {
    color: #fff;
    --b-color: var(--color--primary);
  }

  &--danger {
    color: #fff;
    --b-color: var(--color--danger);
  }
}
</style>
