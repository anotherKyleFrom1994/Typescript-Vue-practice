<template>
  <section id="feed">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
  // export default {
  //   components: {
  //     Feed: () => import('@/components/Feed')
  //   }
  // }
</script>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Feed from '@/components/home/feed/Feed.vue';

  @Component({ components: { Feed } })
  export default class Articles extends Vue {}
</script>
