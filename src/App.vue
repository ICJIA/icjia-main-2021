<template>
  <v-app id="appTop">
    <div id="nav" role="navigation" style="z-index: 10000">
      <router-link
        to="#content"
        aria-label="Skip Navigation"
        class="skiplink"
        @click.native="scrollFix('#content')"
        title="Skip Navigation"
        style="font-size: 12px"
      >
        Skip to content
      </router-link>
    </div>
    <AppNav @hook:mounted="fixA11y()"></AppNav>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view
          @click="closeElements()"
          :key="$route.fullPath"
        ></router-view>
      </transition>
    </v-main>
    <AppFooter
      style="margin: 0; padding: 0"
      @hook:mounted="fixA11y()"
    ></AppFooter>
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
        // {
        //   vmid: "robots",
        //   name: "robots",
        //   content: "index, follow",
        // },
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
    fixA11y() {
      // window.$("i").replaceTagName("span");
      // window
      //   .$("button.v-icon")
      //   .replaceEmptyElements("This is intentionally blank");
      // window.$('div[role="button"]').removeRedundantAttributes("aria-owns");
      // window.$('th[role="columnheader"]').removeRedundantAttributes("role");
      // window.$("th > span").replaceEmptyElements("This is intentionally blank");
      // window
      //   .$("button.v-icon")
      //   .addAriaLabel("Click this to toggle display of the news article");
    },
    scrollFix: function () {
      var hash = location.hash.substr(1);
      var el = document.getElementById(`${hash}`);
      if (hash && el) {
        //console.log(hash);
        this.$vuetify.goTo(`#${hash}`, { offset: 12 }).catch(() => {
          this.$vuetify.goTo(0);
        });
      }
    },
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
