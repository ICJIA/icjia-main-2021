<template>
  <v-container fill-height fluid class="px-0" style="margin-top: -23px">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <router-link to="/">
          <v-card
            dark
            :color="colors.box1"
            height="100%"
            class="elevation-0 px-10 py-8 box"
          >
            <h2 class="text-center box-head">Lorem markdownum</h2>

            <v-card-text class="px-2 font-weight-light box-text">
              Lorem markdownum: tribus me ferum rutilum! Nocte vel hoc, potuisse
              comitata rigido crudelesque videri quo legit; inquiri. Quodque
              remis ripa genitus celerem purpureus fuere feris: aevo rident
              fiducia carpebam introrsus limine.
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
      <v-col cols="12" md="4">
        <router-link to="/">
          <v-card
            dark
            :color="colors.box2"
            height="100%"
            class="elevation-0 px-10 py-8 box"
          >
            <h2 class="text-center box-head">Sine qui ferat</h2>
            <v-card-text class="px-2 font-weight-light box-text">
              Sine qui ferat, consuescit corpus manibus, phocus! Templo idem
              procerum. Et semper esset Hersilien flavae; aras ubera postquam
              deficiunt animus, distulit acta castra anguem. violence.
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
      <v-col cols="12" md="4">
        <router-link to="/">
          <v-card
            dark
            :color="colors.box3"
            height="100%"
            class="elevation-0 px-10 py-8 box"
          >
            <h2 class="text-center box-head">Iugalia per inferias</h2>
            <v-card-text class="px-2 font-weight-light box-text">
              Iugalia per inferias quid ait omnibus rigorem vivente sumite
              augere depresso post et astra: mentem. Fieretque Haemonia adicit
              veniamque talibus, plura est, cur.
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        box1: "#aaa",
        box2: "#999",
        box3: "#888",
      },
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.box:hover {
  background: #ccc !important;
}
.box:hover > * {
  color: #444;
  cursor: pointer;
}
.box-head {
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
}
.box-text {
  font-size: 18px;
  margin-top: 8px;
  color: #fff;
}
.rule {
  border-bottom: 1px solid #ccc !important;
  border-top: 1px solid #ccc !important;
}

.v-sheet.v-card {
  border-radius: 0px;
}
</style>
