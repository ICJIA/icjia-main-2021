<template>
  <div>
    <v-app-bar
      dense
      height="45"
      scroll-threshold="0"
      color="grey darken-2"
      id="context-bar"
    >
      <div
        style="font-weight: 900; text-transform: uppercase; color: #fff"
        class="hidden-sm-and-down"
        v-if="isAtTop"
        id="context-title"
      >
        ICJIA GATA Information
      </div>
      <v-spacer></v-spacer>
      <v-card elevation="0">
        <v-tabs dark show-arrows center-active v-model="contextTab" height="45">
          <v-tabs-slider></v-tabs-slider>

          <v-tab @click="routeToPage('/gata/gata-about/')">About GATA</v-tab>
          <v-tab @click="routeToPage('/gata/gata-funding/')">Funding</v-tab>
          <v-tab @click="routeToPage('/gata/gata-webinars/')">Webinars</v-tab>
          <v-tab @click="routeToPage('/gata/gata-technical-assistance/')"
            >Technical Assistance</v-tab
          >
          <v-tab @click="routeToPage('/gata/gata-workshop-registration/')"
            >Workshop Registration</v-tab
          >
        </v-tabs>
      </v-card>
      <v-spacer v-if="!isAtTop"></v-spacer>
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
    let distance = window.$("#context-bar").offset().top;
    let vm = this;
    window.$(window).scroll(function () {
      if (window.$(this).scrollTop() >= distance) {
        vm.isAtTop = true;
      } else {
        vm.isAtTop = false;
      }
    });
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
      isAtTop: false,
    };
  },
};
</script>

<style scoped>
.v-tab {
  font-size: 12px !important;
  font-weight: 700 !important;
  color: #ddd !important;
  /* letter-spacing: 0.01rem !important; */
  background: #616161 !important;
}
.v-tab--active {
  font-weight: 900 !important;
  background: #333 !important;
  color: #fff !important;
}

* >>> .v-slide-group__next,
* >>> .v-slide-group__prev {
  background: #616161 !important;
}
</style>
