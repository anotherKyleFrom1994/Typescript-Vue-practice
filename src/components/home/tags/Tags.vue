<template>
  <v-container pa-0>
    <base-subheading>Tags</base-subheading>
    <v-chip v-for="(category, i) in categories"
            :key="i"
            tag
            label
            small
            color="secondary"
            text-color="white">
      {{ category.text }}
    </v-chip>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
  import { namespace, State } from 'vuex-class';
  import { IArticle } from '@/data/articles';

  @Component({})
  export default class Tags extends Vue {
    @State('categories') categories!: any;
  };
</script>
