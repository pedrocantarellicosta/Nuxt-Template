import { storiesOf } from "@storybook/vue"
import Card from "."

storiesOf("Atoms/Card", module).add(
  "default",
  () => ({
    components: { Card },
    template: "<Card>text</Card>"
  }),
  {
    info: {
      summary: "Summary for Card"
    }
  }
)
