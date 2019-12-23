<template>
  <v-container class="grid-list-xl">
    <v-row class="wrap">
      <v-col sm="12">
        <slot />
      </v-col>

      <feed-card v-for="(article, i) in paginatedArticles"
                 :key="article.title"
                 :size="layout[i]"
                 :value="article" />
    </v-row>

    <v-row align="center">
      <v-col sm="3">
        <small-btn v-if="page !== 1"
                   class="ml-0"
                   title="Previous page"
                   square
                   @click="page--">
          <v-icon>mdi-chevron-left</v-icon>
        </small-btn>
      </v-col>

      <v-col sm="6"
             class="subheading text-sm-center">
        PAGE {{ page }} OF {{ pages }}
      </v-col>

      <v-col sm="3"
             class="text-sm-right">
        <small-btn v-if="pages > 1 && page < pages"
                   class="mr-0"
                   title="Next page"
                   square
                   @click="page++">
          <v-icon>mdi-chevron-right</v-icon>
        </small-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts"
        src="./Feed.ts" />
