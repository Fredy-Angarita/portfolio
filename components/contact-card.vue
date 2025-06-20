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
  border: 2px solid black;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 35px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 35px -16px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 35px -16px rgba(66, 68, 90, 1);
  &-icon {
    width: 1.5em;
    height: 1.5em;
  }
  &-label {
    user-select: none;
    font-size: 1.5em;
  }
}
.card:hover {
  -webkit-box-shadow: 0px 0px 34px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 34px -10px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 34px -10px rgba(66, 68, 90, 1);
}

@media (max-width: 1300px) {
  .card {
    &-icon {
      width: 1em;
      height: 1em;
    }
    &-label {
      font-size: 1em;
    }
  }
}
</style>
