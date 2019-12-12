<template>
  <v-app>
    <!-- Navigator bar -->
    <NavBar />

    <!-- Page content here -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NavBar from '@/views/generic/nav_bar/NavBar.vue';

  export default Vue.extend({
    name: 'App',

    components: {
      NavBar
    },

    data: () => ({
      //
    })
  });
</script>
