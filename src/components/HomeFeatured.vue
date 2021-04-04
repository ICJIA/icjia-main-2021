<template>
  <div>
    <v-card
      class="mx-auto info-card"
      :class="{
        'mr-1':
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl,
      }"
    >
      <v-img
        src="https://via.placeholder.com/200?text=Splash Photo"
        height="200px"
      ></v-img>

      <v-card-title> Program Title here </v-card-title>

      <v-card-subtitle> Summary here </v-card-subtitle>

      <!-- <v-card-actions class="text-right">
        <v-spacer></v-spacer>
        <v-btn color="grey darken-2" text> Read More &raquo;</v-btn>
      </v-card-actions> -->

      <!-- <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition> -->
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
