<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="card">
    <img
      class="card-img"
      src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
      alt="img"
    />
    <h2>{{ title }}</h2>
    <div class="card-badges"></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  text-align: center;
  width: 100%;
  height: 500px;
  flex: 0 0 auto;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 17px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 17px -6px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 17px -6px rgba(66, 68, 90, 1);
  &-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  &-badges {
    display: flex;
    max-height: 100%;
    overflow: hidden;
    padding: 0.5rem;
  }
}
@media (max-width: 900px) {
  .card {
    width: 300px;
  }
}
</style>
