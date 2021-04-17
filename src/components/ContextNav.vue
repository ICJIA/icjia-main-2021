<template>
  <div>
    <v-app-bar dense flat height="50" scroll-threshold="0" color="#bbb">
      <v-spacer></v-spacer>
      <v-card elevation="0">
        <v-tabs dark show-arrows center-active v-model="contextTab">
          <v-tabs-slider></v-tabs-slider>

          <v-tab @click="routeToPage('About the Research Hub')"
            >About the Research Hub</v-tab
          >
          <v-tab @click="routeToPage('Articles')">Articles</v-tab>
          <v-tab @click="routeToPage('Web Apps')">Web Apps</v-tab>
          <v-tab @click="routeToPage('Datasets')">Datasets</v-tab>
          <v-tab @click="routeToPage('Documentation')">Documentation</v-tab>
        </v-tabs>
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  watch: {
    // eslint-disable-next-line no-unused-vars
  },
  mounted() {
    this.contextTab = 0;
  },
  methods: {
    routeToPage(page) {
      if (page === "About the Research Hub") return;
      console.log("route: ", page);
    },
  },
  data() {
    return {
      contextDrawer: true,
      contextTab: null,
    };
  },
};
</script>

<style scoped>
.v-tab {
  font-size: 12px !important;
  font-weight: 700 !important;
  color: #000 !important;
  /* letter-spacing: 0.01rem !important; */
  background: #bbb !important;
}
.v-tab--active {
  font-weight: 900 !important;
  background: #666 !important;
  color: #fff !important;
}

* >>> .v-slide-group__next,
* >>> .v-slide-group__prev {
  background: #bbb !important;
}
</style>
