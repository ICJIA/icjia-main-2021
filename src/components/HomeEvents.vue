<template>
  <div>
    <v-card elevation="0" style="margin-top: -11px; margin-bottom: 18px">
      <v-toolbar flat color="grey darken-3" dark class="mb-1">
        <v-toolbar-title style="font-weight: 900"
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
        v-model="eventModel"
        :vertical="
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl
        "
        style="background: #eee"
      >
        <v-tab>Community</v-tab>
        <v-tab>Meetings </v-tab>
        <v-tab>Events</v-tab>

        <v-tab-item>
          <v-card flat style="background: #eee">
            <v-card-text>
              <v-container fluid style="background: #fff">
                <v-row>
                  <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
                    <EventDate :eventBorder="n < 3" class="hover event-card">
                    </EventDate>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat style="background: #eee">
            <v-card-text>
              <v-container fluid style="background: #fff">
                <v-row>
                  <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
                    <EventDate
                      :eventBorder="n < 3"
                      class="hover event-card"
                    ></EventDate>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat style="background: #eee">
            <v-card-text>
              <v-container fluid style="background: #fff">
                <v-row>
                  <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
                    <EventDate
                      :eventBorder="n < 3"
                      class="hover event-card"
                    ></EventDate>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
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

<style>
.v-tab--active {
  font-weight: 900 !important;
  background: #666;
  color: #fff !important;
}
</style>
