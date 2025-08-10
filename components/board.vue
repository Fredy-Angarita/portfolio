<script lang="ts" setup>
const projects = useLandingData()["projects"];
</script>

<template>
  <section class="board">
    <div class="board-presentation">
      <About />
      <Stack />
    </div>
    <h2 class="board-breakpoint">Proyectos</h2>
    <div class="board-projects">
      <ProjectCard
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :techs="project.tech"
        :link="project.link"
      />
    </div>
    <div class="board-footer">
      <p>
        Free SVG Background by
        <a target="_blank" href="https://bgjar.com">BGJar</a>
      </p>
      <a
        target="_blank"
        href="https://www.flaticon.es/iconos-gratis/programa"
        title="programa iconos"
        >icono usado, creados por Vectorslab - Flaticon</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.board {
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;

  &-presentation {
    padding: 2em;
    border-bottom: 2px solid var(--board-separator-color);
    display: flex;
    gap: 1rem;
  }
  &-breakpoint {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  &-projects {
    position: relative;
    padding: 1rem;
    gap: 1rem;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    border-bottom: 2px solid var(--board-separator-color);
  }
  &-footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      color: var(--board-separator-color);
    }
  }
}
@media (max-width: 900px) {
  .board {
    &-projects {
      padding: 0.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
}
@media (max-width: 500px) {
  .board {
    &-presentation {
      flex-direction: column;
    }
    &-projects {
      display: grid;
      padding: 0.5rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
