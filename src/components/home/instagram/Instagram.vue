<template>
  <v-container pa-0
               grid-list-md>
    <base-subheading>On Instagram</base-subheading>
    <v-row class="wrap">
      <v-col v-for="(post, i) in posts"
             :key="i"
             sm="4">
        <base-card tag="a"
                   :href="post.href"
                   height="88"
                   color="grey lighten-2">
          <v-img v-if="post.src"
                 height="100%"
                 :src="require(`@/assets/instagram/${post.src}`)" />
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts"
        src="./Instagram.ts" />
