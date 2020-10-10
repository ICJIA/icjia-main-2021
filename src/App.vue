<template>
  <v-app id="appTop">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-fab-transition>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        fixed
        bottom
        dark
        right
        color="blue darken-4"
        transition="scale-transition"
        @click="toTop"
        aria-label="Click to scroll to top"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-main>
      <!-- <Banner ref="banner" />
      <Census :key="$route.path"></Census> -->

      <!-- <Language></Language> -->
      <!-- <Translate></Translate> -->

      <transition name="fade" mode="out-in">
        <router-view
          @click="closeElements()"
          :key="$route.fullPath"
        ></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  name: "App",
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
      console.log("Canonical: ", this.canonical);
      //console.log("computedPublicPath: ", this.$myApp.computedPublicPath);
      if (this.$refs.alert) this.$refs.alert.reset();
    },
  },
  async created() {
    this.loading = true;
    this.siteTitle = `${this.$myApp.config.siteTitle}`;
    this.siteDescription = `${this.$myApp.config.siteDescription}`;
    this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
    this.loading = false;
    console.log("app globals: ", this.$myApp);
    this.canonical = `${this.$myApp.config.clientBase}${this.$myApp.computedPublicPath}${this.$route.path}`;
    console.log("Canonical: ", this.canonical);
  },
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: this.siteTitle,
      // all titles will be injected into this template
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "canonical", href: this.canonical }],
      meta: [
        { charset: "utf-8" },
        {
          vmid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          vmid: "description",
          name: "description",
          content: "Illinois Criminal Justice Information Authority",
        },
      ],
    };
  },

  data: () => ({
    loading: true,
    pages: [],
    canonical: "",
    siteDescription: "",
    title: "",
    siteMeta: null,
    fab: false,
    censusExpire: true,
  }),
  methods: {
    closeElements() {
      EventBus.$emit("close-search");
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 100;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.container.full-width {
  width: 100%;
  padding: 0px !important;
}
</style>
