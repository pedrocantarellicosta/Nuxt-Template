import { storiesOf } from "@storybook/vue"
import { text, array, boolean, object } from "@storybook/addon-knobs"
import Select from "."

storiesOf("Atoms/Select", module).add(
  "default",
  () => ({
    components: { Select },
    data() {
      return {
        options: array("options", [
          object("option1", {
            label: "A",
            value: 1
          }),
          object("option2", {
            label: "B",
            value: 2
          }),
          object("option3", {
            label: "C",
            value: 3
          })
        ]),
        initialValue: text("initialValue", ""),
        placeholder: text("placeholder", "placeholder"),
        readonly: boolean("readonly", false),
        disabled: boolean("disabled", false)
      }
    },
    template:
      '<Select :options="options" :initialValue="initialValue" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" />'
  }),
  {
    info: {
      summary: "Summary for Select"
    }
  }
)
