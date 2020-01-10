<template>
  <div id="home">
    <topics>
      <banner />
    </topics>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import About from './about/About.vue';
import Topics from './topics/Topics.vue';
import Banner from './banner/Banner.vue';
import Social from './social/Social.vue';
import Subscribe from './subscribe/Subscribe.vue';

@Component({
  components: {
    About,
    Topics,
    Banner,
    Social,
    Subscribe
  }
})
export default class extends Vue { };
</script>
