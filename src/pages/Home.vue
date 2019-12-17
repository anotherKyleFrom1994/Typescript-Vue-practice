<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import About from '@/pages/home/About.vue';
  import Articles from '@/pages/home/Articles.vue';
  import Banner from '@/pages/home/Banner.vue';
  import Social from '@/pages/home/Social.vue';
  import Subscribe from '@/pages/home/Subscribe.vue';

  @Component({
    components: {
      About,
      Articles,
      Banner,
      Social,
      Subscribe
    }
  })
  export default class extends Vue {};
</script>
