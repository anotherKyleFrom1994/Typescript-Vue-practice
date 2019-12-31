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
  import About from './about/About.vue';
  import Articles from './articles/Articles.vue';
  import Banner from './banner/Banner.vue';
  import Social from './social/Social.vue';
  import Subscribe from './subscribe/Subscribe.vue';

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
