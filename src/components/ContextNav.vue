<template>
  <div>
    <v-app-bar
      dense
      flat
      height="50"
      color="grey darken-2"
      scroll-threshold="0"
    >
      <v-spacer></v-spacer>
      <v-card elevation="0" color="grey darken-2">
        <v-tabs
          dark
          background-color="grey darken-2"
          show-arrows
          center-active
          v-model="contextTab"
        >
          <v-tabs-slider color="grey darken-4"></v-tabs-slider>

          <!-- <v-tab v-for="i in 12" :key="i" :href="'#tab-' + i">
            Item {{ i }}
          </v-tab> -->

          <v-tab style="color: #fff">Articles</v-tab>
          <v-tab style="color: #fff">Web Apps</v-tab>
          <v-tab style="color: #fff">Datasets</v-tab>
          <v-tab style="color: #fff">About the Research Hub</v-tab>
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
