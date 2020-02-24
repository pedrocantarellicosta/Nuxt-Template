import { storiesOf } from "@storybook/vue"
import ProfileCard from "."
import { loggoffed, loggined } from "@/.storybook/dummy/user"

storiesOf("Organisms/ProfileCard", module)
  .add(
    "default",
    () => ({
      components: { ProfileCard },
      data() {
        return {
          user: loggoffed
        }
      },
      template: '<ProfileCard :user="user" />'
    }),
    {
      info: {
        summary: "Summary for ProfileCard"
      }
    }
  )
  .add(
    "user sample",
    () => ({
      components: { ProfileCard },
      data() {
        return {
          user: loggined
        }
      },
      template: '<ProfileCard :user="user" />'
    }),
    {
      info: {
        summary: "Summary for ProfileCard"
      }
    }
  )
  .add(
    "registory mode",
    () => ({
      components: { ProfileCard },
      data() {
        return {
          user: loggined
        }
      },
      template: '<ProfileCard :user="user" mode="registory" />'
    }),
    {
      info: {
        summary: "Summary for ProfileCard"
      }
    }
  )
  .add(
    "edit mode",
    () => ({
      components: { ProfileCard },
      data() {
        return {
          user: loggined
        }
      },
      template: '<ProfileCard :user="user" mode="edit" />'
    }),
    {
      info: {
        summary: "Summary for ProfileCard"
      }
    }
  )
