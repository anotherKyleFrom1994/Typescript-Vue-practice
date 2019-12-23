<template>
  <v-btn large
         :style="styles"
         v-bind="$attrs"
         v-on="$listeners">
    <slot />
  </v-btn>
</template>
<script lang="ts"
        src="./LargeBtn.ts" />
