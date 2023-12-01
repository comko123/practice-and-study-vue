import { defineStore } from "pinia"
const pinia = defineStore("main", {
  state: () => ({ data: "header" })
})

export default pinia
