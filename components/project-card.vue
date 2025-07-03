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
  <article @click="onFlip" class="container">
    <article :class="['card', { isFlip: isFlipped }]">
      <div class="card-front">
        <img
          class="card-front-img"
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
          alt="img"
        />
        <h2>{{ title }}</h2>
        <div class="card-front-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          maiores nemo vero pariatur vel necessitatibus, rem fugiat optio
          temporibus blanditiis a provident ad sequi? Minima, laboriosam
          adipisci. Magni, nihil incidunt.
        </div>
      </div>
      <div class="card-back">a</div>
    </article>
  </article>
</template>

<style lang="scss" scoped>
.isFlip {
  transform: rotateY(180deg);
}

.container {
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
  .card {
    position: relative;
    width: 400px;
    height: 500px;
    border-radius: 5px;

    transform-style: preserve-3d;
    transition: all 0.5s linear;
    &-front,
    &-back {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #ffffff;
      -webkit-box-shadow: 0px 0px 17px -6px rgba(66, 68, 90, 1);
      -moz-box-shadow: 0px 0px 17px -6px rgba(66, 68, 90, 1);
      box-shadow: 0px 0px 17px -6px rgba(66, 68, 90, 1);
    }
    &-front {
      display: flex;
      flex-direction: column;
      text-align: center;
      flex: 0 0 auto;
      position: absolute;
      backface-visibility: hidden;
      &-img {
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
      &-description {
        padding: 1rem;
      }
    }
    &-back {
      transform: rotateY(180deg);
      height: 100%;
      backface-visibility: hidden;
    }
  }
}

@media (max-width: 900px) {
  .card {
    width: 300px;
  }
}
</style>
