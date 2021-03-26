<template>
  <div>
    <v-toolbar flat color="grey darken-3" dark>
      <v-toolbar-title style="font-weight: 900; font-size: 28px"
        >Latest Research
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
    <v-container fill-height fluid class="px-0" style="margin-top: -9px">
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <router-link to="/">
            <v-card
              dark
              :color="colors.box1"
              height="100%"
              class="elevation-0 px-1 py-1 box mr-1 hub-card"
            >
              <v-img
                src="https://via.placeholder.com/350?text=Article splash photo"
                aria-label="News post image"
                width="100%"
                height="250"
                class=""
                style="border: 0px solid #fafafa"
                alt="ICJIA Intranet image"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      aria-label="Progress bar: Loading"
                      color="blue darken-3"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="px-5">
                <v-card-text style="font-size: 12px"
                  >January 22, 2022
                </v-card-text>

                <v-card-text
                  ><div
                    style="
                      margin-top: -20px;
                      font-size: 22px;
                      font-weight: bold;
                      line-height: 28px;
                    "
                  >
                    Research Hub Article 1 here
                  </div></v-card-text
                >

                <v-card-text style="margin-top: -15px"
                  >Lorem markdownum mollibus, qui tam timentia densior ferrum
                  capillos ad nisi qua sic. Recusat terras; ad per Syringa
                  Erecthida magnas felicem pigris consistere? Penates silvae
                  supplevit et antris inplevit ait deprensa. Sua Alcides aetatis
                  velles. Iason erraverit quamquam nectare Syringa famae, has se
                  adhuc; de.</v-card-text
                >
              </div>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/">
            <v-card
              dark
              :color="colors.box1"
              height="100%"
              class="elevation-0 px-1 py-1 box mr-1 hub-card"
            >
              <v-img
                src="https://via.placeholder.com/350?text=Article splash photo"
                aria-label="News post image"
                width="100%"
                height="250"
                class=""
                style="border: 0px solid #fafafa"
                alt="ICJIA Intranet image"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      aria-label="Progress bar: Loading"
                      color="blue darken-3"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="px-5">
                <v-card-text style="font-size: 12px"
                  >January 22, 2022
                </v-card-text>

                <v-card-text
                  ><div
                    style="
                      margin-top: -20px;
                      font-size: 22px;
                      font-weight: bold;
                      line-height: 28px;
                    "
                  >
                    Research Hub Article 2 here
                  </div></v-card-text
                >

                <v-card-text style="margin-top: -15px"
                  >Ita in viresque stimuloque summasque in nostri Phoebique
                  caede, vano. Arte nomine, quondam manu. Ait tenent versus
                  gaudia, remis quod agrosque neque, cum magni summaque, et.
                  Stygios sacris magis, illa carentem reduxit, locus comes,
                  reverentia deum vertitur Surgit? Ubi cadit, longum laevaque,
                  consternatique solent et tamen ferunt et adiuvet intonsum
                  nubibus, domo umbra beatam genitor.</v-card-text
                >
              </div>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/">
            <v-card
              dark
              :color="colors.box1"
              height="100%"
              class="elevation-0 px-1 py-1 box hub-card"
            >
              <v-img
                src="https://via.placeholder.com/350?text=Article splash photo"
                aria-label="News post image"
                width="100%"
                height="250"
                class=""
                style="border: 0px solid #fafafa"
                alt="ICJIA Intranet image"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      aria-label="Progress bar: Loading"
                      color="blue darken-3"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="px-5">
                <v-card-text style="font-size: 12px"
                  >January 22, 2022
                </v-card-text>

                <v-card-text
                  ><div
                    style="
                      margin-top: -20px;
                      font-size: 22px;
                      font-weight: bold;
                      line-height: 28px;
                    "
                  >
                    Research Hub Article 3 here
                  </div></v-card-text
                >

                <v-card-text style="margin-top: -15px"
                  >Cunctis sit utilis nulloque Apollo, doli patulis candida,
                  oculis inarata nisi, leonum et multa. Arbore dabat tulerunt in
                  Iuno terris enim subiecta, ut. Erit inmurmurat ore, servata et
                  quos gradientis: asello artus, in arida ut illum, et. Luminis
                  animal submisit equos primus sic corpora palus est alii hanc
                  quantoque quos libet quascumque scire. Omni non sinuantur,
                  suffuderat nomina: captat dona moles poenae enim:
                  fibris.</v-card-text
                >
              </div>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      colors: {
        box1: "#555",
        box2: "#555",
        box3: "#555",
      },
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
/* .box:hover {
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
} */

.v-sheet.v-card {
  border-radius: 0px;
}
</style>
