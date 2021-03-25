<template>
  <v-footer>
    <v-card flat tile width="100%" class="grey darken-4 text-center pt-1">
      <v-card-text class="white--text pt-8">
        <div style="display: inline">
          <img
            src="https://via.placeholder.com/175x100/212121/FFFFFF/?text=LOGO"
            alt="Footer logo"
            style="border: 1px solid #777"
          />
        </div>
        <div class="mt-5">
          {{ new Date().getFullYear() }} —
          <strong>Illinois Criminal Justice Information Authority</strong>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
