<script lang="ts" setup></script>
<template>
  <div class="parent">
    <div class="div1 box"><profile-card /></div>
    <div class="div2 box">2</div>
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
    background-color: #fff4ece6;
    border-radius: 0.4rem;
    padding: 0.5rem;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.5);
    box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 0.5);
  }
  .div1 {
    grid-row: span 4 / span 4;
  }

  .div2 {
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;
  }
  .div3 {
    grid-row: span 2 / span 2;
    grid-row-start: 5;
  }
}
@media (max-width: 1000px) {
  .parent {
    grid-template-columns: auto;

    .div1,
    .div2,
    .div3 {
      grid-column: auto;
      grid-row: auto;
    }
  }
}
@media (max-width: 900px) {
}
@media (max-width: 500px) {
}
</style>
