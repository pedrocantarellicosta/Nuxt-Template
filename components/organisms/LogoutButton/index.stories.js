import { storiesOf } from "@storybook/vue"
import LogoutButton from "."

storiesOf("Organisms/LogoutButton", module).add(
  "default",
  () => ({
    components: { LogoutButton },
    template: "<LogoutButton />"
  }),
  {
    info: {
      summary: "Summary for LogoutButton"
    }
  }
)
