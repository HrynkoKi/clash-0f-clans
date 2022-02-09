<template>
  <div class="card">
    <div v-if="img" class="card-img__wrapper">
      <img :src="img" :alt="title" class="card-img" />
    </div>

    <span class="card-name">LVL: {{ name }}</span>
    <h2 class="card-title">{{ title }}</h2>
    <div class="card-body">
      <slot name="body"></slot>

      <router-link class="link" v-if="link" :to="`/characters/${link}`">
        See more
      </router-link>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  props: {
    name: {
      type: Number || String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    link: {
      type: String
    }
  }
};
</script>
