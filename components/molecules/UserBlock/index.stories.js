import { storiesOf } from "@storybook/vue"
import UserBlock from "."
import { loggoffed, loggined } from "@/.storybook/dummy/user"

storiesOf("Molecules/UserBlock", module)
  .add(
    "default",
    () => ({
      components: { UserBlock },
      data() {
        return {
          user: loggoffed
        }
      },
      template: '<UserBlock :user="user" />'
    }),
    {
      info: {
        summary: "Summary for UserBlock"
      }
    }
  )
  .add(
    "user sample",
    () => ({
      components: { UserBlock },
      data() {
        return {
          user: loggined
        }
      },
      template: '<UserBlock :user="user" />'
    }),
    {
      info: {
        summary: "Summary for UserBlock"
      }
    }
  )
