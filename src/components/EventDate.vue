<template>
  <div :class="{ eventBorder: eventBorder && !isMobile }" class="px-5 mb-1">
    <h2 style="font-size: 64px" class="mb-8">21</h2>
    <h3
      style="
        border-bottom: 5px solid #333;
        font-size: 36px;
        padding-bottom: 16px;
        max-width: 150px;
        margin-bottom: 15px;
      "
    >
      March
    </h3>
    <p style="color: #000">
      Lorem markdownum Oechalia tenus, bracchia concolor tum, et in tota a
      generum. Ludit et nostri idemque circum. Tela tamen verba, tenet domui
      Dymantis. Huc decor ante corpore virga et sonitum bello clam Amphiona, bis
      ubi armo per infectum traxit dictoque nymphae? Quirites aequoris vultu
      altis medium, haec ad devexo aquilonibus.
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    },
  },
  props: {
    eventBorder: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.eventBorder {
  border-right: 1px solid #ccc;
}
</style>
