<template>
  <v-col sm="12"
         :md="colMd">
    <base-card :height="value.prominent ? 450 : 350"
               color="grey lighten-1"
               dark
               href="#!">
      <v-img :src="require(`@/assets/articles/${value.hero}`)"
             height="100%"
             gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)">
        <v-row v-if="!value.prominent"
               class="fill-height text-sm-right ma-0">
          <v-col sm="12">
            <v-chip label
                    class="mx-0 mb-2 text-uppercase"
                    color="grey darken-3"
                    text-color="white"
                    small
                    @click.stop="">
              {{ value.category }}
            </v-chip>
            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
            <div class="caption">
              {{ value.author }}<br>Date
            </div>
          </v-col>
          <v-col align-self="end">
            <v-chip class="text-uppercase ma-0"
                    color="primary"
                    label
                    small
                    @click.stop="">
              Read More
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script lang="ts"
        src="./FeedCard.ts" />

<style lang="scss"
       src="./FeedCard.scss" />
