<template>
<div class="flex justify-center my-3">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <div class="p-6 flex flex-col justify-start">
      <img class="w-auto h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://freesvg.org/img/1538346433.png" alt="" />
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ ride.driver }}</h5>
      <p class="text-gray-700 text-base mb-4"></p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    ride: Object,
    
  },
  created() {
  }
}
</script>

<style scoped>
</style>