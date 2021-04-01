<template>
  <v-dialog v-model="search" width="70%" scrollable overlay-opacity=".8">
    <v-card class="" height="80vh">
      <v-card-title class="headline grey lighten-2">
        Search ICJIA
      </v-card-title>
      <v-card-text class="pt-6">
        <v-text-field
          solo
          ref="search"
          label="Search ICJIA"
          append-icon="mdi-magnify"
          id="search"
        ></v-text-field
      ></v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="mt-1">
        <v-spacer></v-spacer>
        <v-btn color="grey" @click="search = false" small> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  methods: {},
  mounted() {
    EventBus.$on("search", () => {
      this.search = true;
      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    });
  },
  data() {
    return {
      translate: false,
      search: null,
      show: false,
    };
  },
};
</script>

<style>
#search:focus {
  border: 1px solid #ccc;
}
</style>
