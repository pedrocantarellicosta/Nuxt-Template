import { storiesOf } from "@storybook/vue"
import { select, boolean } from "@storybook/addon-knobs"
import Button from "."

storiesOf("Atoms/Button", module)
  .add(
    "default",
    () => ({
      components: { Button },
      data() {
        return {
          color: select("color", ["normal", "primary", "danger"], "normal"),
          border: boolean("border", false),
          disabled: boolean("disabled", false)
        }
      },
      template:
        '<Button :color="color" :border="border" :disabled="disabled" >text</Button>'
    }),
    {
      info: {
        summary: "Summary for Button"
      }
    }
  )
  .add(
    "titleをpropで渡せる",
    () => ({
      components: { Button },
      data() {
        return {
          color: select("color", ["normal", "primary", "danger"], "normal"),
          border: boolean("border", false),
          disabled: boolean("disabled", false)
        }
      },
      template:
        '<Button title="text" :color="color" :border="border" :disabled="disabled" />'
    }),
    {
      info: {
        summary: "Summary for Button"
      }
    }
  )
  .add(
    "icon",
    () => ({
      components: { Button },
      data() {
        return {
          color: select("color", ["normal", "primary", "danger"], "normal"),
          border: boolean("border", false),
          disabled: boolean("disabled", false)
        }
      },
      template:
        '<Button title="text" :color="color" :border="border" :disabled="disabled"><i class="material-icons">face</i></Button>'
    }),
    {
      info: {
        summary: "Summary for Button"
      }
    }
  )
