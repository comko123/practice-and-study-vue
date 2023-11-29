<template>
  <header class="mt-9">
    {{ data.id }}
  </header>
  <main>
    {{ data.title }}
  </main>
</template>

<script lang="ts">
export default {
  name: "1",
  data() {
    const params = this.$route.params.id
    const data: { [key: string]: string } = {}
    return { data, params }
  },
  async created() {
    this.data = await (
      await fetch(`https://jsonplaceholder.typicode.com/todos/${this.params}`)
    ).json()
  }
}
</script>
