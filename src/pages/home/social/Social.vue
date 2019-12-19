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

<script lang="ts"
        src="./Social.ts" />
