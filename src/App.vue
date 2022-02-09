<template>
  <div class="wrapper">
    <!-- Header -->
    <vue-header />
    <!-- Main -->
    <vue-main />
    <!-- Footer -->
    <vue-footer />
  </div>
</template>

<script>
import VueHeader from '@/components/Header/VueHeader.vue';
import VueMain from '@/components/Main/VueMain.vue';
import VueFooter from '@/components/Footer/VueFooter.vue';

export default {
  name: 'App',
  components: { VueHeader, VueMain, VueFooter },
  data() {
    return {};
  }
};
</script>
