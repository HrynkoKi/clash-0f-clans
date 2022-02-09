<template v-slot:header>
  <div class="home">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide
        class="card__wrapper"
        v-for="character in characters"
        :key="character.id"
      >
        <my-card
          :name="character.lvl"
          :title="character.title"
          :img="character.img"
          :link="character.alias"
        >
          <template v-slot:body>
            {{ character.desc }}
          </template>
          <template v-slot:footer>
            <card-stats :info="character.info" />
          </template>
        </my-card>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import characters from '@/seeders/characters';
import CardStats from '@/components/Card/CardStats.vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Navigation,
    CardStats
  },
  data() {
    return {
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        800: {
          itemsToShow: 2
        }
      },
      characters
    };
  }
};
</script>
