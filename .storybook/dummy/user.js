import { object } from "@storybook/addon-knobs"

export const loggoffed = object("loggoffedUser", {
  email: null,
  locale: null,
  username: null,
  age: null,
  thumbnailUrl: null,
  loggedIn: false
})

export const loggined = object("logginedUser", {
  email: "8beeeaaat@gmail.com",
  locale: "ja",
  username: "8beeeaaat",
  age: 30,
  thumbnailUrl: "https://avatars3.githubusercontent.com/u/57888149?s=40&v=4",
  loggedIn: true
})
