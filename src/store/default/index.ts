import { defineStore } from "pinia"
const pinia = defineStore("main", {
  state: (): { data: any[] } => ({ data: [] }),
  actions: {
    addCation(object: any) {
      this.data.unshift(object)
    },
    deleteCation(index: number) {
      this.data.splice(index, 1)
    }
  }
})

export default pinia
