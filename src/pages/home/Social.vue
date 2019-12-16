<template>
  <v-container id="social"
               tag="section"
               grid-list-xl>
    <v-layout wrap>
      <v-flex xs12
              md4>
        <instagram />
      </v-flex>
      <v-flex xs12
              md4>
        <newest-posts />
      </v-flex>
      <v-flex xs12
              md4>
        <tags />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import NewestPosts from '@/components/home/newest_posts/NewestPosts.vue';
  import Instagram from '@/components/home/instagram/Instagram.vue';
  import Tags from '@/components/home/tags/Tags.vue';

  @Component({ components: { NewestPosts, Instagram, Tags } })
  export default class Social extends Vue {};
</script>
