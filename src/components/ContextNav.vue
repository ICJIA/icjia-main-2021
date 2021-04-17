<template>
  <div>
    <v-app-bar
      dense
      flat
      height="50"
      color="grey darken-2"
      scroll-threshold="0"
    >
      <v-spacer></v-spacer>
      <v-card elevation="0" color="grey darken-2">
        <v-btn dark text class="mr-2 btn--context" style="font-weight: 900"
          >Articles</v-btn
        >
        <v-btn dark text class="mr-2 btn--context" style="font-weight: 900"
          >Datasets</v-btn
        >
        <v-btn dark text class="mr-2 btn--context" style="font-weight: 900"
          >Web Applications</v-btn
        >
        <v-btn dark text class="mr-2 btn--context" style="font-weight: 900"
          >About the Research Hub</v-btn
        >
      </v-card>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contextDrawer: true,
    };
  },
};
</script>
