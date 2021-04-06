<template>
  <div>
    <v-card
      class="mx-auto info-card px-2 py-2"
      :class="{
        'mr-2':
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl,
        'ml-2':
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl,
      }"
    >
      <v-img
        src="https://via.placeholder.com/200?text=Splash Photo"
        :height="splashHeight"
      ></v-img>

      <v-card-title> Title here </v-card-title>

      <v-card-subtitle> Teaser here </v-card-subtitle>

      <v-card-actions>
        <v-btn small color="grey lighten-1">Read More &raquo;</v-btn>
        <v-spacer></v-spacer>

        <v-btn small text @click="show = !show">
          <v-icon small left>{{
            show ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
          Description
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            Lorem markdownum luctibus notavi belli aniis femur tulerat et lucem,
            miserabile. Caede praeacutae plagas pessima vivum ex et fortuna ne
            amor: caliginis. Effugit telis sollicita contenta quibus loquor
            capit copia carpens fortunam somnus. Stabat traderet coeunt ne
            cunctis faveas quas nefas, in terret expetit inminet Cyllenius
            ignara terra revocamina quem adplicat erat. Stabat inminet Cyllenius
            ignara terra revocamina quem adplicat erat.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    splashHeight: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
