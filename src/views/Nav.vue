<template>
  <div>
    <h2 class="mt-6 ml-2">Megamenu A (Two wide dropdowns)</h2>
    <v-app-bar color="grey lighten-2" height="90" hide-on-scroll class="mt-2">
      <div
        class="hover hamburger text-center"
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        @click="drawer = true"
      >
        <span class="v-icon mdi mdi-menu"></span>
        <div style="font-size: 10px; font-weight: 900">MENU</div>
      </div>

      <v-spacer
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      ></v-spacer>
      <v-img
        alt="ICJIA Logo"
        class="shrink mr-2 hover"
        contain
        src="https://ipsumimage.appspot.com/155x100?l= LOGO "
        transition="scale-transition"
        width="90"
        style
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
      />

      <div
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
        style="font-size: 16px; font-weight: bold; margin-left: 10px"
        class="hover hidden-sm-and-down"
      >
        ILLINOIS CRIMINAL JUSTICE INFORMATION AUTHORITY
      </div>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        offset-y
        content-class="my-menu"
        open-on-hover
        min-width="500px"
        nudge-bottom="3px"
        nudge-left="393px"
        rounded="false"
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Item 1<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-card min-height="250px">
          <v-container
            ><v-row>
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 1 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 2 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 3 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
            </v-row></v-container
          >
        </v-card>
      </v-menu>

      <v-menu
        bottom
        offset-y
        content-class="my-menu"
        open-on-hover
        min-width="500px"
        nudge-bottom="3px"
        nudge-left="393px"
        rounded="false"
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Item 2<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-card min-height="250px">
          <v-container
            ><v-row>
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 1 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 2 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 3 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
            </v-row></v-container
          >
        </v-card>
      </v-menu>

      <v-btn text class="hidden-sm-and-down navItem">Item Splash 1</v-btn>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="openSearchModal()">
            <span class="v-icon mdi mdi-magnify"></span>
          </v-btn>
        </template>
        <span>Search</span>
      </v-tooltip>
    </v-app-bar>

    <h2 class="mt-6 ml-2">Megamenu B (Two wide dropdowns / one normal)</h2>
    <v-app-bar color="grey lighten-2" height="90" hide-on-scroll class="mt-2">
      <div
        class="hover hamburger text-center"
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        @click="drawer = true"
      >
        <span class="v-icon mdi mdi-menu"></span>
        <div style="font-size: 10px; font-weight: 900">MENU</div>
      </div>

      <v-spacer
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      ></v-spacer>
      <v-img
        alt="ICJIA Logo"
        class="shrink mr-2 hover"
        contain
        src="https://ipsumimage.appspot.com/155x100?l= LOGO "
        transition="scale-transition"
        width="90"
        style
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
      />

      <div
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
        style="font-size: 16px; font-weight: bold; margin-left: 10px"
        class="hover hidden-sm-and-down"
      >
        ILLINOIS CRIMINAL JUSTICE INFORMATION AUTHORITY
      </div>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        offset-y
        content-class="my-menu"
        open-on-hover
        min-width="500px"
        nudge-bottom="3px"
        nudge-left="393px"
        rounded="false"
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Item 1<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-card min-height="250px">
          <v-container
            ><v-row>
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 1 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 2 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 3 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
            </v-row></v-container
          >
        </v-card>
      </v-menu>

      <v-menu
        bottom
        offset-y
        origin="center center"
        transition="scale-transition"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Item 2<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list nav dense elevation="2">
          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Menu item 1</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Menu item 2</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Menu item 3</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="appNav">
            <v-list-item-content class="hover">
              <v-list-item-title style="font-size: 12px !important"
                >Menu item 4</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu
        bottom
        offset-y
        content-class="my-menu"
        open-on-hover
        min-width="500px"
        nudge-bottom="3px"
        nudge-left="393px"
        rounded="false"
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="hidden-sm-and-down navItem"
            v-bind="attrs"
            v-on="on"
            >Item 3<v-icon right small>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-card min-height="250px">
          <v-container
            ><v-row>
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 1 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 2 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
              <v-col
                ><div
                  style="
                    font-size: 24px;
                    font-weight: 900;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                  "
                >
                  Col 3 Header
                </div>
                <v-list nav dense elevation="0">
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item-title
                    class="mt-2"
                    style="font-weight: 900; color: #555"
                  >
                    Sub Header 1
                  </v-list-item-title>
                  <v-list-item class="appNav" to="/">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 1</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="appNav" to="/version-b">
                    <v-list-item-content class="hover">
                      <v-list-item-title style="font-size: 12px !important"
                        >Item 2</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list></v-col
              >
            </v-row></v-container
          >
        </v-card>
      </v-menu>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="openSearchModal()">
            <span class="v-icon mdi mdi-magnify"></span>
          </v-btn>
        </template>
        <span>Search</span>
      </v-tooltip>
    </v-app-bar>
    <div style="height: 500px"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass"></style>
