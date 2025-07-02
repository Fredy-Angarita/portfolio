<script lang="ts" setup></script>
<template>
  <div class="parent">
    <div class="div1 box"><profile-card /></div>
    <div class="div2 box">2</div>
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
    background-color: #fff4ec;
    border-radius: 0.4rem;
    padding: 0.5rem;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.5);
    box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.5);
  }
  .div1 {
    grid-row: span 6 / span 6;
    grid-column: 1;
  }

  .div2 {
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;
  }
}
@media (max-width: 1200px) {
}
@media (max-width: 900px) {
}
@media (max-width: 500px) {
}
</style>
