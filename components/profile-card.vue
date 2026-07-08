<script lang="ts" setup>
const mode = useColorMode();

function onDarkMode() {
  mode.preference = "dark";
}
function onLightMode() {
  mode.preference = "light";
}
</script>

<template>
  <div class="container">
    <div class="container-actions">
      <ClientOnly>
        <Icon
          v-if="mode.value === 'light'"
          class="icon"
          name="material-symbols:dark-mode"
          @click="onDarkMode"
        />
        <Icon
          v-if="mode.value === 'dark'"
          class="icon"
          name="si:light-mode-fill"
          @click="onLightMode"
        />
      </ClientOnly>
    </div>
    <div class="container-info">
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
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
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
  &-info {
    display: flex;
    flex: 1;
    gap: 2rem;
    justify-content: center;
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    .icon {
      cursor: pointer;
      height: 3em;
      width: 3em;
    }
  }
}
@media (max-width: 900px) {
  .container {
    flex-direction: column;
    padding: 0;
    &-info {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    &-content {
      text-align: center;
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
