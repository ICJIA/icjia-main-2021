<template>
  <v-footer style="border-top: 1px solid #aaa">
    <v-card
      flat
      tile
      width="100%"
      class="grey darken-4 text-center pt-4 pb-4"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="0"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4" style="color: white">
            <h2 style="color: white" class="mb-3">Footer Heading 1</h2>
            <p class="text-left" style="font-size: 13px">
              Lorem markdownum nunc, virginea ornabant hanc, Lelex etiam
              postibus ire, adspicio. Vidit novissima nihil in tamen Plena at
              lumina adfixa nocuisse quos deceptam utque stravit Philemon et?
              Questus subibis quoque, formosior committat insignis, cumque nam.
            </p>
          </v-col>
          <v-col cols="12" md="4" style="color: white">
            <h2 style="color: white" class="mb-3">Footer Heading 2</h2>
            <p class="text-left" style="font-size: 13px">
              Blandis fateor causamque membris pulsa quaecumque perosus accedere
              Aeson adflabitur. Nocebit distent in faciem obsequio in nescit
              ecce morsa hoc prima exosus. Ortus ferus, quidem! Ostendens
              longeque maris volucresque, amictu penitus flectit infantem et
              loca demissaque non.
            </p>
          </v-col>
          <v-col cols="12" md="4" style="color: white">
            <h2 style="color: white" class="mb-3">Footer Heading 3</h2>
            <p class="text-left" style="font-size: 13px">
              Lorem markdownum nunc, virginea ornabant hanc, Lelex etiam
              postibus ire, adspicio. Vidit novissima nihil in tamen Plena at
              lumina adfixa nocuisse quos deceptam utque stravit Philemon et?
              Questus subibis quoque, formosior committat insignis, cumque nam.
            </p>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-3" style="border-top: 1px solid #fff" fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="text-center mt-8">
            <img
              src="https://via.placeholder.com/175x100/212121/FFFFFF/?text=LOGO"
              alt="Footer logo"
              style="border: 1px solid #777"
            />
          </v-col>
          <v-col cols="12" md="6" class="text-center mt-2" style="color: white">
            <div class="py-4">
              <span class="v-icon fab fa-twitter mr-4"></span
              ><span class="v-icon fab fa-facebook mr-4"></span>
              <span class="v-icon fab fa-youtube"></span>
            </div>
            <div style="font-size: 12px">
              <router-link to="/" style="color: #fff">About</router-link> |
              <router-link to="/" style="color: #fff">Privacy</router-link> |
              <router-link to="/" style="color: #fff">Contact</router-link> |
              <router-link to="/" style="color: #fff">Sitemap</router-link> |
              <router-link to="/" style="color: #fff">RSS</router-link> |
              <a
                href="https://github.com/ICJIA/icjia-main-2021"
                style="color: #fff"
                target="_blank"
                >Github</a
              >
            </div>

            <div
              class="mt-3"
              style="font-size: 12px; font-weight: 300; color: #ccc"
            >
              <strong
                >&#169; {{ new Date().getFullYear() }} Illinois Criminal Justice
                Information Authority</strong
              >
            </div></v-col
          >
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<style>
.router-link-exact-active {
  color: #fff !important;
  font-weight: 900;
}
</style>
