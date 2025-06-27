<script lang="ts" setup>
defineProps<{
  color?: string;
  icon: string;
  name: string;
}>();

const emit = defineEmits<{
  (e: "hovered", icon: string): void;
}>();

function onHovered(nameLogo: string) {
  emit("hovered", nameLogo);
}
</script>

<template>
  <div class="skill" @mouseenter="onHovered(name)">
    <Icon class="skill-icon" :name="icon" />
  </div>
</template>

<style lang="scss" scoped>
.skill {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  max-height: 72px;
  max-height: 72px;
  border-radius: 100%;
  padding: 0.5rem;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &-icon {
    width: 3.5em;
    height: 3.5em;
    transition: 0.5s;
  }
}
.skill:hover {
  background-color: #dcdbdb;
  .skill-icon {
    transform: scale(1.3);
  }
}

@media (max-width: 1300px) {
  .skill {
    &-icon {
      width: 2.5em;
      height: 2.5em;
    }
  }
}
</style>
