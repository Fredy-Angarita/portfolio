<script lang="ts" setup>
defineProps<{
  icon: string;
  label: string;
  background?: string;
}>();
</script>

<template>
  <div
    class="badge"
    :style="{
      '--box-shadow-hover': `${background || 'rgba(66, 68, 90, 1)'}`,
      'background-color': background,
    }"
  >
    <Icon class="badge-icon" :name="icon" />
    <span class="badge-label">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 2rem;
  color: #ffffff;
  transition: 0.4s;
  &-icon {
    width: 1.5em;
    height: 1.5em;
  }
  &-label {
    user-select: none;
    font-size: 1em;
  }
}
.badge:hover {
  box-shadow: 0px 0px 10px 0px var(--box-shadow-hover);
}
</style>
