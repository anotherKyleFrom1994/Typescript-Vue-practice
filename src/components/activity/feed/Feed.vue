<template>
  <v-container class="grid-list-xl">
    <v-row class="wrap"
           dense>
      <v-col sm="6">
        <v-row dense>
          <feed-card :key="paginatedArticles[0].title"
                     :size="1"
                     :height="'100%'"
                     :value="paginatedArticles[0]">
          </feed-card>
        </v-row>
      </v-col>
      <v-col sm="6">
        <v-row dense>
          <feed-card v-for="(article, i) in paginatedArticles"
                     :key="article.title"
                     :height="'100%'"
                     :size="layout[i]"
                     :value="article">

          </feed-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script type="ts"
        src="./Feed.ts" />
