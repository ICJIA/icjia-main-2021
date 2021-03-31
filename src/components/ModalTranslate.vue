<template>
  <v-dialog v-model="translate" width="500">
    <v-card>
      <v-card-title> Translate this page </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-btn text @click="googleTranslate('es')">Spanish</v-btn>
              <v-btn text @click="googleTranslate('pt')">Portugese</v-btn>
              <v-btn text @click="googleTranslate('fr')">French</v-btn>
              <v-btn text @click="googleTranslate('pl')">Polish</v-btn>
            </v-col>
            <v-col>
              <v-btn text @click="googleTranslate('es')">Spanish</v-btn>
              <v-btn text @click="googleTranslate('pt')">Portugese</v-btn>
              <v-btn text @click="googleTranslate('fr')">French</v-btn>
              <v-btn text @click="googleTranslate('pl')">Polish</v-btn>
            </v-col>
            <v-col>
              <v-btn text @click="googleTranslate('es')">Spanish</v-btn>
              <v-btn text @click="googleTranslate('pt')">Portugese</v-btn>
              <v-btn text @click="googleTranslate('fr')">French</v-btn>
              <v-btn text @click="googleTranslate('pl')">Polish</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <!-- <v-card-title class="headline grey lighten-2">
        Translate: {{ page }}
      </v-card-title> -->

      <v-divider></v-divider>

      <v-card-actions class="mt-1">
        <v-btn color="primary" text small> View Disclaimer </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="translate = false" small>
          Close Window
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  methods: {
    googleTranslate(lang) {
      console.log(lang);
      const url =
        "http://translate.google.com/translate?hl=en&sl=en&u=https://dev.icjia.cloud&tl=" +
        lang;
      this.translate = false;
      window.open(url);
    },
  },
  mounted() {
    EventBus.$on("translate", (page) => {
      this.translate = true;
      if (!page) {
        this.translate = false;
        return;
      }
      this.page = this.$myApp.config.clientBase + page;
    });
  },
  data() {
    return {
      translate: false,
      page: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
