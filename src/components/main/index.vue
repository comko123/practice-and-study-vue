<script lang="ts">
import lute from "../../store/default/index"
export default {
  async created() {
    this.data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
  },
  data() {
    const rote = lute()
    const data: any[] = []
    return { rote, data }
  }
}
</script>

<template>
  <!-- <div class="bg-orange-500 text-white">{{ rote.data }}</div> -->
  <div class="flex w-full justify-center items-center flex-col">
    <div
      v-for="(item, index) in data.slice(0, 50)"
      :key="item.id"
      class="w-[50%] flex justify-between p-2 hover:bg-blue-300 rounded-md"
    >
      <div @click="$router.push(`/detail/${item.id}`)">
        <span>{{ item.id }}. </span>
        <span>{{ item.title }}</span>
      </div>
      <div>
        <button
          class="rounded-full font-bold bg-red-500 text-white px-2 flex justify-center items-center"
          @click="data.splice(index, 1)"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
