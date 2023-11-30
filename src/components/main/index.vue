<script lang="ts">
import pinia from "../../store/default"
export default {
  name: "to-do",
  data() {
    return { data: pinia(), str: "" }
  },
  methods: {
    handleControl(event: FocusEvent) {
      if (!event.currentTarget) return
      this.str = (event.currentTarget as HTMLInputElement).value
    },
    addT() {
      const impre = { body: this.str, date: new Date() , id:Math.abs(Math.random()*Math.random())*10}
      this.data.addCation(impre)
    },
    deleteT(index:number){
      this.data.deleteCation(index)
    }
  }
}
</script>

<template>
  <header class="p-12 pb-4">
    <h1 class="font-bold text-2xl border-b border-indigo-400 py-2">To-Do Application</h1>
  </header>
  <main class="px-12">
    <form @submit="$event.preventDefault();addT()">
      <input
        type="text"
        class="border-[3px] border-indigo-400 w-[80%] rounded-xl outline-none font-bold p-2"
        @focusout="handleControl"
      />
      <input
        type="submit"
        value="SUBMIT"
        class="text-white font-bold bg-indigo-500 p-1 px-2 rounded-lg mx-2 hover:opacity-70"
      />
    </form>
    <section v-if="!data.data.length" class="border-4 border-indigo-400 mt-4 h-[65vh] rounded-xl w-full flex justify-center items-center font-bold text-2xl text-indigo-400">등록한 일정이 없습니다</section>
    <section v-if="data.data.length">
    <div v-for="(item,index) in data.data" :key="item.id" class="flex my-4 w-[80%] justify-between border border-indigo-400 rounded-lg p-2">
    <div class="font-bold">{{index+1}}. {{item.body}} / {{item.date}}</div>
      <button class="bg-rose-500 p-2 pt-[0.2rem] font-bold text-white rounded-full hover:opacity-70" @click="deleteT(index)">x</button>
  </div>
    </section>
  </main>
</template>

<style scoped></style>
