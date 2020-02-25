import { storiesOf } from "@storybook/vue"
import Modal from "."
import ProfileCard from "../../organisms/ProfileCard/"
import { loggined } from "@/.storybook/dummy/user"

storiesOf("Molecules/Modal", module)
  .add(
    "default",
    () => ({
      components: { Modal,ProfileCard },
      data() {
        return {
          user: loggined
        }
      },
      mounted(){
        this.$refs.modal.open()
      },
      template: '<Modal ref="modal"><ProfileCard :user="user" /></modal>'
    }),
    {
      info: {
        summary: "Summary for Modal"
      }
    }
  )
