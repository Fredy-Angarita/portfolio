<script lang="ts" setup></script>
<template>
  <section class="grid-layout">
    <div class="parent">
      <div class="div1 box"><Stack /></div>
      <div class="div2 box">2</div>
      <div class="div3 box"><ContactContainer /></div>
      <div class="div4 box"><ProfileCard /></div>
      <div class="div5 box">5</div>
      <div class="div6 box">6</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.parent {
  display: grid;
  padding: 2rem;
  height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1.5rem;
  .box {
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .div1 {
    grid-row: span 4 / span 4;
  }

  .div2 {
    grid-row: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 5;
  }

  .div3 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .div4 {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 3;
    padding: 0;
  }

  .div5 {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 6;
  }

  .div6 {
    grid-row: span 8 / span 8;
    grid-column-start: 4;
    grid-row-start: 1;
  }
}
@media (max-width: 1200px) {
  .parent {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
    .div6 {
      grid-column: span 2 / span 2;
      grid-column-start: 4;
      grid-row-start: 1;
    }
  }
}
@media (max-width: 900px) {
  .parent {
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    .div1 {
      order: 4;
    }
    .div2 {
      order: 5;
    }
    .div3 {
      order: 2;
    }
    .div4 {
      order: 1;
    }
    .div5 {
      order: 3;
    }
    .div6 {
      order: 6;
    }
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
@media (max-width: 500px) {
  .parent {
    padding: 0.7rem;
    gap: 0.7rem;
  }
}
</style>
