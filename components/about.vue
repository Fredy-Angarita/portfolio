<script lang="ts" setup></script>

<template>
  <section class="about">
    <h2 class="about-title">Sobre Mi</h2>
    <p class="about-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni repellat
      voluptatibus libero sunt dignissimos ut animi provident adipisci iusto,
      dolor, commodi eaque ad quis enim facilis deleniti ducimus officia.
      Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
      molestias itaque aliquam sequi rem quam atque amet libero consequatur
      obcaecati qui fugit officiis dolor ipsam architecto earum tenetur,
      voluptatem nobis.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  max-width: 50%;
  &-title {
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
@media (max-width: 400px) {
  .about {
    max-width: 100%;
  }
}
</style>
