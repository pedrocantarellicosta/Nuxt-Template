import { storiesOf } from "@storybook/vue"
import Header from "."
import { loggoffed, loggined } from "@/.storybook/dummy/user"

storiesOf("Organisms/Header", module)
  .add(
    "loggoffed",
    () => ({
      components: { Header },
      data() {
        return {
          user: loggoffed
        }
      },
      template: '<Header :user="user"/>'
    }),
    {
      info: {
        summary: "Summary for Header"
      }
    }
  )
  .add(
    "loggined",
    () => ({
      components: { Header },
      data() {
        return {
          user: loggined
        }
      },
      template: '<Header :user="user"/>'
    }),
    {
      info: {
        summary: "Summary for Header"
      }
    }
  )
