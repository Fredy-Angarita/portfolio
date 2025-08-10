<script lang="ts" setup>
const data = useLandingData();
</script>

<template>
  <section class="about">
    <h2 class="about-title">Sobre Mi</h2>
    <p class="about-description">
      {{ data["about-me"] }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  max-width: 50%;
  &-title {
    user-select: none;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  &-description {
    user-select: none;
    white-space: pre-line;
  }
}
@media (max-width: 500px) {
  .about {
    max-width: 100%;
    padding: 1rem;
  }
}
</style>
