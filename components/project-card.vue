<script lang="ts" setup>
const isFlipped = ref(false);

function onFlip() {
  isFlipped.value = !isFlipped.value;
}

defineProps<{
  title: string;
}>();
</script>

<template>
  <article class="container">
    <article @click="onFlip" :class="['card', { isFlip: isFlipped }]">
      <div class="card-front">
        <img
          class="card-front-img"
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
          alt="img"
        />
        <h2 class="card-front-title">{{ title }}</h2>
        <p class="card-front-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          maiores nemo vero pariatur vel necessitatibus, rem fugiat optio
          temporibus blanditiis a provident ad sequi? Minima, laboriosam
          adipisci. Magni, nihil incidunt.
        </p>
        <div class="card-front-links">
          <div class="card-front-links-actions">
            <Icon name="bi:github" size="1.5em" />
          </div>
          <Icon name="pepicons-pop:arrow-spin" size="1.5em" />
        </div>
      </div>
      <div class="card-back">
        <h3 class="card-back-title">Tecnológias</h3>
        <div class="card-back-tech">
          <TechBadge
            @click.stop="console.log('hol')"
            icon="proicons:typescript"
            label="CSS"
            background="blue"
          />
          <TechBadge
            @click.stop="console.log('hol')"
            icon="proicons:typescript"
            label="HTML"
            background="blue"
          />
          <TechBadge
            @click.stop="console.log('hol')"
            icon="proicons:typescript"
            label="typescript"
            background="blue"
          />
          <TechBadge
            @click.stop="console.log('hol')"
            icon="proicons:typescript"
            label="Express"
            background="blue"
          />
          <TechBadge
            @click.stop="console.log('hol')"
            icon="proicons:typescript"
            label="PostgreSql"
            background="blue"
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
    transition: 0.5s;
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
