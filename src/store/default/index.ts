import { defineStore } from "pinia"
// import { ref } from "vue"
const pinia = defineStore("main", {
  state: () => ({ data: "header" })
})

export default pinia
