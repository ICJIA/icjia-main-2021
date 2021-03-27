<template>
  <div>
    <v-toolbar flat color="grey darken-3" dark style="margin-top: -13px">
      <v-toolbar-title style="font-weight: 900; font-size: 28px"
        >Grant Information
      </v-toolbar-title>
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
    <div v-for="n in 3" :key="`news-${n}`">
      <NewsCard></NewsCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsModel: 0,
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
