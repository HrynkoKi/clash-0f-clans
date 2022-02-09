<template v-slot:header>
  <div class="home">
    <div
      class="card__wrapper"
      v-for="character in characters"
      :key="character.id"
    >
      <my-card
        :name="character.lvl"
        :title="character.title"
        :img="character.img"
      >
        {{ character.desc }}
      </my-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      characters: [
        {
          id: 1,
          title: 'Archer',
          desc: 'Archer Archer Archer Archer',
          lvl: 4,
          img: 'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/archer.png'
        },
        {
          id: 2,
          title: 'Wizard',
          desc: 'Wizard Wizard Wizard Wizard',
          lvl: 3,
          img: 'https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/wizard.png'
        }
      ]
    };
  }
};
</script>
