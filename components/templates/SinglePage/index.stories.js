import { storiesOf } from "@storybook/vue"
import Header from "../../organisms/Header"
import ProfileCard from "../../organisms/ProfileCard"
import SinglePage from "."
import { loggined } from "@/.storybook/dummy/user"

storiesOf("Templates/SinglePage", module).add(
  "OAuth",
  () => ({
    components: { SinglePage, Header, ProfileCard },
    data() {
      return {
        user: loggined
      }
    },
    template:
      '<SinglePage><template slot="header"><Header :user="user"/></template><template slot="main"><ProfileCard :user="user"/></template></SinglePage>'
  }),
  {
    info: {
      summary: "Summary for SinglePage"
    }
  }
)
