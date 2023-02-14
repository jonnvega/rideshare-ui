<template>
  <div class="flex justify-center my-3">
    <form class="w-full flex flex-wrap items-end max-w-5xl">
        <div class="w-full md:w-2/6 px-1 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Origen
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="origin"
            type="text"
            placeholder="ej. Guadalupe"
            v-model="origin"
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full md:w-2/6 px-1 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Destino
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="ej. Atenas"
            v-model="destination"
          />
        </div>
        <div class="w-full md:w-1/6 px-1 mb-6 items-center justify-center">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Fecha
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="date"
            placeholder="ej. Atenas"
          />
        </div>
        <div class="w-full md:w-1/6 px-1 m-auto">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    ride: Object,
  },
  created() {

  },
  mounted() {
        
  }
};
</script>

<style scoped></style>
