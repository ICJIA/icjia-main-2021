<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12" :md="boxColumns" v-for="n in boxes" :key="`row1-${n}`">
          <v-card
            :color="getColor(n)"
            style="height: 250px"
            class="py-5 px-2 text-center info-card hover"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col
                  ><v-icon style="font-size: 70px" dark>{{
                    icons[n - 1]
                  }}</v-icon>
                  <h2
                    style="
                      color: #fff;

                      margin-bottom: 10px;
                      font-size: 24px;
                    "
                  >
                    Click through title here
                  </h2>
                  <p style="color: #fff; font-size: 14px" v-if="showTeaser">
                    Lorem markdownum ramis ratus iussit Echidnaea
                  </p></v-col
                >
              </v-row>
            </v-container>
            <!--  -->
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row v-if="secondRow" no-gutters>
        <v-col cols="12" md="4" v-for="n in 3" :key="`row1-${n}`">
          <v-card
            color="grey darken-3"
            style="height: 200px"
            class="pt-1 px-4 text-left info-card hover mr-2 mt-2"
            ><h2
              style="
                color: #fff;
                border-bottom: 1px solid #aaa;
                padding-bottom: 5px;
                margin-bottom: 10px;
                text-transform: uppercase;
              "
            >
              Card Title here
            </h2>
            <p style="color: #fff" class="mt-5">
              Terras consistere, quod habendum, inque illam fruticosa ne alto.
              Unus honore a lingua sustulit, ore diversa gemitum muneris
              paulatim Hesperiae longo; ades.
            </p></v-card
          >
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
/* eslint-disable vue/no-use-v-if-with-v-for */
export default {
  data() {
    return {
      colors: ["#333", "#555"],
      icons: ["fact_check", "leaderboard", "map", "contact_mail"],
    };
  },
  methods: {
    getColor(index) {
      if (index % 2 == 0) {
        return this.colors[0];
      } else {
        return this.colors[1];
      }
    },
  },
  computed: {
    boxColumns() {
      return 12 / this.boxes;
    },
  },
  props: {
    boxes: {
      type: Number,
      default: 4,
    },
    secondRow: {
      type: Boolean,
      default: false,
    },

    showTeaser: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
