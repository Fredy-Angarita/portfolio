<script lang="ts" setup></script>

<template>
  <section class="contact">
    <h3 class="contact-title">¡Trabajemos Juntos!</h3>
    <div class="contact-networks">
      <ContactCard icon="devicon:linkedin" label="Linkedin" />
      <ContactCard icon="skill-icons:github-dark" label="Github" />
    </div>
    <div class="contact-info">
      <ContactCard
        icon="streamline-ultimate-color:phone-circle"
        label="+57-322-0000-533"
      />
      <ContactCard icon="streamline-cyber-color:email-2" label="Email" />
      <ContactCard icon="streamline-color:new-file-flat" label="Ver CV" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1rem;
  &-title {
    font-size: 1.5rem;
  }
  &-networks,
  &-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
