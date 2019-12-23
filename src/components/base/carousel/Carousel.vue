<template>
  <v-carousel cycle
              hide-delimiter-background>
    <v-carousel-item v-for="(item,i) in items"
                     :key="i"
                     height="400"
                     width="100%"
                     :src="createDisplayImage(item)"
                     reverse-transition="fade-transition"
                     transition="fade-transition">
      <v-row align="center"
             class="pa-3 fill-height">
        <v-col cols="4"
               sm="12"
               md="7"
               offset-md="5">
          <h1 v-if="item.title"
              class="display-3 font-weight-light">
            {{ item.title }}
          </h1>
          <div v-if="item.displayWording"
               class="subheading text-uppercase pl-2 mb-4">
            {{ item.displayWording }}
          </div>
          <v-btn v-if="item.button"
                 :color="item.button.color"
                 depressed
                 rounded>
            {{ item.button.displayWording }}
          </v-btn>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script lang="ts"
        src="./Carousel.ts" />
