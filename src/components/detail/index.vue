<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
export default {
  name: "1",
  data() {
    const params = this.$route.params.id
    const data = {}
    return { data, params }
  },
  async created() {
    this.data = await (
      await fetch(`https://jsonplaceholder.typicode.com/todos/${this.params}`)
    ).json()
  }
}
</script>

<style></style>
