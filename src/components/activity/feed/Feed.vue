<template>
  <v-container class="grid-list-xl">
    <v-row class="wrap"
           dense>
      <v-col sm="6">
        <v-row dense>
          <feed-card :key="paginatedPhotos[0].title"
                     :size="1"
                     :height="'100%'"
                     :value="paginatedPhotos[0]">
          </feed-card>
        </v-row>
      </v-col>
      <v-col sm="6">
        <v-row dense>
          <feed-card v-for="(photo, i) in paginatedPhotos"
                     :key="photo.title"
                     :height="'100%'"
                     :size="layout[i]"
                     :value="photo">

          </feed-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script type="ts"
        src="./Feed.ts" />
