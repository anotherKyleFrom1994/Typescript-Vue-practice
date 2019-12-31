<template>
  <div id="activity">

    <photos />
    <introduction />

  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import Photos from './photos/Photos.vue';
  import Introduction from './introduction/Introduction.vue';

  @Component({ components: { Photos, Introduction } })
  export default class Activity extends Vue {

  }
</script>
