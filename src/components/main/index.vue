<script lang="ts">
import a from "../../store/default/index"
//https://api.themoviedb.org/3/movie/popular?api_key=10923b261ba94d897ac6b81148314a3f
export default {
  async created() {
    this.data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
  },
  data() {
    const ase = a()
    const data: any[] = []
    return { ase, data }
  }
}
</script>

<template>
  <div class="bg-orange-500 text-white">{{ ase.a }}</div>
  <div class="flex w-full justify-center items-center flex-col">
    <div
      v-for="(item, index) in data.slice(0, 50)"
      :key="item.id"
      class="w-[50%] flex justify-between p-2 hover:bg-blue-300 rounded-md"
    >
      <div @click="$router.push(`/detail/${item.id}`)">
        <span>{{ index + 1 }}. </span>
        <span>{{ item.title }}</span>
      </div>
      <div>
        <button
          class="rounded-full font-bold bg-red-500 text-white px-2 flex justify-center items-center"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
