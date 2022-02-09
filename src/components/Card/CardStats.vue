<template>
  <div class="card-stats">
    <div class="one-third" v-for="(stat, index) in info" :key="index">
      <p class="stat-value">{{ stat.value }}</p>
      <p class="stat">{{ stat.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStats',
  props: {
    info: {
      type: Array,
      required: true
    }
  }
};
</script>
