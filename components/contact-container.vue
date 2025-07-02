<script lang="ts" setup></script>

<template>
  <section class="contact">
    <h3 class="contact-title">¡Trabajemos Juntos!</h3>
    <div class="contact-networks">
      <ContactBadge icon="streamline-color:new-file-flat" label="Ver CV" />
      <ContactBadge icon="devicon:linkedin" label="Linkedin" />
      <ContactBadge icon="skill-icons:github-dark" label="Github" />
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
  border-radius: 0.4rem;
  padding: 0.5rem;
  gap: 1.2rem;

  &-title {
    text-align: center;
    font-size: 1.5rem;
  }
  &-networks {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
}
@media (max-width: 1350px) {
  .contact {
    -webkit-box-shadow: inset 0px -32px 18px -29px rgba(66, 68, 90, 1);
    -moz-box-shadow: inset 0px -32px 18px -29px rgba(66, 68, 90, 1);
    box-shadow: inset 0px -32px 18px -29px rgba(66, 68, 90, 1);
  }
}
</style>
