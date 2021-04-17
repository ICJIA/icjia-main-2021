<template>
  <div>
    <v-app-bar dense height="50" scroll-threshold="0" color="#bbb">
      <v-spacer></v-spacer>
      <v-card elevation="0">
        <v-tabs dark show-arrows center-active v-model="contextTab">
          <v-tabs-slider></v-tabs-slider>

          <!-- <v-tab v-for="i in 12" :key="i" :href="'#tab-' + i">
            Item {{ i }}
          </v-tab> -->

          <v-tab>About GATA</v-tab>
          <v-tab>Funding</v-tab>
          <v-tab>Webinars</v-tab>
          <v-tab>Technical Assistance</v-tab>
          <v-tab>Workshop Registration</v-tab>
        </v-tabs>
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  watch: {
    contextTab(newValue) {
      console.log("Selected tab: ", newValue);
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
