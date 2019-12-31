<template>
  <v-container class="pa-0">
    <h1 class="display-3 font-weight-light">
      Article Title
    </h1>
    <v-row align="center"
           class="mb-2">
      <v-col sm="12"
             class="d-flex">
        <!-- <v-img :src="require(`@/assets/articles/${article.hero}`)"
               class="mr-3"
               height="36"
               max-width="36" /> -->
        <div>
          <base-subheading fontWeight="light" font-size="1"> Subheading </base-subheading>
          <div class="caption">
            Date
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts"
        src="./Articles.ts" />>
