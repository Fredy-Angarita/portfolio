<script lang="ts" setup></script>

<template>
  <div class="icons">
    <h3 class="icons-title">Skills</h3>
    <div class="icons-skills">
      <Icon class="icon" name="skill-icons:typescript" />
      <Icon class="icon" name="logos:nestjs" />
      <Icon class="icon" name="material-icon-theme:docker" />
      <Icon class="icon" name="devicon:mysql" />
      <Icon class="icon" name="devicon:postgresql" />
      <Icon class="icon" name="devicon:angular" />
      <Icon class="icon" name="logos:nuxt-icon" />
      <Icon class="icon" name="logos:vue" />
      <Icon class="icon" name="skill-icons:css" />
      <Icon class="icon" name="skill-icons:html" />
      <Icon class="icon" name="devicon:sass" />
      <Icon class="icon" name="material-icon-theme:git" />
      <Icon class="icon" name="skill-icons:github-dark" />
      <Icon class="icon" name="material-icon-theme:vscode" />
      <Icon class="icon" name="logos:ubuntu" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  height: 100%;
  &-title {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2rem;
  }
  &-skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5em;

    .icon {
      width: 3.5em;
      height: 3.5em;
      border-radius: 0.5rem;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
    .icon:hover {
      -webkit-box-shadow: inset 0px 0px 23px 0px rgba(224, 147, 118, 1);
      -moz-box-shadow: inset 0px 0px 23px 0px rgba(224, 147, 118, 1);
      box-shadow: inset 0px 0px 23px 0px rgba(224, 147, 118, 1);
    }
  }
}
</style>
