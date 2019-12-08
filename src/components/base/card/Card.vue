<template>
  <v-card tile flat v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-card>
</template>

<script lang="ts">
   import script from './Card';
   export default script;
</script>
