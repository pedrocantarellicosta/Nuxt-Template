import { storiesOf } from "@storybook/vue"
import UserAvatar from "."
import { loggoffed, loggined } from "@/.storybook/dummy/user"

storiesOf("Atoms/UserAvatar", module)
  .add(
    "default",
    () => ({
      components: { UserAvatar },
      data() {
        return {
          user: loggoffed
        }
      },
      template: '<UserAvatar :user="user" />'
    }),
    {
      info: {
        summary: "Summary for UserAvatar"
      }
    }
  )
  .add(
    "user sample",
    () => ({
      components: { UserAvatar },
      data() {
        return {
          user: loggined
        }
      },
      template: '<UserAvatar :user="user" />'
    }),
    {
      info: {
        summary: "Summary for UserAvatar"
      }
    }
  )
