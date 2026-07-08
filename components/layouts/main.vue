<script lang="ts" setup></script>
<template>
  <div class="parent">
    <div class="content">
      <profile-card />
      <LayoutsContactContainer />
      <Separator />
      <About />
      <LayoutsExperience />
      <Separator />
      <LayoutsStack />
      <LayoutsBoard />
      <div class="board-footer">
        <a
          target="_blank"
          href="https://www.flaticon.es/iconos-gratis/programa"
          title="programa iconos"
          >icono usado, creados por Vectorslab - Flaticon</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  display: grid;
  padding: 1rem 6rem;
}
.board-footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  a {
    color: var(--text-color);
  }
}
.content {
  border-radius: 10px;
  background: var(--grid-bg-color);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
@media (max-width: 900px) {
  .parent {
    padding: 1rem 4rem;
  }
}
@media (max-width: 500px) {
  .parent {
    padding: 1rem 2rem;
  }
}
</style>
