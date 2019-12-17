<template>
  <v-container class="pa-0">
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

<script lang="ts"
        src="./Tags.ts" />
