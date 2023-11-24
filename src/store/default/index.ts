import { defineStore } from "pinia"
// import { ref } from "vue"
const pinia = defineStore("main", {
  state: () => ({ a: "header" })
})

export default pinia
