<template>
  <v-col sm="12"
         :md="colMd">
    <base-card class="d-flex mx-auto"
               :height="height"
               :max-height="maxHeight"
               href="#!">
      <v-img :src="require(`@/assets/articles/${value.hero}`)"
             class="lighten-2"
             aspect-ratio="1.3333"
             gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)">
      </v-img>
    </base-card>
  </v-col>
</template>

<script lang="ts"
        src="./FeedCard.ts" />

<style lang="scss"
       src="./FeedCard.scss"
       scoped />
