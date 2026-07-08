<script lang="ts" setup>
const experience = useLandingData()["experience"];
</script>

<template>
  <section class="xp">
    <h2 class="xp-title">Experiencia</h2>
    <div class="xp-cards">
      <CardXp
        v-for="xp in experience"
        :time="xp.time"
        :title="xp.title"
        :description="xp.description"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.xp {
  margin: 1rem;
  &-title {
    text-align: center;
    margin-bottom: 1rem;
  }
  &-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
