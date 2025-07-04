<script lang="ts" setup></script>

<template>
  <div class="container">
    <article class="container-actions">
      <Icon class="icon" name="material-symbols:dark-mode" />
    </article>
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
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  align-items: center;
  padding: 0.5rem;
  &-image {
    padding: 0.5rem;
    .img {
      width: 200px;
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
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  &-actions {
    display: flex;
    justify-content: right;
    width: 100%;
    .icon {
      cursor: pointer;
      height: 3em;
      width: 3em;
    }
  }
}
@media (max-width: 900px) {
  .container {
    padding: 0;
    &-content {
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
    &-actions {
      .icon {
        cursor: pointer;
        height: 2.5em;
        width: 2.5em;
      }
    }
  }
}
</style>
