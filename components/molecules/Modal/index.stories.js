import { storiesOf } from "@storybook/vue"
import Modal from "."

storiesOf("Molecules/Modal", module)
  .add(
    "default",
    () => ({
      components: { Modal },
      data() {
        return {
        }
      },
      mounted(){
        debugger
        this.$refs.modal.open()
      },
      template: '<Modal ref="modal">aaa</modal>'
    }),
    {
      info: {
        summary: "Summary for Modal"
      }
    }
  )
