<template>
  <v-app-bar app
             text>
    <v-app-bar-nav-icon class="hidden-md-and-up"
                        @click="toggleDrawer" />
    <v-container mx-auto
                 py-0>
      <v-row>
        <v-img :src="require('@/assets/logo.png')"
               class="mr-5"
               contain
               height="48"
               width="48"
               max-width="48"
               @click="$vuetify.goTo(0)" />
        <v-btn v-for="(link, i) in links"
               :key="i"
               :to="link.to"
               class="ml-0 hidden-sm-and-down"
               text
               @click="onClickButton($event, link)">
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field append-icon="mdi-magnify"
                      text
                      hide-details
                      solo-inverted
                      style="max-width: 300px;" />
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts"
        src="./Toolbar.ts" />
