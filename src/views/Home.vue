<template>
  <div class="home">
    <Articles>
      <Banner />
    </Articles>

    <About />

    <Subscribe />

    <Social />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import About from '@/views/home/About.vue';
  import Articles from '@/views/home/Articles.vue';
  import Banner from '@/views/home/Banner.vue';
  import Social from '@/views/home/Social.vue';
  import Subscribe from '@/views/home/Subscribe.vue';

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
