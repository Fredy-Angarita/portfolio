<script lang="ts" setup>
const logo = ref();
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
      <p class="show-label">{{ logo }}</p>
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
  }
  &-title {
    margin-bottom: 1rem;
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
    background-color: #000000;
    opacity: 0.5;
    border-radius: 0 0 0.5rem 0.5rem;
    backdrop-filter: blur(10px);
    &-label {
      color: white;
    }
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
