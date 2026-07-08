<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  label: string;
  link?: string;
  copy?: string;
}>();

function onAction() {
  if (props.link) {
    return navigateTo(props.link, {
      external: true,
      open: {
        target: "_blank",
      },
    });
  }
  if (props.copy) {
    navigator.clipboard.writeText(props.copy);
    alert("Ha copiado el " + props.label);
  }
}
</script>

<template>
  <div class="card" @click="onAction">
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
  background: var(--badge-bg-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
