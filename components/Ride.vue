<template>
<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://freesvg.org/img/1538346433.png" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">        {{ name }}</h5>
      <p class="text-gray-700 text-base mb-4">

      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    name: String
  },
  created() {
    console.info(this.name)
  }
}
</script>

<style scoped>
</style>