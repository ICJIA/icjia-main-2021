<template>
  <div>
    <v-card
      class="grid-item markdown-body hover news-card mb-5"
      height="180px"
      elevation="0"
      color="#fff"
      v-if="
        $vuetify.breakpoint.md ||
        $vuetify.breakpoint.lg ||
        $vuetify.breakpoint.xl
      "
    >
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <v-img
              aria-label="News post image"
              src="https://via.placeholder.com/250"
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
          </v-col>
          <v-col cols="12" md="9"
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
                Community Outreach Item Title here
              </div></v-card-text
            >

            <v-card-text style="margin-top: -15px"
              >Orem markdownum Oechalia tenus, bracchia concolor tum, et in tota
              a generum.</v-card-text
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
        src="https://via.placeholder.com/350"
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
