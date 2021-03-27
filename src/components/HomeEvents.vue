<template>
  <v-card elevation="0" style="margin-top: -11px; margin-bottom: 18px">
    <v-toolbar flat color="grey darken-3" dark class="mb-1">
      <v-toolbar-title style="font-weight: 900; font-size: 28px"
        >Upcoming Events</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-menu offset-y bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Item 3</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-tabs
      show-arrows
      v-model="eventModel"
      :vertical="
        $vuetify.breakpoint.md ||
        $vuetify.breakpoint.lg ||
        $vuetify.breakpoint.xl
      "
    >
      <v-tab>Community</v-tab>
      <v-tab>Meetings </v-tab>
      <v-tab>Training</v-tab>

      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
              <EventDate tag="community"> </EventDate>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
              <EventDate tag="meetings"> </EventDate>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid style="background: #fff">
          <v-row no-gutters>
            <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
              <EventDate tag="training"> </EventDate>
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
