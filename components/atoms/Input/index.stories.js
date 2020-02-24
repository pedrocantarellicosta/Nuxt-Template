import { storiesOf } from "@storybook/vue"
import { text, select, boolean } from "@storybook/addon-knobs"
import Input from "."

storiesOf("Atoms/Input", module).add(
  "default",
  () => ({
    components: { Input },
    data() {
      return {
        type: select("type", ["text", "email", "password"], "text"),
        initialValue: text("initialValue", "initialValue"),
        placeholder: text("placeholder", "placeholder"),
        readonly: boolean("readonly", false),
        disabled: boolean("disabled", false)
      }
    },
    template:
      '<Input :type="type" :initialValue="initialValue" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" />'
  }),
  {
    info: {
      summary: "Summary for Input"
    }
  }
)
