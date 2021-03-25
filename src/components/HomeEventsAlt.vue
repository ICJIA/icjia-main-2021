<template>
  <div>
    <v-card elevation="0" style="margin-top: -11px; margin-bottom: 18px">
      <v-toolbar flat color="grey darken-3" dark>
        <v-toolbar-title style="font-weight: 900"
          >Upcoming Events</v-toolbar-title
        >
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
              <v-slide-group v-model="communityModel" show-arrows center-active>
                <v-slide-item v-for="n in 15" :key="n" v-slot="{}">
                  <v-card
                    color="white"
                    class="ma-0 event-card"
                    height="300"
                    width="500"
                  >
                    <div class="px-8 py-8">
                      <router-link to="/" class="card-link">
                        <h2
                          style="font-size: 64px; font-weight: 900"
                          class="mb-8"
                        >
                          21
                        </h2>

                        <h3
                          style="
                            border-bottom: 5px solid #333;
                            font-size: 36px;
                            padding-bottom: 16px;
                            max-width: 150px;
                            margin-bottom: 15px;
                          "
                        >
                          March
                        </h3>
                      </router-link>

                      <p style="color: #000">
                        Lorem markdownum Oechalia tenus, bracchia concolor tum,
                        et in tota a generum. Ludit et nostri idemque circum.
                        Tela tamen verba, tenet domui Dymantis. Huc decor ante
                        corpore virga et sonitum bello clam Amphiona, bis ubi
                        armo per infectum traxit dictoque nymphae? Quirites
                        aequoris vultu altis medium, haec ad devexo aquilonibus.
                      </p>
                    </div>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
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
      communityModel: 0,
    };
  },
  mounted() {
    window.$("i").replaceTagName("span");
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
.v-sheet.v-card {
  border-radius: 0px;
}

div.v-slide-group__prev > span.v-icon.v-icon,
div.v-slide-group__next > span.v-icon.v-icon {
  font-size: 48px !important;
  color: #000 !important;
}
</style>
