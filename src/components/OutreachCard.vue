<template>
  <div mt-3>
    <v-card
      class="grid-item markdown-body hover news-card mt-2 mb-2 px-3 mr-1 ml-1"
      height="280px"
      elevation="0"
      color="#fff"
      v-if="
        $vuetify.breakpoint.md ||
        $vuetify.breakpoint.lg ||
        $vuetify.breakpoint.xl
      "
      style="overflow-y: auto !important"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              aria-label="News post image"
              src="https://ipsumimage.appspot.com/250x250?l=Outreach|splash photo here"
              height="230px"
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
          </v-col>
          <v-col cols="12" md="8"
            ><v-card-text
              style="
                font-size: 14px;
                margin-top: -25px;
                color: #000;
                font-weight: 400;
              "
            >
              January 10, 2022
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
                  <span style="font-weight: 900">
                    Community Outreach Article here
                  </span>
                </router-link>
              </div></v-card-text
            >

            <v-card-text style="margin-top: -15px"
              ><div>
                <p>
                  Lorem markdownum et caelo capacius tractu ex Ledam quantaque
                  fores. Nixique bisque intravit Teucri Aeneae regisque tergo
                  matrona regit o. Causa non. Sed potest credunt periit seu est
                  minuuntur taurorum dicens avidaeque iram. Per illum et amor
                  sit reduxit adit, sui ima villosis tractataque tamen forma
                  Clymeneia si modo non caelum.
                </p>
              </div></v-card-text
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card
      v-else
      class="grid-item markdown-body hover card"
      elevation="0"
      color="#fff"
      style="border: 1px solid #ccc"
    >
      <v-img
        src="https://ipsumimage.appspot.com/250x250?l=Outreach|splash photo here"
        aria-label="News post image"
        width="100%"
        height="250"
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

      <div class="px-5">
        <v-card-text style="font-size: 12px">January 22, 2022 </v-card-text>

        <v-card-text
          ><div
            style="
              margin-top: -20px;
              font-size: 22px;
              font-weight: bold;
              line-height: 28px;
            "
          >
            Mobile Community Outreach Item Title here
          </div></v-card-text
        >

        <v-card-text style="margin-top: -15px"
          >Orem markdownum Oechalia tenus, bracchia concolor tum, et in tota a
          generum.</v-card-text
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
