<template>
  <v-footer class="py-4"
            dark
            height="auto">
    <v-container mx-auto>
      <v-row wrap>
        <v-col sm="9">
          <small-btn v-for="(item, i) in items"
                     :key="i"
                     :href="item.href"
                     class="ml-0 mr-3"
                     color="primary"
                     square
                     target="_blank">
            <v-icon v-text="item.icon" />
          </small-btn>
        </v-col>
        <v-spacer />
        <small-btn class="mr-0"
                   square
                   title="Go to top"
                   @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </small-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts"
        src="./Footer.ts" />
