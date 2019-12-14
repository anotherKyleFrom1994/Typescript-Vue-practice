<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card v-for="(article, i) in paginatedArticles"
                 :key="article.title"
                 :size="layout[i]"
                 :value="article" />
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <base-btn v-if="page !== 1"
                 class="ml-0"
                 title="Previous page"
                 square
                 @click="page--">
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-flex>

      <v-flex xs6
              text-xs-center
              subheading>
        PAGE {{ page }} OF {{ pages }}
      </v-flex>

      <v-flex xs3
              text-xs-right>
        <base-btn v-if="pages > 1 && page < pages"
                 class="mr-0"
                 title="Next page"
                 square
                 @click="page++">
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts"
        src="./Feed.ts" />
