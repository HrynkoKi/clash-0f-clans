<template>
  <footer class="footer">
    <footer class="footer">
      <div class="container">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link class="navbar-link" :to="{ name: link.alias }">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </footer>
  </footer>
</template>

<script>
import { links } from '@/constants/config.js';

export default {
  name: 'VueFooter',
  data() {
    return {
      links
    };
  }
};
</script>
