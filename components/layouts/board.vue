<script lang="ts" setup>
const projects = useLandingData()["projects"];
</script>

<template>
  <section class="board">
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
  </section>
</template>

<style lang="scss" scoped>
.board {
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
    padding: 1rem;
    gap: 1rem;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    border-bottom: 2px solid var(--board-separator-color);
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
