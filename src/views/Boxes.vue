<template>
  <div class="mb-12">
    <h2 class="ml-3 mt-12">
      Version A: Text v1 (Four boxes / title left / long teaser left)
    </h2>
    <HomeBoxes></HomeBoxes>
    <h2 class="ml-3 mt-12">
      Version B: Icons v1 (Three boxes / icon / title / no teaser)
    </h2>
    <HomeBoxesAlt :boxes="3"></HomeBoxesAlt>
    <h2 class="ml-3 mt-12">
      Version C: Icons v2 (Three boxes / icon / title centered / short teaser
      centered)
    </h2>
    <HomeBoxesAlt :showTeaser="true" :boxes="3"></HomeBoxesAlt>
    <h2 class="ml-3 mt-12">
      Version D: Text v2 (Three boxes / title centered / long teaser left)
    </h2>
    <HomeBoxesAlt2 :boxes="3"></HomeBoxesAlt2>
    <h2 class="ml-3 mt-12">
      Version E: Icons v3 (Three boxes / icon / title centered / short teaser
      centered / no gutter)
    </h2>
    <HomeBoxesAlt3 :boxes="3"></HomeBoxesAlt3>
    <h2 class="ml-3 mt-12">
      Version F: Icons (Four boxes / icon / title centered / short teaser
      centered / no gutter)
    </h2>
    <HomeBoxesAlt3 :boxes="4"></HomeBoxesAlt3>
    <h2 class="ml-3 mt-12">
      Version G: Icons (Two boxes / icon / title centered / short teaser
      centered / no gutter)
    </h2>
    <HomeBoxesAlt3 :boxes="2" :showTeaser="true"></HomeBoxesAlt3>
    <h2 class="ml-3 mt-12">
      Version H: Icons (Two boxes / icon / title centered / short teaser
      centered / gutter)
    </h2>
    <HomeBoxesAlt :boxes="2" :showTeaser="true"></HomeBoxesAlt>
    <h2 class="ml-3 mt-12">
      Version I: Text (Two boxes / title centered / short teaser left / gutter)
    </h2>
    <HomeBoxesAlt2 :boxes="2" :showTeaser="true"></HomeBoxesAlt2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
