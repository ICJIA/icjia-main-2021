<template>
  <v-card elevation="0" style="margin-top: -5px; margin-bottom: 18px">
    <WidgetBar
      title="Latest Research"
      style="margin-top: 10px"
      :menuItems="eventItems"
    ></WidgetBar>
    <v-tabs
      show-arrows
      v-model="eventModel"
      :vertical="
        $vuetify.breakpoint.md ||
        $vuetify.breakpoint.lg ||
        $vuetify.breakpoint.xl
      "
      ><div style="height: 15px"></div>
      <v-tab>Articles</v-tab>
      <v-tab>Applications </v-tab>
      <v-tab>Datasets</v-tab>

      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
              <ResearchCardAlt></ResearchCardAlt>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
              <ResearchCardAlt></ResearchCardAlt>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
              <ResearchCardAlt></ResearchCardAlt>
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
