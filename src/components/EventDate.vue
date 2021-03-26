<template>
  <div>
    <v-card
      class="hover event-card mr-2 mt-1 mb-1"
      style="height: 400px; overflow-y: auto"
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
            <h2 style="font-size: 64px; font-weight: 900">21</h2>

            <h3
              style="
                border-bottom: 5px solid #333;
                font-size: 36px;
                margin-top: -10px;
                max-width: 150px;
              "
            >
              March
            </h3>

            <p style="color: #000" class="mt-8">
              Lorem markdownum Oechalia tenus, bracchia concolor tum, et in tota
              a generum. Ludit et nostri idemque circum. Tela tamen verba, tenet
              domui Dymantis.
            </p>
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
