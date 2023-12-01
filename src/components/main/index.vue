<script lang="ts">
import headerText from "../../store/default/index"
export default {
  async created() {
    this.data = await (
      await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=10923b261ba94d897ac6b81148314a3f"
      )
    ).json()
  },
  data() {
    const data: any = {}
    return { text: headerText(), data }
  }
}
</script>

<template>
  <div class="bg-orange-500 text-white">{{ text.data }}</div>
  <div class="flex w-full justify-center items-center flex-col">
    <div v-for="item in data.results" :key="item.id">
      <img src="{{ `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}" loading="lazy" />
      <span>{{ item.original_title }}</span>
    </div>
  </div>
</template>
