<template>
  <v-btn fab
         small
         color="primary"
         :style="styles"
         v-bind="$attrs"
         v-on="$listeners">
    <slot />
  </v-btn>
</template>
<script lang="ts" src="./SmallBtn.ts"/>
