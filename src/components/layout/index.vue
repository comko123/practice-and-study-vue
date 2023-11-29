<template>
  <div
    class="bg-orange-500 text-white fixed top-0 w-full cursor-pointer"
    @click="$router.push('/')"
  >
    header
  </div>
  <slot></slot>
  <div class="bg-orange-500 text-white fixed bottom-0 w-full">footer</div>
</template>

<script leng="ts">
export default {
  name: "layout"
}
</script>

<style></style>
