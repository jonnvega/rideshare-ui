<template>
  <div>
    <ul>
      <li v-for="ride in rides" :key="ride.name">
        <Ride :name="ride.driver" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TestPage",
  computed: {
    rides() {
      return this.$store.state.rides.list;
    },
  },
};
</script>