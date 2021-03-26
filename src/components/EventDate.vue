<template>
  <div>
    <v-card
      class="hover event-card mr-2 mt-1 mb-1"
      style="height: 400px; overflow-y: auto"
      data-aos="fade-left"
      data-aos-offset="100"
      data-aos-delay="0"
    >
      <v-container fluid>
        <v-row no-gutters>
          <v-col>
            <div class="text-right">
              <span
                style="
                  background: #888;
                  color: white;
                  font-size: 11px;
                  font-weight: 700;
                  text-transform: uppercase;
                "
                class="px-2 py-2"
                >{{ tag }}</span
              >
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid style="margin-top: -25px">
        <v-row no-gutters>
          <v-col class="px-4 py-2">
            <h2 style="font-size: 64px; font-weight: 900; margin-top: -15px">
              21
            </h2>

            <h3
              style="
                border-bottom: 5px solid #333;
                font-size: 36px;
                margin-top: -15px;
                max-width: 150px;
              "
            >
              March
            </h3>
            <div class="mt-6">
              <span class="eventTitle" style="font-weight: 900">
                Event Title Here</span
              >
              |
              <span class="eventTime" style="color: #666"> 2:00pm to 4pm</span>
            </div>
            <p style="color: #000" class="mt-3">
              Lorem markdownum Oechalia tenus, bracchia concolor tum, et in tota
              a generum. Ludit et nostri idemque circum. Tela tamen verba, tenet
              domui Dymantis.
            </p>
            <router-link
              to="/"
              aria-label="Read more about this item."
              class="skiplink dark"
              title="Read more about this item."
              style="font-size: 12px; margin-top: 5px"
            >
              Read more about this event
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    },
  },
  props: {
    eventBorder: {
      type: Boolean,
      default: true,
    },
    tag: {
      type: String,
      default: "General",
    },
  },
};
</script>

<style>
.eventBorder {
  border-right: 1px solid #ccc;
}

.evenBottomtBorder {
  border-bottom: 1px solid #aaa;
}
</style>
