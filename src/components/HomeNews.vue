<template>
  <div>
    <v-tabs show-arrows v-model="newsModel" class="mt-2">
      <v-tab>Latest Grants </v-tab>
      <v-tab>Press Releases </v-tab>
      <v-tab>Agency News </v-tab>

      <v-tab-item style="background: #eee">
        <div style="height: 1px"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <GrantCard></GrantCard>
        </div>
      </v-tab-item>
      <v-tab-item style="background: #eee">
        <div style="height: 1px"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <NewsCard title="Press release item here"></NewsCard>
        </div>
      </v-tab-item>
      <v-tab-item style="background: #eee">
        <div style="height: 1px"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <NewsCard title="ICJIA News item here"></NewsCard>
        </div>
      </v-tab-item>
    </v-tabs>
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
  props: {
    numberOfCards: {
      type: Number,
      default: 4,
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
