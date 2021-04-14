<template>
  <v-card elevation="0" style="margin-top: -5px; margin-bottom: 18px">
    <v-tabs show-arrows
      ><div style="height: 15px"></div>
      <v-tab>Articles</v-tab>
      <v-tab>Web Apps </v-tab>
      <v-tab>Datasets</v-tab>
      <div style="height: 10px"></div>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" v-for="n in 4" :key="`event-${n}`">
              <ResearchCardAlt2></ResearchCardAlt2>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" v-for="n in 4" :key="`event-${n}`">
              <ResearchCardAlt2></ResearchCardAlt2>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" v-for="n in 4" :key="`event-${n}`">
              <ResearchCardAlt2></ResearchCardAlt2>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      eventModel: 0,
      eventItems: ["ICJIA ResearchHub"],
    };
  },
  watch: {
    eventModel(newValue) {
      console.log("Tab click: ", newValue);
    },
  },
  methods: {},
};
</script>

<style scoped>
.v-tab {
  font-size: 24px !important;
  font-weight: 400 !important;
  color: #000 !important;
  letter-spacing: 0.01rem !important;
}
.v-tab--active {
  font-weight: 900 !important;
  background: #666 !important;
  color: #fff !important;
}
</style>
