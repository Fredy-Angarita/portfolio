<script lang="ts" setup></script>

<template>
  <section class="board">
    <div class="board-presentation">
      <About />
      <Stack />
    </div>
    <h2 class="board-breakpoint">proyectos</h2>
    <div class="board-projects">
      <ProjectCard title="prueba1" />
      <ProjectCard title="prueba1" />
      <ProjectCard title="prueba1" />
      <ProjectCard title="prueba1" />
      <ProjectCard title="prueba1" />
      <ProjectCard title="prueba1" />
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
    border-bottom: 2px solid black;
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
  }
}
@media (max-width: 900px) {
  .board {
    &-projects {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
}
@media (max-width: 500px) {
  .board {
    &-presentation {
      flex-direction: column;
      padding: 0;
    }
    &-projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
