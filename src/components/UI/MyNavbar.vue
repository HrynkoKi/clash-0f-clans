<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-logo">
          <router-link :to="{ name: 'home' }">{{ logo }}</router-link>
        </div>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link class="navbar-link" :to="{ name: link.alias }">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { links, app } from '@/constants/config.js';

export default {
  name: 'MyNavbar',
  data() {
    return {
      links,
      logo: app.logo
    };
  }
};
</script>
