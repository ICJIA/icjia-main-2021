<template>
  <v-dialog v-model="search" width="70%" style="z-index: 999999">
    <v-toolbar flat color="grey darken-3" dark class="mb-2">
      <v-toolbar-title style="font-weight: 900; font-size: 28px"
        >Search ICJIA</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn @click="search = false">Close</v-btn>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 700px; background: #eee; margin-top: -20px"
    >
      <v-row>
        <v-col>
          <v-text-field
            clearable
            solo
            hide-details
            color="grey"
            ref="search"
            label="Search ICJIA"
            append-icon="mdi-magnify"
            id="search"
            v-model="query"
            @keyup="instantSearch()"
            class="pt-5"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div v-if="query && query.length">
            <v-card
              class="mb-6 hover"
              color="grey lighten-3"
              v-for="n in 8"
              :key="n"
              @click="search = false"
            >
              <v-skeleton-loader
                type="article"
                class="mb-4"
              ></v-skeleton-loader>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  watch: {
    // query() {
    //   if (!this.query) this.query = null;
    // },
  },
  methods: {
    setFocus() {
      this.$refs.search.focus();
    },
    instantSearch() {
      console.log("instant search here");
    },
  },
  mounted() {
    EventBus.$on("search", () => {
      this.search = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.setFocus();
        }, 200);
      });
    });
  },
  data() {
    return {
      translate: false,
      search: null,

      query: null,
    };
  },
};
</script>

<style>
/* #search:focus {
  border: 1px solid #ccc !important;
  padding: 5px !important;
} */
</style>
