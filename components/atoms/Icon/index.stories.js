import { storiesOf } from "@storybook/vue"
import { text } from "@storybook/addon-knobs"
import Icon from "."

storiesOf("Atoms/Icon", module).add(
  "icon",
  () => ({
    components: { Icon },
    data() {
      return {
        name: text("name", "face")
      }
    },
    template: '<icon :name="name"></icon>'
  }),
  {
    info: {
      summary: "Summary for Icon"
    }
  }
)
