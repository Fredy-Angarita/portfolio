<script lang="ts" setup>
defineProps<{
  icon: string;
  label: string;
}>();
</script>

<template>
  <div class="card">
    <Icon class="card-icon" :name="icon" />
    <span class="card-label">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--badge-bg-color);
  box-shadow: 0px 4px 16px -7px var(--badge-box-shadow);
  transition: 0.4s;

  &-icon {
    width: 1.5em;
    height: 1.5em;
  }
  &-label {
    user-select: none;
    font-size: 1.3em;
  }
}
.card:hover {
  transform: translateY(-4px);
}
</style>
