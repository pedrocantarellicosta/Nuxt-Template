import { storiesOf } from "@storybook/vue"
import ReviewForm from "."
import { init } from "@/.storybook/dummy/review"

storiesOf("Organisms/ReviewForm", module).add(
  "default",
  () => ({
    components: { ReviewForm },
    data() {
      return {
        review: init
      }
    },
    template: '<ReviewForm :review="review" />'
  }),
  {
    info: {
      summary: "Summary for ReviewForm"
    }
  }
)
