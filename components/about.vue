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
  padding: 1rem;
  &-title {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  &-description {
    text-align: center;
    white-space: pre-line;
    font-size: 1.2rem;
  }
}
@media (max-width: 500px) {
  .about {
    padding: 1rem;
    &-description {
      font-size: 1rem;
    }
  }
}
</style>
