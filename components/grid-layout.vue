<script lang="ts" setup></script>
<template>
  <div class="parent">
    <div class="div1 box"><profile-card /></div>
    <div class="div2 box"><Board /></div>
    <div class="div3 box">
      <ContactContainer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  display: grid;
  padding: 4rem;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  .box {
    background-color: var(--grid-bg-color);
    border-radius: 0.4rem;
    padding: 0.5rem;
    box-shadow: 0px 0px 25px 0px var(--grid-box-shadow);
  }
  .div1 {
    grid-row: span 4 / span 4;
  }

  .div2 {
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
  }
  .div3 {
    grid-row: span 2 / span 2;
    grid-row-start: 5;
  }
}
@media (max-width: 1000px) {
  .parent {
    grid-template-columns: auto;
    .div1 {
      order: 1;
    }
    .div2 {
      order: 3;
    }
    .div3 {
      order: 2;
    }
    .div1,
    .div2,
    .div3 {
      grid-column: auto;
      grid-row: auto;
    }
  }
}
@media (max-width: 900px) {
  .parent {
    padding: 2rem;
    gap: 1rem;
  }
}
@media (max-width: 500px) {
  .parent {
    padding: 0.5rem;
    gap: 0.5rem;
  }
}
</style>
