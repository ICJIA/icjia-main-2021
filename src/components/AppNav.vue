<template>
  <div>
    <v-app-bar app style="background: #fff">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <div class="d-flex align-center">
        <v-img
          alt="ICJIA Logo"
          class="shrink mr-2 hover"
          contain
          src="/icjia-logo.png"
          transition="scale-transition"
          width="70"
          style
          @click="
            $router.push('/').catch((err) => {
              $vuetify.goTo(0);
            })
          "
        />
      </div>
      <div
        @click="
          $router.push('/').catch((err) => {
            $vuetify.goTo(0);
          })
        "
        style="font-size: 20px; font-weight: bold; margin-left: 10px"
        class="hover"
      >
        ILLINOIS CRIMINAL JUSTICE INFORMATION AUTHORITY
      </div>
      <!-- {{ $store.state.auth.isAuthenticated }} -->
      <v-spacer></v-spacer>

      <v-btn icon aria-label="search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
