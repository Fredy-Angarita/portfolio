<script lang="ts" setup>
const props = defineProps<{
  title: string;
  time: string;
  description: string;
}>();
</script>

<template>
  <div class="card">
    <p>
      <span class="dt"> Tiempo: </span>
      {{ time }}
    </p>
    <p>
      <span class="dt"> Cargo: </span>
      {{ title }}
    </p>
    <p>
      <span class="dt"> Responsabilidades: </span>
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid var();
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--badge-bg-color);
}
.dt {
  font-weight: bold;
}
.item {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
</style>
