<template>
  <div class="wrapper">
    <template v-if="character">
      <img class="card-img" :src="character.img" :alt="character.title" />
      <h1 class="title">{{ character.title }}</h1>
      <p>{{ character.desc }}</p>

      <div class="card-stats">
        <div
          class="one-third"
          v-for="(stat, index) in character.info"
          :key="index"
        >
          <p class="stat-value">{{ stat.value }}</p>
          <p class="stat">{{ stat.title }}</p>
        </div>
      </div>

      <div>
        <router-link class="btn btnPrimary" :to="{ name: 'home' }">
          Back to home
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import characters from '@/seeders/characters';

export default {
  name: '',
  data() {
    return {
      character: null
    };
  },
  methods: {
    getAliasItem() {
      const aliasItem = this.$route.params.aliasItem;

      this.character = characters.find(
        character => character.alias === aliasItem
      );
    }
  },
  created() {
    this.getAliasItem();
  }
};
</script>
