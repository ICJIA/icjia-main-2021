<template>
  <div>
    <v-container fluid style="background: #fff">
      <v-card elevation="0" style="border: 1px solid #ccc">
        <v-toolbar flat color="grey darken-3" dark>
          <v-toolbar-title>Upcoming Events</v-toolbar-title>
        </v-toolbar>
        <v-tabs
          :vertical="
            $vuetify.breakpoint.md ||
            $vuetify.breakpoint.lg ||
            $vuetify.breakpoint.xl
          "
          style="background: #eee"
        >
          <v-tab @click="changeTab('community')">Meetings</v-tab>
          <v-tab @click="changeTab('icjia')">Events </v-tab>
          <v-tab @click="changeTab('event3')">Community</v-tab>

          <v-tab-item>
            <v-card flat style="background: #eee">
              <v-card-text>
                <v-container fluid style="background: #fff">
                  <v-row>
                    <v-col cols="12" md="4" v-for="n in 3" :key="`event-${n}`">
                      <EventDate :eventBorder="n < 3"></EventDate>
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
                      <EventDate :eventBorder="n < 3"></EventDate>
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
                      <EventDate :eventBorder="n < 3"></EventDate>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
      <div style="font-size: 12px" class="mt-2 text-right">
        Shrink browser window to see mobile view
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
