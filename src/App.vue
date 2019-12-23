<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <v-content id="home">
      <router-view />
    </v-content>

    <core-footer />

    <core-cta />
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
  import CoreCta from '@/pages/generic/cta/Cta.vue';
  import CoreDrawer from '@/pages/generic/drawer/Drawer.vue';
  import CoreFooter from '@/pages/generic/footer/Footer.vue';
  import CoreToolbar from '@/pages/generic/toolbar/Toolbar.vue';

  @Component({ components: { CoreCta, CoreDrawer, CoreFooter, CoreToolbar } })
  export default class App extends Vue {}
</script>
