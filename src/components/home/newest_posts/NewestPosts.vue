<template>
  <v-container pa-0>
    <base-subheading>Newest Blog Posts</base-subheading>
    <v-row v-for="(topic, i) in topics.slice(11, 14)"
           :key="i"
           align="center"
           class="mb-2">
      <v-col sm="12"
             class="d-flex">
        <v-img :src="require(`@/assets/articles/${topic.hero}`)"
               class="mr-3"
               height="36"
               max-width="36" />
        <div>
          <div class="subheading">
            Article Title
          </div>
          <div class="caption">
            Date
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./NewestPosts.ts"/>
