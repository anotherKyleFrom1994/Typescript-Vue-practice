<template>
  <v-container id="social"
               tag="section"
               grid-list-xl>
    <v-row wrap>
      <v-col sm="12"
              md="4">
        <instagram />
      </v-col>
      <v-col sm="12"
              md="4">
        <newest-posts />
      </v-col>
      <v-col sm="12"
              md="4">
        <tags />
      </v-col>
    </v-row>
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
