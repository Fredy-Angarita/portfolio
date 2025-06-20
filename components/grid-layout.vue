<script lang="ts" setup></script>
<template>
  <section class="grid-layout">
    <div class="parent">
      <div class="div1 box">1</div>
      <div class="div2 box">2</div>
      <div class="div3 box"></div>
      <div class="div4 box">4</div>
      <div class="div5 box">5</div>
      <div class="div6 box">6</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.parent {
  display: grid;
  padding: 1rem;
  height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  .box {
    background-color: whitesmoke;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .div1 {
    grid-row: span 3 / span 3;
  }
  .div2 {
    grid-row: span 3 / span 3;
    grid-column-start: 1;
    grid-row-start: 4;
  }
  .div3 {
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 3;
  }
  .div4 {
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 1;
  }
  .div5 {
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 5;
  }
  .div6 {
    grid-row: span 6 / span 6;
    grid-column-start: 3;
    grid-row-start: 1;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    .div1,
    .div2,
    .div3,
    .div4,
    .div5,
    .div6 {
      grid-column: auto;
      grid-row: auto;
    }
  }
}
</style>
