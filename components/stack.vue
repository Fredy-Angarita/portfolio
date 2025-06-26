<script lang="ts" setup></script>

<template>
  <section class="container">
    <h3 class="container-title">Skills</h3>
    <div class="container-back">
      <Icon class="icon" name="skill-icons:typescript" />
      <Icon class="icon" name="logos:nestjs" />
      <Icon class="icon" name="material-icon-theme:docker" />
      <Icon class="icon" name="devicon:mysql" />
      <Icon class="icon" name="devicon:postgresql" />
    </div>
    <article class="container-front">
      <Icon class="icon" name="devicon:angular" />
      <Icon class="icon" name="logos:nuxt-icon" />
      <Icon class="icon" name="logos:vue" />
      <Icon class="icon" name="skill-icons:css" />
      <Icon class="icon" name="skill-icons:html" />
      <Icon class="icon" name="devicon:sass" />
    </article>
    <article class="container-tools">
      <Icon class="icon" name="material-icon-theme:git" />
      <Icon class="icon" name="skill-icons:github-dark" />
      <Icon class="icon" name="material-icon-theme:vscode" />
      <Icon class="icon" name="logos:ubuntu" />
    </article>
  </section>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  height: 100%;
  gap: 1em;
  &-title {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2rem;
  }
  .icon {
    width: 3.5em;
    height: 3.5em;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
  .icon:hover {
    border-bottom: 3px solid rgb(13, 1, 103);
  }
  &-back,
  &-front,
  &-tools {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
}
@media (max-width: 1300px) {
  .container {
    &-title {
      font-size: 1.5rem;
    }
    .icon {
      width: 2.5em;
      height: 2.5em;
    }
  }
}
</style>
