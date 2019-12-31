<template>
  <h2 :class="classes()"
      v-bind="$attrs"
      v-on="$listeners">
    <slot />
  </h2>
</template>
<script lang="ts"
        src="./Subheading.ts" />
