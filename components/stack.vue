<script lang="ts" setup>
const logo = ref("pulsa sobre cualquier icono");
function showLogo(data: string) {
  logo.value = data;
}
</script>

<template>
  <section class="stack">
    <h2 class="stack-title">Habilidades</h2>
    <div class="stack-skills">
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
      <Skill icon="devicon:postgresql" name="Postgresql" @hovered="showLogo" />
      <Skill icon="devicon:angular" name="Angular" @hovered="showLogo" />
      <Skill icon="logos:nuxt-icon" name="Nuxt" @hovered="showLogo" />
      <Skill icon="logos:vue" name="Vue" @hovered="showLogo" />
      <Skill icon="skill-icons:css" name="CSS" @hovered="showLogo" />
      <Skill icon="skill-icons:html" name="HTML" @hovered="showLogo" />
      <Skill icon="devicon:sass" name="Sass" @hovered="showLogo" />
      <Skill icon="material-icon-theme:git" name="Git" @hovered="showLogo" />
      <Skill icon="skill-icons:github-dark" name="Github" @hovered="showLogo" />
      <Skill
        icon="material-icon-theme:vscode"
        name="Vscode"
        @hovered="showLogo"
      />
      <Skill icon="logos:ubuntu" name="Ubuntu" @hovered="showLogo" />
    </div>
    <h3 class="stack-details">{{ logo }}</h3>
  </section>
</template>

<style lang="scss" scoped>
.stack {
  display: flex;
  flex-direction: column;
  &-title {
    text-align: center;
  }
  &-skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  &-details {
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
</style>
