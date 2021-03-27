<template>
  <div>
    <v-tabs show-arrows v-model="newsModel" class="mt-2" color="grey darken-1">
      <v-tab>Agency </v-tab>
      <v-tab>Press </v-tab>
      <v-tab>Grants </v-tab>
      <v-tab>Employment </v-tab>

      <v-tab-item>
        <div style="height: 5px; background: #eee !important"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <NewsCard title="Agency News item here"></NewsCard>
        </div>
      </v-tab-item>

      <v-tab-item>
        <div style="height: 5px; background: #eee !important"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <NewsCard
            title="Press release item here"
            style="background: #fff"
          ></NewsCard>
        </div>
      </v-tab-item>

      <v-tab-item>
        <div style="height: 5px; background: #eee !important"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <NewsCard
            title="Grant news item here"
            style="background: #fff"
          ></NewsCard>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div style="height: 5px; background: #eee !important"></div>
        <div v-for="n in numberOfCards" :key="`news-${n}`">
          <NewsCard title="Employment News item here"></NewsCard>
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
  letter-spacing: 0.005rem !important;
}
.v-tab--active {
  font-weight: 900 !important;
  background: #666 !important;
  color: #fff !important;
}
</style>
