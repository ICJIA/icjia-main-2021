<template>
  <div>
    <v-card
      class="grid-item markdown-body hover news-card mt-2 mb-2 px-3 mr-1 ml-1"
      height="180px"
      elevation="0"
      color="#fff"
    >
      <v-container fluid>
        <v-row>
          <!-- <v-col cols="12" md="3">
            <v-img
              aria-label="News post image"
              src="https://via.placeholder.com/250?text=Splash Photo"
              width="100%"
              height="150px"
              class=""
              style="border: 0px solid #fafafa"
              alt="ICJIA Intranet image"
              ><v-chip
                dark
                label
                style="margin-top: -1px"
                color="#333"
                class="icjia-card"
              >
                NEW! </v-chip
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    aria-label="Progress bar: Loading"
                    color="blue darken-3"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col> -->
          <v-col cols="12" md="12"
            ><v-card-text
              style="
                font-size: 14px;
                margin-top: -25px;
                color: #000;
                font-weight: 400;
              "
            >
              March 10, 2022
            </v-card-text>

            <v-card-text
              ><div
                style="
                  margin-top: -25px;
                  font-size: 18px;
                  font-weight: 700;
                  line-height: 24px;
                "
              >
                <router-link to="/" class="card-link">
                  <span style="font-weight: 900"> Grant News Item here </span>
                </router-link>
              </div></v-card-text
            >

            <v-card-text style="margin-top: -15px"
              >Sed et vehit nec mortalibus prius, incursurus nebulas quati Eueni
              tollens, et. Forte potiturque Anchisae nata commemorare postera
              inanis carissime Hippomene dira</v-card-text
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
