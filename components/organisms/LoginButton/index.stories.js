import { storiesOf } from "@storybook/vue"
import LoginButton from "."

storiesOf("Organisms/LoginButton", module).add(
  "default",
  () => ({
    components: { LoginButton },
    template: "<LoginButton />"
  }),
  {
    info: {
      summary: "Summary for LoginButton"
    }
  }
)
