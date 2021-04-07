<template>
  <div v-if="showCookieModal">
    <v-bottom-sheet v-model="cookie" persistent hide-overlay width="100%">
      <v-card
        class="px-3 pt-5 pb-3 text-center"
        style="font-weight: 900"
        color="grey lighten-5"
      >
        This is the cookie policy popup. <br /><br />This site uses cookies.
        <br /><br />Yadda Yadda Yadda.
        <v-card-actions>
          <!-- <v-checkbox
            class="mx-2"
            label="Do Not Show Again"
            @click="hideForGood"
          ></v-checkbox> -->
          <v-spacer></v-spacer>

          <v-btn dark color="grey darken-1" @click="hideForGood">GOT IT</v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie: true,
    };
  },
  methods: {
    hideForGood() {
      localStorage.setItem("showCookieModal", false);
      this.cookie = false;
    },
  },
  computed: {
    showCookieModal() {
      //console.log("local storage: ", localStorage.getItem("showCookieModal"));
      if (localStorage.getItem("showCookieModal")) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
