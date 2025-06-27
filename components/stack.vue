<script lang="ts" setup>
const logo = ref("pulsa sobre cualquier icono");
function showLogo(data: string) {
  logo.value = data;
}
</script>

<template>
  <section class="container">
    <h3 class="container-title">Habilidades</h3>
    <div class="container-skills">
      <div class="container-back">
        <Skill
          icon="skill-icons:typescript"
          name="Typescript"
          @hovered="showLogo"
        />
        <Skill icon="logos:nestjs" name="Nestjs" @hovered="showLogo" />
        <Skill
          icon="material-icon-theme:docker"
          name="Docker"
          @hovered="showLogo"
        />
        <Skill icon="devicon:mysql" name="Mysql" @hovered="showLogo" />
        <Skill
          icon="devicon:postgresql"
          name="Postgresql"
          @hovered="showLogo"
        />
      </div>
      <article class="container-front">
        <Skill icon="devicon:angular" name="Angular" @hovered="showLogo" />
        <Skill icon="logos:nuxt-icon" name="Nuxt" @hovered="showLogo" />
        <Skill icon="logos:vue" name="Vue" @hovered="showLogo" />
        <Skill icon="skill-icons:css" name="CSS" @hovered="showLogo" />
        <Skill icon="skill-icons:html" name="HTML" @hovered="showLogo" />
        <Skill icon="devicon:sass" name="Sass" @hovered="showLogo" />
      </article>
      <article class="container-tools">
        <Skill icon="material-icon-theme:git" name="Git" @hovered="showLogo" />
        <Skill
          icon="skill-icons:github-dark"
          name="Github"
          @hovered="showLogo"
        />
        <Skill
          icon="material-icon-theme:vscode"
          name="Vscode"
          @hovered="showLogo"
        />
        <Skill icon="logos:ubuntu" name="Ubuntu" @hovered="showLogo" />
      </article>
    </div>
    <div class="show">
      {{ logo }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  height: 100%;
  &-skills {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
    height: 100%;
    padding: 0.5em;
    -webkit-box-shadow: inset 0px -8px 15px -14px rgba(66, 68, 90, 1);
    -moz-box-shadow: inset 0px -8px 15px -14px rgba(66, 68, 90, 1);
    box-shadow: inset 0px -8px 15px -14px rgba(66, 68, 90, 1);
  }
  &-title {
    text-align: center;
    font-size: 2rem;
  }
  &-back,
  &-front,
  &-tools {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .show {
    min-height: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
    text-align: center;
    padding: 0.2rem 0.5rem;
    font-weight: bold;
  }
}
@media (max-width: 1300px) {
  .container {
    grid-template-rows: auto;
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
