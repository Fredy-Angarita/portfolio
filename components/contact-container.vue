<script lang="ts" setup></script>

<template>
  <section class="contact">
    <h3 class="contact-title">¡Trabajemos Juntos!</h3>
    <div class="contact-networks">
      <ContactBadge icon="streamline-color:new-file-flat" label="Ver CV" />
      <ContactBadge icon="devicon:linkedin" label="Linkedin" />
      <ContactBadge icon="skill-icons:github-dark" label="Github" />
    </div>
    <div class="contact-info">
      <ContactBadge
        icon="streamline-ultimate-color:phone-circle"
        label="Teléfono"
      />
      <ContactBadge icon="streamline-cyber-color:email-2" label="Email" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0.5rem;
  gap: 1rem;
  &-title {
    text-align: center;
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
