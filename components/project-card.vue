<script lang="ts" setup>
import type { Tech } from "~/interfaces/tech.interface";
const isFlipped = ref(false);

function onFlip() {
  isFlipped.value = !isFlipped.value;
}

const props = defineProps<{
  title: string;
  description: string;
  link?: string;
  techs: Tech[];
  image: string;
}>();

function onRedirectProject() {
  if (!props.link) return;
  return navigateTo(props.link, {
    external: true,
    open: {
      target: "_blank",
    },
  });
}
</script>

<template>
  <article class="container">
    <article @click="onFlip" :class="['card', { isFlip: isFlipped }]">
      <div class="card-front">
        <img class="card-front-img" :src="image" alt="project-image" />
        <h2 class="card-front-title">{{ title }}</h2>
        <p class="card-front-description">
          {{ description }}
        </p>
        <div class="card-front-links">
          <div class="card-front-links-actions" v-if="link">
            <Icon
              name="bi:github"
              size="1.5em"
              @click.stop="onRedirectProject"
            />
          </div>
          <Icon name="pepicons-pop:arrow-spin" size="1.5em" />
        </div>
      </div>
      <div class="card-back">
        <h3 class="card-back-title">Tecnológias</h3>
        <div class="card-back-tech">
          <TechBadge
            v-for="tech in techs"
            @click.stop=""
            :icon="tech.icon"
            :label="tech.name"
            :background="tech.background"
          />
        </div>
      </div>
    </article>
  </article>
</template>

<style lang="scss" scoped>
.isFlip {
  transform: rotateY(180deg);
}

.container {
  background-color: transparent;
  width: 350px;
  height: 500px;
  cursor: pointer;
  perspective: 1000px;
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transform-style: preserve-3d;
    transition: 0.4s linear;
    &-front,
    &-back {
      width: 100%;
      height: 100%;
      background-color: var(--project-bg-color);
      border-radius: 5px;
      backface-visibility: hidden;
      box-shadow: 0px 0px 17px -6px var(--project-box-shadow);
    }
    &-front {
      display: flex;
      flex-direction: column;
      text-align: center;
      flex: 0 0 auto;
      position: absolute;
      &-img {
        width: 100%;
        border-radius: 5px 5px 0 0;
        max-height: 250px;
        object-fit: contain;
      }
      &-title {
        margin-top: 8px;
      }
      &-description {
        padding: 0.5rem 0.7rem;
        height: 100%;
      }
      &-links {
        display: flex;
        padding: 0.5rem;
        justify-content: space-between;
        align-items: center;
      }
    }
    &-back {
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      padding: 0.5rem;
      &-title {
        text-align: center;
        font-size: 1.5rem;
      }
      &-tech {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        gap: 0.5em;
        align-items: center;
      }
    }
  }
}

@media (max-width: 900px) {
  .container {
    width: 300px;
    .card {
      width: 300px;
    }
  }
}
@media (max-width: 400px) {
  .container {
    width: 250px;
    .card {
      width: 250px;
    }
  }
}
</style>
