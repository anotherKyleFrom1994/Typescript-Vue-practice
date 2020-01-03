<template>
  <v-card class="portrait">
    <v-card-title class="cyan darken-1">
      <span class="headline white--text">Sarah Mcbeal</span>

      <v-spacer></v-spacer>

      <v-btn dark
             icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn dark
             icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn dark
             icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-card-title>

    <v-img :src="imageSrc"
           height="200px"></v-img>

    <v-list>
      <template v-for="(item, i) in listItems">
        <v-list-item :key="'item' + i">
          <v-list-item-action v-if="item.iconStart">
            <v-icon>{{ item.iconStart }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action v-if="item.iconEnd">
            <v-icon>{{ item.iconEnd }}</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider v-if="item.divider"
                   :key="'divider'+ i"
                   inset></v-divider>
      </template>
    </v-list>

  </v-card>
</template>

<script lang="ts"
        src="./Portrait.ts">
