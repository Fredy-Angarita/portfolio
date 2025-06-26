<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="container-image">
      <img
        class="img"
        src="https://avatarfiles.alphacoders.com/372/thumb-1920-372749.png"
        alt="avatar"
      />
    </div>
    <article class="container-content">
      <h2>Fredy Angarita</h2>
      <h3>Desarrollador de Software</h3>
    </article>
    <article class="container-actions">
      <Icon class="icon" name="material-symbols:dark-mode" />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 6fr 10fr 1fr;
  place-items: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0.5em;
  &-image {
    padding: 0.5rem;
    .img {
      width: 200px;
      height: 100%;
      object-fit: contain;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    h2 {
      font-family: "MadimiOne";
      font-size: 4rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
  &-actions {
    height: 100%;
    .icon {
      cursor: pointer;
      height: 3em;
      width: 3em;
    }
  }
}
@media (max-width: 1300px) {
  .container {
    &-content {
      h2 {
        font-size: 3rem;
      }
      h3 {
        font-size: 2rem;
      }
    }
  }
}

@media (max-width: 1200px) {
  .container {
    grid-template-columns: auto;
    &-actions {
      display: flex;
      justify-content: right;
      height: auto;
      width: 100%;
      order: 1;
      .icon {
        width: 2.5em;
        height: 2.5em;
      }
    }
    &-image {
      order: 2;
      .img {
        width: 125px;
      }
    }
    &-content {
      order: 3;
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
